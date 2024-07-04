export default {
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'link', title: 'Link', type: 'string'},
    {name: 'paragraph', title: 'Paragraph', type: 'text'},
    {name: 'image', title: 'Image', type: 'image'},
    {name: 'imageAlt', title: 'Image Alt Text', type: 'string'},
  ],
}
