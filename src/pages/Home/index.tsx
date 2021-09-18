import HomeImg from "../../assets/images/home-img.png";
import {
  Container,
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
      <SearchIcon />
      <Input placeholder="Search movies..." />
      <BoxContent>
        <Image src={HomeImg} />
        <Title>Don't know what to search?</Title>
        <Subtitle>Here's an offer you can't refuse</Subtitle>
      </BoxContent>
    </Container>
  );
};
export default Home;
