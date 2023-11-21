import { createContext } from "react";

const SongsContext = createContext({});

const SongsProvider = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
            <SongsContext.Provider value={{}}>
                {children}
            </SongsContext.Provider>

        </>
    )
}