import { sanityClient } from 'sanity:client'
import type { Page } from '../types/page'

/**
 * Fetch the slugs corresponding page
 */
export async function getPageContent(slug: string): Promise<Page | null> {
  const query = `*[
    _type == "standardPage"
    && slug.current == $slug
  ][0]{
    _id,
    title,
    slug,
    sections[]{
      _type,
      _key,
      _type == "textImageSection" => {
        title,
        text,
        backgroundColor,
        hasLeftImage,
        sectionPadding,
        "image": {
          "front": images[0].image.asset->url,
          "back": images[1].image.asset->url,
          "frontOrientation": images[0].orientation,
          "layout": select(
            count(images) == 1 => select(
              images[0].orientation == "horizontal" => "both-horizontal",
              images[0].orientation == "vertical" => "both-vertical"
            ),
            count(images) == 2 && images[0].orientation == images[1].orientation && images[0].orientation == "horizontal" => "both-horizontal",
            count(images) == 2 && images[0].orientation == images[1].orientation && images[0].orientation == "vertical" => "both-vertical",
            "mixed"
          )
        }
      }
    }
  }`

  const page = await sanityClient.fetch<Page | null>(query, { slug })
  return page
}

export async function getAboutPage(): Promise<{ title: string; comingSoonText: string } | null> {
  return sanityClient.fetch(
    `*[_type == "aboutPage" && _id == "aboutPage"][0]{ title, comingSoonText }`
  )
}

export interface ContactPage {
  heroHeading: string
  heroSubtext: string | null
  heroBackgroundColor: string | null
  ctaHeading: string | null
  ctaText: string | null
  ctaLabel: string | null
}

export async function getContactPage(): Promise<ContactPage | null> {
  return sanityClient.fetch(
    `*[_type == "contactPage" && _id == "contactPage"][0]{
      heroHeading,
      heroSubtext,
      "heroBackgroundColor": heroBackgroundColor.hex,
      ctaHeading,
      ctaText,
      ctaLabel
    }`
  )
}

export interface RichTextPage {
  title: string
  slug: string
  body: { _type: string; _key: string; [key: string]: unknown }[] | null
}

export async function getRichTextPageSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(
    `*[_type == "richTextPage" && defined(slug.current)]{ "slug": slug.current }`
  )
}

export async function getRichTextPage(slug: string): Promise<RichTextPage | null> {
  return sanityClient.fetch(
    `*[_type == "richTextPage" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      body
    }`,
    { slug }
  )
}
