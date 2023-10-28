import React from 'react'
import { useContext, useEffect, useState, useRef   } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

//messages array is inside of 'chats' 

const Message = ({ messages })  => {

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)
  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  

  return (
    <div className={`message &{message.senderId === currentUser.uid && "owner"} `} >
      <div  className={`p-2 flex flex-row items-center gap-x-4 mb-4 rounded-xl overflow-y-auto 
      ${messages.senderId === currentUser.uid ? 'justify-end pr-10 bg-sky-200' : 'justify-start bg-neutral-200'}
      `}
      style={{ wordWrap: 'break-word' }}
      
      >
        {messages.senderId === currentUser.uid ? 
          (
            <>
            { messages.img && <img src={messages.img} alt="" className='w-40 h-40 rounded-xl'/>}
              <div className='flex flex-col'>
                <span className='text-violet-800 '>{messages.senderId === currentUser.uid ? currentUser.displayName : data.user.displayName}</span>
                <span className='text-black'>{messages.text}</span>
              </div>
              <img 
                src={messages.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL}
                alt="" 
                className='w-10 h-10 rounded-full'
              /> 
            </>
          ) : (
            <>
              <img 
                src={messages.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL}
                alt="" 
                className='w-10 h-10 rounded-full'
              />
              <div className='flex flex-col'>
                <span className='text-violet-800 '>{messages.senderId === currentUser.uid ? currentUser.displayName : data.user.displayName}</span>
                <span className='text-black'>{messages.text}</span>
              </div>
              { messages.img && <img src={messages.img} alt="" className='w-40 h-40 rounded-xl'/>}
              </>
            )
          }
          </div>
      </div>
  )
}

export default Message
