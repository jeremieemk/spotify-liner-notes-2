import Head from "next/head";
import styles from "../styles/Home.module.css";

import LandingPage from "./components/LandingPage";

import useAccessToken from "./api/useAccessToken";
import useSpotifyData from "./api/useSpotifyData";
import useDiscogsData from "./api/useDiscogsData";
import useLyricsData from "./api/useLyricsData";
import ReleaseDetails from "./components/ReleaseDetails";
import getCleanTrackDetails from "./api/getCleanTrackDetails";
import useLastFmData from "./api/useLastFmData";

export default function Home() {
  const accessToken = useAccessToken();
  const spotifyData = useSpotifyData(accessToken);
  const cleanTrackDetails = spotifyData && getCleanTrackDetails(spotifyData);
  console.log("lyrics", useLyricsData(cleanTrackDetails));
  const discogsData = useDiscogsData(spotifyData);
  const artistBio = useLastFmData(cleanTrackDetails);

  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify liner Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {spotifyData ? (
          <ReleaseDetails spotifyData={spotifyData} discogsData={discogsData} />
        ) : (
          <LandingPage />
        )}
      </main>
    </div>
  );
}
