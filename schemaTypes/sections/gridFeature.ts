export default {
  name: 'gridFeature',
  title: 'Grid Feature',
  type: 'object',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'subTitle', title: 'Sub-Title', type: 'richTextContent'},
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'card'}],
      validation: (Rule: any) => Rule.max(4),
    },
    {name: 'cta', title: 'Call To Action', type: 'primaryCta'},
  ],
}