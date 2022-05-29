import styled, { keyframes, css } from "styled-components";

const varyBackgroundColor = keyframes`
0%, 50% {
  background-color: black;
}
50%, 100% {
  background-color: white;
}
`;

const varyForegroundOpacity = keyframes`
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 40%;
  }
`;

const varyForegroundColor = keyframes`
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
  startAngle: number;
  animated: boolean;
}

export default function Petal({
  angle,
  size,
  numPetals,
  petalShape,
  openDelay,
  startAngle,
  animated,
}: PetalProps): JSX.Element | null {
  const containerTransformKeyframes = keyframes`
    from {
      transform: scale(0) rotateZ(${angle}deg) translateY(-1vmin)
        scaleX(${Math.tan(Math.PI / numPetals)}) rotateZ(45deg);
    }
    to {
      transform: scale(1) rotateZ(${angle}deg) translateY(-1vmin)
        scaleX(${Math.tan(Math.PI / numPetals)}) rotateZ(45deg);
    }
  `;

  const PetalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${size}vmin;
    height: ${size}vmin;
    transform-origin: bottom right;
    animation: ${containerTransformKeyframes} 1s cubic-bezier(0.6, 0, 0.4, 1.2)
      ${(angle * numPetals) / 2000}s both;
  `;

  const PetalBackground = styled.div`
    border-radius: ${petalShape};
    width: ${size}vmin;
    height: ${size}vmin;
    /* animation is identical to flower center background animation */
    /* 1st animation takes twice as long as varyForegroundOpacity animation    */
    animation: ${varyBackgroundColor} 8s ease infinite alternate-reverse;
  `;

  const PetalForegroundInner = styled.div`
    height: 100%;
    border-radius: ${petalShape};
    /* both animations are identical to flower center foreground animation */
    /* 1st animation takes half as long as varyBackgroundColor animation */
    animation: ${varyForegroundOpacity} 4s ease infinite alternate-reverse,
      ${varyForegroundColor} 5.5s ease infinite alternate-reverse;
  `;

  if (!animated) {
    return null;
  }

  return (
    <PetalContainer>
      <PetalBackground>
        <PetalForegroundInner />
      </PetalBackground>
    </PetalContainer>
  );
}
