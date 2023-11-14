export type Album = {
    artistId: number,
    artistName: string,
    collectionId: number,
    collectionName: string,
    collectionPrice: number,
    artworkUrl100: string,
    releaseDate: string,
    trackCount: number,
};

export type User = {
    name: string;
    // favoriteSongs?: Array<Album>,
}
