import {defineField, defineType} from 'sanity'

export const aanvragenSectionType = defineType({
  name: 'aanvragenSection',
  title: 'Aanvragen Sectie',
  type: 'object',
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Achtergrondkleur',
      type: 'color',
    }),
    defineField({
      name: 'textColor',
      title: 'Tekstkleur',
      type: 'color',
    }),
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
  preview: {
    prepare() {
      return {title: 'Aanvragen Sectie'}
    },
  },
})
