export default {
  name: 'list',
  title: 'List',
  type: 'object',
  fields: [
    {name: 'heading', title: 'Heading', type: 'string'},
    {name: 'link', title: 'Link', type: 'string'},
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
}
