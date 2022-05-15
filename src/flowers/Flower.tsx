import styled, { keyframes } from "styled-components";
import { range } from "../utils/util";

const varyOpacity = keyframes`
  from {
    opacity: 100%;
  }
  to {
    opacity: 40%;
  }
`;

const varyColor = keyframes`
  0% {
    background-color: hsl(0, 60%, 50%);
  }
  50% {
    background-color: hsl(285, 60%, 50%);
  }
  100% {
    background-color: hsl(210, 60%, 50%);
  }
`;

interface ContainerProps {
  size: number;
}

const FlowerContainer = styled.div<ContainerProps>`
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

const PetalBackground = styled.div<PetalProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  border-radius: ${(props) => props.petalShape};
  width: ${(props) => props.size}vmin;
  height: ${(props) => props.size}vmin;
  transform-origin: bottom right;
  transform: rotateZ(${(props) => props.angle}deg) translateY(-1vmin)
    scaleX(${(props) => Math.tan(Math.PI / props.numPetals)}) rotateZ(45deg);
`;

const Petal = styled(PetalBackground)`
  animation: ${varyColor} 5.5s ease infinite -${(props) => props.numPetals}s alternate-reverse,
    ${varyOpacity} 4s ease infinite alternate-reverse; ;
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
    <FlowerContainer size={size}>
      {range(0, numPetals).map((i) => (
        <>
          <PetalBackground
            size={size / 2}
            angle={(i * 360) / numPetals}
            numPetals={numPetals}
            petalShape={petalShape}
          />
          <Petal
            size={size / 2}
            angle={(i * 360) / numPetals}
            numPetals={numPetals}
            petalShape={petalShape}
          />
        </>
      ))}
    </FlowerContainer>
  );
}
