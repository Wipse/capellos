import type {Template} from 'sanity'

export const pageTemplates: Template[] = [
  {
    id: 'aboutPage',
    title: 'Over Capellos Pagina',
    schemaType: 'standardPage',
    value: {
      title: 'Over Capellos',
      slug: {current: 'over-capellos'},
    },
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
