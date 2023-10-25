import React from 'react'
import Message from './Message'

export const Messages = () => {
  return (
    <div className='px-4 pb-[200px] overflow-scroll'>
      <div className='flex flex-col items-center justify-center border-t-2 border-zinc-600 py-4 mx-12'>
        <span className='text-neutral-500'>sem novas mensagens</span>
      </div>
      <Message />    
    </div>
  )
}


export default Messages