import { defineNestedType } from 'contentlayer/source-files'

export const CardType = defineNestedType(() => ({
  name: 'Card',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the card section',
    },
  },
}))
