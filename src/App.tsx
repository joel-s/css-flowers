import styled, { createGlobalStyle } from "styled-components";
import Garland from "./flowers/Garland";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: hsl(100, 100%, 0%);
    overflow: hidden;
  }
`;

const Background = styled.div`
  padding: 10vmin;
  overflow: hidden;
  min-height: 100vh;
`;

const shapeArray = [
  "0 100% 0 100%",
  "0 50% 50% 50%",
  "50% 50% 0 50%",
  "0 0 100% 0",
  "0 0 50% 0",
  "0 50% 50% 0",
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        {shapeArray.map((shape, i) => (
          <Garland petalShape={shape} key={i} />
        ))}
      </Background>
    </>
  );
}

export default App;
