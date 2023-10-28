import React, { useContext, useState } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.js'
import { AuthContext } from '../context/AuthContext.jsx'

const Navbar = () => {

  const { currentUser } = useContext(AuthContext)

  const handleSignOut = () => {

    signOut(auth)

  }
  return (
    <div className="div flex flex-row items-center justify-between pb-2 pr-4 text-white bg-sky-700 border-b-teal-950 border-b-2">
      <h1 className='p-6 font-semibold text-lg hidden sm:block'>
        Chatting
      </h1>
      <div className='px-4 flex items-center justify-center'>
        <img 
          src={currentUser.photoURL} 
          alt="" 
          className=' rounded-full w-12 h-12 object-cover border-zinc-500  border-2 '
          />
        <span className='p-4 text-sm'>
          {currentUser.displayName}
        </span>
      </div>
      <div onClick={handleSignOut} className='bg-teal-800 rounded-full p-3 text-sm focus:bg-gray-950 hover:bg-teal-950'>
        <BiLogOut type='button' />
      </div>
    </div>
  )
}

export default Navbar

