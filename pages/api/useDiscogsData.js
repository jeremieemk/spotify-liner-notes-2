import { useEffect, useState } from "react";
import { Discojs } from "discojs";

export default function useDiscogsData(spotifyData) {
  const [discogsData, setDiscogsData] = useState(null);
  console.log("discogs API key", process.env.NEXT_PUBLIC_DISCOGS_KEY);

  const dicogsApi = new Discojs({
    userToken: process.env.NEXT_PUBLIC_DISCOGS_KEY,
  });

  useEffect(() => {
    spotifyData && fetchDiscogsData(spotifyData, setDiscogsData);
  }, [spotifyData]);

  function fetchDiscogsData(spotifyData, setDiscogsData) {
    const regex = /\s*\([^)]*\)/g;
    const currentTrack = spotifyData;

    const cleanTrackName = currentTrack.name.includes("-")
      ? currentTrack.name
          .replace(regex, "")
          .replaceAll("&", "")
          .substring(0, currentTrack.name.indexOf("-"))
      : currentTrack.name.replace(regex, "").replaceAll("&", "");

    const cleanArtistName = currentTrack.artists[0].name.replaceAll("&", "and");

    dicogsApi
      .searchDatabase({
        artist: cleanArtistName,
        track: cleanTrackName,
        type: "release",
      })
      .then((data) => {
        console.log("discogs api data", data);
        // checks if discogs search brings any result
        if (data.results.length > 0) {
          setDiscogsData(data.results);
        } else {
          console.log("no data");
        }
      });

    dicogsApi.getRelease(4387601).then((data) => {
      console.log("discogs master data", data);
    });
  }

  useEffect(() => {
    if (discogsData) {
      // try https://stackoverflow.com/questions/60710423/fetch-in-fetch-in-a-loop-js
      const releaseIds = discogsData.map((release) => release.id);
      console.log("ids", releaseIds);
      const releasesDetails = Promise.all(
        releaseIds.map(function (id) {
          dicogsApi.getRelease(id).then((data) => {
            return data;
          });
        })
      );
      releasesDetails.then((data) => console.log("details", data));
    }
  }, [discogsData]);

  return discogsData;
}
