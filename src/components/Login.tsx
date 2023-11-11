import Image from "next/image";

import logo from '../assets/logo.svg';
import { Router } from "next/router";
import Link from "next/link";
// import { redirect } from "next/navigation";


// const redirectToSearch() => redirect('/search');

export function Login() {
    return (
        <main className="h-450 w-750 rounded-xl flex flex-col justify-evenly items-center bg-[#ffffff]">
            <Image src={logo} alt="logo do trybe-tunes" />
            <form className="flex justify-evenly items-center flex-col rounded-xl w-96 h-1/2">
                <input type="text" className="border-2 border-[#666BF6] h-12 rounded-xl p-4" placeholder="Digite seu nome"/>
                <Link href="/search">
                    <button
                        type="button"
                        className="w-64 h-12 text-lg rounded-xl bg-[#666BF6] text-white"
                    >
                        Entrar
                    </button>
                </Link>
            </form>
        </main>
    );
}