import {defineField, defineType} from 'sanity'
import {ToggleArrowRightIcon} from '@sanity/icons'

export const specBooleanType = defineType({
  name: 'specBoolean',
  title: 'Ja of Nee',
  type: 'object',
  icon: ToggleArrowRightIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Naam',
      description: 'De naam van deze specificatie, bijvoorbeeld "Gesigneerd" of "Ingelijst geleverd".',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Waarde',
      description: 'Zet dit aan als het van toepassing is.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {label: 'label', value: 'value'},
    prepare: ({label, value}) => ({title: label, subtitle: value ? 'Ja' : 'Nee'}),
  },
})
