import type { TextImageSection } from "./sections"

/**
 * Clothing type based on Sanity schema
 */
export interface Page {
  _id: string
  title: string
  slug: {
    current: string
  }
  sections: TextImageSection[]
}