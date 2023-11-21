'use client';

import { NavBar } from "./NavBar";
import { useContext } from "react";
import { UserNameContext } from "@/context/UserName";

export function Header() {
  const { user } = useContext(UserNameContext);
  return(
    <main>
      <header className="flex text-2xl h-16 bg-[#190482] text-white items-center justify-center">
        <h1>Welcome, {user}!</h1>
      </header>
      <NavBar />
    </main>
  );
}