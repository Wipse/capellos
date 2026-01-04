
/**
 * Clothing type based on Sanity schema
 */
export interface Clothing {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  imageUrl?: string
}
