import {sanityClient} from 'sanity:client'
import {toPhoneHref} from '../utils/formatPhone'

// ——— Types (Sanity settings) ———

export interface FooterSettings {
  backgroundColorHex: string
  textColorHex: string
}

export interface FooterContactInfo {
  sectionTitle: string
  email: string
  phone: string
  phoneHref: string  // afgeleid via toPhoneHref(), niet uit Sanity
  address: string
  instagramUrl: string
  linkedinUrl: string
}

export interface AboutCapellosSettings {
  backgroundColorHex: string
  textColorHex: string
  text: {_type: string; children: {text: string}[]}[] | null
}


export interface MainHeroSettings {
  textColorHex: string
  navigationTextColorHex: string
  backgroundColorHex: string
  showShadowLogo: boolean
  enableHoverEffect: boolean
}

// ——— Defaults ———

const DEFAULT_FOOTER_BG = '#5B6FE6'
const DEFAULT_FOOTER_TEXT = '#FFFFFF'

const footerSettingsGroq = `*[_id == "footerSettings"][0]{
  "backgroundColorHex": coalesce(backgroundColor.hex, $defaultBg),
  "textColorHex": coalesce(textColor.hex, $defaultText)
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

const DEFAULT_FOOTER_CONTACT = {
  sectionTitle: 'Vragen?',
  email: 'info@capellos.nl',
  phone: '06 12345678',
  address: 'Somewhere in Delft',
  instagramUrl: '#',
  linkedinUrl: '#',
}

const footerContactInfoGroq = `{
  "contact": *[_id == "bedrijfsgegevens"][0]{ email, phone, phoneHref, address, instagramUrl, linkedinUrl },
  "footer": *[_id == "footerSettings"][0]{ contactSectionTitle }
}`

export async function getFooterContactInfo(): Promise<FooterContactInfo> {
  const row = await sanityClient.fetch<{
    contact: Partial<FooterContactInfo> | null
    footer: {contactSectionTitle?: string} | null
  } | null>(footerContactInfoGroq)

  const phone = row?.contact?.phone ?? DEFAULT_FOOTER_CONTACT.phone
  return {
    sectionTitle: row?.footer?.contactSectionTitle ?? DEFAULT_FOOTER_CONTACT.sectionTitle,
    email: row?.contact?.email ?? DEFAULT_FOOTER_CONTACT.email,
    phone,
    phoneHref: toPhoneHref(phone),
    address: row?.contact?.address ?? DEFAULT_FOOTER_CONTACT.address,
    instagramUrl: row?.contact?.instagramUrl ?? DEFAULT_FOOTER_CONTACT.instagramUrl,
    linkedinUrl: row?.contact?.linkedinUrl ?? DEFAULT_FOOTER_CONTACT.linkedinUrl,
  }
}

const DEFAULT_ABOUT_BG = '#4BAF6E'
const DEFAULT_ABOUT_TEXT = '#FFFFFF'

const aboutCapellosSettingsGroq = `*[_id == "homepage"][0]{
  "backgroundColorHex": coalesce(about.backgroundColor.hex, $defaultBg),
  "textColorHex": coalesce(about.textColor.hex, $defaultText),
  "text": about.text
}`

export async function getAboutCapellosSettings(): Promise<AboutCapellosSettings> {
  const row = await sanityClient.fetch<Partial<AboutCapellosSettings> | null>(
    aboutCapellosSettingsGroq,
    {defaultBg: DEFAULT_ABOUT_BG, defaultText: DEFAULT_ABOUT_TEXT},
  )

  return {
    backgroundColorHex: row?.backgroundColorHex ?? DEFAULT_ABOUT_BG,
    textColorHex: row?.textColorHex ?? DEFAULT_ABOUT_TEXT,
    text: row?.text ?? null,
  }
}

const DEFAULT_HERO_TEXT = '#FFDF94'
const DEFAULT_HERO_BG = '#D83A45'

// ——— Main hero (uit homepage document) ———

const mainHeroSettingsGroq = `*[_id == "homepage"][0]{
  "textColorHex": coalesce(hero.textColor.hex, $defaultText),
  "backgroundColorHex": coalesce(hero.backgroundColor.hex, $defaultBg),
  "showShadowLogo": coalesce(hero.showShadowLogo, true),
  "enableHoverEffect": coalesce(hero.enableHoverEffect, true)
}`

export async function getMainHeroSettings(): Promise<MainHeroSettings> {
  const row = await sanityClient.fetch<Partial<MainHeroSettings> | null>(
    mainHeroSettingsGroq,
    {defaultText: DEFAULT_HERO_TEXT, defaultBg: DEFAULT_HERO_BG},
  )

  return {
    textColorHex: row?.textColorHex ?? DEFAULT_HERO_TEXT,
    navigationTextColorHex: '#FFFFFF',
    backgroundColorHex: row?.backgroundColorHex ?? DEFAULT_HERO_BG,
    showShadowLogo: row?.showShadowLogo ?? true,
    enableHoverEffect: row?.enableHoverEffect ?? true,
  }
}
