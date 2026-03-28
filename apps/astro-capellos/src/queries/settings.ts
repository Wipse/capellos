import {sanityClient} from 'sanity:client'

// ——— Types (Sanity settings) ———

export interface FooterSettings {
  backgroundColorHex: string
  textColorHex: string
}

export interface FooterContactInfo {
  sectionTitle: string
  email: string
  phone: string
  phoneHref: string
  address: string
  instagramUrl: string
  linkedinUrl: string
}

export interface AboutCapellosSettings {
  backgroundColorHex: string
  textColorHex: string
}

export interface MainHeroSettings {
  textColorHex: string
  navigationTextColorHex: string
  backgroundColorHex: string
}

// ——— Defaults ———

const DEFAULT_FOOTER_BG = '#5B6FE6'
const DEFAULT_FOOTER_TEXT = '#FFFFFF'

const footerSettingsGroq = `*[
  _id == "footerSettings"
  && _type == "footerSettings"
][0]{
  "backgroundColorHex": coalesce(backgroundColor.hex, backgroundColor, $defaultBg),
  "textColorHex": coalesce(textColor.hex, textColor, $defaultText)
}`

export async function getFooterSettings(): Promise<FooterSettings> {
  const row = await sanityClient.fetch<Partial<FooterSettings> | null>(
    footerSettingsGroq,
    {defaultBg: DEFAULT_FOOTER_BG, defaultText: DEFAULT_FOOTER_TEXT},
  )

  return {
    backgroundColorHex: row?.backgroundColorHex ?? DEFAULT_FOOTER_BG,
    textColorHex: row?.textColorHex ?? DEFAULT_FOOTER_TEXT,
  }
}

const DEFAULT_FOOTER_CONTACT: FooterContactInfo = {
  sectionTitle: 'Vragen?',
  email: 'info@capellos.nl',
  phone: '06 12345678',
  phoneHref: '0612345678',
  address: 'Somewhere in Delft',
  instagramUrl: '#',
  linkedinUrl: '#',
}

const footerContactInfoGroq = `*[
  _id == "footerContactInfoSettings"
  && _type == "footerContactInfoSettings"
][0]{
  sectionTitle,
  email,
  phone,
  phoneHref,
  address,
  instagramUrl,
  linkedinUrl
}`

export async function getFooterContactInfo(): Promise<FooterContactInfo> {
  const row = await sanityClient.fetch<Partial<FooterContactInfo> | null>(footerContactInfoGroq)

  return {
    sectionTitle: row?.sectionTitle ?? DEFAULT_FOOTER_CONTACT.sectionTitle,
    email: row?.email ?? DEFAULT_FOOTER_CONTACT.email,
    phone: row?.phone ?? DEFAULT_FOOTER_CONTACT.phone,
    phoneHref: row?.phoneHref ?? DEFAULT_FOOTER_CONTACT.phoneHref,
    address: row?.address ?? DEFAULT_FOOTER_CONTACT.address,
    instagramUrl: row?.instagramUrl ?? DEFAULT_FOOTER_CONTACT.instagramUrl,
    linkedinUrl: row?.linkedinUrl ?? DEFAULT_FOOTER_CONTACT.linkedinUrl,
  }
}

const DEFAULT_ABOUT_BG = '#4BAF6E'
const DEFAULT_ABOUT_TEXT = '#FFFFFF'

const aboutCapellosSettingsGroq = `*[
  _id == "aboutCapellosSettings"
  && _type == "aboutCapellosSettings"
][0]{
  "backgroundColorHex": coalesce(backgroundColor.hex, backgroundColor, $defaultBg),
  "textColorHex": coalesce(textColor.hex, textColor, $defaultText)
}`

export async function getAboutCapellosSettings(): Promise<AboutCapellosSettings> {
  const row = await sanityClient.fetch<Partial<AboutCapellosSettings> | null>(
    aboutCapellosSettingsGroq,
    {defaultBg: DEFAULT_ABOUT_BG, defaultText: DEFAULT_ABOUT_TEXT},
  )

  return {
    backgroundColorHex: row?.backgroundColorHex ?? DEFAULT_ABOUT_BG,
    textColorHex: row?.textColorHex ?? DEFAULT_ABOUT_TEXT,
  }
}

const DEFAULT_HERO_TEXT = '#FFDF94'
const DEFAULT_HERO_NAV_TEXT = '#FFFFFF'
const DEFAULT_HERO_BG = '#D83A45'

// ——— Main hero (singleton `mainHeroSettings`) ———

const mainHeroSettingsGroq = `*[
  _id == "mainHeroSettings"
  && _type == "mainHeroSettings"
][0]{
  "textColorHex": coalesce(textColor.hex, textColor, $defaultText),
  "navigationTextColorHex": coalesce(navigationTextColor.hex, navigationTextColor, $defaultNavText),
  "backgroundColorHex": coalesce(backgroundColor.hex, backgroundColor, $defaultBg)
}`

export async function getMainHeroSettings(): Promise<MainHeroSettings> {
  const row = await sanityClient.fetch<Partial<MainHeroSettings> | null>(
    mainHeroSettingsGroq,
    {
      defaultText: DEFAULT_HERO_TEXT,
      defaultNavText: DEFAULT_HERO_NAV_TEXT,
      defaultBg: DEFAULT_HERO_BG,
    },
  )

  return {
    textColorHex: row?.textColorHex ?? DEFAULT_HERO_TEXT,
    navigationTextColorHex: row?.navigationTextColorHex ?? DEFAULT_HERO_NAV_TEXT,
    backgroundColorHex: row?.backgroundColorHex ?? DEFAULT_HERO_BG,
  }
}
