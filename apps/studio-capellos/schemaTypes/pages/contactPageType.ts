import {defineField, defineType} from 'sanity'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Sectie',
      description: 'Het grote openingsblok bovenaan de contactpagina.',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Titel',
          description: 'De grote titel in de hero bovenaan de pagina.',
          type: 'string',
          initialValue: 'Contact',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtext',
          title: 'Ondertekst',
          description: 'De korte tekst onder de titel.',
          type: 'text',
          rows: 2,
          initialValue: 'Een vraag, opmerking of gewoon even hallo zeggen? Noa hoort graag van je.',
        }),
        defineField({
          name: 'backgroundColor',
          title: 'Achtergrondkleur',
          type: 'color',
          options: {disableAlpha: true},
          initialValue: {hex: '#1e293b'},
        }),
      ],
    }),

    defineField({
      name: 'cta',
      title: 'Aanvragen CTA',
      description: 'Het blok onderaan de pagina dat verwijst naar de aanvragen-pagina.',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Titel',
          type: 'string',
          initialValue: 'Wil je iets laten maken?',
        }),
        defineField({
          name: 'text',
          title: 'Tekst',
          description: 'De uitleg waarom bezoekers voor aanvragen naar een andere pagina moeten.',
          type: 'text',
          rows: 3,
          initialValue:
            'Voor aanvragen ben je niet hier, maar op de aanvragen-pagina. Daar kun je Noa precies vertellen wat je in gedachten hebt.',
        }),
        defineField({
          name: 'label',
          title: 'Knoptekst',
          type: 'string',
          initialValue: 'Naar aanvragen',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Contact'}
    },
  },
})
