import { defineNestedType } from 'contentlayer/source-files'

export const YlinkType = defineNestedType(() => ({
  name: 'Ylink',
  fields: {
    title: {
      type: 'string',
    },
    items: {
      type: 'json',
    },
  },
}))
