import Image from 'next/image'
import type { Introduce } from 'contentlayer/generated'
import React from 'react'
import Markdown from 'react-markdown'

export default function Introduce({ data }: { data: Introduce }) {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center text-gray-600"
      id="wish"
    >
      {/* 背景图片 */}
      <Image
        src="/introduce_bg.png"
        layout="fill"
        objectFit="cover"
        alt="Background"
        className="z-0"
      />

      {/* 白色蒙版，透明度约为0.7 */}
      <div className="absolute inset-0 z-10 bg-white bg-opacity-30"></div>

      {/* 在手机端隐藏卡片，在较大屏幕上显示 */}
      <div className="hidden sm:relative sm:z-20 sm:flex sm:h-screen sm:w-5/6 sm:items-center sm:justify-center">
        {/* 卡片内容，圆角和阴影效果 */}
        <div className="w-1/2 rounded-lg bg-blue-800 bg-opacity-80 p-12 text-center shadow-lg">
          <h2 className="pl-5 text-left text-3xl font-bold text-white">{data.title}</h2>
          <article className="mt-1 pl-5 text-left text-white">
            <Markdown>{data.content}</Markdown>
          </article>
          <h2 className="mt-5 pl-5 text-left font-bold text-white">{data.title1}</h2>
          <article className="mt-1 pl-5 text-left text-white">
            <Markdown>{data.content1}</Markdown>
          </article>
          <h2 className="mt-5 pl-5 text-left font-bold text-white">{data.title2}</h2>
          <article className="mt-1 pl-5 text-left text-white">
            <Markdown>{data.content2}</Markdown>
          </article>
          <h2 className="mt-5 pl-5 text-left font-bold text-white">{data.title3}</h2>
          <article className="mt-1 pl-5 text-left text-white">
            <Markdown>{data.content3}</Markdown>
          </article>
        </div>
      </div>

      {/* 在手机端全屏显示文字，在较大屏幕上隐藏 */}
      <div className="z-20 p-6 text-center sm:hidden">
        <h2 className="text-2xl font-semibold">{data.title}</h2>
        <article className="prose prose-stone mt-4">
          <Markdown>{data.content}</Markdown>
        </article>
        <h2 className="mt-8 text-2xl font-semibold">{data.title1}</h2>
        <article className="mx-8 mt-4">
          <Markdown>{data.content1}</Markdown>
        </article>
        <h2 className="mt-8 text-2xl font-semibold">{data.title2}</h2>
        <article className="mx-8 mt-4">
          <Markdown>{data.content2}</Markdown>
        </article>
        <h2 className="mt-8 text-2xl font-semibold">{data.title3}</h2>
        <article className="mx-8 mt-4">
          <Markdown>{data.content3}</Markdown>
        </article>
      </div>
    </div>
  )
}
