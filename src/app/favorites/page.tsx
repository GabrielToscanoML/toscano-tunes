"use client";

import { Header } from "@/components/Header";
import { useContext } from "react";
import { Song } from "@/types/types";
import { SongCard } from "@/components/SongCard";
import { SongsContext } from "@/context/FavoriteSongs";

export default function Favorites() {
  const { songs } = useContext(SongsContext);

  const checkFavorite = (song: Song) => {
    const result = songs?.some((currSong: Song) => song.trackId == currSong.trackId);
    return result;
  }

  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center items-center mt-8 max-w-[750px] ml-auto mr-auto">
        <h2 className="mb-8 text-4xl">Favorited songs</h2>
        <div className="flex flex-wrap justify-center">
          {
            songs  ?
              songs?.map((song: Song) => {
                return(
                  <div
                    key={song.trackId}
                    className="p-4"
                    >
                    <SongCard
                        trackName={song.trackName}
                        previewUrl={song.previewUrl}
                        trackId={song.trackId}
                        checked={checkFavorite(song)}
                    />
                  </div>
                )
              })
              :
              <h1>No favorite songs added!</h1>
          }
        </div>
      </div>
    </main>
  )
}
