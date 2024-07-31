import {defineType, defineField, defineArrayMember} from 'sanity'

export const mediaCarousel = defineType({
  type: 'object',
  name: 'mediaCarousel',
  title: 'Media carousel',
  fields: [
    defineField({
      type: 'array',
      name: 'slideOptions',
      title: 'Slide Options',
      of: [
        defineField({
          type: 'object',
          name: 'sldie',
          title: 'Slide',
          fields: [
            {
              type: 'string',
              name: 'type',
              title: 'Type',
              options: {
                list: ['image', 'youTubeId'],
                layout: 'radio',
              },
            },
            {
              type: 'image',
              name: 'image',
              title: 'Image',
              hidden: ({parent}) => parent?.type !== 'image',
            },
            {
              type: 'string',
              name: 'youTubeId',
              title: 'YouTube Url',
              hidden: ({parent}) => parent?.type !== 'youTubeId',
            },
          ],
        }),
      ],
    }),
  ],
})
