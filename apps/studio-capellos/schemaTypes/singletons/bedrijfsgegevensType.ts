import {defineField, defineType} from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'

export const bedrijfsgegevensType = defineType({
  name: 'bedrijfsgegevens',
  title: 'Bedrijfsgegevens',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    // ——— Contactgegevens ———
    defineField({
      name: 'contactHeading',
      title: '— Contactgegevens',
      type: 'string',
      readOnly: true,
      initialValue: '─────────────────',
      hidden: true,
    }),
    defineField({
      name: 'email',
      title: 'E-mailadres',
      description: 'Algemeen contactadres, wordt getoond in de footer en op de contactpagina.',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefoonnummer',
      description: 'Weergave zoals op de site getoond, bv. "06 12 34 56 78".',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adres',
      description: 'Vestigingsadres zoals weergegeven op de website.',
      type: 'string',
    }),

    // ——— Sociale media ———
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      description: 'Volledig adres van je Instagram-profiel, bv. "https://instagram.com/capellos".',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      description: 'Volledig adres van je LinkedIn-profiel of bedrijfspagina.',
      type: 'url',
    }),

    // ——— Bedrijfsregistratie ———
    defineField({
      name: 'kvkNummer',
      title: 'KVK-nummer',
      description: 'Je KVK-inschrijvingsnummer, wordt getoond in de footer en algemene voorwaarden.',
      type: 'string',
    }),
    defineField({
      name: 'btwNummer',
      title: 'BTW-nummer',
      description: 'Je BTW-identificatienummer (optioneel).',
      type: 'string',
    }),
    defineField({
      name: 'iban',
      title: 'IBAN',
      description: 'Bankrekeningnummer voor facturen en betalingen. Wordt niet op de website getoond, enkel intern.',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Bedrijfsgegevens'}
    },
  },
})
