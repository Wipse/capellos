import {defineField, defineType} from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'Over Capellos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Paginatitel',
      description: 'De titel die bovenaan de pagina staat.',
      type: 'string',
      initialValue: 'Over Capellos',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'comingSoonText',
      title: 'Coming soon tekst',
      description: 'De tekst die getoond wordt zolang de pagina nog in aanmaak is.',
      type: 'text',
      rows: 3,
      initialValue: 'Deze pagina is in aanmaak — kom later terug.',
    }),
  ],
})
