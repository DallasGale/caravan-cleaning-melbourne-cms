import {defineField} from 'sanity'

export default {
  name: 'caravanCoversPage',
  title: 'Caravan Covers Page',
  type: 'document',
  __experimental_actions: ['create', 'update', 'publish', 'delete'],
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Used for the browser tab and the <title> tag',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'metaDescription',
      title: 'Meta Description',
      description: 'Used for the <meta name="description"> tag (~150-160 chars)',
      validation: (Rule) => Rule.max(180),
    }),
    defineField({
      type: 'homeHero',
      name: 'hero',
      title: 'Hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'gridFeature'},
        {type: 'minimalGridFeature'},
        {type: 'serviceFeature'},
        {type: 'testimonialFeature'},
        {type: 'faq'},
      ],
    }),
    defineField({
      name: 'waitlist',
      title: 'Waitlist',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'paragraph', title: 'Paragraph', type: 'richTextContent'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.heading',
    },
    prepare(selection: any) {
      const {title} = selection
      return {
        title: title || 'Caravan Covers Page',
      }
    },
  },
}
