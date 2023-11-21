"use client";

import { Header } from "@/components/Header";
import { useEffect, useState, useContext } from "react";

import getMusics from '../../utils/musicsAPI';
import { SongCard } from "@/components/SongCard";
import { Song } from "@/types/types";
import { AlbumCard } from "@/components/AlbumCard";
import { SongsContext } from "@/context/FavoriteSongs";

export default function Page({ params }: { params: { albumId: string } }) {

    const { songs } = useContext(SongsContext);
    const [requestSongs, setSongs] = useState<any[]>([]);

    const checkFavorite = (song: Song) => {
        const result = songs?.some((currSong: Song) => song.trackId == currSong.trackId);
        return result;
    }

    async function requestMusicsAPI(id: string) {
        const result = await getMusics(id);
        setSongs(result);
        return result;
    }

    useEffect(() => {
        requestMusicsAPI(params.albumId);
    }, [params.albumId])

    return (
        <main>
            <Header />
            <div className="flex justify-evenly mt-16 max-w-[60%] ml-auto mr-auto">
                {
                    requestSongs.length > 0 &&
                        <section className="mr-4">
                            <AlbumCard
                                artistName={requestSongs[0].artistName}
                                artworkUrl100={requestSongs[0].artworkUrl100}
                                collectionId={requestSongs[0].collectionId}
                                collectionName={requestSongs[0].collectionName}
                                collectionPrice={requestSongs[0].collectionPrice}
                                trackCount={requestSongs[0].trackCount}
                            />
                        </section>
                }
                <section className="ml-4">
                    {
                        requestSongs.length > 0 ?
                        requestSongs?.map((song, index) => {
                            if(index > 1) {
                                return(
                                    <div
                                        key={index}
                                        className="py-2"
                                    >
                                        <SongCard
                                            trackName={song.trackName}
                                            previewUrl={song.previewUrl}
                                            trackId={song.trackId}
                                            checked={checkFavorite(
                                                {
                                                    trackName: song.trackName,
                                                    previewUrl: song.previewUrl,
                                                    trackId: song.trackId,
                                                })}
                                        />
                                    </div>
                                );
                            }
                        })
                        :
                        null
                    }
                </section>
            </div>
        </main>
    )
  }
  