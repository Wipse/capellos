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
      title: 'Logo- & accentkleur',
      description:
        'Kleur voor het voorste logo, navigatie-onderstreping en scroll-pijl (CSS: --hero-text).',
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
      name: 'navigationTextColor',
      title: 'Navigatietekstkleur',
      description: 'Kleur van de menulinks in de hero (en het woord “Scroll” eronder).',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: [
          '#FFFFFF',
          '#FFDF94',
          '#E3EDE8',
          '#000000',
          '#3D245F',
          '#3251A6',
          '#D83A45',
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
