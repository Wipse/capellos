import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Capellos Content Management System (CMS)')
    .items([

      // Products folder
      S.listItem()
        .title('📦 Producten')
        .child(
          S.list()
            .title('Producten')
            .items([
               // Kleding
               S.listItem()
               .title('Kleding')
               .child(
                 S.documentTypeList('clothing').title('Kleding')
               ),
              // Accessoires
              S.listItem()
                .title('Accessoires')
                .child(
                  S.documentTypeList('accessory').title('Accessoires')
                ),
              // Prints
              S.listItem()
                .title('Prints')
                .child(
                  S.documentTypeList('print').title('Prints')
                ),
              
              S.divider(),

              S.listItem()
                .title('⚙️ Product Instellingen')
                
            ])
        ),

      // Pages folder
      S.listItem()
        .title('📄 Pagina\'s')
        .child(
          S.list()
            .title('Pagina\'s')
            .items([
              // Home
              S.listItem()
                .title('Home')
                .child(
                  S.document()
                    .documentId('homePage')
                    .schemaType('standardPage')
                    .title('Homepagina')
                    .initialValueTemplate('homePage')
                ),
              // About Capellos
              S.listItem()
                .title('Over Capellos')
                .child(
                  S.document()
                    .documentId('aboutPage')
                    .schemaType('standardPage')
                    .title('Over ons pagina')
                    .initialValueTemplate('aboutPage')
                ),
              // Shop - Clothing
              S.listItem()
                .title('Shop - Kleding')
                .child(
                  S.document()
                    .documentId('shopClothingPage')
                    .schemaType('standardPage')
                    .title('Shop - Kleding pagina')
                    .initialValueTemplate('shopClothingPage')
                ),
                // Shop - Accessories
              S.listItem()
              .title('Shop - Accessoires')
              .child(
                S.document()
                  .documentId('shopAccessoriesPage')
                  .schemaType('standardPage')
                  .title('Shop - Accessoires pagina')
                  .initialValueTemplate('shopAccessoriesPage')
              ),
              // Shop - Prints
              S.listItem()
                .title('Shop - Prints')
                .child(
                  S.document()
                    .documentId('shopPrintsPage')
                    .schemaType('standardPage')
                    .title('Shop - Prints pagina')
                    .initialValueTemplate('shopPrintsPage')
                ),
                // Shop - Requests
              S.listItem()
              .title('Shop - Aanvragen')
              .child(
                S.document()
                  .documentId('shopRequestsPage')
                  .schemaType('standardPage')
                  .title('Shop - Aanvragen pagina')
                  .initialValueTemplate('shopRequestsPage')
              ),
            ])
        ),

      S.divider(),

      // Settings 
      S.listItem()
        .title( '⚙️ Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              // Contact page
              S.listItem()
                .title('Accessories Types')
                .child(
                  S.document()
                    .documentId('contactPage')
                    .schemaType('standardPage')
                    .title('Contactpagina')
                    .initialValueTemplate('contactPage')
                ),
            ])
        ),
    ])