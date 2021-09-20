import axios from "axios";
import { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalState: React.FC = ({ children }) => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const getData = (search: string) => {
    axios
      .get("http://www.omdbapi.com", {
        params: {
          s: search,
          apiKey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setData(res.data.Search);
        console.log("deeeeeeeu", { res });
      })
      .catch((e) => {
        console.log({ ...e });
      });
  };

  console.log(data);

  const state = { data, search };
  const setters = { setSearch };
  const requests = { getData };
  return (
    <GlobalContext.Provider value={{ state, setters, requests }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
