import styled, { keyframes } from "styled-components";

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

interface PetalProps {
  angle: number;
  size: number;
  numPetals: number;
  petalShape: string;
  openDelay: number; // seconds
}

export default function Petal({
  angle,
  size,
  numPetals,
  petalShape,
  openDelay,
}: PetalProps): JSX.Element {
  const spin = keyframes`
    from {
      transform: rotateZ(180deg) translateY(-1vmin)
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
    animation: ${spin} 1s cubic-bezier(0.6, 0, 0.4, 1.2)
      ${openDelay + Math.random() * 5}s both;
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
