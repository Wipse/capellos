import {defineField, defineType} from 'sanity'
import {BasketIcon} from '@sanity/icons'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: BasketIcon,
  fields: [
    // ——— Basisinformatie ———
    defineField({
      name: 'name',
      title: 'Naam',
      description: 'De naam van het product zoals hij op de website verschijnt.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      description: 'Het webadres van dit product. Klik op Genereren om automatisch een URL te maken op basis van de naam.',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categorie',
      description: 'De categorie waartoe dit product behoort, bijvoorbeeld Prints of Kleding.',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publiceerdatum',
      description: 'Datum waarop dit product zichtbaar wordt op de website.',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    // ——— Prijs ———
    defineField({
      name: 'price',
      title: 'Prijs (in euro)',
      description: 'De verkoopprijs zonder euro-teken, bijvoorbeeld 24.99.',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),

    // ——— Afbeeldingen ———
    defineField({
      name: 'mainImage',
      title: 'Hoofdafbeelding',
      description: 'De primaire productfoto die bovenaan de pagina en in overzichten wordt getoond.',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternatieve tekst',
          description: 'Korte omschrijving van de afbeelding voor zoekmachines en slechtzienden, bijvoorbeeld "Handgesigneerde print van een botanische tekening".',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Extra afbeeldingen',
      description: 'Optionele extra productfoto\'s, bijvoorbeeld een detailopname of achterkant.',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternatieve tekst',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    // ——— Beschrijving ———
    defineField({
      name: 'description',
      title: 'Beschrijving',
      description: 'Een uitgebreide omschrijving van het product. Vertel wat het bijzonder maakt.',
      type: 'array',
      of: [{
        type: 'block',
        styles: [],
        lists: [],
        marks: {
          decorators: [
            {title: 'Vet', value: 'strong'},
            {title: 'Cursief', value: 'em'},
          ],
          annotations: [],
        },
      }],
    }),

    // ——— Specificaties ———
    defineField({
      name: 'specifications',
      title: 'Specificaties',
      description: 'Voeg hier de technische details van dit product toe. Kies per specificatie het juiste type: een tekstveld voor vrije invoer, een keuzeoptie voor meerdere waarden, Ja of Nee voor eigenschappen die wel of niet van toepassing zijn, of een getal voor maten en gewichten.',
      type: 'array',
      of: [
        {type: 'specText'},
        {type: 'specChoice'},
        {type: 'specBoolean'},
        {type: 'specNumber'},
      ],
    }),

    // ——— Verzending ———
    defineField({
      name: 'shipping',
      title: 'Verzending',
      description: 'Informatie over verzending en levertijd voor dit specifieke product, bijvoorbeeld "Gratis verzending binnen Nederland, geleverd binnen 3 tot 5 werkdagen".',
      type: 'text',
      rows: 2,
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'category.title',
      media: 'mainImage',
    },
  },
})
