import styled, { createGlobalStyle } from "styled-components";
import Garland from "./flowers/Garland";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: hsl(100, 100%, 0%);
  }
`;

const Background = styled.div`
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden; */
  padding: 10vmin 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Garland petalShape="0 100% 0 100%" />
        <Garland petalShape="0 50% 50% 50%" />
        <Garland petalShape="50% 50% 0 50%" />
        <Garland petalShape="0 0 100% 0" />
        <Garland petalShape="0 0 50% 0" />
        <Garland petalShape="0 50% 50% 0" />
      </Background>
    </>
  );
}

export default App;
