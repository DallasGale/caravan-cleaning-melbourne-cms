export default {
  name: 'homeHero',
  title: 'Home Hero',
  type: 'object',
  fields: [
    {name: 'heading', title: 'Heading', type: 'string'},
    {name: 'subHeading', title: 'Sub-Heading', type: 'richTextContent'},
    {name: 'primaryCta', title: 'Primary Cta', type: 'primaryCta'},
    {name: 'backgroundImage', title: 'Background Image', type: 'image'},
  ],
}
