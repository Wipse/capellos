import {sanityClient} from 'sanity:client'

export interface ProductSpec {
  _type: 'specText' | 'specChoice' | 'specBoolean' | 'specNumber'
  label: string
  value?: string | boolean | number
  options?: string[]
  unit?: string
}

export interface Product {
  _id: string
  name: string
  slug: string
  price: number
  mainImageUrl: string | null
  mainImageAlt: string | null
  images: {url: string; alt: string | null}[]
  description: {_type: string; children: {text: string; marks?: string[]}[]}[] | null
  category: {_id: string; title: string; slug: string; colorHex: string; textColorHex: string} | null
  specifications: ProductSpec[]
  shipping: string | null
}

const productFields = `
  _id,
  name,
  "slug": slug.current,
  price,
  "mainImageUrl": mainImage.asset->url,
  "mainImageAlt": mainImage.alt,
  "images": images[]{"url": asset->url, "alt": alt},
  description,
  category->{
    _id,
    title,
    "slug": slug.current,
    "colorHex": coalesce(color.hex, "#4BAF6E"),
    "textColorHex": coalesce(textColor.hex, "#FFFFFF")
  },
  specifications,
  shipping
`

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return sanityClient.fetch<Product | null>(
    `*[_type == "product" && slug.current == $slug][0]{ ${productFields} }`,
    {slug},
  )
}

export async function getAllProductSlugs(): Promise<{slug: string; categorySlug: string}[]> {
  return sanityClient.fetch<{slug: string; categorySlug: string}[]>(
    `*[_type == "product" && defined(slug.current) && defined(category->slug.current)]{
      "slug": slug.current,
      "categorySlug": category->slug.current
    }`,
  )
}

export async function getRelatedProducts(productId: string, categoryRef: string): Promise<Product[]> {
  return sanityClient.fetch<Product[]>(
    `*[_type == "product" && _id != $productId && category._ref == $categoryRef][0..3]{ ${productFields} }`,
    {productId, categoryRef},
  )
}
