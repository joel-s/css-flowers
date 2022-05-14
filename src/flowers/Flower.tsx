import styled from "styled-components";
import { range } from "../utils/util";

interface ContainerProps {
  size: number;
}

const Container = styled.div<ContainerProps>`
  height: ${(props) => props.size}vmin;
  width: ${(props) => props.size}vmin;
  position: relative;
`;

interface PetalProps {
  angle: number;
  size: number;
  numPetals: number;
  petalShape: string;
}

const Petal = styled.div<PetalProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(0, 80%, 80%, 0.9);
  border-radius: ${(props) => props.petalShape};
  width: ${(props) => props.size}vmin;
  height: ${(props) => props.size}vmin;
  transform-origin: bottom right;
  transform: rotateZ(${(props) => props.angle}deg) translateY(-1vmin)
    scaleX(${(props) => Math.tan(Math.PI / props.numPetals)}) rotateZ(45deg);
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
  return (
    <Container size={size}>
      {range(0, numPetals).map((i) => (
        <Petal
          size={size / 2}
          angle={(i * 360) / numPetals}
          numPetals={numPetals}
          petalShape={petalShape}
        />
      ))}
    </Container>
  );
}
