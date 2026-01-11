// Standard Page's are pages where the user can only change the content, not the title nor the slug

import {defineField, defineType} from 'sanity'
import {textImageType} from './sections/textImageType'

export const standardPageType = defineType({
  name: 'standardPage',
  title: 'Standaard Pagina',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Pagina Titel',
      description: 'De Paginatitel, kan voor deze pagina niet worden gewijzigd.',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Pagina Slug',
      description: 'De Slug van de pagina, kan voor deze pagina niet worden gewijzigd.',
      type: 'slug',
      options: {source: 'title'},
      readOnly: true,
      validation: (rule) => rule.required().error('De slug is wel belangrijk! Je kan ook gewoon op de knop klikken om de slug te genereren.'),
    }),
    defineField({
      name: 'sections',
      title: 'Pagina Secties',
      description: 'De secties van de pagina, ofwel de content van de pagina.',
      type: 'array',
      of: [{type: textImageType.name}],
    }),
  ]
})