import styled, { createGlobalStyle } from "styled-components";
import GlobalState from "./global/GlobalState";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.main`
  padding: 50px 120px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #fff;

  @media (max-width: 768px) {
    padding: 25px 30px;
  }
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
        <ToastContainer limit={3} autoClose={3000} />
      </GlobalState>
    </Container>
  );
}

export default App;
