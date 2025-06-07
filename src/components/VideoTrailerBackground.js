import React from "react";
import useMovieTrailer from "../customHooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoTrailerBackground = ({ id }) => {
  const movieKey = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(id);
  return (
    <div className="w-screen">
      <iframe
        className="w-full h-screen  border-none"
        src={
          "https://www.youtube.com/embed/" +
          movieKey +
          "?controls=0&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="autoplay;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoTrailerBackground;
