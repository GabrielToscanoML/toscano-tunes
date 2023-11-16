import { FavoriteSongs, Song } from "@/types/types";

const FAVORITE_SONGS_KEY = 'favorite_songs';

export const getFavoriteSongs = () => {
  const favoriteSongs = localStorage.getItem(FAVORITE_SONGS_KEY);
  return favoriteSongs ? JSON.parse(favoriteSongs) : [];
}

const saveFavoriteSongs = (songs: Song[]): void => {
  console.log('savefav ', songs);
  const favoriteSongs: FavoriteSongs = {
    songs,
  }
    localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify(favoriteSongs));
} 

export const addSong = (song: Song) => {
  if (song) {
    const {songs} = getFavoriteSongs();
    saveFavoriteSongs([...songs, song]);
  }
}

export const removeSong = (song: Song) => {
  const {songs} = getFavoriteSongs();
  saveFavoriteSongs(songs.filter((s: Song) => s.trackId !== song.trackId));
}