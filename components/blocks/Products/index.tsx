import Image from 'next/image'
import Link from 'next/link'
import type { Products } from 'contentlayer/generated'
import Markdown from 'react-markdown'

export default function Products({ data }: { data: Products }) {
  return (
    <section className="mx-auto mt-20 max-w-6xl space-y-8 bg-white px-4 py-20 sm:px-6" id="product">
      <div className="mx-auto max-w-xl space-y-20 md:max-w-none">
        {data.items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse  ${index % 2 === 0 ? 'md:space-x lg:space-x xl:space-x md:flex-row' : 'md:flex-row-reverse md:space-x-reverse lg:space-x-reverse xl:space-x-reverse'} space-y-4 space-y-reverse md:items-center md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20`}
          >
            {/* Content */}
            <article className="mr:min-w-[30rem]" data-aos="fade-left">
              <h2
                className={`h3 font-playfair-display mb-4 max-sm:text-center md:text-xl ${index % 2 == 0 ? 'md:text-right' : ''}`}
              >
                {item.title}
              </h2>
              <div className="mb-8 rounded-lg bg-[#f0f7fd] p-6 text-sm leading-7 text-gray-600">
                <Markdown>{item.content}</Markdown>
              </div>
            </article>

            {/* Image */}
            <div className="flex items-center justify-center" data-aos="fade-right">
              <div className="relative">
                {item.imageUrl ? (
                  <Image
                    className="mx-auto md:max-w-none"
                    src={item.imageUrl}
                    width={540}
                    height={405}
                    alt={item.title}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
