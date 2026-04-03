import {sanityClient} from 'sanity:client'

export interface Category {
  title: string
  slug: string
  colorHex: string
  textColorHex: string
  imageUrl: string | null
  imageAlt: string | null
  description: string | null
}

const categoriesGroq = `*[_type == "category"] | order(title asc) {
  title,
  "slug": slug.current,
  "colorHex": coalesce(color.hex, "#4BAF6E"),
  "textColorHex": coalesce(textColor.hex, "#FFFFFF"),
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  description
}`

const FALLBACK_CATEGORIES: Category[] = [
  {title: 'Prints', slug: 'prints', colorHex: '#4BAF6E', textColorHex: '#FFFFFF', imageUrl: null, imageAlt: null, description: null},
  {title: 'Kleding', slug: 'kleding', colorHex: '#4BAF6E', textColorHex: '#FFFFFF', imageUrl: null, imageAlt: null, description: null},
]

export async function getCategories(): Promise<Category[]> {
  const rows = await sanityClient.fetch<Category[] | null>(categoriesGroq)
  return rows?.length ? rows : FALLBACK_CATEGORIES
}
