import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMoviesFetch = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };
    !topRatedMovies && getTopRatedMovies();
  }, [dispatch, topRatedMovies]);
};
export default useTopRatedMoviesFetch;
