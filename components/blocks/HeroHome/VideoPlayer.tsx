'use client'

// components/VideoPlayer.tsx
import React, { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  src: string // 视频源地址
  children?: React.ReactNode // 可选的子元素
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, children }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showPlayButton, setShowPlayButton] = useState(false)

  useEffect(() => {
    const isInWeChat = /micromessenger/i.test(navigator.userAgent)
    setShowPlayButton(isInWeChat)
  }, [])

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        className="absolute h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <div className="absolute h-full w-full bg-black bg-opacity-50"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
        {children}
      </div>
      {showPlayButton && <button onClick={playVideo}>播放视频</button>}
    </>
  )
}

export default VideoPlayer
