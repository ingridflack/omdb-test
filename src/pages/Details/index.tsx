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

const Details: React.FC = () => {
  return (
    <Container>
      <Header>
        <Button>
          <BackIcon />
        </Button>
        <Info>
          <InfoItem>57 min</InfoItem>
          <InfoItem>2011-2019</InfoItem>
          <InfoItem>
            <Span>TV-MA</Span>
          </InfoItem>
        </Info>
      </Header>

      <LeftSide>
        <MovieTitle>Game of Thrones</MovieTitle>

        <Row>
          <Col>
            <ImdbContainer>
              <ImdbLogo src={IMDb} />
            </ImdbContainer>
            <ColValue>6.9/10</ColValue>
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
          <TextContent>
            Nine noble families fight for control over the lands of Westeros,
            while an ancient enemy returns after being dormant for millennia.
          </TextContent>

          <ListContainer>
            <List>
              <Title>Cast</Title>
              <ListItem>Emilia Clarke</ListItem>
              <ListItem>Emilia Clarke</ListItem>
              <ListItem>Emilia Clarke</ListItem>
            </List>

            <List>
              <Title>Genre</Title>
              <ListItem>Action</ListItem>
              <ListItem>Action</ListItem>
              <ListItem>Action</ListItem>
            </List>

            <List>
              <Title>Director</Title>
              <ListItem>N/A</ListItem>
            </List>
          </ListContainer>
        </DetailsContainer>
      </LeftSide>

      <RightSide>
        <Cover src={undefined} />
      </RightSide>
    </Container>
  );
};
export default Details;
