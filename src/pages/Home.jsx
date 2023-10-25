import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  
  return (
    <div className="flex items-center justify-center bg-cyan-950 h-screen">
      <div className='border-2 border-black flex flex-row rounded-lg overflow-hidden' style={{width: '65%' , height: '80%'}}>
        <Sidebar  />
        <Chat />
      </div>
    </div>
  )

}

export default Home