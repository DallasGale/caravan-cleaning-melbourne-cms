export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  __experimental_actions: ['create', 'update', 'publish', 'delete'],
  fields: [
    {
      name: 'navigationName',
      title: 'Navigation Name',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [{type: 'navItem'}],
    },
  ],
  preview: {
    select: {
      title: 'navigation',
    },
    prepare(selection: any) {
      const {title} = selection
      return {
        title: title || 'Navigation',
      }
    },
  },
}
