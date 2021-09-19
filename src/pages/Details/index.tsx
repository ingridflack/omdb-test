import {
  Container,
  Header,
  Button,
  BackIcon,
  Info,
  Span,
  LeftSide,
  Title,
  Row,
  ImdbBox,
  ImdbLogo,
  Rating,
  RatingBox,
  Logo,
  Percentage,
  FavoriteBox,
  HeartIcon,
  PlotContainer,
  Plot,
  Description,
  CastList,
  Cast,
  GenreList,
  Genre,
  Director,
  RigthSide,
  Cover,
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
          57 min • 2011-2019 • <Span>TV-MA</Span>
        </Info>
      </Header>
      <LeftSide>
        <Title>Game of Thrones</Title>
        <Row>
          <ImdbBox>
            <ImdbLogo src={IMDb} />
            <Rating>6.9/10</Rating>
          </ImdbBox>
          <RatingBox>
            <Logo src={RatingImg} />
            <Percentage>82%</Percentage>
          </RatingBox>
          <FavoriteBox>
            <HeartIcon />
            Add to favorites
          </FavoriteBox>
        </Row>
        <PlotContainer>
          <Plot>Plot</Plot>
          <Description>
            Nine noble families fight for control over the lands of Westeros,
            while an ancient enemy returns after being dormant for millennia.
          </Description>
        </PlotContainer>
        <CastList>
          Cast
          <Cast>Emilia Clarke</Cast>
          <Cast>Emilia Clarke</Cast>
          <Cast>Emilia Clarke</Cast>
        </CastList>
        <GenreList>
          Genre
          <Genre>Action</Genre>
          <Genre>Action</Genre>
          <Genre>Action</Genre>
        </GenreList>
        <Director>
          Director
          <span>N/A</span>
        </Director>
      </LeftSide>
      <RigthSide>
        <Cover />
      </RigthSide>
    </Container>
  );
};
export default Details;
