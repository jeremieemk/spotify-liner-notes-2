import React from "react";

export default function Lyrics(props) {
  return (
    <div>
      <h3>Lyrics</h3>
      <p>{props.songLyrics}</p>
    </div>
  );
}
