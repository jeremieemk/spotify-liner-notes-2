import React from "react";

export default function Hello(props) {
    console.log(props)
    const {discogsData, spotifyData} = props

    function addComa(i) {
    return (
      spotifyData.artists.length > 1 && i < spotifyData.artists.length - 1
    );
  }
    discogsData && console.log(discogsData[0].cover_image)
    function renderArtists() {
    return spotifyData.artists.map((artist, i) => (
      <span>
        {artist.name}
        {addComa(i) && `, `}
      </span>
    ));
  }

    return(
       spotifyData && discogsData &&
       <div>
       <h1>{renderArtists()} - {spotifyData.name}</h1>
       {discogsData.map((release) => {
           return(
           <>
           <h1>{release.title} - {release.year} - {release.label[0]}</h1>
           <img src={release.cover_image} alt="" />
           </>)
       }


       )



       }
       <h1>hello</h1>
       
       </div>

    )   
}
