import {defineField, defineType} from 'sanity'
import {OlistIcon} from '@sanity/icons'

export const specNumberType = defineType({
  name: 'specNumber',
  title: 'Getal',
  type: 'object',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Naam',
      description: 'De naam van deze specificatie, bijvoorbeeld "Gewicht" of "Dikte".',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Waarde',
      description: 'Het getal zelf, bijvoorbeeld 250 of 1.5.',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'unit',
      title: 'Eenheid',
      description: 'De eenheid bij het getal, bijvoorbeeld "gram", "mm" of "cm".',
      type: 'string',
    }),
  ],
  preview: {
    select: {label: 'label', value: 'value', unit: 'unit'},
    prepare: ({label, value, unit}) => ({
      title: label,
      subtitle: unit ? `${value} ${unit}` : String(value),
    }),
  },
})
