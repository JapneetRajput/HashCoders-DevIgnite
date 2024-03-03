import React from "react";
import YouTube from "react-youtube";

const MovieClip = ({ videoId }) => {
  const options = {
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return <YouTube videoId={videoId} options={options} onReady={onReady} id="video" />;
};

export default MovieClip;
