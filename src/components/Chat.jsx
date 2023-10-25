 import React from 'react'
 import { PiDotsThreeVerticalLight } from 'react-icons/pi'
 
 export const Chat = () => {
   return (
     <div className='w-2/3 bg-neutral-100'>
      <div>
        <div className='flex flex-row items-center p-4 justify-between'>
          <div className='flex justify-center items-center pb-2'>
            <img 
              src="https://picsum.photos/200/300" 
              alt="" 
              className='w-10 h-10 rounded-full'
            />
            <div className='flex flex-col pl-4 justify-center'>
              <span className='text-black'>usuário</span>
              <span className='text-neutral-500'>última mensagem</span>  
            </div>
          </div>
          <PiDotsThreeVerticalLight className='text-black text-3xl cursor-pointer'/>
        </div>
        <div className='flex flex-col items-center justify-center border-t-2 border-zinc-600 py-4 mx-12'>
          <span className='text-neutral-500'>sem novas mensagens</span>
        </div>

      </div>
     </div>
   )

 }
 
export default Chat