import { useState } from "react";
import styled from "styled-components";
import { range } from "../utils/util";
import FlowerCenter from "./FlowerCenter";
import Petal from "./Petal";

const FlowerAreaContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;

const FlowerContainer = styled.div<{ size: number }>`
  height: ${(props) => props.size}vmin;
  width: ${(props) => props.size}vmin;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  const [animated, setAnimated] = useState(false);

  return (
    <FlowerAreaContainer onMouseEnter={() => setAnimated(true)}>
      <FlowerContainer size={size}>
        <FlowerCenter size={size / 3} animated={animated} />
        {animated && (
          <>
            {range(0, numPetals).map((i) => (
              <Petal
                size={size / 2}
                angle={(i * 360) / numPetals}
                numPetals={numPetals}
                petalShape={petalShape}
                key={i}
              />
            ))}
          </>
        )}
      </FlowerContainer>
    </FlowerAreaContainer>
  );
}
