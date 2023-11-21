export type Album = {
    artistName: string,
    collectionId: number,
    collectionName: string,
    collectionPrice: number,
    artworkUrl100: string,
    trackCount: number,
};

export type FavoriteSongs = {
    songs: Array<Song>;
}

export type Song = {
    trackName: string,
    previewUrl: string,
    trackId: string,
}