import React from "react";
import Header from "./Header";
import useApiFetch from "../customHooks/useApiFetch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovieFetch from "../customHooks/usePopularMovieFetch";
import useTopRatedMoviesFetch from "../customHooks/useTopRatedMoviesFetch";
import useUpcomingMoviesFetch from "../customHooks/useUpcomingMoviesFetch";

const Browse = () => {
  useApiFetch();
  usePopularMovieFetch();
  useTopRatedMoviesFetch();
  useUpcomingMoviesFetch();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
