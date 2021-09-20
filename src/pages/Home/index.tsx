import { ChangeEvent, useContext, useEffect } from "react";
import HomeImg from "../../assets/images/home-img.png";
import MovieCard from "../../components/MovieCard";
import GlobalContext from "../../global/GlobalContext";
import {
  Container,
  SearchContainer,
  Input,
  SearchIcon,
  BoxContent,
  Results,
  Image,
  Title,
  Subtitle,
} from "./styles";

const Home: React.FC = () => {
  const { state, setters, requests }: any = useContext(GlobalContext);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setters.setSearch(e.target.value);
  };

  console.log({ searchResult: state.searchResult });

  useEffect(() => {
    requests.getSearchResult(state.search);
  }, [state.search]);

  const renderSearchResults = () => {
    return state.data.map((item: any) => {
      return <MovieCard item={item} />;
    });
  };

  const renderContent = () => {
    if (state.searchResult) {
      return renderSearchResults();
    }

    return (
      <BoxContent>
        <Image src={HomeImg} />
        <Title>Don't know what to search?</Title>
        <Subtitle>Here's an offer you can't refuse</Subtitle>
      </BoxContent>
    );
  };

  return (
    <Container>
      <SearchContainer>
        <SearchIcon />
        <Input
          value={state.search}
          onChange={handleInputChange}
          placeholder="Search movies..."
        />
      </SearchContainer>
      <Results>{renderContent()}</Results>
    </Container>
  );
};
export default Home;
