import HomeImg from "../../assets/images/home-img.png";
import {
  Container,
  SearchContainer,
  Input,
  SearchIcon,
  BoxContent,
  Image,
  Title,
  Subtitle,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <SearchContainer>
        <SearchIcon />
        <Input placeholder="Search movies..." />
      </SearchContainer>
      <BoxContent>
        <Image src={HomeImg} />
        <Title>Don't know what to search?</Title>
        <Subtitle>Here's an offer you can't refuse</Subtitle>
      </BoxContent>
    </Container>
  );
};
export default Home;
