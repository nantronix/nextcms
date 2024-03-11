import { defineNestedType } from 'contentlayer/source-files'

export const ProductsType = defineNestedType(() => ({
  name: 'Products',
  fields: {
    title: {
      type: 'string',
    },
    items: {
      type: 'json',
    },
  },
}))
