import React from "react";
import Header from "./Header";
import useApiFetch from "../customHooks/useApiFetch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovieFetch from "../customHooks/usePopularMovieFetch";
import useTopRatedMoviesFetch from "../customHooks/useTopRatedMoviesFetch";
import useUpcomingMoviesFetch from "../customHooks/useUpcomingMoviesFetch";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  useApiFetch();
  usePopularMovieFetch();
  useTopRatedMoviesFetch();
  useUpcomingMoviesFetch();

  const showGptSearch = useSelector((store) => store.gpt?.gptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
