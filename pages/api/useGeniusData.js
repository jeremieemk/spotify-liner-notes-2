import { getLyrics } from "genius-lyrics-api";
import { useEffect, useState } from "react";

export default function useGeniusData(cleanTrackDetails) {
  const [songLyrics, setSongLyrics] = useState(null);
  useEffect(() => {
    if (cleanTrackDetails) {
      const options = {
        apiKey:
          "BNDuRSUzLuv1aBvqSgoHZSqVIPWdh-UrXi8Vqt0NlVY9Xu6scHOhxDmd_9oASvSg",
        title: cleanTrackDetails.song,
        artist: cleanTrackDetails.artist,
        optimizeQuery: true,
      };
      getLyrics(options).then((lyrics) => setSongLyrics(lyrics));
    }
  }, [cleanTrackDetails]);

  return songLyrics;
}
