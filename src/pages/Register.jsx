import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase.js'
import { ref,  uploadBytesResumable,  getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom'



const Register = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    
    event.preventDefault()
    const displayName = event.target[0].value
    const email = event.target[1].value
    const password = event.target[2].value
    const avatar = event.target[3].files[0]
    
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      
      const storageRef = ref(storage, displayName);
      
      const uploadTask = uploadBytesResumable(storageRef, avatar);

      uploadTask.on(  
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(response.user,{
              displayName,
              photoURL: downloadURL
            })
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            });

            await setDoc(doc(db, "userChats", response.user.uid), {})
            navigate('/')
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='bg-cyan-950 h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col gap-3 border border-12 rounded-xl bg-gray-100 py-5 px-28  items-center'>
        <h1 className='font-bold text-3xl  text-sky-800'>chatting</h1>
        <h2>cadastro</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-6'>
          <input className='border-b-2 border-b-gray-400 p-4 bg-gray-100 focus:text-black' type='text' placeholder='seu nome'></input>
          <input className='border-b-2 border-b-gray-400 p-4 bg-gray-100' type='email' placeholder='seu email'></input>
          <input className='border-b-2 border-b-gray-400 p-4 bg-gray-100' type='password' placeholder='senha'></input>
          <input type='file' id='avatar' style={{display:'none'}}></input>
          <label htmlFor='avatar' className='cursor-pointer text-gray-600 text-sm'>
            <CgProfile className='inline-block px-2' size={40} />
            faça upload do seu avatar
          </label>
          <button type='submit' className='cursor-pointer bg-teal-800 p-4 text-white rounded-lg '>cadastrar</button>
          {err && <p className='text-red-500'>algo deu errado</p>}
        </form>
        <p className=' text-sm t pt-4 text-gray-600' >Já possui uma conta ? Faça o <Link to="/login">login</Link></p>
      </div>
    </div>
  )
}

export default Register