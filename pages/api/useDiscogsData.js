import { useEffect, useState } from "react";
import {Discojs} from 'discojs';

export default function useDiscogsData(spotifyData) {
  const [discogsData, setDiscogsData] = useState(null);
  console.log("discogs API key", process.env.NEXT_PUBLIC_DISCOGS_KEY)

  useEffect(() => {
    spotifyData && fetchDiscogsData(spotifyData, setDiscogsData)
  }, [spotifyData]);

  function fetchDiscogsData(spotifyData, setDiscogsData) {
    const dicogsApi = new Discojs({
      userToken: process.env.NEXT_PUBLIC_DISCOGS_KEY,
    });
    const regex = /\s*\([^)]*\)/g;
    const currentTrack = spotifyData

    const cleanTrackName = currentTrack.name.includes("-") ?
      currentTrack.name
        .replace(regex, "")
        .replaceAll("&", "")
        .substring(0, currentTrack.name.indexOf("-")) :
      currentTrack.name
        .replace(regex, "")
        .replaceAll("&", "")

    const cleanArtistName = currentTrack.artists[0].name.replaceAll("&", "and")

    dicogsApi
      .searchDatabase({
        // search uses only the first word of the artist name
        // artist: spotifyTrackData.artists[0].name.replace(/ .*/, ""),
        artist: cleanArtistName,
        track: cleanTrackName,
        type: "release",
      })
      .then((data) => {
        console.log("discogs api data", data)
        // checks if discogs search brings any result
        if (data.results.length > 0) {
          setDiscogsData(data.results)
        } else {
          console.log("no data")
        }
      });
  }

  return discogsData
}