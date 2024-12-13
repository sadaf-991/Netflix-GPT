import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-36 pl-6 w-1/4'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='pt-10'>{overview}</p>
      <div className='flex space-x-2 pt-4'>
        <button className='bg-gray-600 opacity-50 px-10 py-3 rounded-lg text-white font-bold'>▶️Play</button>
        <button className='bg-gray-600 opacity-50 px-10 py-3 rounded-lg text-white font-bold'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
