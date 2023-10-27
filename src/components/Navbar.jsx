import React, { useContext } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.js'
import { AuthContext } from '../context/AuthContext.jsx'

export const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="div flex flex-row items-center justify-between pb-2 text-white bg-sky-700 border-b-teal-950 border-b-2">
      <h1 className='p-6 font-semibold text-lg'>
        Chatting
      </h1>
      <div className='px-4 flex items-center justify-center'>
      <img src={currentUser.photoURL}  alt='avatar' className=' rounded-full w-12 h-12 object-cover border-zinc-500  border-2 ' />
        <span className='p-4 text-sm'>{currentUser.displayName}</span>       
        <button onClick={()=>signOut(auth)}type='button' className='bg-teal-950 rounded-full px-3 py-3 text-sm'>
         <BiLogOut/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
