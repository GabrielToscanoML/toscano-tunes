import { Album } from "@/types/types";
import Image from "next/image";

export function AlbumCard(props: Album) {
  return(
    <main>
      <section className="w-48 h-76 border-b-4 p-2 border-solid border-[#666BF6]">
        <div>
          <Image
            src={props.artworkUrl100}
            alt="Album Thumb"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%' }} // optional
          />
        </div>
        <div className="flex flex-col mt-2 gap-2">
          <p className="truncate">{props.collectionName}</p>
          <p>Track count: {props.trackCount}</p>
          <p>US$ {props.collectionPrice}</p>
        </div>
      </section>
    </main>
  );
}