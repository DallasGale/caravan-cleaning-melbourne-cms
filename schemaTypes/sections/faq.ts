export default {
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  fields: [
    {name: 'id', title: 'Id', type: 'string'},
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'subTitle', title: 'Sub-Title', type: 'string'},
    {name: 'darkMode', title: 'Dark Mode', type: 'boolean'},
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'richTextContent',
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {title: 'question'},
          },
        },
      ],
    },
  ],
  preview: {
    select: {title: 'title', count: 'questions.length'},
    prepare({title, count}: {title?: string; count?: number}) {
      return {
        title: title || 'FAQ',
        subtitle: count ? `${count} question${count === 1 ? '' : 's'}` : 'No questions',
      }
    },
  },
}
