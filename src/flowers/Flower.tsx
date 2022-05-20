import styled from "styled-components";
import { range } from "../utils/util";
import Petal from "./Petal";

// Glowing text:
// text-shadow: 0px 0px 40px white,
// 0px 0px 8px white,
// 0px 0px 16px white;

interface ContainerProps {
  size: number;
}

const FlowerContainer = styled.div<ContainerProps>`
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
  const delay = Math.random() * 15;
  return (
    <FlowerContainer size={size}>
      {range(0, numPetals).map((i) => (
        <Petal
          size={size / 2}
          angle={(i * 360) / numPetals}
          numPetals={numPetals}
          petalShape={petalShape}
          openDelay={delay}
        />
      ))}
    </FlowerContainer>
  );
}
