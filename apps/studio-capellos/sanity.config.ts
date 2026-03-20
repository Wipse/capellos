import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {pageTemplates} from './structure/templates'

export default defineConfig({
  name: 'default',
  title: 'Capellos',

  projectId: '26834z8k',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
    templates: (prev) => [...prev, ...pageTemplates],
  },
})
