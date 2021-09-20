import axios from "axios";
import { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalState: React.FC = ({ children }) => {
  const [searchResult, setSearchResult] = useState();
  const [search, setSearch] = useState("");

  const getSearchResult = (search: string) => {
    axios
      .get("http://www.omdbapi.com", {
        params: {
          s: search,
          apiKey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setSearchResult(res.data.Search);
        console.log("deeeeeeeu", { res });
      })
      .catch((e) => {
        console.log({ ...e });
      });
  };

  console.log(searchResult);

  const state = { searchResult, search };
  const setters = { setSearch };
  const requests = { getSearchResult };
  return (
    <GlobalContext.Provider value={{ state, setters, requests }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
