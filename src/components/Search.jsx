import React from 'react'

export const Search = () => {
  return (
    <div>
      <div className='flex flex-col p-2 bg-white'>
        <input 
          type="text" 
          placeholder="pesquisar" 
          className='w-full focus:outline-none px-2 pb-2 pt-2 text-black focus:bg-neutral-50 border-2 border-transparent focus:border-b-emerald-600 transition duration-500 ease-in-out'
        />
      </div>
    </div>
  )
}

export default Search