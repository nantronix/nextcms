import VideoThumb from '@/public/images/hero-image-01.png'
import type { HeroHome } from 'contentlayer/generated'
import VideoPlayer from './VideoPlayer'
import Image from 'next/image'

export default function HeroHome({ data }: { data: HeroHome }) {
  return (
    <section className="relative w-full overflow-hidden md:h-screen">
      {/* 背景图片，只在移动设备上显示 */}
      <div className="flex w-full items-center justify-center md:hidden">
        <Image
          src="/home_bg.jpg"
          alt="背景图"
          height={500}
          width={500}
          className="w-full object-cover"
        />
        <h1 className="absolute left-0 top-1/3 z-10 w-full text-center text-xl font-bold text-white">
          {data.title}
        </h1>
      </div>

      {/* 视频播放器，只在非移动设备上显示 */}
      <div className="hidden h-full w-full md:flex md:items-center md:justify-center">
        <VideoPlayer src="/home_bg_video.mp4">
          <h1 className="text-3xl font-bold text-white">{data.title}</h1>
        </VideoPlayer>
      </div>
    </section>
  )
}

//export hero home data custom field
