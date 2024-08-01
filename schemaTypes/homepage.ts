export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  __experimental_actions: ['create', 'update', 'publish', 'delete'],
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'homeHero',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'gridFeature'},
        {type: 'minimalGridFeature'},
        {type: 'serviceFeature'},
        {type: 'testimonialFeature'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'hero.heading',
    },
    prepare(selection: any) {
      const {title} = selection
      return {
        title: title || 'Homepage',
      }
    },
  },
}
