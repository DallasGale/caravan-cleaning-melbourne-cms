import {defineType, defineField, defineArrayMember} from 'sanity'

export const comparisonCarousel = defineType({
  type: 'object',
  name: 'comparisonCarousel',
  title: 'Comparison carousel',
  fields: [
    defineField({
      type: 'string',
      name: 'category',
      title: 'Category',
    }),
    defineField({
      type: 'array',
      name: 'slidePairs',
      title: 'Slide Pairs',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'slidePair',
          title: 'Slide Pair',
          fields: [
            defineField({
              type: 'object',
              name: 'beforeItem',
              title: 'Before Item',
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
            defineField({
              type: 'object',
              name: 'afterItem',
              title: 'After Item',
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
                  title: 'Youtube Url',
                  hidden: ({parent}) => parent?.type !== 'youTubeId',
                },
              ],
            }),
            defineField({
              type: 'string',
              name: 'caption',
              title: 'Caption',
            }),
          ],
        }),
      ],
    }),
  ],
})
