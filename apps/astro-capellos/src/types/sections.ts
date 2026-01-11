/**
 * Text Image Section type - transformed for component use
 */
export interface TextImageSection {
  _type: 'textImageSection'
  _key: string
  title: string
  text: string
  image: {
    front: string
    back: string
    layout: 'both-horizontal' | 'both-vertical' | 'mixed'
    frontOrientation?: 'horizontal' | 'vertical'
  }
  backgroundColor?: string
  hasLeftImage?: boolean
  sectionPadding?: 'sm' | 'md' | 'lg'
}

/**
 * Union type voor alle mogelijke section types
 */
export type Section = TextImageSection