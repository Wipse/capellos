import type {Template} from 'sanity'

export const pageTemplates: Template[] = [
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    schemaType: 'richTextPage',
    value: {title: 'Cookie Policy', slug: {current: 'cookies'}},
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    schemaType: 'richTextPage',
    value: {title: 'Privacy Policy', slug: {current: 'privacy'}},
  },
  {
    id: 'algemene-voorwaarden',
    title: 'Algemene Voorwaarden',
    schemaType: 'richTextPage',
    value: {title: 'Algemene Voorwaarden', slug: {current: 'voorwaarden'}},
  },
  {
    id: 'product-in-category',
    title: 'Nieuw product',
    schemaType: 'product',
    parameters: [{name: 'catId', title: 'Categorie ID', type: 'string'}],
    value: ({catId}: {catId: string}) => ({
      category: {_type: 'reference', _ref: catId},
    }),
  },
]
