import styled, { createGlobalStyle } from "styled-components";
import Garland from "./flowers/Garland";
import { repeatArray } from "./utils/util";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: hsl(100, 100%, 0%);
  }
`;

const Background = styled.div`
  padding: 10vmin;
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
