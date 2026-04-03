import {defineField, defineType} from 'sanity'

export const aboutSectionType = defineType({
  name: 'aboutSection',
  title: 'Over Capellos Sectie',
  type: 'object',
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Achtergrondkleur',
      description:
        'De achtergrondkleur van de "Wat is Capellos" sectie op de homepage.',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: ['#4BAF6E', '#D83A45', '#3D245F', '#3251A6', '#E3EDE8', '#FFDF94', '#FFFFFF', '#000000'],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'textColor',
      title: 'Tekstkleur',
      description:
        'Kleur van de tekst, logo en categorie-items in deze sectie. Kies wit op een donkere achtergrond, of donker op een lichte.',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: ['#FFFFFF', '#000000', '#FFDF94', '#3D245F', '#3251A6', '#D83A45', '#E3EDE8'],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Tekst',
      description:
        'De introductietekst onder het Capellos-logo. Vertel hier kort wie je bent en wat je maakt.',
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
