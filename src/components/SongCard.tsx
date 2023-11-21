import { Song } from "@/types/types";
import { useContext } from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './checkbox.css';
import { SongsContext } from "@/context/FavoriteSongs";

export function SongCard(props: Song) {

  const { addSongToFavorites, removeFavoriteSong, songs } = useContext(SongsContext);

  const checkFavorite = (song: Song) => {
    const result = songs?.some((currSong: Song) => song.trackId == currSong.trackId);
    return result;
  }

  const onChangeCheckBox = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); value: string }; }) => {
    const {checked, value} = e.target;
    const result = {...JSON.parse(value)}
    result.checked = checked;
    checked ? addSongToFavorites(result) : removeFavoriteSong(result);
  }

    return(
      <main className="flex flex-col justify-center">
        <h1 className="mb-2 font-medium">{props.trackName}</h1>
        <div className="flex items-center">
          <audio className="" src={props.previewUrl} controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento{props.trackName} <code>audio</code>.
          </audio>
          <label
            htmlFor={ props.trackId }
            className="heart-checkbox"
          >
            <input
              className="hidden"
              type="checkbox"
              id={ props.trackId }
              value={ JSON.stringify(props) } // usando JSON pra transformar em objeto
              checked={ checkFavorite(props) }
              onChange={onChangeCheckBox}
            />
            <FontAwesomeIcon
              icon={faHeart}
              className="heart-icon"
            />
          </label>
        </div>
      </main>
    );
}