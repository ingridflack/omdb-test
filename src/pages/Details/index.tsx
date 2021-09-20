import {
  Container,
  Header,
  Button,
  BackIcon,
  Info,
  InfoItem,
  Span,
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
import { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import { useHistory } from "react-router";

const Details: React.FC = () => {
  const {
    state: { searchResult },
  }: any = useContext(GlobalContext);

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <Header>
        <Button onClick={goBack}>
          <BackIcon />
        </Button>
        <Info>
          <InfoItem>{searchResult.Runtime}</InfoItem>
          <InfoItem>{searchResult.Year}</InfoItem>
          <InfoItem>
            <Span>{searchResult.Rated}</Span>
          </InfoItem>
        </Info>
      </Header>

      <LeftSide>
        <MovieTitle>{searchResult.Title}</MovieTitle>

        <Row>
          <Col>
            <ImdbContainer>
              <ImdbLogo src={IMDb} />
            </ImdbContainer>
            <ColValue>{searchResult.imdbRating}/10</ColValue>
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
          <TextContent>{searchResult.Plot}</TextContent>

          <ListContainer>
            <List>
              <Title>Cast</Title>
              {searchResult.Actors.split(",").map((actor: string) => (
                <ListItem key={actor}>{actor.trim()}</ListItem>
              ))}
            </List>

            <List>
              <Title>Genre</Title>
              {searchResult.Genre.split(",").map((genre: string) => (
                <ListItem key={genre}>{genre.trim()}</ListItem>
              ))}
            </List>

            <List>
              <Title>Director</Title>
              <ListItem>{searchResult.Director}</ListItem>
            </List>
          </ListContainer>
        </DetailsContainer>
      </LeftSide>

      <RightSide>
        <Cover src={searchResult.Poster} />
      </RightSide>
    </Container>
  );
};
export default Details;
