import { useCallback, useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { toast } from "react-toastify";

import api from "../config/api";
import GlobalContext from "./GlobalContext";
import { IMovie } from "../config/interface";

const GlobalState: React.FC = ({ children }) => {
  const [searchResult, setSearchResult] = useState<IMovie[] | undefined>();
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState<IMovie | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState<IMovie[]>([]);
  const [totalResults, setTotalResults] = useState();

  useEffect(() => {
    const localFavorites = localStorage.getItem("favorites");
    localFavorites && setFavorites(JSON.parse(localFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavoriteMovie = (movie: IMovie) => {
    const isAlreadyInFavorites = favorites.some(
      (item) => movie.imdbID === item.imdbID
    );

    if (isAlreadyInFavorites) {
      removeFromFavorites(movie);
    } else {
      setFavorites((favorites: IMovie[]) => [...favorites, movie]);
      toast.success("Added to favorites!");
    }
  };

  const removeFromFavorites = (movie: IMovie) => {
    const newFavorites = favorites.filter(
      (item) => movie.imdbID !== item.imdbID
    );
    setFavorites(newFavorites);
    toast.success("Removed from favorites!");
  };

  const updateSearchInput = (input: string) => {
    setSearch(input);
  };

  const getSearchResult = useCallback((search: string, page: number = 1) => {
    if (!search.length) return;

    setIsLoading(true);

    api
      .get("/", {
        params: {
          page,
          s: search,
          apiKey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        const results: IMovie[] = res.data.Error ? [] : res.data.Search;

        setTotalResults(res.data.totalResults);
        setSearchResult(results);

        setIsLoading(false);
        console.log("deeeeeeeu", { res, results });
      })
      .catch((e) => {
        console.log({ ...e });
        setIsLoading(false);
      });
  }, []);

  const debouncedFetchData = useMemo(
    () => debounce(getSearchResult, 500),
    [getSearchResult]
  );

  const getMovieDetail = (id: string) => {
    console.log(searchResult);
    setIsLoading(true);

    api
      .get("/", {
        params: {
          i: id,
          apiKey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        console.log({ res });

        const result = res.data.Error ? null : res.data;

        setMovie(result);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log({ ...e });
        setIsLoading(false);
      });
  };

  const state = {
    searchResult,
    search,
    movie,
    isLoading,
    favorites,
    totalResults,
  };
  const setters = {
    setSearch,
    setMovie,
    toggleFavoriteMovie,
    updateSearchInput,
  };
  const requests = { getSearchResult: debouncedFetchData, getMovieDetail };

  return (
    <GlobalContext.Provider value={{ state, setters, requests }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
