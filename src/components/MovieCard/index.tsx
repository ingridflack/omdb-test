import { HTMLAttributes, useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { LinkProps } from "react-router-dom";
import { IMovie } from "../../config/interface";
import GlobalContext from "../../global/GlobalContext";
import MoviePoster from "../MoviePoster";
import { Container, Overlay, FavoriteButton, Title, Year } from "./styles";

interface IMovieCard extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  item: IMovie;
}

const MovieCard: React.FC<IMovieCard> = ({ item, ...props }) => {
  const {
    state: { favorites },
    setters: { toggleFavoriteMovie },
  }: any = useContext(GlobalContext);

  const isFavorited = favorites.some(
    (favoritedMovie: IMovie) => favoritedMovie.imdbID === item.imdbID
  );

  const handleFavoriteButtonClick = (e: any) => {
    e.preventDefault();
    toggleFavoriteMovie(item);
  };

  return (
    <Container {...props}>
      <MoviePoster movie={item} />
      <Overlay>
        <FavoriteButton
          active={isFavorited}
          onClick={handleFavoriteButtonClick}
        >
          {isFavorited ? <BsHeartFill /> : <BsHeart />}
        </FavoriteButton>
        <Title>{item.Title}</Title>
        <Year>{item.Year}</Year>
      </Overlay>
    </Container>
  );
};
export default MovieCard;
