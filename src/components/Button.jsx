import React from 'react'

export const Button = ({text, href }) => {
  return (
    <a href={href} className='text-[#51cfb6]  border-2 border-[#51cfb6] p-2 rounded px-4 shadow transform transition-transform hover:scale-105 duration-500'>{text}</a>
  )
}
