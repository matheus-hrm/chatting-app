import React from 'react'
import { CgProfile } from 'react-icons/cg'

const Register = () => {
  return (
    <div className='bg-cyan-950 h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col gap-3 border border-12 rounded-xl bg-gray-100 py-5 px-28  items-center'>
        <h1 className='font-bold text-3xl  text-sky-800'>chatting</h1>
        <h2>cadastro</h2>
        <form className='flex flex-col gap-4 p-6'>
          <input className='border-b-2 border-b-gray-400 p-4 bg-gray-100 focus:text-black' type='text' placeholder='seu nome'></input>
          <input className='border-b-2 border-b-gray-400 p-4 bg-gray-100' type='email' placeholder='seu email'></input>
          <input className='border-b-2 border-b-gray-400 p-4 bg-gray-100' type='password' placeholder='senha'></input>
          <input type='file' id='avatar' style={{display:'none'}}></input>
          <label htmlFor='avatar' className='cursor-pointer text-gray-600 text-sm'>
            <CgProfile className='inline-block px-2' size={40} />
            faça upload do seu avatar
          </label>
          <button type='submit' className='cursor-pointer bg-teal-800 p-4 text-white rounded-lg '>cadastrar</button>
        </form>
        <p className=' text-sm t pt-4 text-gray-600' >Já possui uma conta ? Faça o login</p>
      </div>
    </div>
  )
}

export default Register