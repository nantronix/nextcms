import { defineNestedType } from 'contentlayer/source-files'

export const HeroHomeType = defineNestedType(() => ({
  name: 'HeroHome',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the hero section',
    },
  },
}))
