import {defineField, defineType} from 'sanity'
import {BasketIcon} from '@sanity/icons'

export const cartPageType = defineType({
  name: 'winkelmandje',
  title: 'Winkelmandje',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({
      name: 'cart',
      title: 'Winkelkar Sectie',
      description: 'De sectie met het winkelmandje overzicht.',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundColor',
          title: 'Achtergrondkleur',
          type: 'color',
        }),
        defineField({
          name: 'heading',
          title: 'Titel',
          type: 'string',
          initialValue: 'Winkelmandje',
        }),
        defineField({
          name: 'emptyText',
          title: 'Lege mandje tekst',
          description: 'Deze tekst verschijnt in het winkelmandje wanneer er niks in zit',
          type: 'string',
          initialValue: 'Je mandje is leeg',
        }),
        defineField({
          name: 'checkoutLabel',
          title: 'Bestellen knoptekst',
          description: 'De tekst die in de bestel-knop staat',
          type: 'string',
          initialValue: 'Bestelling plaatsen',
        }),
      ],
    }),
    defineField({
      name: 'aanvragen',
      title: 'Aanvragen Sectie',
      description: 'De CTA sectie onderaan de winkelmandjepagina.',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Titel',
          type: 'string',
          initialValue: 'Jij vraagt, ik maak',
        }),
        defineField({
          name: 'text',
          title: 'Tekst',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Knoptekst',
          type: 'string',
          initialValue: 'Doe een aanvraag',
        }),
        defineField({
          name: 'images',
          title: 'Slider afbeeldingen',
          description: 'Afbeeldingen die in de verticale sliders aan de rechterkant verschijnen.',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {hotspot: false},
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt tekst',
                  type: 'string',
                }),
              ],
            },
          ],
          options: {layout: 'grid'},
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Winkelmandje'}
    },
  },
})
