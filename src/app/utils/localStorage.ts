import { User } from "@/types/types";

export const saveUser = (name: string):void => {
    const user: User = {
        name,
        favoriteSongs: [],
    };
    localStorage.setItem('userData', JSON.stringify(user));
}

export const getUser = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : []; // se existir, retorna  o usuario. Se não, array vazio
}