import React, {useContext, useState} from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase.js'
import { AuthContext } from '../context/AuthContext'

const Search = () => {

  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const {currentUser } = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(collection(db, 'users'), where('displayName', '==', username))
    
    try{
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    } catch (err) {
      setErr(true)
    } 
  }
  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  const handleSelect = async () => {

    const combineId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;

    try {
      const res = await getDocs(db, 'chats', combineId)
      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='bg-white'>
      <div className='flex flex-col p-2 bg-white'>
        <input 
          type="text" 
          placeholder="pesquisar" 
          className='w-full focus:outline-none px-2 pb-2 pt-2 text-black focus:bg-neutral-50 border-2 border-transparent focus:border-b-emerald-600 transition duration-500 ease-in-out'
          onChange={(e)=>setUsername(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
      
      {err && (
          <span className='text-red-500'>Usuário não encontrado</span>
      )}
      {user && (
        <div className='flex-row flex justify-start items-center p-4 bg-gray-200 ' onClick={handleSelect}>
          <img 
            src={user.photoURL} 
            alt="" 
            className='w-12 h-12 rounded-full'
          />
          <div className='flex flex-col ml-2 pl-2'>
            <span className='text-black'>{user.displayName}</span>  
          </div>
        </div>
      )}
    </div>
  )
}

export default Search