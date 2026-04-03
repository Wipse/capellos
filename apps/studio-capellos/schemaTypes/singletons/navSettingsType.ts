import {defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export const navSettingsType = defineType({
  name: 'navSettings',
  title: 'Navigatie Instellingen',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'triggerBackgroundColor',
      title: 'Achtergrondkleur menu-knop',
      description: 'De kleur van de ronde knop rechtsboven waarmee het menu opent.',
      type: 'color',
      options: {disableAlpha: true},
    }),
    defineField({
      name: 'triggerIconColor',
      title: 'Kleur hamburger-icoontje',
      description: 'De kleur van de drie streepjes op de menu-knop.',
      type: 'color',
      options: {disableAlpha: true},
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Navigatie Instellingen'}
    },
  },
})
