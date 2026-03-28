import {defineField, defineType} from 'sanity'

export const footerContactInfoSettingsType = defineType({
  name: 'footerContactInfoSettings',
  title: 'Footer Contactgegevens',
  description: 'Contactinformatie en sociale links die in de footer worden getoond.',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Sectietitel',
      description: 'De koptekst boven de contactgegevens (bv. "Vragen?").',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-mailadres',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefoonnummer',
      description: 'Wordt ook gebruikt als tel:-link (bv. 0612345678).',
      type: 'string',
    }),
    defineField({
      name: 'phoneHref',
      title: 'Telefoonnummer (link)',
      description: 'Alleen cijfers, geen spaties (bv. 0612345678).',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adres',
      description: 'Wordt als tekst weergegeven, niet als link.',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Contactgegevens',
        subtitle: 'Contact & sociale links',
      }
    },
  },
})
