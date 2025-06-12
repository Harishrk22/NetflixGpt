import { IMG_URL } from "../utils/constants";
const MovieCard = ({ poster }) => {
  if (!poster) return null;
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={IMG_URL + poster} />
    </div>
  );
};

export default MovieCard;
