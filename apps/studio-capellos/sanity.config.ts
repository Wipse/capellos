import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {pageTemplates} from './structure/templates'
import {presentationTool} from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'Capellos',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID as string ?? '26834z8k',
  dataset: process.env.SANITY_STUDIO_DATASET as string ?? 'production',

  plugins: [
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN as string ?? 'http://localhost:4321',
        preview: '/',
      },
    }),
    structureTool({
      structure
    }), 
    visionTool(), 
    colorInput()],

  schema: {
    types: schemaTypes,
    templates: (prev) => [...prev, ...pageTemplates],
  },
})
