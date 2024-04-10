import React from 'react'

const Card = ({title,image}) => {
  return (
    <div className='w-44 h-40 bg-zinc-300 hover:bg-zinc-200 flex flex-col justify-between rounded-md p-2 text-sm font-semibold font-outfit'>
      <p>{title}</p>
      <span className=' flex justify-end text-2xl'>{image}</span>
    </div>
  )
}

export default Card
