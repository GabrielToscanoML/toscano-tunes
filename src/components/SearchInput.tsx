import { useEffect, useState } from "react";

import { Album } from "@/types/types.js";
import searchAlbumsAPI from "@/app/utils/searchAlbumsAPI";
import { AlbumCard } from "./AlbumCard";
import Link from "next/link";

export function SearchInput() {
    const [artistName, setArtistName] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [searched, setSearched] = useState(false);
    const [albumsData, setAlbumsData] = useState<Album[]>([]);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setArtistName(event.target.value);
    }
  
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
           getAlbumsData();
        }
    };

    async function getAlbumsData() {
      setAlbumsData(await searchAlbumsAPI(artistName));
      setArtistName('');
      setSearched(true);
    }
  
    useEffect(() => {
      artistName.length > 0 ? setIsDisabled(false): setIsDisabled(true);
    }, [artistName])
  
    return (
        <main className="flex flex-col justify-center items-center">
            <section className="flex justify-center items-center gap-x-4 h-32">
                <input
                    value={artistName}
                    onChange={handleChange}
                    className="border-2 border-[#666BF6] h-12 max-w-96 rounded-xl p-4"
                    type="search"
                    placeholder="Type the artist name"
                    onKeyDown={(e) => handleKeyPress(e)}
                />
                <button
                    type="button"
                    disabled={isDisabled}
                    onClick={() => getAlbumsData()}
                    className="w-32 h-12 text-lg rounded-xl bg-[#666BF6] text-white disabled:cursor-not-allowed disabled:opacity-80"
                    >
                    Search
                </button>
            </section>
            {
                albumsData.length > 0 && <h1 className="mb-12 text-4xl font-bold">{albumsData[0].artistName}</h1>
            }
            <section className="flex justify-center items-center flex-wrap max-w-[60%]">
                {
                    albumsData.length < 1 && searched ?
                    <h3 className="text-red-600 text-xl">Unable to find the artists!</h3>
                    :
                    albumsData.map((album) => {
                        return(
                            <div
                                key={album.collectionId}
                                className="mx-8 mb-8"
                            >
                                <Link href={`album/${album.collectionId}`}>
                                    <AlbumCard
                                        artistName={album.artistName}
                                        artworkUrl100={album.artworkUrl100}
                                        collectionId={album.collectionId}
                                        collectionName={album.collectionName}
                                        collectionPrice={album.collectionPrice}
                                        trackCount={album.trackCount}
                                    />
                                </Link>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    );
}