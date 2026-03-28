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
              // Main Hero Settings
              S.listItem()
                .title('Beginscherm')
                .child(
                  S.document()
                    .documentId('mainHeroSettings')
                    .schemaType('mainHeroSettings')
                    .title('Beginscherm Instellingen')
                    .initialValueTemplate('mainHeroSettings')
                ),
              // Footer Contact Info
              S.listItem()
                .title('Footer Contactgegevens')
                .child(
                  S.document()
                    .documentId('footerContactInfoSettings')
                    .schemaType('footerContactInfoSettings')
                    .title('Footer Contactgegevens')
                ),
            ])
        ),
    ])