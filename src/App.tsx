import styled, { createGlobalStyle } from "styled-components";
import Flower from "./flowers/Flower";

// Next step: Create repo

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: hsl(100, 100%, 0%);
    overflow: hidden;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Flower numPetals={3} />
      </Background>
    </>
  );
}

export default App;
