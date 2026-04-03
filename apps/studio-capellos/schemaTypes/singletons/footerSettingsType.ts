import {defineField, defineType} from 'sanity'

export const footerSettingsType = defineType({
  name: 'footerSettings',
  title: 'Footer Instellingen',
  type: 'document',
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Achtergrondkleur',
      description: 'De achtergrondkleur van de footer onderaan elke pagina.',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: ['#5B6FE6', '#3D245F', '#3251A6', '#D83A45', '#4BAF6E', '#000000', '#1e293b'],
      },
    }),
    defineField({
      name: 'textColor',
      title: 'Tekstkleur',
      description: 'Kleur van alle tekst, links en iconen in de footer.',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: ['#FFFFFF', '#E3EDE8', '#FFDF94', '#000000'],
      },
    }),
    defineField({
      name: 'contactSectionTitle',
      title: 'Titel contactblok',
      description: 'De koptekst boven de contactgegevens in de footer, bv. "Vragen?" of "Neem contact op".',
      type: 'string',
      initialValue: 'Vragen?',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Footer Instellingen'}
    },
  },
})
