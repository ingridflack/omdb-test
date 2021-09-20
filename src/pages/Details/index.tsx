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
    state: { data },
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
          <InfoItem>{data.Runtime}</InfoItem>
          <InfoItem>{data.Year}</InfoItem>
          <InfoItem>
            <Span>{data.Rated}</Span>
          </InfoItem>
        </Info>
      </Header>

      <LeftSide>
        <MovieTitle>{data.Title}</MovieTitle>

        <Row>
          <Col>
            <ImdbContainer>
              <ImdbLogo src={IMDb} />
            </ImdbContainer>
            <ColValue>{data.imdbRating}/10</ColValue>
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
          <TextContent>{data.Plot}</TextContent>

          <ListContainer>
            <List>
              <Title>Cast</Title>
              {data.Actors.split(",").map((actor: string) => (
                <ListItem key={actor}>{actor.trim()}</ListItem>
              ))}
            </List>

            <List>
              <Title>Genre</Title>
              {data.Genre.split(",").map((genre: string) => (
                <ListItem key={genre}>{genre.trim()}</ListItem>
              ))}
            </List>

            <List>
              <Title>Director</Title>
              <ListItem>{data.Director}</ListItem>
            </List>
          </ListContainer>
        </DetailsContainer>
      </LeftSide>

      <RightSide>
        <Cover src={data.Poster} />
      </RightSide>
    </Container>
  );
};
export default Details;
