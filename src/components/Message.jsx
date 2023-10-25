import React from 'react'

export const Message = () => {
  return (
    <div>
      <div className='p-2 flex  flex-row items-center gap-x-4 mb-4'>
        <img src='https://picsum.photos/200/300' alt="" className='h-10 w-10 rounded-full '/>
        <span className='text-black bg-sky-200  p-2 rounded-lg' >usuário</span>
      </div>
      <div className='p-2 flex  flex-row items-center gap-x-4 mb-3'>
        <img src='https://picsum.photos/200/300' alt="" className='h-10 w-10 rounded-full '/>
        <span className='text-black bg-sky-200  p-2 rounded-lg' >usuário</span>
      </div>
      <div className='flex float-right flex-row items-center gap-x-4 mb-3'>
        <span className='text-black bg-emerald-400 max-w-prose overflow-y-scroll p-2 rounded-lg' >usuárioamdlsamdakmslkamsdkmalkdmalskdmalksmlkafmlksmgkrmwomwkqekqwpekqowkqpcmls</span>
        <img src='https://picsum.photos/200/300' alt="" className='h-10 w-10 rounded-full '/>
      </div>

    </div>
  )
}


export default Message