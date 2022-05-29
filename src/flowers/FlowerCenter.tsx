import styled, { css, keyframes } from "styled-components";
import {
  backgroundColorAnimation,
  foregroundOpacityAndColorAnimation,
} from "./FlowerColorAnimations";

export default function FlowerCenter({
  size,
  animated,
}: {
  size: number;
  animated: boolean;
}) {
  const OuterContainer = styled.div`
    height: ${size}vmin;
    width: ${size}vmin;
    border-radius: 50%;
    background-color: darkslategray;
    /* center horizontally and vertically */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  if (!animated) {
    return <OuterContainer />;
  }

  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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

  return (
    <OuterContainer>
      <OpacityContainer>
        <Background>
          <Foreground />
        </Background>
      </OpacityContainer>
    </OuterContainer>
  );
}
