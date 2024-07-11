export default {
  name: 'gridFeature',
  title: 'Grid Feature',
  type: 'object',
  fields: [
    {name: 'id', title: 'Id', type: 'string'},
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'subTitle', title: 'Sub-Title', type: 'string'},
    {name: 'details', title: 'Details', type: 'richTextContent'},
    {name: 'logosHeading', title: 'Logos Heading', type: 'string'},
    {name: 'logos', title: 'Logos', type: 'array', of: [{type: 'logo'}]},
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'card'}],
      validation: (Rule: any) => Rule.max(4),
    },
    {name: 'primaryCta', title: 'Primary CTA', type: 'primaryCta'},
    {name: 'secondaryCta', title: 'Seconary CTA', type: 'secondaryCta'},
    {name: 'backgroundImage', title: 'Background Image', type: 'image'},
  ],
}
