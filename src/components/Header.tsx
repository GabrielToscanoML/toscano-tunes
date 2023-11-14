'use client';

import { getUser } from "@/app/utils/localStorage";
import { useEffect, useState } from "react";
import { NavBar } from "./NavBar";

export function Header() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = getUser();
    setUserName(user.name);
  }, [userName])

  return(
    <main>
      <header className="flex text-2xl h-16 bg-[#190482] text-white items-center justify-center">
        <h1>Welcome, {userName}!</h1>
      </header>
      <NavBar />
    </main>
  );
}