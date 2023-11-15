import { Song } from "@/types/types";

export function SongCard(props: Song) {
    return(
      <main className="flex flex-col justify-center">
        <h1 className="mb-2 font-medium">{props.trackName}</h1>
        <audio className="" src={props.previewUrl} controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento{props.trackName} <code>audio</code>.
        </audio>
      </main>
    );
}