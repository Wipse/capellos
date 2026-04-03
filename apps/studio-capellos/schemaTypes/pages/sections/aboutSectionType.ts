import {defineField, defineType} from 'sanity'

export const aboutSectionType = defineType({
  name: 'aboutSection',
  title: 'Over Capellos Sectie',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Tekst',
      description:
        'De introductietekst onder het Capellos-logo. Vertel hier kort wie je bent en wat je maakt. Vet en cursief zijn beschikbaar.',
      type: 'array',
      of: [{type: 'block', styles: [], lists: [], marks: {decorators: [{title: 'Vet', value: 'strong'}, {title: 'Cursief', value: 'em'}], annotations: []}}],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Over Capellos Sectie'}
    },
  },
})
