import { ChangeEvent, useContext, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import HomeImg from "../../assets/images/home-img.png";
import Loader from "../../components/Loader";
import MovieCard from "../../components/MovieCard";
import { IMovie } from "../../config/interface";
import GlobalContext from "../../global/GlobalContext";
import {
  SearchContainer,
  Input,
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

  useEffect(() => {
    getSearchResult(search);
  }, [getSearchResult, search]);

  const renderSearchResults = () => {
    return searchResult.map((item: IMovie) => (
      <MovieCard key={item.imdbID} to={`/details/${item.imdbID}`} item={item} />
    ));
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
        {isLoading ? <Loader /> : <AiOutlineSearch />}
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
