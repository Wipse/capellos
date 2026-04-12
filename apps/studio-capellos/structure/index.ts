import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S, {getClient}) => {
  const client = getClient({apiVersion: '2024-01-01'})

  return S.list()
    .title('Capellos Content Management System (CMS)')
    .items([

      // Categorieën
      S.listItem()
        .title('🗂️ Categorieën')
        .child(
          S.documentTypeList('category').title('Categorieën')
        ),

      S.divider(),

      // Producten — dynamisch uitgebreid met een tabje per categorie
      S.listItem()
        .title('📦 Producten')
        .child(() =>
          client
            .fetch<{_id: string; title: string}[]>(
              `*[_type == "category"] | order(title asc) { _id, title }`
            )
            .then((categories) =>
              S.list()
                .title('Producten')
                .items([
                  // Eén tabje per categorie
                  ...categories.map((cat) =>
                    S.listItem()
                      .title(cat.title)
                      .id(cat._id)
                      .child(
                        S.documentList()
                          .title(cat.title)
                          .filter('_type == "product" && category._ref == $catId')
                          .params({catId: cat._id})
                          .initialValueTemplates([
                            S.initialValueTemplateItem('product-in-category', {catId: cat._id}),
                          ])
                      )
                  ),

                ])
            )
        ),

      // Pagina's
      S.listItem()
        .title("📄 Pagina's")
        .child(
          S.list()
            .title("Pagina's")
            .items([
              S.listItem()
                .title('🏠 Homepage')
                .child(
                  S.document()
                    .documentId('homepage')
                    .schemaType('homepage')
                    .title('Homepage')
                ),
              S.listItem()
                .title('👩🏼‍🎨 Over Capellos')
                .child(
                  S.document()
                    .documentId('aboutPage')
                    .schemaType('aboutPage')
                    .title('Over Capellos')
                ),
              S.listItem()
                .title('📞 Contact')
                .child(
                  S.document()
                    .documentId('contactPage')
                    .schemaType('contactPage')
                    .title('Contact')
                ),
              S.listItem()
                .title('🛒 Winkelmandje')
                .child(
                  S.document()
                    .documentId('winkelmandje')
                    .schemaType('winkelmandje')
                    .title('Winkelmandje')
                ),

              S.divider(),

              S.listItem()
                .title('Boring pagina\'s')
                .child(
                  S.list()
                    .title("Boring pagina's")
                    .items([
                      S.listItem()
                        .title('🍪 Cookie Policy')
                        .child(
                          S.document()
                            .documentId('cookies')
                            .schemaType('richTextPage')
                            .title('Cookie Policy')
                            .initialValueTemplate('cookie-policy')
                        ),
                      S.listItem()
                        .title('📄 Privacy Policy')
                        .child(
                          S.document()
                            .documentId('privacy')
                            .schemaType('richTextPage')
                            .title('Privacy Policy')
                            .initialValueTemplate('privacy-policy')
                        ),
                      S.listItem()
                        .title('🧩 Algemene Voorwaarden')
                        .child(
                          S.document()
                            .documentId('voorwaarden')
                            .schemaType('richTextPage')
                            .title('Algemene Voorwaarden')
                            .initialValueTemplate('algemene-voorwaarden')
                        ),
                    ])
                ),
            ])
        ),

      S.divider(),

      // Settings
      S.listItem()
        .title('⚙️ Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('🏢 Bedrijfsgegevens')
                .child(
                  S.document()
                    .documentId('bedrijfsgegevens')
                    .schemaType('bedrijfsgegevens')
                    .title('Bedrijfsgegevens')
                ),
              S.divider(),
              S.listItem()
                .title('Navigatie')
                .child(
                  S.document()
                    .documentId('navSettings')
                    .schemaType('navSettings')
                    .title('Navigatie Instellingen')
                ),
              S.listItem()
                .title('Footer')
                .child(
                  S.document()
                    .documentId('footerSettings')
                    .schemaType('footerSettings')
                    .title('Footer Instellingen')
                ),
            ])
        ),
    ])
}
