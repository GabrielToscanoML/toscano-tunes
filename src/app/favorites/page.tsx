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
    console.log('favorites ', favorites);
  }, [])

  return (
    <main>
      <Header />
      <div>
        {
          favorites.map((song: Song) => {
            return(
              <div key={song.trackId}>
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
    </main>
  )
}
