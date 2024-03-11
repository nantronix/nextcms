import Image from 'next/image'

import type { Projects } from 'contentlayer/generated'
import React from 'react'
import Markdown from 'react-markdown'

export default function Projects({ data }: { data: Projects }) {
  return (
    <section
      className="border-t border-gray-200 bg-gradient-to-b from-gray-100 to-white text-gray-600"
      id="introduce"
    >
      <div className="mx-auto max-w-full px-0">
        <div className="py-0 md:py-0">
          {/* Section header */}
          {/* 
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.title}
            </h2>
            <div className="mt-4 p-8 text-lg leading-8 text-gray-600 lg:mb-8">
              <Markdown>{data.description}</Markdown>
            </div>
          </div>
          */}

          {/* Projects grid */}
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-2 gap-0 sm:mt-0 lg:mx-0 lg:max-w-none lg:grid-cols-6 lg:gap-0">
            {data.projects.map((detail, index) => (
              <div key={index} className="group relative overflow-hidden">
                <Image
                  src={detail.imageUrl}
                  alt={detail.name}
                  width={500}
                  height={500}
                  className="h-full w-full transform object-cover transition duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-30 transition-all duration-300 ease-in-out max-sm:bg-opacity-10">
                  <div className="duration-600 absolute bottom-0 left-0 h-1/6 w-full bg-blue-900 bg-opacity-70 transition-all ease-in-out group-hover:flex group-hover:h-full group-hover:items-center group-hover:justify-center">
                    <div className="w-full p-6 text-white max-sm:h-full max-sm:overflow-auto max-sm:p-3">
                      <h3 className="text-center text-lg font-bold max-sm:mb-3 max-sm:text-sm sm:mb-6">
                        {detail.name}
                      </h3>
                      <article className="prose prose-stone block overflow-hidden text-white max-sm:text-xs sm:max-h-0 sm:group-hover:max-h-full">
                        <Markdown>{detail.description}</Markdown>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
