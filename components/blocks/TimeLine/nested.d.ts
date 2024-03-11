import { defineNestedType } from 'contentlayer/source-files'

export const TimeLineType = defineNestedType(() => ({
  name: 'TimeLine',
  fields: {
    title: {
      type: 'string',
    },
    items: {
      type: 'json',
    },
  },
}))
