// As of now, this is not used. It is kept for future reference

import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Pagina',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Pagina Titel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({ 
      name: 'slug',
      title: 'Pagina Slug',
      description: 'Dit wordt gebruikt om de URL van de pagina te genereren.',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required().error('De slug is wel belangrijk! Je kan ook gewoon op de knop klikken om de slug te genereren.'),
    }),
    // defineField({
    //   name: 'sections',
    //   title: 'Pagina Secties',
    //   description: 'De content van de pagina',
    //   type: 'array',
    //   of: [
    //     {type: textImageSection.name}
    //   ],
    // }),
  ],
})