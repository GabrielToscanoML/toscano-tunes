'use client';

import { Login } from "@/components/Login"

import { useEffect, useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState('');

  function changeUserName(name: string){
    console.log('Função chamada: ', name);
    setUserName(name);
  } 

  useEffect(() => {
  }, [userName]);

  return (
      <main className="h-screen bg-[#666BF6]">
        <div className="h-screen flex justify-center items-center">
          <Login />
        </div>
      </main>
  )
}
