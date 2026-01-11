import {defineField, defineType} from 'sanity'

export const accessoryType = defineType({
  name: 'accessory',
  title: 'Accessoire Artikel',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Artikelnaam',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Artikel Slug',
      description: 'Dit wordt gebruikt om de URL van het artikel te genereren. Vaak is dit de titel van het artikel in kleine letters en met een streepje in plaats van spaties.',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required().error('De slug is wel belangrijk! Je kan ook gewoon op de knop klikken om de slug te genereren.'),
    }),
    defineField({
      name: 'type',
      title: 'Type Accessoire',
      type: 'string',
      options: {
        list: ['ring', 'earring', 'necklace', 'bracelet', 'other'],
      },
      validation: (rule) => rule.required().error('Sorry, maar het accessoire-type is wel verplicht! (voor het filteren)'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publiceerdatum',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Artikelfoto',
      description: 'Laat het prachtartikel zien!! You Go Girl!',
      type: 'image',
    }),
  ],
})