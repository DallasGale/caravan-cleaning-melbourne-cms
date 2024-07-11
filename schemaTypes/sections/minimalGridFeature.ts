export default {
  name: 'minimalGridFeature',
  title: 'Mininal Grid Feature',
  type: 'object',
  fields: [
    {name: 'id', title: 'Id', type: 'string'},
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'subTitle', title: 'Sub-Title', type: 'string'},
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'card'}],
      validation: (Rule: any) => Rule.max(3),
    },
    {name: 'primaryCta', title: 'Primary CTA', type: 'primaryCta'},
  ],
}
