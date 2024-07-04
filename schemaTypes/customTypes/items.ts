export default {
  name: 'items',
  title: 'Items',
  type: 'object',
  fields: [
    {name: 'heading', title: 'Heading', type: 'string'},
    {name: 'paragraph', title: 'Paragraph', type: 'text'},
    {name: 'link', title: 'Link', type: 'string'},
    {name: 'image', title: 'Image', type: 'image'},
    {name: 'imageAlt', title: 'Image Alt Text', type: 'string'},

    {name: 'additionalListHeading', title: 'Additional List Heading', type: 'string'},
    {
      name: 'additionalList',
      title: 'Additional List',
      type: 'array',
      of: [{type: 'list'}],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
}
