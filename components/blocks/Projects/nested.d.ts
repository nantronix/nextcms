import { defineNestedType } from 'contentlayer/source-files'

export const ProjectsType = defineNestedType(() => ({
  name: 'Projects',
  fields: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    //list
    projects: {
      type: 'json',
    },
  },
}))
