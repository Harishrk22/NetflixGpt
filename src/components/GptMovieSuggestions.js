import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieDetails, gptMovieNames } = useSelector((store) => store?.gpt);

  if (!gptMovieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white opacity-85">
      <div>
        {gptMovieNames.map((movie, index) => (
          <MovieList
            title={movie}
            key={index}
            movies={gptMovieDetails[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
