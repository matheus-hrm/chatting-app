import React, { useContext } from 'react'
import { PiDotsThreeVerticalLight } from 'react-icons/pi'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'
 
export const Chat = () => {

  const { data } = useContext(ChatContext)

  
  return (
    <div className='w-2/3 bg-neutral-100'>
      <div className='grid grid-rows-[auto,1fr,auto] h-full'>
        <div className='flex flex-row items-center p-4 justify-between'> 
          <div className='flex justify-center items-center pb-2'>
            <img 
              src={data.user?.photoURL}
              alt="" 
              className='w-10 h-10 rounded-full'
            />
            <div className='flex flex-col pl-4 justify-center'>
              <span className='text-black'>{data.user?.displayName}</span>
              <span className='text-neutral-500'>{data.lastMessage}</span>  
            </div>
          </div>
          <PiDotsThreeVerticalLight className='text-black text-3xl cursor-pointer'/>
        </div>
        <Messages />
        <Input />
      </div>
    </div>
  )

}

export default Chat