export default {
  name: 'richTextContent',
  title: 'Rich Text Content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [{name: 'href', title: 'URL', type: 'string'}],
          },
        ],
      },
    },
  ],
}
