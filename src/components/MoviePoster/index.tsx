import { IMovie } from "../../config/interface";
import { Image } from "./styles";

interface IMoviePoster {
  movie: IMovie;
}

const MoviePoster: React.FC<IMoviePoster> = ({ movie }) => {
  const source =
    movie.Poster === "N/A"
      ? "https://via.placeholder.com/320x460?text=Image+not+found"
      : movie.Poster;

  return <Image src={source} alt={movie.Title} />;
};

export default MoviePoster;
