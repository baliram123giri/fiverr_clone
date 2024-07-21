import React from 'react'

const Video = () => {
  return (
    <div className='container py-4'>
         <video className='rounded-[12px] h-[580px] w-[100%] ' preload='none' style={{objectFit:"cover"}} muted controls src="video.mp4"></video>
    </div>
  )
}

export default Video