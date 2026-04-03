import {defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export const specChoiceType = defineType({
  name: 'specChoice',
  title: 'Keuzeoptie',
  type: 'object',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Naam',
      description: 'De naam van deze specificatie, bijvoorbeeld "Canvasgrootte" of "Beschikbare maten".',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'options',
      title: 'Opties',
      description: 'Voeg alle keuzemogelijkheden toe. Elke optie is een aparte waarde, bijvoorbeeld "A4", "A3" of "A2".',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().min(1).error('Voeg minimaal één optie toe.'),
    }),
  ],
  preview: {
    select: {label: 'label', options: 'options'},
    prepare: ({label, options}) => ({
      title: label,
      subtitle: Array.isArray(options) ? options.join(', ') : '',
    }),
  },
})
