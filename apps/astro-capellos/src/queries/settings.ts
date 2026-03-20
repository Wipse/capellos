import {sanityClient} from 'sanity:client'

// ——— Types (Sanity settings) ———

export interface MainHeroSettings {
  textColorHex: string
  backgroundColorHex: string
}

// ——— Defaults ———

const DEFAULT_HERO_TEXT = '#FFDF94'
const DEFAULT_HERO_BG = '#D83A45'

// ——— Main hero (singleton `mainHeroSettings`) ———

const mainHeroSettingsGroq = `*[
  _id == "mainHeroSettings"
  && _type == "mainHeroSettings"
][0]{
  "textColorHex": coalesce(textColor.hex, textColor, $defaultText),
  "backgroundColorHex": coalesce(backgroundColor.hex, backgroundColor, $defaultBg)
}`

export async function getMainHeroSettings(): Promise<MainHeroSettings> {
  const row = await sanityClient.fetch<Partial<MainHeroSettings> | null>(
    mainHeroSettingsGroq,
    {defaultText: DEFAULT_HERO_TEXT, defaultBg: DEFAULT_HERO_BG},
  )

  return {
    textColorHex: row?.textColorHex ?? DEFAULT_HERO_TEXT,
    backgroundColorHex: row?.backgroundColorHex ?? DEFAULT_HERO_BG,
  }
}
