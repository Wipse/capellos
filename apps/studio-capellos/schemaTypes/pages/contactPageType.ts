import {defineField, defineType} from 'sanity'
import {colorInput} from '@sanity/color-input'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  fields: [

    // ── Hero ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroHeading',
      title: 'Hero: titel',
      description: 'De grote titel in de hero bovenaan de pagina.',
      type: 'string',
      initialValue: 'Contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero: ondertekst',
      description: 'De korte tekst onder de titel in de hero.',
      type: 'text',
      rows: 2,
      initialValue: 'Een vraag, opmerking of gewoon even hallo zeggen? Noa hoort graag van je.',
    }),
    defineField({
      name: 'heroBackgroundColor',
      title: 'Hero: achtergrondkleur',
      type: 'color',
      options: {disableAlpha: true},
    }),

    // ── Aanvragen CTA ─────────────────────────────────────────────────────────
    defineField({
      name: 'ctaHeading',
      title: 'Aanvragen CTA: titel',
      description: 'De titel van het blok dat verwijst naar de aanvragen-pagina.',
      type: 'string',
      initialValue: 'Wil je iets laten maken?',
    }),
    defineField({
      name: 'ctaText',
      title: 'Aanvragen CTA: tekst',
      description: 'De uitleg waarom bezoekers voor aanvragen naar een andere pagina moeten.',
      type: 'text',
      rows: 3,
      initialValue: 'Voor aanvragen ben je niet hier, maar op de aanvragen-pagina. Daar kun je Noa precies vertellen wat je in gedachten hebt.',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Aanvragen CTA: knoptekst',
      type: 'string',
      initialValue: 'Naar aanvragen',
    }),
  ],
})
