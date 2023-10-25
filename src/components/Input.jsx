import React from 'react'
import { BiSend } from 'react-icons/bi'
import { FaImage } from 'react-icons/fa6'

export const Input = () => {
  return (
    <div className='bg-neutral-100  p-3 flex justify-center items-center '>
      <div className='w-full flex flex-row justify-center items-center gap-x-8'>
        <input 
          type="text" 
          className='w-11/12 h-10 p-2 border-b-2 outline-none focus:border-neutral-500 transition duration-500 ease-in-out '
          placeholder='Digite uma mensagem'
          
        />
        
      <FaImage className=' text-neutral-500 w-4 h-4 cursor-pointer'/>
        <button className='bg-emerald-600 text-white p-3 rounded flex items-center justify-center'>
          < BiSend className='text-white text-xl  cursor-pointer'/>
        </button>
        
      </div>
    </div>
  )
}

export default Input