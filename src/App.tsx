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

const basicShapeArray = [
  "0 100% 0 100%",
  "0 50% 50% 50%",
  "50% 50% 0 50%",
  "0 0 100% 0",
  "0 0 50% 0",
  "0 50% 50% 0",
];

const shapeArray = repeatArray(basicShapeArray, 2);

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        {shapeArray.map((shape, i) => (
          <Garland petalShape="0 100% 0 100%" key={i} />
        ))}
      </Background>
    </>
  );
}

export default App;
