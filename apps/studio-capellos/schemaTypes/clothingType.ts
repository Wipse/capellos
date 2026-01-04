import {defineField, defineType} from 'sanity'

export const clothingType = defineType({
  name: 'clothing',
  title: 'Kleding Artikel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'De titel van het artikel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      description: 'De slug van het artikel. Dit wordt gebruikt om de URL van het artikel te genereren. Vaak is dit de titel van het artikel in kleine letters en met een streepje in plaats van spaties.',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      description: 'Laat het prachtartikel zien!! You Go Girl!',
      type: 'image',
    }),
  ],
})