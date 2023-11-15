"use client";

import { Header } from "@/components/Header";
import { useEffect, useState } from "react";

import getMusics from '../../utils/musicsAPI';
import { SongCard } from "@/components/SongCard";
import { Album, Song } from "@/types/types";
import { AlbumCard } from "@/components/AlbumCard";

export default function Page({ params }: { params: { albumId: string } }) {

    const [songs, setSongs] = useState<any[]>([]);

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
                    songs.length > 0 &&
                        <section className="mr-4">
                            <AlbumCard
                                artistName={songs[0].artistName}
                                artworkUrl100={songs[0].artworkUrl100}
                                collectionId={songs[0].collectionId}
                                collectionName={songs[0].collectionName}
                                collectionPrice={songs[0].collectionPrice}
                                trackCount={songs[0].trackCount}
                            />
                        </section>
                }
                <section className="ml-4">
                    {
                        songs.length > 0 ?
                        songs?.map((song, index) => {
                            if(index > 1) {
                                return(
                                    <div
                                        key={index}
                                        className="py-2"
                                    >
                                        <SongCard
                                            trackName={song.trackName}
                                            previewUrl={song.previewUrl}
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
  