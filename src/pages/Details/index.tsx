import {
  Header,
  Button,
  BackIcon,
  Info,
  InfoItem,
  Span,
  Content,
  LeftSide,
  MovieTitle,
  Row,
  ImdbContainer,
  ImdbLogo,
  Logo,
  FavoriteButton,
  DetailsContainer,
  Title,
  TextContent,
  ListContainer,
  List,
  ListItem,
  RightSide,
  Cover,
  Col,
  RTContainer,
  ColValue,
  Container,
} from "./styles";

import IMDb from "../../assets/images/imdb.svg";
import RatingImg from "../../assets/images/image-rating.svg";
import { useContext, useEffect } from "react";
import GlobalContext from "../../global/GlobalContext";
import { Redirect, useHistory, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { BoxContent } from "../Home/styles";
import { IMovie } from "../../config/interface";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { getPosterSource } from "../../utils/movie";

interface IDetailsParams {
  id: string;
}

const Details: React.FC = () => {
  const { id }: IDetailsParams = useParams();

  const {
    state: { movie, isLoading, favorites },
    requests: { getMovieDetail },
    setters: { setMovie, toggleFavoriteMovie },
  }: any = useContext(GlobalContext);

  const history = useHistory();
  const isFavorited = favorites.some(
    (item: IMovie) => movie?.imdbID === item.imdbID
  );

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    getMovieDetail(id);

    return () => {
      setMovie(undefined);
    };
  }, [id]);

  if (isLoading) {
    return (
      <BoxContent>
        <Loader />
      </BoxContent>
    );
  }

  if (movie === null) {
    return <Redirect to="/" />;
  }

  if (!movie) return null;

  return (
    <Container backgroundImage={getPosterSource(movie)}>
      <Header>
        <Button onClick={goBack}>
          <BackIcon />
        </Button>
        <Info>
          <InfoItem>{movie.Runtime}</InfoItem>
          <InfoItem>{movie.Year}</InfoItem>
          <InfoItem>
            <Span>{movie.Rated}</Span>
          </InfoItem>
        </Info>
      </Header>

      <Content>
        <LeftSide>
          <MovieTitle data-cy="movie-title">{movie.Title}</MovieTitle>

          <Row>
            <Col>
              <ImdbContainer>
                <ImdbLogo src={IMDb} />
              </ImdbContainer>
              <ColValue>{movie.imdbRating}/10</ColValue>
            </Col>
            <Col>
              <RTContainer>
                <Logo src={RatingImg} />
              </RTContainer>
              <ColValue>82%</ColValue>
            </Col>

            <FavoriteButton
              active={isFavorited}
              onClick={() => toggleFavoriteMovie(movie)}
            >
              {isFavorited ? (
                <>
                  <BsHeartFill /> Favorite
                </>
              ) : (
                <>
                  <BsHeart /> Add to favorites
                </>
              )}
            </FavoriteButton>
          </Row>

          <DetailsContainer>
            <Title>Plot</Title>
            <TextContent>{movie.Plot}</TextContent>

            <ListContainer>
              <List>
                <Title>Cast</Title>
                {movie.Actors?.split(",").map((actor: string) => (
                  <ListItem key={actor}>{actor.trim()}</ListItem>
                ))}
              </List>

              <List>
                <Title>Genre</Title>
                {movie.Genre?.split(",").map((genre: string) => (
                  <ListItem key={genre}>{genre.trim()}</ListItem>
                ))}
              </List>

              <List>
                <Title>Director</Title>
                {movie.Director?.split(",").map((director: string) => (
                  <ListItem key={director}>{director.trim()}</ListItem>
                ))}
              </List>
            </ListContainer>
          </DetailsContainer>
        </LeftSide>

        <RightSide>
          <Cover movie={movie} />
        </RightSide>
      </Content>
    </Container>
  );
};
export default Details;
