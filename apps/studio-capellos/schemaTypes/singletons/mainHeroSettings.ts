import {defineField, defineType} from 'sanity'

// Singleton document used to store the settings for the main hero section
export const mainHeroSettingsType = defineType({
  name: 'mainHeroSettings',
  title: 'Beginscherm Instellingen',
  description:
    'Instellingen voor het beginscherm op de homepage; de eerste indruk die de gebruiker krijgt wanneer hij de website bezoekt.',
  type: 'document',
  fields: [
    defineField({
      name: 'textColor',
      title: 'Tekst- en Accentkleur',
      description: 'Tekst- en Accentkleur voor het beginscherm, zoals het Logo en de Navigatie.',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: [
          '#FFDF94',
          '#D83A45',
          '#3D245F',
          '#3251A6',
          '#E3EDE8',
          '#FFFFFF',
          '#000000',
        ],
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Achtergrondkleur',
      description: 'Achtergrondkleur voor het beginscherm.',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: [
          '#D83A45',
          '#3D245F',
          '#3251A6',
          '#E3EDE8',
          '#FFDF94',
          '#FFFFFF',
          '#000000',
        ],
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Beginscherm',
        subtitle: 'Hero-instellingen',
      }
    },
  },
})
