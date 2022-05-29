import styled, { keyframes } from "styled-components";
import {
  backgroundColorAnimation,
  foregroundOpacityAndColorAnimation,
} from "./FlowerColorAnimations";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const OuterContainer = styled.div<{ size: number }>`
  height: ${(props) => props.size}vmin;
  width: ${(props) => props.size}vmin;
  border-radius: 50%;
  background-color: darkslategray;
  /* center horizontally and vertically */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const OpacityContainer = styled.div`
  height: 100%;
  animation: ${fadeIn} 1s both;
`;

const Background = styled.div`
  height: 100%;
  border-radius: 50%;
  ${backgroundColorAnimation}
`;

const Foreground = styled.div`
  height: 100%;
  border-radius: 50%;
  ${foregroundOpacityAndColorAnimation}
`;

export default function FlowerCenter({
  size,
  animated,
}: {
  size: number;
  animated: boolean;
}) {
  if (!animated) {
    return <OuterContainer size={size} />;
  }

  return (
    <OuterContainer size={size}>
      <OpacityContainer>
        <Background>
          <Foreground />
        </Background>
      </OpacityContainer>
    </OuterContainer>
  );
}
