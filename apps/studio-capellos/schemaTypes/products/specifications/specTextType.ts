import {defineField, defineType} from 'sanity'
import {EditIcon} from '@sanity/icons'

export const specTextType = defineType({
  name: 'specText',
  title: 'Tekstwaarde',
  type: 'object',
  icon: EditIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Naam',
      description: 'De naam van deze specificatie, bijvoorbeeld "Materiaal" of "Canvasdikte".',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Waarde',
      description: 'De bijbehorende waarde, bijvoorbeeld "300 g/m2" of "Katoen".',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {label: 'label', value: 'value'},
    prepare: ({label, value}) => ({title: label, subtitle: value}),
  },
})
