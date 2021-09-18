import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />;
    </>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
  body {
    background-color: #0b1014;
  }
`;

export default App;
