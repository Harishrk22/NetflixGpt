import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json?.results.filter(
        (movie) => movie?.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addMovieTrailer(trailer?.key));
    };
    getMovieVideos();
  }, [dispatch, id]);
};

export default useMovieTrailer;
