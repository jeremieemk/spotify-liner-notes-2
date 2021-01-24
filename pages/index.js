import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useAccessToken from "./api/useAccessToken";
import useSpotifyData from "./api/useSpotifyData";
import useDiscogsData from "./api/useDiscogsData";
import ReleaseDetails from "./components/ReleaseDetails"

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_SPOTIFY_KEY)
  const accessToken = useAccessToken();
  function handleSignInClick() {
    const client_id = process.env.NEXT_PUBLIC_SPOTIFY_KEY
    const redirect_uri = process.env.NODE_ENV === "production"
        ? "https://spotify-liner-notes.netlify.app"
        : "http://localhost:3000" ;
    const scope = "streaming user-read-email user-read-private user-library-read user-read-playback-state user-modify-playback-state"
    window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`
  }
  console.log("token", accessToken)
  const spotifyData = useSpotifyData(accessToken)
  const discogsData = useDiscogsData(spotifyData)
  console.log("current track", spotifyData)
  console.log("discogs", discogsData)

  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify liner Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {accessToken ? <ReleaseDetails spotifyData={spotifyData} discogsData={discogsData}/> : 
        <h1 className={styles.title} onClick={handleSignInClick}>
          Log In to Spotify
        </h1>}          
      </main>

    </div>
  )
}
