import { keyframes } from "styled-components";

export const slideInRightEntry = keyframes`
from {
    /* transform: translate3d(-100%, 0, 0) scale(0.8); */
    transform: translate3d(-100%, 0, 0);
    /* transform: scale(0.8); */
    /* opacity: 0 */
  }

  to {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1
  }
`;

export const slideInRightExit = keyframes`
from {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }

  to {
    /* transform: translate3d(100%, 0, 0) scale(0.8); */
    transform: translate3d(100%, 0, 0);
    /* transform: scale(0.6); */
    /* opacity: 0 */

  }
`;
