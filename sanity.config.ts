import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

const createHomepageStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      ...S.documentTypeListItems().filter(
        (listItem: any) => !['homepage'].includes(listItem.getId()),
      ),
    ])

export default defineConfig({
  name: 'default',
  title: 'Caravan Cleaning Melbourne',

  projectId: '18hgnby7',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: createHomepageStructure,
    }),
    visionTool(),
    vercelDeployTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
