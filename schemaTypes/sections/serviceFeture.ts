export default {
  name: 'serviceFeature',
  title: 'Service Feature',
  type: 'object',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'subTitle', title: 'Sub-Title', type: 'string'},
    {name: 'details', title: 'Text Area', type: 'richTextContent'},

    {name: 'primaryCta', title: 'Primary CTA', type: 'primaryCta'},
    {name: 'secondaryCta', title: 'Seconary CTA', type: 'secondaryCta'},
  ],
}
