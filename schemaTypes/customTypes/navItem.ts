export default {
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'link', title: 'Link', type: 'string'},
    {
      name: 'dropdownItems',
      title: 'Dropdown Items',
      type: 'array',
      of: [{type: 'items'}],
    },
  ],
}
