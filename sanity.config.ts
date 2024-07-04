import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
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

      S.listItem()
        .title('Main Navigation')
        .child(S.document().schemaType('navigation').documentId('navigation')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['homepage', 'navigation'].includes(listItem.getId()),
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
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: 'https://caravan-cleaning-melbourne.vercel.app/api/draft',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
