// Producten schema types
import {clothingType} from './products/clothingType'
import {accessoryType} from './products/accessoryType'
import {printType} from './products/printType'

// Pagina's schema types
import {standardPageType} from './pages/standardPageType'
import {pageType} from './pages/pageType'
import {textImageType} from './pages/sections/textImageType'

// Singleton documents (IDs in structure are fixed, no `sections`-objects)
import {mainHeroSettingsType} from './singletons/mainHeroSettings'

export const schemaTypes = [
  // Products
  clothingType,
  accessoryType,
  printType,

  // Pages
  standardPageType,
  pageType,

  // Embedded secties (objects op een pagina)
  textImageType,

  // Singletons
  mainHeroSettingsType,
]
