import { useEffect, useState } from "react";

export default function useLastFmData(cleanTrackDetails) {
  const [artistBio, setArtistBio] = useState(null);
  useEffect(() => {
    if (cleanTrackDetails) {
      fetch(
        `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${cleanTrackDetails.artist}&api_key=8e17009fc64041e78ce4a9ec5c053180&format=json`
      )
        // Handle success
        .then((response) => response.json())
        .then((json) => setArtistBio(json.artist.bio.content))
        .catch((err) => console.log("Request Failed", err));
    }
  }, [cleanTrackDetails]);

  return artistBio;
}
