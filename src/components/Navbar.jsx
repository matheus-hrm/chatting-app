import React from 'react'
import { BiLogOut } from 'react-icons/bi'

export const Navbar = () => {
  return (
    <div className="div flex flex-row items-center justify-between pb-2 text-white bg-sky-700 border-b-teal-950 border-b-2">
      <h1 className='p-6 font-semibold text-lg'>
        Chatting
      </h1>
      <div className='px-4 flex items-center justify-center'>
      <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_569204.png&f=1&nofb=1&ipt=20e68fc28741ef40e31380d7312380f9aa3349f51bdd024cd53fa1ee59120d3b&ipo=images' alt='avatar' className=' rounded-full w-12 h-12 object-cover border-zinc-500  border-2 ' />
        <span className='p-4 text-sm'>Matheus</span>       
        <button type='button' className='bg-teal-950 rounded-full px-3 py-3 text-sm'>
         <BiLogOut/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
