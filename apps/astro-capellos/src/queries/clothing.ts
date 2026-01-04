import { sanityClient } from 'sanity:client'
import type { Clothing } from '../types/clothing'

/**
 * Haal alle kleding op
 */
export async function getAllClothing(): Promise<Clothing[]> {
  const query = `*[
    _type == "clothing"
    && defined(slug.current)
  ]|order(publishedAt desc){
    _id,
    title,
    slug,
    "imageUrl": image.asset->url,
  }`

  const clothing = await sanityClient.fetch<Clothing[]>(query)
  console.log(clothing)
  return clothing
}
