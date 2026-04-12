import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'
import {aboutSectionType} from './sections/aboutSectionType'
import {aanvragenSectionType} from './sections/aanvragenSectionType'

export const homePageType = defineType({
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
    defineField({
      name: 'aanvragen',
      title: 'Aanvragen Sectie',
      description:
        'De sectie met de slider-afbeeldingen en de CTA naar de aanvragenpagina.',
      type: aanvragenSectionType.name,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Homepage'}
    },
  },
})
