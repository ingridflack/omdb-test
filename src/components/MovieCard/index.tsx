import { BsHeart, BsHeartFill } from "react-icons/bs";
import {
  Container,
  Poster,
  Overlay,
  FavoriteButton,
  Title,
  Year,
} from "./styles";

const MovieCard: React.FC<any> = ({ item }) => {
  return (
    <Container>
      <Poster src={item.Poster} />
      <Overlay>
        <FavoriteButton>{true ? <BsHeartFill /> : <BsHeart />}</FavoriteButton>
        <Title>{item.Title}</Title>
        <Year>{item.Year}</Year>
      </Overlay>
    </Container>
  );
};
export default MovieCard;
