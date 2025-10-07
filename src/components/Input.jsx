import React from 'react'

function Input({placeholder}) {
  return (
    <div>
      <div className="">
        <input placeholder={placeholder} className='h-12 w-100 rounded p-4 text-sm border border-gray-300'/>
      </div>
    </div>
  )
}

export default Input;