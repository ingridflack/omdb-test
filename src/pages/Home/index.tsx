import { ChangeEvent, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import HomeImg from "../../assets/images/home-img.png";
import Loader from "../../components/Loader";
import MovieCard from "../../components/MovieCard";
import GlobalContext from "../../global/GlobalContext";
import {
  SearchContainer,
  Input,
  SearchIcon,
  BoxContent,
  Results,
  Image,
  Title,
  Subtitle,
  Message,
} from "./styles";

const Home: React.FC = () => {
  const {
    state: { isLoading, searchResult, search },
    setters,
    requests: { getSearchResult },
  }: any = useContext(GlobalContext);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setters.setSearch(e.target.value);
  };
  const history = useHistory();

  useEffect(() => {
    getSearchResult(search);
  }, [getSearchResult, search]);

  const getDetails = (id: string) => {
    history.push(`/details/${id}`);
  };

  const renderSearchResults = () => {
    return searchResult.map((item: any) => {
      return <MovieCard onClick={() => getDetails(item.imdbID)} item={item} />;
    });
  };

  const renderContent = () => {
    if (!searchResult)
      return (
        <BoxContent>
          <Image src={HomeImg} />
          <Title>Don't know what to search?</Title>
          <Subtitle>Here's an offer you can't refuse</Subtitle>
        </BoxContent>
      );

    if (isLoading)
      return (
        <BoxContent>
          <Loader />
        </BoxContent>
      );

    if (!searchResult.length)
      return (
        <BoxContent>
          <Message>Nenhum filme encontrado :(</Message>
        </BoxContent>
      );

    return <Results>{renderSearchResults()}</Results>;
  };

  return (
    <>
      <SearchContainer>
        <SearchIcon />
        <Input
          value={search}
          onChange={handleInputChange}
          placeholder="Search movies..."
        />
      </SearchContainer>
      {renderContent()}
    </>
  );
};
export default Home;
