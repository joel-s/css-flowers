import { useState } from "react";
import styled from "styled-components";
import { range } from "../utils/util";
import FlowerCenter from "./FlowerCenter";
import Petal from "./Petal";

// Glowing text:
// text-shadow: 0px 0px 40px white,
// 0px 0px 8px white,
// 0px 0px 16px white;

interface ContainerProps {
  size: number;
}

const FlowerContainer = styled.div<{ size: number }>`
  height: ${(props) => props.size}vmin;
  width: ${(props) => props.size}vmin;
  position: relative;
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

  const baseAngle = 360 / numPetals;
  let startAngle = 180;
  if (numPetals % 2) {
    startAngle =
      Math.random() > 0.5 ? 180 + baseAngle / 2 : 180 - baseAngle / 2;
  }

  return (
    <FlowerContainer size={size} onMouseEnter={() => setAnimated(true)}>
      <FlowerCenter size={size / 3} animated={animated} />
      {animated && (
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
  );
}
