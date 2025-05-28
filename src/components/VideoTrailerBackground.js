import React from "react";
import useMovieTrailer from "../customHooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoTrailerBackground = ({ id }) => {
  const movieKey = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(id);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" + movieKey + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="autoplay;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoTrailerBackground;
