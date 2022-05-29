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

const containerTransformKeyframes = (
  angle: number,
  numPetals: number
) => keyframes`
  from {
    transform: scale(0) rotateZ(${angle}deg) translateY(-1vmin)
      scaleX(${Math.tan(Math.PI / numPetals)}) rotateZ(45deg);
  }
  to {
    transform: scale(1) rotateZ(${angle}deg) translateY(-1vmin)
      scaleX(${Math.tan(Math.PI / numPetals)}) rotateZ(45deg);
  }
`;

const PetalContainer = styled.div<{
  size: number;
  angle: number;
  numPetals: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.size}vmin;
  height: ${(props) => props.size}vmin;
  transform-origin: bottom right;
  animation: ${(props) =>
      containerTransformKeyframes(props.angle, props.numPetals)}
    1s cubic-bezier(0.6, 0, 0.4, 1.2)
    ${(props) => (props.angle * props.numPetals) / 2000}s both;
`;

const PetalBackground = styled.div<{ size: number; petalShape: string }>`
  width: ${(props) => props.size}vmin;
  height: ${(props) => props.size}vmin;
  border-radius: ${(props) => props.petalShape};
  ${backgroundColorAnimation}
`;

const PetalForeground = styled.div<{ petalShape: string }>`
  height: 100%;
  border-radius: ${(props) => props.petalShape};
  ${foregroundOpacityAndColorAnimation}
`;

export default function Petal({
  angle,
  size,
  numPetals,
  petalShape,
}: PetalProps): JSX.Element {
  return (
    <PetalContainer size={size} angle={angle} numPetals={numPetals}>
      <PetalBackground size={size} petalShape={petalShape}>
        <PetalForeground petalShape={petalShape} />
      </PetalBackground>
    </PetalContainer>
  );
}
