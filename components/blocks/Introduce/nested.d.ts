import { defineNestedType } from 'contentlayer/source-files'

export const IntroduceType = defineNestedType(() => ({
  name: 'Introduce',
  fields: {
    title: {
      type: 'string',
    },
    //content with markdown support
    content: {
      type: 'string',
    },
    title1: {
      type: 'string',
    },
    content1: {
      type: 'string',
    },
    title2: {
      type: 'string',
    },
    content2: {
      type: 'string',
    },
    title3: {
      type: 'string',
    },
    content3: {
      type: 'string',
    },
  },
}))
