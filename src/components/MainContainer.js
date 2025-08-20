import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoTrailerBackground from "./VideoTrailerBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[35%] bg-black md:pt-0">
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoTrailerBackground id={id} />
    </div>
  );
};

export default MainContainer;
