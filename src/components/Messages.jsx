import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import { onSnapshot } from 'firebase/firestore'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'
import { doc } from 'firebase/firestore'

const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return() => {
      unsub()
    }
  }, [data.chatId])

  
 
  return (
    <div className='px-4  overflow-auto'>
      <div className='flex flex-col items-center justify-center border-t-2 border-zinc-600 py-4 mx-12'>
        {messages.length === 0 && <span className='text-neutral-500'>sem mensagens</span>}
      </div>
      {messages.map((m) => (
        <Message messages={m} />
      ))}
    </div>
  )
}


export default Messages