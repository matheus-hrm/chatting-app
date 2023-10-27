import React, { useEffect, useState} from 'react'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../firebase.js'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext.jsx'

const Chats = () => {

  const [chats, setChats] = useState([])

  const { dispatch } = useContext(ChatContext)
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data())
      })

      return () =>{
         unsub()
      }
    }
      
    currentUser.uid && getChats()
  }, [currentUser.uid])

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u})
  }
  return (
    <div className='bg-white px-2 h-full'>
      {chats && Object.entries(chats)?.map((chat) => {
        return (
          <div  key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)} className='flex-row flex justify-start items-center p-4 hover:bg-gray-200 rounded-xl'>
          <img 
            src={chat[1].userInfo.photoURL}
            alt="" 
            className='w-10 h-10 rounded-full'
            />
          <div className='flex flex-col ml-2 pl-2'>
            <span className='text-black'>
              {chat[1].userInfo.displayName}
            </span>

            <span className='text-neutral-500 text-sm'>
              {chat[1].userInfo.lastMessage?.text}
            </span>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default Chats
