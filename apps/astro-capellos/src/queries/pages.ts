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
