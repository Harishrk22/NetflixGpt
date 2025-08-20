import React, { useRef } from "react";
import { LANGCONSTANTS } from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { setGptMovieNames } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((store) => store.config?.lang);
  const movieRef = useRef(null);

  const fetchGPTMovieDetails = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    const gptSearchInputData = movieRef.current.value;

    const gptSearchQuery =
      "Act as a movie recomendation system and suggest five " +
      gptSearchInputData +
      " . Give comma seperated ouput like  Kushi,Billa,PK,HIT,Drishyam.";

    //OPENAI API CALL
    const response = await client.responses.create({
      model: "gpt-3.5-turbo",
      input: gptSearchQuery,
    });

    const gptMovieNames = response.output_text.split(",");

    const promisesArray = gptMovieNames.map((movie) =>
      fetchGPTMovieDetails(movie)
    );
    const GPTmovieDetails = await Promise.all(promisesArray);

    dispatch(
      setGptMovieNames({
        movieNames: gptMovieNames,
        movieDetails: GPTmovieDetails,
      })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-[90%] md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={movieRef}
          className="col-span-8 md:col-span-9 p-4 m-4 text-sm md:text-lg"
          type="text"
          placeholder={LANGCONSTANTS[currentLang].placeHolder}
        />
        <button
          className="p-2 m-4  ml-0 rounded-xl bg-red-700 text-white text-sm md:text-lg col-span-4 md:col-span-3"
          onClick={handleGPTSearch}
        >
          {LANGCONSTANTS[currentLang].btnName}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
