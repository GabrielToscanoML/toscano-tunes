type Song = {
    artistId: number,
    artistName: string,
    collectionId: number,
    collectionName: string,
    collectionPrice: number,
    artworkUrl100: string,
    releaseDate: Date,
    trackCount: number,
};

type User = {
    name: string;
    favoriteSongs?: Array<Song>,
}

export const saveUser = (name: string):void => {
    const user = {
        name,
        favoriteSongs: [],
    };
    localStorage.setItem('userData', JSON.stringify(user));
}

export const getUser = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : []; // se existir, retorna  o usuario. Se não, array vazio
}