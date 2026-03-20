// schemaTypes/pages/sections/textImageSection.ts
import {defineField, defineType} from 'sanity'

export const textImageType = defineType({
  name: 'textImageSection',
  title: 'Tekst-Afbeelding Sectie',
  description: 'Een sectie met de optie voor een stuk tekst, een afbeelding en een knop',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Sectietitel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Sectietekst',
      description: 'De tekst die in de onder te titel wordt getoond',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Afbeeldingen',
      description: 'Voeg minimaal 1 en maximaal 2 afbeeldingen toe',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Afbeelding',
              type: 'image',
              validation: (rule) => rule.required(),
            },
            {
              name: 'orientation',
              title: 'Oriëntatie',
              type: 'string',
              options: {
                list: [
                  {title: 'Horizontaal', value: 'horizontal'},
                  {title: 'Verticaal', value: 'vertical'},
                ],
              },
              validation: (rule) => rule.required(),
            },
            {
              name: 'alt',
              title: 'Alt tekst',
              description: 'Korte beschrijving van de afbeelding (voor de toegankelijkheid van de site)',
              type: 'string',
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              media: 'image',
              alt: 'alt',
              orientation: 'orientation',
            },
            prepare({media, alt, orientation}) {
              return {
                title: alt || 'Afbeelding',
                subtitle: orientation === 'horizontal' ? 'Horizontaal' : 'Verticaal',
                media,
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1).max(2).error('Je moet minimaal 1 en maximaal 2 afbeeldingen toevoegen'),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Achtergrondkleur',
      type: 'string',
    }),
    defineField({
      name: 'hasLeftImage',
      title: 'Afbeelding Links Uitlijnen',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'sectionPadding',
      title: 'Sectieruimte',
      description: 'De ruimte aan de bovenkant en onderkant van de sectie',
      type: 'string',
      options: {
        list: [
          {title: 'Klein', value: 'sm'},
          {title: 'Normaal', value: 'md'},
          {title: 'Groot', value: 'lg'},
        ],
        layout: 'radio',
      },
      initialValue: 'md',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'text',
    },
    prepare({title}) {
      return {
        title: 'Tekst-Afbeelding Sectie',
        subtitle: title,
      }
    },
  },
})