import {defineArrayMember, defineField} from 'sanity'

export default {
  name: 'recentWorkPage',
  title: 'RecentWorkPage',
  type: 'document',
  __experimental_actions: ['create', 'update', 'publish', 'delete'],
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'richTextContent',
      name: 'paragraph',
    }),
    defineField({
      type: 'array',
      title: 'Compare Carousel',
      name: 'comparisonCarousel',
      of: [
        defineArrayMember({
          type: 'comparisonCarousel',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'Recent Work',
    },
    prepare(selection: any) {
      const {title} = selection
      return {
        title: title || 'RecentWorkPage',
      }
    },
  },
}
