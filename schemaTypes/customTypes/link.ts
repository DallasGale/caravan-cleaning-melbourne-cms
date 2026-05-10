export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {name: 'label', title: 'Label', type: 'string'},
    {name: 'link', title: 'Link', type: 'string'},
  ],
  preview: {
    select: {title: 'label', subtitle: 'link'},
  },
}
