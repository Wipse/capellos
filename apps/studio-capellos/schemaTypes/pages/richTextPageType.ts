import {defineField, defineType} from 'sanity'

export const richTextPageType = defineType({
  name: 'richTextPage',
  title: 'Richtext Pagina',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Paginatitel',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Inhoud',
      description: 'De volledige tekst van de pagina. Je kunt koppen, vet, cursief, links en lijstjes gebruiken.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normaal', value: 'normal'},
            {title: 'Kop 2', value: 'h2'},
            {title: 'Kop 3', value: 'h3'},
          ],
          marks: {
            decorators: [
              {title: 'Vet', value: 'strong'},
              {title: 'Cursief', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (rule) =>
                      rule.uri({allowRelative: true, scheme: ['https', 'http', 'mailto']}),
                  },
                ],
              },
            ],
          },
          lists: [
            {title: 'Lijst', value: 'bullet'},
            {title: 'Genummerde lijst', value: 'number'},
          ],
        },
      ],
    }),
  ],
})
