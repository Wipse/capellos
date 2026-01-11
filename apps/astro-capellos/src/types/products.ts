
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

/**
 * Accessory type based on Sanity schema
 */
export interface Accessory {
  _id: string
  title: string
  slug: {
    current: string
  }
  type: string
  imageUrl?: string
}

/**
 * Print type based on Sanity schema
 */
export interface Print {
  _id: string
  title: string
  slug: {
    current: string
  }
  type: string
  imageUrl?: string
}