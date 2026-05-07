import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

const PROJECT_ID = '18hgnby7'
const PREVIEW_URL = 'https://caravan-cleaning-melbourne.vercel.app/api/draft'

const createHomepageStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(S.document().schemaType('homepage').documentId('homepage')),

      S.listItem()
        .title('About Page')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),

      S.listItem()
        .title('Recent Work Page')
        .child(S.document().schemaType('recentWorkPage').documentId('recentWorkPage')),

      S.listItem()
        .title('Caravan Covers Page')
        .child(S.document().schemaType('caravanCoversPage').documentId('caravanCoversPage')),

      S.listItem()
        .title('Main Navigation')
        .child(S.document().schemaType('navigation').documentId('navigation')),

      S.listItem().title('Footer').child(S.document().schemaType('footer').documentId('footer')),

      S.listItem()
        .title('Contact Form')
        .child(S.document().schemaType('contactForm').documentId('contactForm')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'homepage',
            'aboutPage',
            'recentWorkPage',
            'caravanCoversPage',
            'navigation',
            'contactForm',
            'footer',
          ].includes(listItem.getId()),
      ),
    ])

const sharedPlugins = [structureTool({structure: createHomepageStructure}), visionTool()]

export default defineConfig([
  {
    name: 'production',
    title: 'Caravan Cleaning Melbourne — Production',
    projectId: PROJECT_ID,
    dataset: 'production',
    basePath: '/production',
    plugins: [
      ...sharedPlugins,
      vercelDeployTool(),
      presentationTool({
        previewUrl: {draftMode: {enable: PREVIEW_URL}},
      }),
    ],
    schema: {types: schemaTypes},
  },
  {
    name: 'staging',
    title: 'Caravan Cleaning Melbourne — Staging',
    projectId: PROJECT_ID,
    dataset: 'staging',
    basePath: '/staging',
    plugins: [...sharedPlugins],
    schema: {types: schemaTypes},
  },
])
