import { defineNestedType } from 'contentlayer/source-files'

export const TeamType = defineNestedType(() => ({
  name: 'Team',
  fields: {
    title: {
      type: 'string',
    },
  },
}))
