import React from 'react'

const Title = ({title,subTitle }) => {
  return (
    <div className='text-center py-5 h-32 bg-white text-gray-700'>
      <h1 className=" my-3 text-gray-800 text-xl md:text-3xl font-bold ">{title}</h1>
<p className="text-gray-500 font-semibold text-sm md:font-bold md:mb-8 ">{subTitle}</p>
    </div>
  )
}

export default Title;