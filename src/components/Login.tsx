'use client';

import Image from "next/image";
import logo from '../assets/logo.svg';
import Link from "next/link";

import { useEffect, useState } from 'react';
import { saveUser } from "@/app/utils/localStorage";

export function Login() {
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        inputValue.length > 2 ? setIsDisabled(false): setIsDisabled(true);
    }, [inputValue])

    return (
        <main className="h-450 w-750 rounded-xl flex flex-col justify-evenly items-center bg-[#ffffff]">
            <Image src={logo} alt="logo do trybe-tunes" />
            <form className="flex justify-evenly items-center flex-col rounded-xl w-96 h-1/2">
                <input
                    type="text"
                    className="border-2 border-[#666BF6] h-12 rounded-xl p-4"
                    placeholder="Digite seu nome"
                    value={inputValue}
                    onChange={handleChange}
                />
                <Link href="/search">
                    <button
                        type="button"
                        className="disabled:cursor-not-allowed disabled:opacity-80 w-64 h-12 text-lg rounded-xl bg-[#666BF6] text-white"
                        onClick={() => saveUser(inputValue)}
                        disabled={isDisabled}
                    >
                        Log in
                    </button>
                </Link>
            </form>
        </main>
    );
}