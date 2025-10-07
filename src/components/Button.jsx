import React from 'react'

function Button({word}) {
  return (
    <div>
      <button className='bg-green-800 h-12 w-100 rounded-full text-white cursor-pointer'>{word}</button>
    </div>
  )
}

export default Button