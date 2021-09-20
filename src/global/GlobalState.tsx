import axios from "axios";
import { useCallback, useMemo, useState } from "react";
import GlobalContext from "./GlobalContext";
import debounce from "lodash.debounce";

const GlobalState: React.FC = ({ children }) => {
  const [searchResult, setSearchResult] = useState<any[] | undefined>();
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState<any[]>([]);

  // const addToFavorites = (movie: any) => {
  //   if (seTaNoFavorites) {
  //     removeDoFavorites();
  //   } else {
  //     setFavorites((favorites: any[]) => [...favorites, movie]);
  //   }
  // };

  const getSearchResult = useCallback((search: string) => {
    if (!search.length) return;

    setIsLoading(true);
    axios
      .get("http://www.omdbapi.com", {
        params: {
          s: search,
          apiKey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        const results = res.data.Error ? [] : res.data.Search;

        setSearchResult(results);
        console.log("deeeeeeeu", { res, results });
        setIsLoading(false);
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
    setIsLoading(true);

    axios
      .get("http://www.omdbapi.com", {
        params: {
          i: id,
          apiKey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setMovie(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log({ ...e });
        setIsLoading(false);
      });
  };

  const state = { searchResult, search, movie, isLoading };
  const setters = { setSearch, setMovie };
  const requests = { getSearchResult: debouncedFetchData, getMovieDetail };
  return (
    <GlobalContext.Provider value={{ state, setters, requests }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
