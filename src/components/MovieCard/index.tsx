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
    <Container data-cy="movie-card" {...props}>
      <MoviePoster movie={item} />
      <Overlay>
        <FavoriteButton
          data-cy="favorite-button"
          active={isFavorited}
          onClick={handleFavoriteButtonClick}
        >
          {isFavorited ? (
            <BsHeartFill data-cy="favorite-button-checked" />
          ) : (
            <BsHeart data-cy="favorite-button-unchecked" />
          )}
        </FavoriteButton>
        <Title data-cy="movie-card-title">{item.Title}</Title>
        <Year>{item.Year}</Year>
      </Overlay>
    </Container>
  );
};
export default MovieCard;
