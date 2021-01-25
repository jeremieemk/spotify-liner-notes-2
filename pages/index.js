import Head from "next/head";
import styles from "../styles/Home.module.css";

import handleSignInClick from "./api/handleSignInClick";

import useAccessToken from "./api/useAccessToken";
import useSpotifyData from "./api/useSpotifyData";
import useDiscogsData from "./api/useDiscogsData";
import ReleaseDetails from "./components/ReleaseDetails";

export default function Home() {
  const accessToken = useAccessToken();
  const spotifyData = useSpotifyData(accessToken);
  const discogsData = useDiscogsData(spotifyData);

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
          <h1 className={styles.title} onClick={handleSignInClick}>
            Log In to Spotify
          </h1>
        )}
      </main>
    </div>
  );
}
