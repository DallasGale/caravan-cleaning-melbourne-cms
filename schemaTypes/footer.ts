export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  __experimental_actions: ['create', 'update', 'publish', 'delete'],
  fields: [
    {
      name: 'infoText',
      title: 'Info Text',
      type: 'richTextContent',
    },
    {
      name: 'showLogos',
      title: 'Show Supplier Logos',
      type: 'boolean',
    },
    {
      name: 'services',
      title: 'Services Links',
      type: 'array',
      of: [{type: 'link'}],
    },
    {
      name: 'company',
      title: 'Company Links',
      type: 'array',
      of: [{type: 'link'}],
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {name: 'email', title: 'Email', type: 'string'},
        {name: 'instagram', title: 'Instagram URL', type: 'string'},
        {name: 'facebook', title: 'Facebook URL', type: 'string'},
        {
          name: 'phoneNumbers',
          title: 'Phone Numbers',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'contact',
              fields: [
                {name: 'name', title: 'Name', type: 'string'},
                {name: 'number', title: 'Number', type: 'string'},
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'text',
    },
  ],
  preview: {
    prepare() {
      return {title: 'Footer'}
    },
  },
}
