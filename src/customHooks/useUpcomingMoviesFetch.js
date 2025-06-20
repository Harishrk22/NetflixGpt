import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMoviesFetch = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);
  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };
    !upcomingMovies && getUpcomingMovies();
  }, [dispatch, upcomingMovies]);
};
export default useUpcomingMoviesFetch;
