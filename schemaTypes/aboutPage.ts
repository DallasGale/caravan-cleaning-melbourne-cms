import {defineArrayMember, defineField} from 'sanity'

export default {
  name: 'aboutPage',
  title: 'AboutPage',
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
      type: 'imageCarousel',
      name: 'imageCarousel',
      title: 'Image Carousel',
    }),
  ],
  preview: {
    select: {
      title: 'About Us',
    },
    prepare(selection: any) {
      const {title} = selection
      return {
        title: title || 'AboutPage',
      }
    },
  },
}
