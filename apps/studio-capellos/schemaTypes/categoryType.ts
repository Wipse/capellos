import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const categoryType = defineType({
  name: 'category',
  title: 'Categorie',
  type: 'document',
  icon: TagIcon,
  description:
    'Categorieën zijn de hoofdgroepen van je winkel, zoals "Prints", "Kleding" of "Sieraden". Elke categorie krijgt een eigen overzichtspagina.',
  fields: [
    defineField({
      name: 'title',
      title: 'Naam',
      type: 'string',
      description: 'De naam van de categorie zoals hij op de website wordt weergegeven, bijvoorbeeld "Prints" of "Kleding".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-pad',
      type: 'slug',
      description:
        'Dit bepaalt het webadres van de categoriepagina. Klik op "Genereren" om automatisch een URL te maken op basis van de naam. Gebruik alleen kleine letters, cijfers en koppeltekens, maar geen spaties.',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Themakleur',
      type: 'color',
      description:
        'De achtergrondkleur van de hero-sectie op de categoriepagina. Kies een kleur die past bij het gevoel van deze categorie.',
      options: {
        disableAlpha: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'textColor',
      title: 'Tekstkleur',
      type: 'color',
      description:
        'De kleur van de titel en het pijltje op de categoriepagina. Kies wit (#ffffff) op een donkere achtergrond, of zwart (#000000) op een lichte achtergrond.',
      options: {
        disableAlpha: true,
      },
      initialValue: {hex: '#ffffff'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Hoofdafbeelding',
      type: 'image',
      description:
        'De sfeervolle afbeelding die bovenaan de categoriepagina wordt getoond. Gebruik een mooie foto die het karakter van deze categorie uitstraalt. Liggend formaat werkt het best.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternatieve tekst',
          type: 'string',
          description:
            'Een korte omschrijving van de afbeelding voor slechtzienden en zoekmachines, bijvoorbeeld "Kleurrijke handgemaakte prints op een houten tafel".',
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Korte omschrijving',
      type: 'text',
      rows: 3,
      description:
        'Een korte introductie over deze categorie. Wordt zichtbaar op de pagina én gebruikt als beschrijving in Google. Bijvoorbeeld: "Handgemaakte prints op hoogwaardig fotopapier."',
    }),
    defineField({
      name: 'catalogLayout',
      title: 'Catalogus layout',
      description: 'Kies hoe de producten op de categoriepagina worden getoond.',
      type: 'string',
      options: {
        list: [
          {title: 'Inconsistente raster', value: 'staggered'},
          {title: 'Strak 3-koloms overzicht', value: 'shelf'},
        ],
        layout: 'radio',
      },
      initialValue: 'staggered',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
