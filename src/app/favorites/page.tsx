"use client";

import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { getFavoriteSongs } from "../utils/localStorage/favoriteSongs";
import { Song } from "@/types/types";
import { SongCard } from "@/components/SongCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const {songs} = getFavoriteSongs();
    setFavorites(songs);
  }, [])

  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center items-center mt-8 max-w-[750px] ml-auto mr-auto">
        <h2 className="mb-8 text-4xl">Favorited songs</h2>
        <div className="flex flex-wrap justify-center">
          {
            favorites.map((song: Song) => {
              return(
                <div
                  key={song.trackId}
                  className="p-4"
                  >
                  <SongCard
                      trackName={song.trackName}
                      previewUrl={song.previewUrl}
                      trackId={song.trackId}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}
