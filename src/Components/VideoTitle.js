import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    
    <div className='pt-36 pl-6 w-screen h-screen absolute bg-black bg-opacity-50'>
      <h1 className='font-bold w-1/4 text-6xl text-white '>{title}</h1>
      <p className='pt-10 w-1/4 text-white'>{overview}</p>
      <div className='flex space-x-2 pt-4'>
        <button className='bg-white text-black px-10 py-3 hover:bg-gray-300 rounded-lg  font-bold'>▶️Play</button>
        <button className='bg-white text-black px-10 py-3 hover:bg-gray-300 rounded-lg font-bold'>More Info</button>
      </div>
    </div>
   
  )
}

export default VideoTitle
