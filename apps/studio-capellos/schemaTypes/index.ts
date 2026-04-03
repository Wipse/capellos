// Categorieën
import {categoryType} from './categoryType'

// Producten schema types
import {clothingType} from './products/clothingType'
import {accessoryType} from './products/accessoryType'
import {printType} from './products/printType'

// Pagina's schema types
import {homepageType} from './pages/homepageType'
import {standardPageType} from './pages/standardPageType'
import {pageType} from './pages/pageType'
import {heroSectionType} from './pages/sections/heroSectionType'
import {aboutSectionType} from './pages/sections/aboutSectionType'
import {textImageType} from './pages/sections/textImageType'

// Singleton documents (IDs in structure are fixed)
import {footerSettingsType} from './singletons/footerSettingsType'
import {bedrijfsgegevensType} from './singletons/bedrijfsgegevensType'

export const schemaTypes = [
  // Categorieën
  categoryType,

  // Products
  clothingType,
  accessoryType,
  printType,

  // Pages
  homepageType,
  standardPageType,
  pageType,

  // Embedded secties (objects op een pagina)
  heroSectionType,
  aboutSectionType,
  textImageType,

  // Singletons
  footerSettingsType,
  bedrijfsgegevensType,
]
