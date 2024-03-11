'use client'
import Image from 'next/image'
import type { TimeLine } from 'contentlayer/generated'

import { useRef, useState } from 'react'

export default function TimeLine({ data }: { data: TimeLine }) {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const [year, setYear] = useState('年份')

  const handleScroll = () => {
    const galleryMidPoint = window.innerWidth / 2 // 假设中央线位于视窗宽度的一半
    imageRefs.current.forEach((imgEl, index) => {
      if (imgEl != null) {
        const { left, right } = imgEl.getBoundingClientRect()
        // 检查图片是否与中央线对齐
        if (left < galleryMidPoint && right > galleryMidPoint) {
          console.log(`Image ${index} is aligned with the center line`)
          setYear(data.items[index]['year'])
          // 这里可以执行更多的逻辑，例如更新状态或显示高亮效果
        }
      }
    })
  }
  return (
    <section
      className="border-t border-gray-200 bg-gradient-to-b from-gray-100 to-white"
      id="story"
    >
      <div className="mx-auto mt-12  max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {data.title}
        </h2>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
          <div
            className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0"
            style={{
              maskImage: 'linear-gradient(0deg, #fff, rgba(255, 255, 255, 0.6))',
              backgroundPosition: '10px 10px',
            }}
          ></div>
          <div className="relative overflow-auto rounded-xl">
            <div className="mb-6 ml-[50%] flex items-end justify-start pt-10">
              {/* Snap Point Label */}
              <div className="dark:highlight-white/10 ml-2 rounded bg-indigo-50 px-1.5 font-mono text-[0.625rem] leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600 dark:bg-indigo-500 dark:text-white dark:ring-0">
                {year}
              </div>
              <div className="absolute bottom-0 left-1/2 top-0 border-l border-indigo-500"></div>
            </div>
            {/* Images */}
            <div
              className="relative flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-14"
              onScroll={handleScroll}
            >
              <div className="shrink-0 snap-center">
                <div className="w-4 shrink-0 sm:w-96"></div>
              </div>
              {data.items.map((item, index) => (
                <div
                  key={index}
                  className="shrink-0 snap-center snap-always"
                  ref={(el) => (imageRefs.current[index] = el)}
                >
                  <Image
                    className="h-40 w-80 shrink-0 rounded-lg bg-white object-cover shadow-xl"
                    width={500}
                    height={500}
                    src={item.imageUrl}
                    alt={`Gallery ${index}`}
                  />
                  <p className="mt-3 text-center">{item.title}</p>
                </div>
              ))}

              <div className="shrink-0 snap-center">
                <div className="w-4 shrink-0 sm:w-96"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
