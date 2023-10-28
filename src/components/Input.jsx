import React, { useState , useContext  } from 'react'
import { BiSend } from 'react-icons/bi'
import {  FaPaperclip } from 'react-icons/fa6'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext.jsx'
import { doc, updateDoc, arrayUnion, Timestamp } from 'firebase/firestore'
import { db, storage } from '../firebase.js'
import { v4 as uuid } from 'uuid'
import { uploadBytesResumable, ref , getDownloadURL } from 'firebase/storage'

export const Input = () => {

  const [ text, setText ] = useState('')
  const [ error, setError ] = useState(false)
  const [ img ,  setImg ] = useState(null)
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = async () => {
    if (img){
      const storageRef = ref(storage, uuid())
      const uploadTask = uploadBytesResumable(storageRef, img)

      uploadTask.on(
        (error) => {
          setError(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              })
            })
          })
        }
      )
    } else {
      await updateDoc(doc(db,'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [data.chatId + '.lastMessage']: {
        text,
        date: Timestamp.now()
      }
    })
    await updateDoc(doc(db, 'userChats', data.user.uid), {
      [data.chatId + '.lastMessage']: {
        text,
        date: Timestamp.now()
      }
    })
    setText('')
    setImg(null)
  }

  return (
    <div className='bg-neutral-100  p-3 flex justify-center items-center '>
      <div className='w-full flex flex-row justify-center items-center gap-x-8'>
        <input 
          type="text" 
          className='w-11/12 h-10 p-2 border-b-2 outline-none focus:border-neutral-500 transition duration-500 ease-in-out '
          placeholder='Digite uma mensagem'
          onChange={e=>setText(e.target.value)}
          value={text}
          onKeyDown={e=>e.key === 'Enter' && handleSend()}
        />
        <input 
          type="file" 
          className='hidden'
          id='file'
          onChange={e=>setImg(e.target.files[0])}
        />
        <label htmlFor='file'>
          <FaPaperclip className=' text-neutral-500 w-4 h-4 cursor-pointer'/>
        </label>
          <button onClick={handleSend} className='bg-emerald-600 text-white p-3 rounded flex items-center justify-center active:bg-emerald-800 transition ease-in-out 1s '>
            < BiSend className='text-white text-xl  cursor-pointer'/>
          </button>
        
      </div>
    </div>
  )
}

export default Input