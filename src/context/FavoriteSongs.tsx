'use client';

import { Song } from "@/types/types";
import { createContext, useState } from "react";

type SongsContextProps = {
    songs: Song[] | null;
    addSongToFavorites: (song: Song) => void;
    removeFavoriteSong: (song: Song) => void;
}

const SongsContext = createContext<SongsContextProps>({} as SongsContextProps);

const SongsProvider = ({ children }: {children: React.ReactNode}) => {
    const [songs, setSongs] = useState<Song[] | []>([]);

    const addSongToFavorites = (song: Song) => {
        const result = [...songs, song]
        setSongs(result);
    }

    const setFavoritedSongToFalse = (song: Song) => {
        songs.forEach((currSong: Song) => {
            if(song.trackId == currSong.trackId) {
                currSong.checked = false;
            }
        })
    }

    const removeFavoriteSong = (song: Song) => {
        setFavoritedSongToFalse(song);
        setSongs(songs.filter((currentSong: Song) => currentSong.trackId !== song.trackId));
    }

    return (
        <>
            <SongsContext.Provider value={{
                songs,
                addSongToFavorites,
                removeFavoriteSong,
            }}>
                {children}
            </SongsContext.Provider>
        </>
    )
}

export { SongsProvider, SongsContext }