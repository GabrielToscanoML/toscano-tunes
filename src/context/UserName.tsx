'use client';

import { createContext, useState } from "react";

type UserNameContextProps = {
    user: string | null;
    login: (user: string) => void;
}

const UserNameContext = createContext<UserNameContextProps>({} as UserNameContextProps);

const UserNameProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUserName] = useState<string | null>(null);

    const login = (user: string) => {
        setUserName(user);
        console.log(user);
    }


    return (
        <>
            <UserNameContext.Provider
                value={{
                    user,
                    login
                }}>
                <>
                    {children}
                </>
            </UserNameContext.Provider>
        </>
    )
}

export { UserNameProvider, UserNameContext }