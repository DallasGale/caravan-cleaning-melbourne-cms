export default {
  name: 'homeHero',
  title: 'Home Hero',
  type: 'object',
  fields: [
    {name: 'heading', title: 'Heading', type: 'string'},
    {name: 'subHeading', title: 'Sub-Heading', type: 'richTextContent'},
    {name: 'cta', title: 'Call To Action', type: 'primaryCta'},
    {name: 'backgroundImage', title: 'Background Image', type: 'image'},
  ],
}
