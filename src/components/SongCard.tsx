import { addSong, removeSong } from "@/app/utils/localStorage/favoriteSongs";
import { Song } from "@/types/types";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './checkbox.css';

export function SongCard(props: Song) {
  const [favorited, setFavorited] = useState(false);

  const onChangeCheckBox = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); value: string }; }) => {
    const {checked, value} = e.target;
    if (checked) {
      addSong(JSON.parse(value));
      setFavorited(true);
    } else {
      removeSong(JSON.parse(value));
      setFavorited(false);
    }
  };

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
              checked={ favorited }
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