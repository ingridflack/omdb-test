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
  HeartIcon,
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
} from "./styles";

import IMDb from "../../assets/images/imdb.svg";
import RatingImg from "../../assets/images/image-rating.svg";
import { useContext, useEffect } from "react";
import GlobalContext from "../../global/GlobalContext";
import { useHistory, useParams } from "react-router";
import Loader from "../../components/Loader";
import { BoxContent } from "../Home/styles";

const Details: React.FC = () => {
  const { id }: { id: string } = useParams();
  const {
    state: { movie },
    requests: { getMovieDetail },
    setters: { setMovie },
  }: any = useContext(GlobalContext);

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    getMovieDetail(id);

    return () => {
      setMovie(undefined);
    };
  }, []);

  if (!movie) {
    return (
      <BoxContent>
        <Loader />
      </BoxContent>
    );
  }

  return (
    <>
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
          <MovieTitle>{movie.Title}</MovieTitle>

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
            <FavoriteButton>
              <HeartIcon />
              Add to favorites
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
                <ListItem>{movie.Director}</ListItem>
              </List>
            </ListContainer>
          </DetailsContainer>
        </LeftSide>

        <RightSide>
          <Cover src={movie.Poster} />
        </RightSide>
      </Content>
    </>
  );
};
export default Details;
