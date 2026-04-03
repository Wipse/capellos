import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'
import {aboutSectionType} from './sections/aboutSectionType'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Sectie',
      description:
        'Het grote beginscherm dat bezoekers als eerste zien. Stel hier de kleuren in die passen bij het seizoen of je huisstijl.',
      type: 'heroSection',
    }),
    defineField({
      name: 'about',
      title: 'Over Capellos Sectie',
      description:
        'De sectie onder de catalogus met "Wat is Capellos" en de categorie-navigatie.',
      type: aboutSectionType.name,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Homepage'}
    },
  },
})
