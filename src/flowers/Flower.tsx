import styled, { keyframes } from "styled-components";
import { range } from "../utils/util";

// Glowing text:
// text-shadow: 0px 0px 40px white,
// 0px 0px 8px white,
// 0px 0px 16px white;

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

export function Petal({
  angle,
  size,
  numPetals,
  petalShape,
}: PetalProps): JSX.Element {
  const spin = keyframes`
    from {
      transform: rotateZ(0deg) translateY(-1vmin)
        scaleX(${Math.tan(Math.PI / numPetals)}) rotateZ(45deg);
    }
    to {
      transform: rotateZ(${angle}deg) translateY(-1vmin)
        scaleX(${Math.tan(Math.PI / numPetals)}) rotateZ(45deg);
    }
  `;

  const PetalBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    border-radius: ${petalShape};
    width: ${size}vmin;
    height: ${size}vmin;
    transform-origin: bottom right;
    animation: ${spin} 3s cubic-bezier(0.6, 0.015, 0.4, 1.35) 1s both;
  `;

  const PetalForegroundInner = styled.div`
    height: 100%;
    border-radius: ${petalShape};
    animation: ${varyColor} 5.5s ease infinite -${numPetals}s alternate-reverse,
      ${varyOpacity} 4s ease infinite alternate-reverse;
  `;

  return (
    <PetalBackground>
      <PetalForegroundInner />
    </PetalBackground>
  );
}

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
        <Petal
          size={size / 2}
          angle={(i * 360) / numPetals}
          numPetals={numPetals}
          petalShape={petalShape}
        />
      ))}
    </FlowerContainer>
  );
}
