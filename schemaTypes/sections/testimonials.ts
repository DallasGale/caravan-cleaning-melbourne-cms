export default {
  name: 'testimonialFeature',
  title: 'Testimonial Feature',
  type: 'object',
  fields: [
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'testimonial'}],
      validation: (Rule: any) => Rule.max(3),
    },
  ],
}
