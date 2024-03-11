import { defineDocumentType, ComputedFields, makeSource } from 'contentlayer/source-files'
import { writeFileSync } from 'fs'
import readingTime from 'reading-time'
import GithubSlugger from 'github-slugger'
import path from 'path'
// Remark packages
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings,
} from 'pliny/mdx-plugins/index.js'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'
import siteMetadata from './data/siteMetadata'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { TeamType } from './components/blocks/Team/nested.d'
import { CardType } from './components/blocks/Card/nested.d'
import { HeroHomeType } from './components/blocks/HeroHome/nested.d'
import { IntroduceType } from './components/blocks/Introduce/nested.d'
import { ProjectsType } from './components/blocks/Projects/nested.d'
import { ProductsType } from './components/blocks/Products/nested.d'
import { TimeLineType } from './components/blocks/TimeLine/nested.d'
import { YlinkType } from './components/blocks/Ylink/nested.d'

const root = process.cwd()
const isProduction = process.env.NODE_ENV === 'production'

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
  path: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  filePath: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFilePath,
  },
  toc: { type: 'string', resolve: (doc) => extractTocHeadings(doc.body.raw) },
}

export const Pages = defineDocumentType(() => ({
  name: 'Pages',
  filePathPattern: 'pages/*.mdx', // 指定匹配的文件路径模式
  contentType: 'mdx',
  fields: {
    // 定义文档的字段结构
    title: { type: 'string', required: true },
    date: { type: 'date' },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    images: { type: 'json' },
    layout: { type: 'string' },
    blocks: {
      type: 'list',
      of: [
        TeamType,
        CardType,
        HeroHomeType,
        IntroduceType,
        ProjectsType,
        ProductsType,
        TimeLineType,
        YlinkType,
      ],
      default: [],
    },
  },
  computedFields: {
    ...computedFields,
  },
}))

// makeSource 创建数据源
export default makeSource({
  contentDirPath: 'data', // 指定内容文件的目录路径
  documentTypes: [Pages], // 指定使用的文档类型，支持多个
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      remarkMath,
      remarkImgToJsx,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
  onSuccess: async (importData) => {},
})
