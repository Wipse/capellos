// Producten schema types
import {clothingType} from './products/clothingType'
import {accessoryType} from './products/accessoryType'
import {printType} from './products/printType'

// Pagina's schema types
import {standardPageType} from './pages/standardPageType'
import {pageType} from './pages/pageType'
import {textImageType} from './pages/sections/textImageType'

export const schemaTypes = [
    // Products
    clothingType, accessoryType, printType, 

    // Pages
    standardPageType, pageType,

    // Sections
    textImageType
]