import type { Template } from 'sanity'

export const pageTemplates: Template[] = [
  {
    id: 'homePage',
    title: 'Home Pagina',
    schemaType: 'standardPage',
    value: {
      title: 'Home',
      slug: { current: 'home' },
    },
  },
  {
    id: 'aboutPage',
    title: 'Over Capellos Pagina',
    schemaType: 'standardPage',
    value: {
      title: 'Over Capellos',
      slug: { current: 'over-capellos' },
    },
  },
  {
    id: 'shopClothingPage',
    title: 'Shop - Kleding Pagina',
    schemaType: 'standardPage',
    value: {
      title: 'Kleding',
      slug: { current: 'kleding' },
    },
  },
  {
    id: 'shopAccessoriesPage',
    title: 'Shop - Accessoires Pagina',
    schemaType: 'standardPage',
    value: {
      title: 'Accessoires',
      slug: { current: 'accessoires' },
    },
  },
  {
    id: 'shopPrintsPage',
    title: 'Shop - Prints Pagina',
    schemaType: 'standardPage',
    value: {
      title: 'Prints',
      slug: { current: 'prints' },
    },
  },
  {
    id: 'shopRequestsPage',
    title: 'Shop - Aanvragen Pagina',
    schemaType: 'standardPage',
    value: {
      title: 'Aanvragen',
      slug: { current: 'aanvragen' },
    },
  },
  {
    id: 'mainHeroSettings',
    title: 'Beginscherm Instellingen',
    schemaType: 'mainHeroSettings',
    value: {
      textColor: {_type: 'color', hex: '#FFDF94'},
      backgroundColor: {_type: 'color', hex: '#D83A45'},
    },
  },
]
