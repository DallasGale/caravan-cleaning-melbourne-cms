import {defineType, defineField, defineArrayMember} from 'sanity'

export const imageCarousel = defineType({
  type: 'object',
  name: 'imageCarousel',
  title: 'Image carousel',
  fields: [
    defineField({
      type: 'array',
      name: 'images',
      of: [
        defineArrayMember({
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'caption',
            },
          ],
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      type: 'array',
      name: 'youTubeId',
      title: 'YouTube Id',
      of: [
        defineArrayMember({
          type: 'string',
          name: 'id',
          title: 'Id',
        }),
      ],
    }),
  ],
})
