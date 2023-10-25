import React from "react";

const Login = () => {

  return (
    <div className='bg-cyan-950 h-screen w-screen flex items-center justify-center'>
      <div  className='flex flex-col gap-3 border border-12 rounded-xl bg-gray-100 py-5 px-28  items-center'>
        <h1 className='font-bold text-3xl  text-sky-800'>chatting</h1>
          <h2>login</h2>
          <form className='flex flex-col gap-4 p-6'>
            <input className='border-b-2 border-b-gray-400 p-4 bg-gray-100 focus:text-black'type='text' placeholder='seu nome'></input>
            <input className='border-b-2 border-b-gray-400 p-4 bg-gray-100 focus:text-black'type='password' placeholder='senha'></input>
            <button className='bg-emerald-500 p-4 rounded-lg text-white' type='submit'>entrar</button>
          </form>
          <p className='text-sm text-gray-600 pt-4'>não tem uma conta ? faz o cadastro</p>
      </div>
    </div>
  )
}

export default Login