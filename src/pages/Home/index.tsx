import { access } from "fs";
import { ChangeEvent, useContext, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ReactPaginate from "react-paginate";

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
  PaginationContainer,
} from "./styles";

const Home: React.FC = () => {
  const {
    state: { isLoading, searchResult, search, totalResults },
    setters,
    requests: { getSearchResult },
  }: any = useContext(GlobalContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setters.updateSearchInput(e.target.value);
  };

  const handleChangePageClick = ({ selected }: any) => {
    getSearchResult(search, selected + 1);
  };

  useEffect(() => {
    getSearchResult(search);
  }, [getSearchResult, search]);

  const renderSearchResults = () => {
    const reducedSearchResults = searchResult.reduce(
      (acc: IMovie[], item: IMovie) => {
        if (!acc.some((m: IMovie) => m.imdbID === item.imdbID)) {
          acc.push(item);
        }

        return acc;
      },
      []
    );

    return [...reducedSearchResults].map((item: IMovie) => (
      <MovieCard
        key={`${item.imdbID}-${item.Title}`}
        to={`/details/${item.imdbID}`}
        item={item}
      />
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

    return (
      <>
        <Results>{renderSearchResults()}</Results>
        <PaginationContainer data-cy="pagination">
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={totalResults / 10}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handleChangePageClick}
            containerClassName="pagination"
            activeClassName="active"
          />
        </PaginationContainer>
      </>
    );
  };

  return (
    <>
      <SearchContainer>
        {isLoading ? <Loader /> : <AiOutlineSearch />}
        <Input
          data-cy="input"
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
