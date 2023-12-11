'use client';

import Image from "next/image";
import logo from '../assets/logo.svg';
import Link from "next/link";

import { useEffect, useState } from 'react';

import { useContext } from "react";
import { UserNameContext } from "@/context/UserName";

export function Login() {
    const { login } = useContext(UserNameContext);
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        inputValue.length > 2 ? setIsDisabled(false): setIsDisabled(true);
    }, [inputValue])

    return (    
        <main className="h-96 w-80 min-w-[250px] rounded-xl flex flex-col justify-evenly items-center bg-[#ffffff]">
            <Image className="pt-8" src={logo} alt="logo do trybe-tunes" />
            <form className="flex justify-evenly items-center flex-col rounded-xl w-full h-96">
                <input
                    type="text"
                    className="border-2 border-[#666BF6] h-12 rounded-xl p-4 w-56"
                    placeholder="Type your name"
                    value={inputValue}
                    onChange={handleChange}
                />
                <Link href="/search">
                    <button
                        type="button"
                        className="disabled:cursor-not-allowed disabled:opacity-80 w-56 h-12 text-lg rounded-xl bg-[#666BF6] text-white"
                        onClick={() => login(inputValue)}
                        disabled={isDisabled}
                    >
                        Log in
                    </button>
                </Link>
            </form>
        </main>
    );
}