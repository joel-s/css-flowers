import { keyframes, css } from "styled-components";

const varyBackgroundColor = keyframes`
0%, 50% {
  background-color: darkslateblue;
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
    opacity: 60%;
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

export const backgroundColorAnimation = css`
  /* animation takes twice as long as varyForegroundOpacity animation */
  animation: ${varyBackgroundColor} 8s ease infinite alternate-reverse;
`;

export const foregroundOpacityAndColorAnimation = css`
  /* 1st animation takes half as long as varyBackgroundColor animation */
  animation: ${varyForegroundOpacity} 4s ease infinite alternate-reverse,
    ${varyForegroundColor} 5.5s ease infinite alternate-reverse;
`;
