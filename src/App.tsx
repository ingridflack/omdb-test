import styled, { createGlobalStyle } from "styled-components";
import GlobalState from "./global/GlobalState";
import Router from "./routes/Router";

const Container = styled.main`
  padding: 50px 120px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

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

function App() {
  return (
    <Container>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </Container>
  );
}

export default App;
