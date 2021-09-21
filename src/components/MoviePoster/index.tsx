import { IMovie } from "../../config/interface";
import { getPosterSource } from "../../utils/movie";
import { Image } from "./styles";

interface IMoviePoster {
  movie: IMovie;
}

const MoviePoster: React.FC<IMoviePoster> = ({ movie, ...props }) => {
  return <Image src={getPosterSource(movie)} alt={movie.Title} {...props} />;
};

export default MoviePoster;
