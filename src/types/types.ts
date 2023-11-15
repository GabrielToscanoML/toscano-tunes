export type Album = {
    artistName: string,
    collectionId: number,
    collectionName: string,
    collectionPrice: number,
    artworkUrl100: string,
    trackCount: number,
};

export type User = {
    name: string;
    // favoriteSongs?: Array<Album>,
}

export type Song = {
    trackName: string,
    previewUrl: string,
}