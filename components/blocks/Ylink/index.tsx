import Image from 'next/image'
import type { Ylink } from 'contentlayer/generated'

export default function Ylink({ data }: { data: Ylink }) {
  return (
    <section className="border-t border-gray-200 bg-gradient-to-b" id="ylink">
      <div className="mx-auto mt-20 max-w-xl pt-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {data.title}
        </h2>
      </div>

      <div className="mx-auto mb-10 max-w-6xl px-4 pb-20 sm:px-6">
        <div className="bg-white py-24 sm:py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
              {data.items.map((item, index) => (
                <div className="bg-gray-400/5 p-8 sm:p-10" key={index}>
                  <Image
                    className="max-h-12 w-full object-contain"
                    src={item.imageUrl}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
