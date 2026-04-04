import {defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export const navSettingsType = defineType({
  name: 'navSettings',
  title: 'Navigatie Instellingen',
  type: 'document',
  icon: MenuIcon,
  fieldsets: [
    {name: 'menuBtn', title: 'Menu-knop (rechtsboven)', options: {collapsible: true, collapsed: false}},
    {name: 'cartBtn', title: 'Winkelmandje-knop', options: {collapsible: true, collapsed: false}},
    {name: 'homeBtn', title: 'Homepage-knop (linksboven)', options: {collapsible: true, collapsed: false}},
    {name: 'sidebar', title: 'Sidebar', options: {collapsible: true, collapsed: false}},
  ],
  fields: [
    // Menu-knop
    defineField({
      name: 'triggerBackgroundColor',
      title: 'Achtergrondkleur',
      type: 'color',
      options: {disableAlpha: true},
      fieldset: 'menuBtn',
    }),
    defineField({
      name: 'triggerIconColor',
      title: 'Icoontje kleur',
      type: 'color',
      options: {disableAlpha: true},
      fieldset: 'menuBtn',
    }),

    // Winkelmandje-knop
    defineField({
      name: 'cartBackgroundColor',
      title: 'Achtergrondkleur',
      type: 'color',
      options: {disableAlpha: true},
      fieldset: 'cartBtn',
    }),
    defineField({
      name: 'cartIconColor',
      title: 'Icoontje kleur',
      type: 'color',
      options: {disableAlpha: true},
      fieldset: 'cartBtn',
    }),

    // Homepage-knop
    defineField({
      name: 'homeBackgroundColor',
      title: 'Achtergrondkleur',
      type: 'color',
      options: {disableAlpha: true},
      fieldset: 'homeBtn',
    }),
    defineField({
      name: 'homeIconColor',
      title: 'Icoontje kleur',
      type: 'color',
      options: {disableAlpha: true},
      fieldset: 'homeBtn',
    }),

    // Sidebar
    defineField({
      name: 'sidebarLogoColor',
      title: 'Logo kleur',
      type: 'color',
      options: {disableAlpha: true},
      fieldset: 'sidebar',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Navigatie Instellingen'}
    },
  },
})
