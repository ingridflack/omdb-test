import { HTMLAttributes } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { LinkProps } from "react-router-dom";
import { IMovie } from "../../config/interface";
import MoviePoster from "../MoviePoster";
import { Container, Overlay, FavoriteButton, Title, Year } from "./styles";

interface IMovieCard extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  item: IMovie;
}

const MovieCard: React.FC<IMovieCard> = ({ item, ...props }) => {
  return (
    <Container {...props}>
      <MoviePoster movie={item} />
      <Overlay>
        <FavoriteButton>{true ? <BsHeart /> : <BsHeartFill />}</FavoriteButton>
        <Title>{item.Title}</Title>
        <Year>{item.Year}</Year>
      </Overlay>
    </Container>
  );
};
export default MovieCard;
