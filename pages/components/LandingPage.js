import React from "react";
import handleSignInClick from "../api/handleSignInClick";

export default function LandingPage(props) {
  return <h1 onClick={handleSignInClick}>Log In to Spotify</h1>;
}
