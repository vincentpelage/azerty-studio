import React from "react";
import styled, { keyframes } from "styled-components";
import { globalVariables } from "../components/globalStyle";

const Flash = keyframes`{
	0%, 12%, 20%, 36% {
		fill: white;
	}
	8%, 16%, 32%, 40%, 100% {
		fill: rgb(252, 102, 129);
	}

}`;

const FightStyled = styled.svg`
  width: 500px;
  height: auto;
  display: block;
  margin: 5rem auto 0 auto;
  @media (max-width: ${globalVariables.maxMobile}) {
    width: 300px;
  }
  .animate-laser {
    animation: ${Flash} 2s ease-in-out infinite;
  }
`;

const Fight = () => {
  return (
    <FightStyled
      id="633f7c5b-e379-4b23-970c-6705226cb474"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="997.26"
      height="760.93"
      viewBox="0 0 997.26 760.93"
    >
      <defs>
        <linearGradient
          id="13dec2af-c8da-4608-a434-604f1b998f6c"
          x1="593.63"
          y1="791.22"
          x2="593.63"
          y2="157.44"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="gray" stopOpacity="0.25" />
          <stop offset="0.54" stopColor="gray" stopOpacity="0.12" />
          <stop offset="1" stopColor="gray" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <title>may_the_force</title>
      <path
        d="M475.4,724C449,730.29,423.23,740.22,396.18,743c-34.3,3.53-69.58-4.6-103.14,3.35-15.63,3.7-32.28,13.17-34.95,29-2.42,14.4,7.95,28.07,20.06,36.22,24.71,16.63,56.31,17.84,86.09,18.5,33,.73,66.7,1.38,98.41-7.92,20.58-6,39.86-16.15,60.71-21.13,29-6.92,59.26-3.57,89-2.92,8.42.18,17,.12,25-2.65,5.19-1.81,9.94-4.72,15.17-6.41,10.25-3.32,21.36-1.69,32-.23a845.53,845.53,0,0,0,134.24,7.5c22.26-.53,45.84-2.39,63.92-15.37,5.19-3.72,9.84-8.38,12.65-14.12,4.22-8.63,3.83-19,.73-28.08-7.69-22.58-30.56-37.25-53.95-41.92s-47.55-1.06-71.13,2.54L660.48,716.3c-7.83,1.2-15.73,2.41-23.19,5.09-8.55,3.06-16.33,8-24.79,11.28-24.31,9.51-39.79,2.87-61-6.35C527,715.64,501.15,717.78,475.4,724Z"
        transform="translate(-101.37 -69.54)"
        fill="#00bec5"
        opacity="0.1"
      />
      <path
        d="M163.14,325.65c21.22,59.35-5.85,127.71-37.72,179.25-10.67,17.25-22.44,35.35-23.9,57-1.78,26.48,12.69,50.83,29.88,66.74,31.34,29,74.14,38,111.43,23.34,32.23-12.64,59.33-41.2,91.83-52.71,54.39-19.27,112,12.68,158.55,52.49,32.94,28.17,68.23,62.42,108,56.4,28-4.23,51.68-28.54,67.78-57.16,7.77-13.82,14.53-29.3,25.86-38.62,6.73-5.54,14.64-8.49,22.54-10.58,72.19-19.11,148.8,27.52,220,3.54,48.11-16.2,86.48-63.3,110.33-117.5s35-115.44,44.26-176.1c6.59-43.11,12.06-89.62-3.09-129.28-16-42-53.12-67.39-90.41-72.15s-74.68,8.42-109,27c-42.92,23.24-85,55.77-131.83,55.88-31.9.07-62.32-15.08-92.83-26.64-51-19.32-104-28.92-156.87-37.78-50.59-8.49-101.69-16.37-152.58-11.36-36,3.55-67.82,20.59-102.76,28.47-22.78,5.14-45.67,1.32-68,10-27.53,10.66-55.84,35.38-57.36,74.28C125.76,267.13,151.88,294.16,163.14,325.65Z"
        transform="translate(-101.37 -69.54)"
        fill="#00bec5"
        opacity="0.1"
      />
      <path
        d="M902.4,262.61c8.53-12.79-2.56-11.94-2.56-11.94L691.63,308.15,782.17,165.4c1.71-10.23-10.23-7.67-10.23-7.67L674.82,312.8l-25.45,7-1.93-4.35-4.79,1.81c-.6-2.13-1.52-3.68-2.88-4.36-8.15-4.07-17.85,5.09-26.88,15.58l-24.28,9.15,7.67,11.94,14.47-4.68c2.89,7.88,9,15.59,11.15,18.22l-1.74,1,2.56,7-1.7.65.74,2.28-.74.28s2.34,7.16,5.15,16.19l-11,17.55-1.83-1.34-18.75,24.67-16.42-3.52c.4-6.28.9-11.92,1.28-15.92,3.41,1.78,5.74,3.3,5.74,3.3a27.4,27.4,0,0,0,.33-5.2c.74-22.79-27.32-39.17-31.39-41.43a66.25,66.25,0,0,1-5.61-9.65c-1.49-5.2.13-9.46,3.16-12.9l.76.05c.64-.59,1.33-1.14,2-1.68l.86,0a40.93,40.93,0,0,0,40.73-36.94,10.75,10.75,0,0,1,3.61,6.25,7.65,7.65,0,0,0,.61-4.18c.16-2.09-.25-5.54-2.81-10.47a34.22,34.22,0,0,0,1.51-11c.24-8.92-2.77-22.11-18.92-33.22,0,0-32.4-19.61-50.31,6.82s-16.2,18.76-16.2,18.76l-34.49,24.4c-.17.11-.33.22-.47.33-3.69,2.87.7,7.89,6.24,12.35-19.9-4-47.62-3.48-70.19,20.05,0,0-21.32,51.16-43.49,70.78s-39.22,155.19-39.22,155.19l-1,4.81L299.53,726.48l1.26-.55c-3,9.77-5.53,17.61-5.53,17.61l-13.64,35,.61.14-.61,1.57s64.81,14.5,85.27,10.23c10.11-2.11,12.1-5.46,11.53-8.32.77-3.63-3.85-7-3.85-7s-23.88-3.41-35.81-23a23.67,23.67,0,0,1-3.23-11.79c.24-10.78,5.53-22.5,10-30.5,26.45-8,59.74-15.27,87.06-12.28a268.49,268.49,0,0,0,38.54,1.42c-3.53,11.9-7,22.46-7,22.46l-13.64,35,.61.14-.61,1.57s64.81,14.5,85.27,10.23c10.11-2.11,12.1-5.46,11.53-8.32.77-3.63-3.85-7-3.85-7s-23.88-3.41-35.81-23a23.67,23.67,0,0,1-3.23-11.79c.18-8,3.13-16.52,6.47-23.66a147.09,147.09,0,0,0,15.52-3.78s51.16,9.38,61.4,18.76c4.35,4,3.62-16.48,1.34-41.36A399.37,399.37,0,0,0,555.46,540.5c-2.44-5.42-4.86-10.9-7.16-16.26l9.31-12.93c.71.73,1.15,1.14,1.15,1.14a39.74,39.74,0,0,0,9.79,1.09c28.4.84,22.62-36.05,22.62-36.05,0-.54-2.58-2.2-6.53-3.74l1.72-2.39L587,471c.51.35.71.53.71.53s28.14-14.5,25.58-24.73a17.45,17.45,0,0,0-4-7.36l16.8-23.34-2-1.48,6.32-10c3,10.2,5.43,19.55,5.07,21.68-.85,5.12,28.14,16.2,28.14,16.2s9.26,1.16,16.34,1.56c1.67,11.45,6.07,27,8.47,35a50.5,50.5,0,0,0,3.83,9.29c4.09,7.64,12.51,24.17,13.46,32.4a3.82,3.82,0,0,1-.32,1.08C702,528.65,702,533.77,702,533.77l.28,0a17.51,17.51,0,0,0-.28,2.58l7.25-.7c.26,6.89-4,19.57-32.84,32.25-17.72,7.8-29.54,14.85-37.32,20.44a34.81,34.81,0,0,0-13.19,38.24,36.1,36.1,0,0,0,4.46,9.53c6,9,7.88,15.31,8.43,19-1.69-.06-3.13-.15-4.16-.28,0,0,.49,1,1.32,2.69-.49,0-.94-.08-1.32-.13,0,0,27.92,55.84,29.17,76a6.45,6.45,0,0,1-1,3.35s-3.41,15.35-17.91,15.35c-7.9,0-9.21,2.28-7.94,4.49-1.83,2.33,2.78,6,6.24,6.6,5.12.85,50.31,4.26,59.69-8.53l-.55-1.88c.19-.22.38-.45.55-.68l-6-20.47s-5.09-16.41-5.6-25.72a7.64,7.64,0,0,1,.48-2.42c.64-1.5.85-5.81.81-11.41.13-16.16-2.52-47.43-2.52-47.43l-3.82,1.58c-3.52-4.53-8.64-12.42-6.46-17.64a37.2,37.2,0,0,0,5.6.31c6.1,0,17.36-1,34.43-6.57l19.71,43.64s6,12.79,18.76,17.05l17,15.81a17.58,17.58,0,0,1-2.49.39l2.25,1.53c-.47.08-.93.14-1.4.18L818.1,731.1c.31,4.26.52,18.41-10.35,18.41-12.79,0-11.94,9.38-11.94,9.38h1a7.56,7.56,0,0,0-.1,1.71h62.25s7.15-12.72,2.27-20.5a10,10,0,0,0-1.42-2.52c-6-7.67-19.61-23.88-19.61-23.88s-13.32-17.94-21.3-33.55a61,61,0,0,1-4.28-10.79l-.25.31c-.23-.69-.44-1.37-.61-2,0,0-1,1.29-2.68,3.25-4.59-5.05-11.62-12-18.64-16-8.89-5.08-13.53-43.27-15.31-62.43A39.58,39.58,0,0,0,787,571.08c1.78-13.46,2-31.52-5.72-45.34-.55-2.9-4.49-23.94-4.75-37.5a28.77,28.77,0,0,1,.56-5.64,46.17,46.17,0,0,0,.81-10.27c0-.13,0-.25,0-.38,0-.72,0-1.44,0-2.18a94.93,94.93,0,0,0-9.13-39.26C766,424.74,762.87,417.78,760,411c-2.41-5.71-7.15-8.88-12.28-10.58a5.19,5.19,0,0,0,.19-2.47,5.92,5.92,0,0,0-.43-3.2c-.82-1.9-2.34-3.39-3.51-5.09a15.92,15.92,0,0,1-1.84-3.56c-.05-.14-.1-.28-.14-.42a5.36,5.36,0,0,1,1.68-1.85,19.06,19.06,0,0,0,5.88-8.56,35.66,35.66,0,0,0,1.43-8.85c.21-2.92.36-5.89.32-8.83.07-6.09-.55-12.16-3.08-17.65a17.74,17.74,0,0,0-5-6.67,26.09,26.09,0,0,0-4.71-2.72c-6.54-3.19-13.12-6.39-20.13-8.33s-14.55-2.54-21.53-.49a13.93,13.93,0,0,0-5.62,2.88c-1.33,1.22-2.26,2.82-3.6,4-1.88,1.71-4.41,2.54-6.38,4.14-3.69,3-4.81,8.2-4.68,13,0,0,0,.07,0,.11,0,.54,0,1.07,0,1.6.06,2.05.78,4.62,2.82,4.87a3.54,3.54,0,0,0,2.94-1.29A29,29,0,0,0,695,385.65a56.79,56.79,0,0,1,4.36,17.16c-2.88.3-5.27.49-6.72.49a3.18,3.18,0,0,0-1.39.35c-10-1-16.81-4.42-25-7.17-7-2.34-12.51-13.44-16-23l34-53.59ZM539.81,503.45c-2-5.27-3.67-10-4.83-14a122.77,122.77,0,0,0-6-16,34.47,34.47,0,0,1-2.57-9.94c3.26-4,6.51-8,9.67-11.88,2.39.4,4.89.93,7.49,1.6a28.69,28.69,0,0,1-2.71,5.48C535.74,465.55,546,492,546,492l.16-.17a23.1,23.1,0,0,0,.62,2.51Zm146,142.95-.16.07c-.64-.82-1.35-1.76-2.06-2.78,1.31,1.62,2.26,2.64,2.26,2.64Zm-40-287.24,0-.2a7.23,7.23,0,0,1-2.62,2.56l-2.5-9.38-.19.16c.77-3.92,2-10.86,2.67-17.87l11.16-3.61-1.21-2.73,14.59-3.83Z"
        transform="translate(-101.37 -69.54)"
        fill="url(#13dec2af-c8da-4608-a434-604f1b998f6c)"
      />
      <path
        d="M645.06,325l246-67.91s10.77-.83,2.48,11.59l-246,64.59Z"
        transform="translate(-101.37 -69.54)"
        fill="#8499f0"
      />
      <polygon
        points="487.38 272.05 494.83 283.64 551.14 265.43 544.52 250.52 487.38 272.05"
        fill="#9f9bad"
      />
      <path
        d="M621.87,367.26S602,344.9,611.11,334.13s19-20.7,27.33-16.56,0,41.41,0,41.41Z"
        transform="translate(-101.37 -69.54)"
        fill="#f9d3c4"
      />
      <path
        d="M622.7,376.37l-3.31-9.11s18.22-9.94,19.87-11.59l3.31,12.42Z"
        transform="translate(-101.37 -69.54)"
        fill="#f6e2d7"
      />
      <path
        d="M580.47,407.84s-5.8,50.52,0,63.76c0,0-28.16,14.08-33.12,19.87,0,0-9.94-25.67-5-32.3s19.87-59.62,19.87-59.62Z"
        transform="translate(-101.37 -69.54)"
        fill="#2a2a31"
      />
      <path
        d="M687.3,378.85s12.42,19,8.28,36.44,40.58-9.94,40.58-9.94-13.25-19.87-11.59-38.09Z"
        transform="translate(-101.37 -69.54)"
        fill="#f9d3c4"
      />
      <path
        d="M712.14,609.07l23.19,51.34s5.8,12.42,18.22,16.56l24,22.36,32.3-28.16s-11.59-14.91-23.19-21.53-15.73-71.22-15.73-71.22Z"
        transform="translate(-101.37 -69.54)"
        fill="#c8b5ac"
      />
      <path
        d="M712.14,609.07l23.19,51.34s5.8,12.42,18.22,16.56l24,22.36,32.3-28.16s-11.59-14.91-23.19-21.53-15.73-71.22-15.73-71.22Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M704.69,528.74S715.45,547,674,565.18c-17.21,7.57-28.69,14.43-36.24,19.85A33.8,33.8,0,0,0,625,622.17a35.06,35.06,0,0,0,4.33,9.26c9.94,14.91,8.28,22.36,8.28,22.36s36.44,13.25,48-9.11c0,0-12.42-13.25-9.11-20.7,0,0,14.08,3.31,45.55-8.28a240.39,240.39,0,0,0,40.12-19.43,38.55,38.55,0,0,0,18.37-28c1.9-14.35,2-34.08-8-47.83Z"
        transform="translate(-101.37 -69.54)"
        fill="#c8b5ac"
      />
      <path
        d="M773.42,520.46l-1.1.13c7.71,13.46,7.5,31.2,5.76,44.39a38.55,38.55,0,0,1-18.37,28,240.39,240.39,0,0,1-40.12,19.43C688.12,624,674,620.66,674,620.66c-3.31,7.45,9.11,20.7,9.11,20.7-9.44,18.2-35.33,12.81-44.64,10.17a9.13,9.13,0,0,1-.08,2.25s36.44,13.25,48-9.11c0,0-12.42-13.25-9.11-20.7,0,0,14.08,3.31,45.55-8.28A240.39,240.39,0,0,0,763,596.26a38.55,38.55,0,0,0,18.37-28C783.29,553.94,783.38,534.21,773.42,520.46Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M587.92,702.65c-9.94-9.11-59.62-18.22-59.62-18.22s-38.09,12.42-91.09,6.62S308,719.21,308,719.21l30.54-153.5.93-4.67S356,429.37,377.58,410.32s42.23-68.73,42.23-68.73c38.92-40.58,93.58-10.77,93.58-10.77s.3.75.83,2.15c4.33,11.52,23.95,66.56,16.56,100.53-4.83,22.22-2.62,34,.07,40a119.22,119.22,0,0,1,5.82,15.5c3.49,11.94,11.6,31.16,19.9,49.59a387.85,387.85,0,0,1,32.66,123.89C591.43,686.64,592.14,706.51,587.92,702.65Z"
        transform="translate(-101.37 -69.54)"
        fill="#3e3f49"
      />
      <path
        d="M501,330.82s-26.5-14.91-19-20.7,46.37-8.28,46.37-8.28L542,333.72Z"
        transform="translate(-101.37 -69.54)"
        fill="#151519"
      />
      <path
        d="M575.5,338.27s-30.64,6.62-25.67,24c0,0,5,10.77,9.94,14.08s-31.47,7.45-31.47,7.45l-20.7-16.56,2.9-22.77s1.24-36,21.12-36S575.5,338.27,575.5,338.27Z"
        transform="translate(-101.37 -69.54)"
        fill="#535461"
      />
      <circle cx="604.97" cy="294.41" r="28.16" fill="#f9d3c4" />
      <path
        d="M723.73,403.7s24.84-4.14,31.47,11.59c2.78,6.61,5.86,13.36,8.49,19a92.19,92.19,0,0,1,8.86,38.13,44.84,44.84,0,0,1-.79,10c-2.48,10.77,4.14,44.72,4.14,44.72l-77,7.45a28.61,28.61,0,0,1,3.31-11.59c2.6-5.2-8-26.18-12.76-35a49,49,0,0,1-3.72-9c-3.67-12.21-12.14-42.46-7.54-47.07,0,0,5-24,11.59-24S723.73,403.7,723.73,403.7Z"
        transform="translate(-101.37 -69.54)"
        fill="#fff"
        opacity="0.1"
      />
      <path
        d="M723.73,401.21s24.84-4.14,31.47,11.59c2.78,6.61,5.86,13.36,8.49,19a92.19,92.19,0,0,1,8.86,38.13,44.84,44.84,0,0,1-.79,10c-2.48,10.77,4.14,44.72,4.14,44.72l-77,7.45a28.61,28.61,0,0,1,3.31-11.59c2.6-5.2-8-26.18-12.76-35a49,49,0,0,1-3.72-9c-3.67-12.21-12.14-42.46-7.54-47.07,0,0,5-24,11.59-24S723.73,401.21,723.73,401.21Z"
        transform="translate(-101.37 -69.54)"
        fill="#c8b5ac"
      />
      <path
        d="M697.23,407s-1.66-9.11,2.48-10.77,20.7-4.14,20.7-4.14,5,11.59,9.94,11.59S697.23,407,697.23,407Z"
        transform="translate(-101.37 -69.54)"
        fill="#c8b5ac"
      />
      <path
        d="M697.23,407s-1.66-9.11,2.48-10.77,20.7-4.14,20.7-4.14,5,11.59,9.94,11.59S697.23,407,697.23,407Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M716.28,452.55s-28.16-7.45-34.78-7.45-19.87-1.66-19.87-1.66-28.16-10.77-27.33-15.73-14.08-50.52-14.08-50.52,22.36-8.28,24-12.42c0,0,7.45,32.3,19.87,36.44s21.53,9.94,43.89,5.8a87.24,87.24,0,0,1,13.19-1.45c15.57-.48,29.08,11.36,29.77,26.92C751.47,444.07,744.85,455,716.28,452.55Z"
        transform="translate(-101.37 -69.54)"
        fill="#fff"
        opacity="0.1"
      />
      <path
        d="M716.28,450.07s-28.16-7.45-34.78-7.45S661.62,441,661.62,441s-28.16-10.77-27.33-15.73-14.08-50.52-14.08-50.52,22.36-8.28,24-12.42c0,0,7.45,32.3,19.87,36.44s21.53,9.94,43.89,5.8a87.24,87.24,0,0,1,13.19-1.45c15.57-.48,29.08,11.36,29.77,26.92C751.47,441.58,744.85,452.55,716.28,450.07Z"
        transform="translate(-101.37 -69.54)"
        fill="#c8b5ac"
      />
      <path
        d="M690.78,357.07c1.64,2.58,4.31,4.69,7.36,4.87,1.6.1,3.27-.33,4.77.24a5.63,5.63,0,0,1,3,3.43c1.85,4.89-.13,10.93,2.8,15.25,2,2.93,5.63,4.14,8.86,5.59-2.74,1.83-3.13,6-1.55,8.87s4.6,4.71,7.66,5.93a66.82,66.82,0,0,0,13.68,3.33c1.6.27,3.4.5,4.73-.44,1.63-1.17,1.74-3.64.94-5.48s-2.27-3.29-3.41-4.94a15.46,15.46,0,0,1-1.79-3.46,3.29,3.29,0,0,1-.27-1.62,4.12,4.12,0,0,1,1.76-2.24,18.51,18.51,0,0,0,5.71-8.32,34.63,34.63,0,0,0,1.39-8.6c.58-8.14.74-16.65-2.67-24.06a17.23,17.23,0,0,0-4.84-6.48,25.34,25.34,0,0,0-4.58-2.64c-6.35-3.1-12.74-6.21-19.55-8.08s-14.13-2.46-20.91-.48a13.53,13.53,0,0,0-5.45,2.8c-1.29,1.19-2.2,2.74-3.5,3.92-1.83,1.66-4.28,2.47-6.2,4-3.58,2.92-4.67,8-4.54,12.59.05,2,.76,4.49,2.73,4.73,3.26.4,4.66-5.09,7.86-5.76C688.77,349.22,689.19,354.58,690.78,357.07Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M690.78,355.41c1.64,2.58,4.31,4.69,7.36,4.87,1.6.1,3.27-.33,4.77.24a5.63,5.63,0,0,1,3,3.43c1.85,4.89-.13,10.93,2.8,15.25,2,2.93,5.63,4.14,8.86,5.59-2.74,1.83-3.13,6-1.55,8.87s4.6,4.71,7.66,5.93a66.82,66.82,0,0,0,13.68,3.33c1.6.27,3.4.5,4.73-.44,1.63-1.17,1.74-3.64.94-5.48s-2.27-3.29-3.41-4.94a15.46,15.46,0,0,1-1.79-3.46,3.29,3.29,0,0,1-.27-1.62,4.12,4.12,0,0,1,1.76-2.24,18.51,18.51,0,0,0,5.71-8.32,34.63,34.63,0,0,0,1.39-8.6c.58-8.14.74-16.65-2.67-24.06a17.23,17.23,0,0,0-4.84-6.48,25.34,25.34,0,0,0-4.58-2.64c-6.35-3.1-12.74-6.21-19.55-8.08s-14.13-2.46-20.91-.48a13.53,13.53,0,0,0-5.45,2.8c-1.29,1.19-2.2,2.74-3.5,3.92-1.83,1.66-4.28,2.47-6.2,4-3.58,2.92-4.67,8-4.54,12.59.05,2,.76,4.49,2.73,4.73,3.26.4,4.66-5.09,7.86-5.76C688.77,347.57,689.19,352.93,690.78,355.41Z"
        transform="translate(-101.37 -69.54)"
        fill="#d37f3f"
      />
      <path
        d="M790,679.46s-11.59,12.42-22.36,13.25l43.89,29.81s2.48,19-9.94,19S790,750.68,790,750.68h60.45s7.45-13.25,1.66-20.7-19-23.19-19-23.19-21.53-29-25.67-44.72C807.37,662.07,798.68,673.25,790,679.46Z"
        transform="translate(-101.37 -69.54)"
        fill="#fff"
        opacity="0.1"
      />
      <path
        d="M790.81,681.12s-11.59,12.42-22.36,13.25l43.89,29.81s2.48,19-9.94,19-11.59,9.11-11.59,9.11h60.45s7.45-13.25,1.66-20.7-19-23.19-19-23.19-21.53-29-25.67-44.72C808.2,663.72,799.51,674.9,790.81,681.12Z"
        transform="translate(-101.37 -69.54)"
        fill="#74555e"
      />
      <path
        d="M479.44,505.55l77,91.09s9.94,31.47-14.08,42.23l-9.94,11.59-40.58-15.73s13.25-4.14,0-28.16-38.09-48-38.09-48l-17.39-4.14-43.89,71.22s-5,31.47-24.84,35.61l-17.39,8.28-24-19,55.48-118.42s-8.28-58,14.91-65.42Z"
        transform="translate(-101.37 -69.54)"
        fill="#2a2a31"
      />
      <path
        d="M540.07,376.77c3.71,1.29,6.76,3.94,14.73-2.89,0,0,20.7,23.19,13.25,38.09s-82.81,103.51-82.81,103.51l-101-38.09s31.47-41.41,26.5-58.8,36.44-78.67,66.25-74.53,37.27,6.62,37.27,6.62,4.34,22.41,19.77,24.68A33.17,33.17,0,0,1,540.07,376.77Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M540.07,374.29c3.71,1.29,6.76,3.94,14.73-2.89,0,0,20.7,23.19,13.25,38.09S485.24,513,485.24,513l-101-38.09s31.47-41.41,26.5-58.8,36.44-78.67,66.25-74.53,37.27,6.62,37.27,6.62,4.34,22.41,19.77,24.68A33.17,33.17,0,0,1,540.07,374.29Z"
        transform="translate(-101.37 -69.54)"
        fill="#2a2a31"
      />
      <path
        d="M435.55,358.15s6.62,75.36,78.67,84.47l26.5-32.3s-41.41-20.7-41.41-26.5c0,0-15.73-12.42-10.77-33.12Z"
        transform="translate(-101.37 -69.54)"
        fill="#2a2a31"
      />
      <path
        d="M554.8,373.06s34.78,18.22,30.64,43.89c0,0-16.56-10.77-25.67-8.28Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M554.8,371.4s34.78,18.22,30.64,43.89c0,0-16.56-10.77-25.67-8.28Z"
        transform="translate(-101.37 -69.54)"
        fill="#757681"
      />
      <path
        d="M563.91,616.52s-41.41,47.2-41.41,53.83c0,0-24,33.12-12.42,52.17s34.78,22.36,34.78,22.36,12.42,9.11-7.45,13.25-82.81-9.94-82.81-9.94l13.25-34s14.08-43.06,14.08-52.17S493.52,624,493.52,624l42.23,13.25L549,619.83l9.49-8.28Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M563.91,618.18S522.5,665.38,522.5,672c0,0-24,33.12-12.42,52.17s34.78,22.36,34.78,22.36,12.42,9.11-7.45,13.25-82.81-9.94-82.81-9.94l13.25-34s14.08-43.06,14.08-52.17,11.59-38.09,11.59-38.09l42.23,13.25L549,621.49l9.49-8.28Z"
        transform="translate(-101.37 -69.54)"
        fill="#535461"
      />
      <path
        d="M399.94,638.05s-41.41,47.2-41.41,53.83c0,0-24,33.12-12.42,52.17s34.78,22.36,34.78,22.36,12.42,9.11-7.45,13.25-82.81-9.94-82.81-9.94l13.25-34S318,692.71,318,683.6s11.59-38.09,11.59-38.09l42.23,13.25L385,641.37l9.49-8.28Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M399.94,639.71s-41.41,47.2-41.41,53.83c0,0-24,33.12-12.42,52.17s34.78,22.36,34.78,22.36,12.42,9.11-7.45,13.25-82.81-9.94-82.81-9.94l13.25-34S318,694.37,318,685.26s11.59-38.09,11.59-38.09l42.23,13.25L385,643l9.49-8.28Z"
        transform="translate(-101.37 -69.54)"
        fill="#535461"
      />
      <path
        d="M612.77,412.81l154-246s11.59-2.48,9.94,7.45L620.22,421.09Z"
        transform="translate(-101.37 -69.54)"
        fill="#fc6681"
        className="animate-laser"
      />
      <path
        d="M499.31,349.87l-2.48,15.73S453.77,335,434.72,378l-8.28-34.78S483.58,325,499.31,349.87Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M499.31,348.21l-2.48,15.73s-43.06-30.64-62.11,12.42l-8.28-34.78S483.58,323.37,499.31,348.21Z"
        transform="translate(-101.37 -69.54)"
        fill="#757681"
      />
      <path
        d="M514.22,334.63v15.24l-14.91,7.45c-32.3-28.16-64.59-7.45-64.59-7.45s-47.2,75.36-55.48,82-40.68,135.51-40.68,135.51l.93-4.67S356,431,377.58,412s42.23-68.73,42.23-68.73c38.92-40.58,93.58-10.77,93.58-10.77S513.69,333.23,514.22,334.63Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M514.22,333v15.24l-14.91,7.45c-32.3-28.16-64.59-7.45-64.59-7.45s-47.2,75.36-55.48,82-40.68,135.51-40.68,135.51l.93-4.67S356,429.37,377.58,410.32s42.23-68.73,42.23-68.73c38.92-40.58,93.58-10.77,93.58-10.77S513.69,331.58,514.22,333Z"
        transform="translate(-101.37 -69.54)"
        fill="#2a2a31"
      />
      <path
        d="M530.78,310.12c-5.4,0-10.25,2.45-14.45,6a39.76,39.76,0,0,0,37.31,33.69c7.64-7,21-9.89,21-9.89S550.66,310.12,530.78,310.12Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <circle cx="455.08" cy="238.93" r="39.75" fill="#535461" />
      <path
        d="M580.47,262.92s-31.47-19-48.86,6.62-15.73,18.22-15.73,18.22l-34,24s28.16,0,45.55,6.62c0,0,52.17-30.64,61.28-10.77,0,0,9.94,4.14,10.77,10.77,0,0,2.48-4.14-2.48-13.25C597,305.15,607,281.13,580.47,262.92Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M580.47,261.26s-31.47-19-48.86,6.62-15.73,18.22-15.73,18.22l-34,24s28.16,0,45.55,6.62c0,0,52.17-30.64,61.28-10.77,0,0,9.94,4.14,10.77,10.77,0,0,2.48-4.14-2.48-13.25C597,303.49,607,279.48,580.47,261.26Z"
        transform="translate(-101.37 -69.54)"
        fill="#535461"
      />
      <polygon
        points="511.39 339.13 432.72 442.64 448.24 453.27 523.82 348.24 511.39 339.13"
        fill="#9f9bad"
      />
      <path
        d="M532.44,402.87s-25.67,23.19-24,50.52c0,0,19-6.62,45.55,3.31s32.3,14.91,32.3,14.91,27.33-14.08,24.84-24S597,433.51,597,433.51l-23.19-5S535.75,409.49,532.44,402.87Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M534.09,402.87s-25.67,23.19-24,50.52c0,0,19-6.62,45.55,3.31s32.3,14.91,32.3,14.91,27.33-14.08,24.84-24-14.08-14.08-14.08-14.08l-23.19-5S537.41,409.49,534.09,402.87Z"
        transform="translate(-101.37 -69.54)"
        fill="#757681"
      />
      <path
        d="M589.58,477.4s6.62,42.23-29.81,34c0,0-21.53-19.87-8.28-34S589.58,475.74,589.58,477.4Z"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M591.23,477.4s6.62,42.23-29.81,34c0,0-21.53-19.87-8.28-34S591.23,475.74,591.23,477.4Z"
        transform="translate(-101.37 -69.54)"
        fill="#757681"
      />
      <path
        d="M768,482s-.83,13.25-6.62,16.56-22.36,5.8-22.36,7.45-6.62,9.11-8.28,6.62"
        transform="translate(-101.37 -69.54)"
        opacity="0.1"
      />
      <path
        d="M648.43,650a146.48,146.48,0,0,1-15-.34s34.78,69.56,27.33,79.5c0,0-3.31,14.91-17.39,14.91s-6.62,7.45-1.66,8.28,48.86,4.14,58-8.28l-5.8-19.87s-7.45-24-5-29.81-1.66-54.66-1.66-54.66l-11.11,4.6A74.75,74.75,0,0,1,648.43,650Z"
        transform="translate(-101.37 -69.54)"
        fill="#fff"
        opacity="0.1"
      />
      <path
        d="M648.43,652.47a146.48,146.48,0,0,1-15-.34s34.78,69.56,27.33,79.5c0,0-3.31,14.91-17.39,14.91s-6.62,7.45-1.66,8.28,48.86,4.14,58-8.28l-5.8-19.87s-7.45-24-5-29.81-1.66-54.66-1.66-54.66l-11.11,4.6A74.75,74.75,0,0,1,648.43,652.47Z"
        transform="translate(-101.37 -69.54)"
        fill="#74555e"
      />
      <path
        d="M843.26,74.22a2.53,2.53,0,0,1-1.41-3.05,1.21,1.21,0,0,0,.05-.28h0a1.27,1.27,0,0,0-2.28-.84h0a1.21,1.21,0,0,0-.14.25,2.53,2.53,0,0,1-3.05,1.41,1.21,1.21,0,0,0-.28-.05h0a1.27,1.27,0,0,0-.84,2.28h0a1.21,1.21,0,0,0,.25.14A2.53,2.53,0,0,1,837,77.11a1.21,1.21,0,0,0-.05.28h0a1.27,1.27,0,0,0,2.28.84h0a1.21,1.21,0,0,0,.14-.25,2.53,2.53,0,0,1,3.05-1.41,1.21,1.21,0,0,0,.28.05h0a1.27,1.27,0,0,0,.84-2.28h0A1.21,1.21,0,0,0,843.26,74.22Z"
        transform="translate(-101.37 -69.54)"
        fill="#00bec5"
      />
      <path
        d="M579.26,136.22a2.53,2.53,0,0,1-1.41-3.05,1.21,1.21,0,0,0,.05-.28h0a1.27,1.27,0,0,0-2.28-.84h0a1.21,1.21,0,0,0-.14.25,2.53,2.53,0,0,1-3.05,1.41,1.21,1.21,0,0,0-.28-.05h0a1.27,1.27,0,0,0-.84,2.28h0a1.21,1.21,0,0,0,.25.14,2.53,2.53,0,0,1,1.41,3.05,1.21,1.21,0,0,0-.05.28h0a1.27,1.27,0,0,0,2.28.84h0a1.21,1.21,0,0,0,.14-.25,2.53,2.53,0,0,1,3.05-1.41,1.21,1.21,0,0,0,.28.05h0a1.27,1.27,0,0,0,.84-2.28h0A1.21,1.21,0,0,0,579.26,136.22Z"
        transform="translate(-101.37 -69.54)"
        fill="#00bec5"
      />
      <circle cx="824.32" cy="161.47" r="4.12" fill="#00bec5" />
      <rect x="188.22" y="332.23" width="2.04" height="11.53" fill="#00bec5" />
      <rect
        x="289.59"
        y="401.76"
        width="2.04"
        height="11.53"
        transform="translate(596.77 47.38) rotate(90)"
        fill="#00bec5"
      />
      <rect x="850.22" y="45.23" width="2.04" height="11.53" fill="#00bec5" />
      <rect
        x="951.59"
        y="114.76"
        width="2.04"
        height="11.53"
        transform="translate(971.77 -901.62) rotate(90)"
        fill="#00bec5"
      />
      <rect x="318.22" y="140.23" width="2.04" height="11.53" fill="#00bec5" />
      <rect
        x="419.59"
        y="209.76"
        width="2.04"
        height="11.53"
        transform="translate(534.77 -274.62) rotate(90)"
        fill="#00bec5"
      />
      <rect x="574.22" y="35.23" width="2.04" height="11.53" fill="#00bec5" />
      <rect
        x="675.59"
        y="104.76"
        width="2.04"
        height="11.53"
        transform="translate(685.77 -635.62) rotate(90)"
        fill="#00bec5"
      />
      <rect x="871.22" y="235.23" width="2.04" height="11.53" fill="#00bec5" />
      <rect
        x="972.59"
        y="304.76"
        width="2.04"
        height="11.53"
        transform="translate(1182.77 -732.62) rotate(90)"
        fill="#00bec5"
      />
      <path
        d="M374.88,97.16a2.49,2.49,0,0,1-1.39-3,1.2,1.2,0,0,0,.05-.28h0A1.25,1.25,0,0,0,371.3,93h0a1.2,1.2,0,0,0-.14.25,2.49,2.49,0,0,1-3,1.39,1.2,1.2,0,0,0-.28-.05h0a1.25,1.25,0,0,0-.83,2.25h0a1.2,1.2,0,0,0,.25.14,2.49,2.49,0,0,1,1.39,3,1.2,1.2,0,0,0-.05.28h0a1.25,1.25,0,0,0,2.25.83h0a1.2,1.2,0,0,0,.14-.25,2.49,2.49,0,0,1,3-1.39,1.2,1.2,0,0,0,.28.05h0a1.25,1.25,0,0,0,.83-2.25h0A1.2,1.2,0,0,0,374.88,97.16Z"
        transform="translate(-101.37 -69.54)"
        fill="#00bec5"
      />
      <path
        d="M280.74,275.38a2.49,2.49,0,0,1-1.39-3,1.2,1.2,0,0,0,.05-.28h0a1.25,1.25,0,0,0-2.25-.83h0a1.2,1.2,0,0,0-.14.25,2.49,2.49,0,0,1-3,1.39,1.2,1.2,0,0,0-.28-.05h0a1.25,1.25,0,0,0-.83,2.25h0a1.2,1.2,0,0,0,.25.14,2.49,2.49,0,0,1,1.39,3,1.2,1.2,0,0,0-.05.28h0a1.25,1.25,0,0,0,2.25.83h0a1.2,1.2,0,0,0,.14-.25,2.49,2.49,0,0,1,3-1.39,1.2,1.2,0,0,0,.28.05h0a1.25,1.25,0,0,0,.83-2.25h0A1.2,1.2,0,0,0,280.74,275.38Z"
        transform="translate(-101.37 -69.54)"
        fill="#00bec5"
      />
      <circle cx="74.93" cy="184.5" r="4.07" fill="#00bec5" />
      <circle cx="137.76" cy="54.96" r="4.07" fill="#00bec5" />
      <circle cx="841.81" cy="334.59" r="4.12" fill="#00bec5" />
    </FightStyled>
  );
};

export default Fight;
