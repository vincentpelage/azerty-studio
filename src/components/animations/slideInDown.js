import { keyframes } from "styled-components";

export const slideInDownEntry = keyframes`
from {
    transform: translate3d(0, -100%, 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const slideInDownExit = keyframes`
from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
`;
