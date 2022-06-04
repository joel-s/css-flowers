import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { range } from "../utils/util";
import FlowerCenter from "./FlowerCenter";
import Petal from "./Petal";

const fadeFrames = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const zoomFrames = keyframes`
  0% {
    transform: translateZ(0) translate(-50%, -50%);
  }
  100% {
    transform: translateZ(100vmin) translate(-50%, -50%);
  }
`;

const goAwayAnimation = css`
  animation: ${zoomFrames} 1s ease-in both, ${fadeFrames} 1s ease-in both;
`;

const FlowerAreaContainer = styled.div`
  position: relative;
  flex-grow: 1;
  perspective: 100vmin;
`;

const FlowerContainer = styled.div<{ size: number; goAway: boolean }>`
  height: ${(props) => props.size}vmin;
  width: ${(props) => props.size}vmin;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;
  ${(props) => (props.goAway ? goAwayAnimation : "")}
`;

interface FlowerProps {
  size: number;
  numPetals: number;
  petalShape?: string;
}

export default function Flower({
  size,
  numPetals,
  petalShape = "0 100% 0 100%",
}: FlowerProps): JSX.Element {
  const [keyNum, setKeyNum] = useState(0);
  const [bloom, setBloom] = useState(false);
  const [goAway, setGoAway] = useState(false);
  const reset = () => {
    setBloom(false);
    setGoAway(false);
    setKeyNum((value) => value + 1);
  };

  return (
    <FlowerAreaContainer
      onMouseEnter={() => {
        setBloom(true);
      }}
      onClick={() => {
        setGoAway(true);
        setTimeout(reset, 1000);
      }}
    >
      <FlowerContainer size={size} goAway={goAway} key={keyNum}>
        <FlowerCenter size={size / 3} animated={bloom} key={keyNum * 100} />
        {bloom && (
          <>
            {range(0, numPetals).map((i) => (
              <Petal
                size={size / 2}
                angle={(i * 360) / numPetals}
                numPetals={numPetals}
                petalShape={petalShape}
              />
            ))}
          </>
        )}
      </FlowerContainer>
    </FlowerAreaContainer>
  );
}
