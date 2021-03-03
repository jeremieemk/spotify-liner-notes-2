import React from "react";
import Image from "next/image";
import ArtistBio from "./ArtistBio";
import Lyrics from "./Lyrics";

export default function ReleaseDetails(props) {
  const { discogsData, spotifyData, songLyrics } = props;
  console.log("props", props);

  function renderArtists() {
    return spotifyData.artists.map((artist) => artist.name).join(", ");
  }

  const orderedReleaselist =
    discogsData &&
    discogsData
      .sort((a, b) => {
        return b.community.want - a.community.want;
      })
      .slice(0, 10);

  console.log("ordered list", orderedReleaselist);
  return (
    <div>
      <Image
        src={spotifyData.album.images[0].url}
        alt=""
        width={500}
        height={500}
      />
      <h1>
        {renderArtists()} - {spotifyData.name}
      </h1>
      <ArtistBio artistBio={props.artistBio} />
      <Lyrics songLyrics={props.songLyrics} />
      {discogsData &&
        orderedReleaselist.map((release) => {
          return (
            <>
              <h1>
                {release.title} - {release.year} - {release.label[0]}
              </h1>
              <img src={release.cover_image} alt="" />
            </>
          );
        })}
      <h1>hello</h1>
    </div>
  );
}
