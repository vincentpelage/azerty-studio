import { keyframes, css } from "styled-components";

export const wobbleVertical = keyframes`
16.65% {
  transform: translateY(8px);
}
33.33% {
  transform: translateY(-6px);
}
49.95% {
  transform: translateY(4px);
}
66.6% {
  transform: translateY(-2px);
}
83.25% {
  transform: translateY(1px);
}
83.25% {
  transform: translateY(0);
}
`;

export const createCSSAnimationDelay = text => {
  let styles = "";
  for (let i = 0; i < text.length; i += 1) {
    styles += `
      & span:nth-of-type(${i + 1}) {
        animation-delay: ${([i] * 0.1).toString()}s;
      }`;
  }

  return css`
    ${styles}
  `;
};

export const animationLetter = css`
  animation: ${wobbleVertical} 1s ease-in-out;
`;
