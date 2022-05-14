import { transcode } from "buffer";
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
  size: number;
  angle: number;
  numPetals: number;
}

const Petal = styled.div<PetalProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(0, 80%, 80%, 0.9);
  border-radius: 0 100% 0 100%;
  width: ${(props) => props.size}vmin;
  height: ${(props) => props.size}vmin;
  transform-origin: bottom right;
  transform: rotateZ(${(props) => props.angle}deg) translateY(-1vmin)
    scaleX(${(props) => Math.tan(Math.PI / props.numPetals)}) rotateZ(45deg);
`;

export default function Flower({
  numPetals,
}: {
  numPetals: number;
}): JSX.Element {
  return (
    <Container size={20}>
      {range(0, numPetals - 1).map((i) => (
        <Petal size={10} angle={(i * 360) / numPetals} numPetals={numPetals} />
      ))}
    </Container>
  );
}
