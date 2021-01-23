import { useEffect, useState } from "react";

export default function useSpotifyData(accessToken) {
  const [spotifyData, setSpotifyData] = useState(null);
  useEffect(() => {
      fetchCurrentTrack(accessToken, setSpotifyData)
  }, []);

  function fetchCurrentTrack(accessToken, setSpotifyData) {
    const nowPlayingApiUrl = "https://api.spotify.com/v1/me/player";
    fetch(nowPlayingApiUrl, {
        headers: { Authorization: "Bearer " + accessToken },
    })
        .then((response) => {
        if (response.status === 204 || response.status === 401) {
            console.log("manage error")
        } else {
            return response.json();
        }
        })
        .then((data) => {
        setSpotifyData(data.item);
        })
        .catch(function (error) {
        console.log(error);
        });
    }
  
    return spotifyData
}