export default function handleSignInClick() {
  const client_id = process.env.NEXT_PUBLIC_SPOTIFY_KEY;
  const redirect_uri =
    process.env.NODE_ENV === "production"
      ? "https://spotify-liner-notes.netlify.app"
      : "http://localhost:3000";
  const scope =
    "streaming user-read-email user-read-private user-library-read user-read-playback-state user-modify-playback-state";
  window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`;
}
