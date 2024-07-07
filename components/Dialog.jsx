import React from 'react'

const Dialog = () => {
  return (
    <div id='dialogComponent' 
    className='flex justify-center items-center'>
    <div className='fixed h-screen w-full inset-0 bg-gray-600 opacity-50 z-10' />
      <div className='flex justify-center items-center h-screen z-20'>
        <p>Lorem ipsum dolor sit amet amet consectetur adipisicing elit. Magnam, placeat? amet consectetur adipisicing elit. Magnam, placeat? consectetur adipisicing elit. Magnam, placeat?</p>
      </div>
    </div>
  )
}

export default Dialog