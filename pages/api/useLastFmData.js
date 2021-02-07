import LastFM from "last-fm";
import { useEffect, useState } from "react";

export default function useLastFmData(cleanTrackDetails) {
  const [artistBio, setArtistBio] = useState(null);
  useEffect(() => {
    console.log("clean", cleanTrackDetails);
    if (cleanTrackDetails) {
      const lastfm = new LastFM("8e17009fc64041e78ce4a9ec5c053180", {
        userAgent: "http://localhost:3000",
      });

      lastfm.artistInfo({ q: cleanTrackDetails.artist }, (err, data) => {
        if (err) console.error(err);
        else console.log("lastfm", data);
      });
    }
  }, [cleanTrackDetails]);

  return artistBio;
}
