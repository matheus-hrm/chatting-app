import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase.js'
import { ref,  uploadBytesResumable,  getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom'



const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className='bg-cyan-950 h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col gap-3 border border-12 rounded-xl bg-gray-100 py-5 px-28  items-center'>
        <h1 className='font-bold text-3xl  text-sky-800'>chatting</h1>
        <h2>cadastro</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-6'>
          <input className='border-b-2 border-b-gray-400 p-4 bg-gray-100 focus:text-black outline-none focus:border-b-neutral-950 transition duration-500 ease-in-out' type='text' placeholder='seu nome'></input>
          <input className='border-b-2 border-b-gray-400 p-4 bg-gray-100 outline-none focus:border-b-neutral-950 transition duration-500 ease-in-out' type='email' placeholder='seu email'></input>
          <input className='border-b-2 border-b-gray-400 p-4 bg-gray-100 outline-none focus:border-b-neutral-950 transition duration-500 ease-in-out' type='password' placeholder='senha'></input>
          <input type='file' id='avatar' style={{display:'none'}}></input>
          <label htmlFor='avatar' className='cursor-pointer text-gray-600 text-sm'>
            <CgProfile className='inline-block px-2' size={40} />
            faça upload do seu avatar
          </label>
          <button type='submit' className='cursor-pointer bg-teal-800 p-4 text-white rounded-lg '>cadastrar</button>
          {err && <p className='text-red-500'>algo deu errado</p>}
        </form>
        <p className=' text-sm t pt-4 text-gray-600' >já tem uma conta ? faz o <Link to="/login" className="text-sky-600">login</Link></p>
      </div>
    </div>
  )
}

export default Register