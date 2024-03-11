import { components } from '@/components/MDXComponents'
import { ContentBlocks } from '@/components/BlocksRenderer'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allPages } from 'contentlayer/generated'
import type { Pages } from 'contentlayer/generated'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { file_name: string } }) {
  const post = allPages.find((p) => p.slug === params.file_name)

  //文件如果不存在，返回404
  if (!post) {
    return notFound()
  }
  const mainContent = coreContent(post)

  return (
    <>
      {/*<MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />*/}
      <ContentBlocks blocks={post.blocks} />
    </>
  )
}
