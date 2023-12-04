import { useEffect, useState } from "react";

import { Album } from "@/types/types.js";
import searchAlbumsAPI from "@/app/utils/searchAlbumsAPI";
import { AlbumCard } from "./AlbumCard";
import Link from "next/link";
import Image from "next/image";

import searchIcon from '../assets/search-icon.svg';

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
            <section className="flex justify-center items-center h-12 border-2 border-[#666BF6] rounded-xl my-4">
                <input
                    value={artistName}
                    onChange={handleChange}
                    className="h-8 outline-none p-4 w-48 sm:w-72"
                    type="search"
                    placeholder="Type the artist name"
                    onKeyDown={(e) => handleKeyPress(e)}
                />
                <button
                    type="button"
                    disabled={isDisabled}
                    onClick={() => getAlbumsData()}
                    className="w-12 items-center flex justify-center h-12 text-lg rounded-xl disabled:cursor-not-allowed disabled:opacity-80"
                    >
                    <Image src={searchIcon} alt="search icon"/>
                </button>
            </section>
            {
                albumsData.length > 0 && <h1 className="mb-12 text-4xl font-bold text-center">{albumsData[0].artistName}</h1>
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