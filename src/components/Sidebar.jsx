import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

export const Sidebar = () => {
  return (
    <div className=' flex-1 border-r-2 border-neutral-950 '>
      <Navbar />
      <Search/>
      <Chats/>
    </div>
    
  )
}

export default Sidebar