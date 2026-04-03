// Categorieën
import {categoryType} from './categoryType'

// Producten schema types
import {productType} from './products/productType'
import {specTextType} from './products/specifications/specTextType'
import {specChoiceType} from './products/specifications/specChoiceType'
import {specBooleanType} from './products/specifications/specBooleanType'
import {specNumberType} from './products/specifications/specNumberType'

// Pagina's schema types
import {homepageType} from './pages/homepageType'
import {standardPageType} from './pages/standardPageType'
import {pageType} from './pages/pageType'
import {heroSectionType} from './pages/sections/heroSectionType'
import {aboutSectionType} from './pages/sections/aboutSectionType'
import {aanvragenSectionType} from './pages/sections/aanvragenSectionType'
import {textImageType} from './pages/sections/textImageType'

// Singleton documents (IDs in structure are fixed)
import {footerSettingsType} from './singletons/footerSettingsType'
import {bedrijfsgegevensType} from './singletons/bedrijfsgegevensType'
import {navSettingsType} from './singletons/navSettingsType'

export const schemaTypes = [
  // Categorieën
  categoryType,

  // Producten
  productType,
  specTextType,
  specChoiceType,
  specBooleanType,
  specNumberType,

  // Pages
  homepageType,
  standardPageType,
  pageType,

  // Embedded secties (objects op een pagina)
  heroSectionType,
  aboutSectionType,
  aanvragenSectionType,
  textImageType,

  // Singletons
  footerSettingsType,
  bedrijfsgegevensType,
  navSettingsType,
]
