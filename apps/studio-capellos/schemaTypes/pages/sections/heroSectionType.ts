import {defineField, defineType} from 'sanity'

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero Sectie',
  type: 'object',
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Achtergrondkleur',
      description: 'De achtergrondkleur van het beginscherm — de eerste indruk van de website.',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: ['#D83A45', '#3D245F', '#3251A6', '#E3EDE8', '#FFDF94', '#FFFFFF', '#000000'],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'textColor',
      title: 'Logo- & accentkleur',
      description:
        'Kleur van het logo en de scroll-pijl. Kies een kleur die goed afsteekt tegen de achtergrond.',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: ['#FFDF94', '#D83A45', '#3D245F', '#3251A6', '#E3EDE8', '#FFFFFF', '#000000'],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'showShadowLogo',
      title: 'Achterste logo tonen',
      description:
        'Het witte logo achter het gekleurde logo geeft een schaduweffect. Zet dit uit als je een lichte achtergrond gebruikt en het effect te druk vindt.',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'enableHoverEffect',
      title: 'Hover-effect inschakelen',
      description:
        'Als dit aan staat, reageert het logo op de muispositie van de bezoeker. Zet uit voor een rustiger, statisch logo.',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Hero Sectie'}
    },
  },
})
