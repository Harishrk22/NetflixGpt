import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-14 py-4 bg-black ">
      <h1 className="text-4xl py-6 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide bg-black">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
