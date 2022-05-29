import styled, { keyframes } from "styled-components";
import {
  backgroundColorAnimation,
  foregroundOpacityAndColorAnimation,
} from "./FlowerColorAnimations";

interface PetalProps {
  angle: number;
  size: number;
  numPetals: number;
  petalShape: string;
}

export default function Petal({
  angle,
  size,
  numPetals,
  petalShape,
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
    ${backgroundColorAnimation}
  `;

  const PetalForeground = styled.div`
    height: 100%;
    border-radius: ${petalShape};
    ${foregroundOpacityAndColorAnimation}
  `;

  return (
    <PetalContainer>
      <PetalBackground>
        <PetalForeground />
      </PetalBackground>
    </PetalContainer>
  );
}
