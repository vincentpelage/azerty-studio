import React from "react";
import styled, { keyframes } from "styled-components";

import { globalVariables } from "../components/globalStyle";

const animateArrow = keyframes`
  0% {
    opacity: 0;
    transform: translate(-97.77px, -21.16px);
  } 
  
  100% {
    opacity: 1;
    transform: translate(-44.77px, -21.16px)
  }
`;

const ProcessStyled = styled.svg`
  height: 280px;
  margin-left: 4rem;
  @media (max-width: ${globalVariables.maxTablet}) {
    width: 50%;
    margin-left: 2rem;
    height: auto;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    width: 80%;
    margin-left: 0;
    margin-top: 1rem;
  }
  .animate-arrow {
    animation: ${animateArrow} 2s ease-in-out infinite;
  }
  .animate-arrow-delay {
    opacity: 0;
    animation-delay: 1s;
  }
`;

const Process = () => (
  <ProcessStyled
    id="a6f4e524-a1b8-434a-a0ca-43acb27f4769"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1110.46 857.68"
  >
    <defs>
      <linearGradient
        id="ed123d47-1cc8-43ee-8efc-264e01b6d696"
        x1="2277.26"
        y1="874.51"
        x2="2277.26"
        y2="331.66"
        gradientTransform="translate(-1992)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="gray" stopOpacity="0.25" />
        <stop offset="0.54" stopColor="gray" stopOpacity="0.12" />
        <stop offset="1" stopColor="gray" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <ellipse
      cx="346.73"
      cy="821.68"
      rx="237.5"
      ry="36"
      fill="#ee8e9e"
      opacity="0.1"
    />
    <path
      d="M387.66,59C425.33,25.8,484.47,19,538.31,21.68,707.39,30,860,110.67,992.05,201.94c47.8,33.05,94.86,68.65,125.88,114.16,63.16,92.62,44.42,220.94-43.4,297.24-29.88,26-66.1,45.87-103.28,63.51-66.12,31.37-137.46,56.55-212.5,63.72-53.51,5.11-107.68.95-160.88-6.18-148.64-19.92-294.54-64-416.82-139.37C127.42,562,76.87,520.86,54.76,467.37s-8-121.27,46.81-152.92c22.65-13.1,49.73-19,76.24-24.57,39-8.17,78.68-16.23,113.9-32.84,36.37-17.17,79.44-50.36,72.24-88.34C356.22,127.93,350,92.14,387.66,59Z"
      transform="translate(-44.77 -21.16)"
      fill="#ee8e9e"
      opacity="0.1"
    />
    <path
      d="M965.6,109.62c6.76,44.56-12.05,84.37-12.05,84.37S923.78,161.56,917,117c-3.79-25,.46-48.48,4.92-64.3a11,11,0,0,1,19.89-3C950.78,63.46,961.81,84.63,965.6,109.62Z"
      transform="translate(-44.77 -21.16)"
      fill="#ee8e9e"
    />
    <path
      d="M1091.3,180.64a76.91,76.91,0,0,1,19.85,2.51c10.91,2.8,11.08,18.25.23,21.29a77.15,77.15,0,0,1-19.79,2.94c-24.53.27-44.56-12.89-44.56-12.89S1066.77,180.91,1091.3,180.64Z"
      transform="translate(-44.77 -21.16)"
      fill="#ee8e9e"
    />
    <path
      d="M1022.32,112.9c-22.83,25.09-27.66,57.88-27.66,57.88s32.18-7.9,55-33c10.58-11.63,17.3-24.91,21.46-35.81A11,11,0,0,0,1056,88.17C1045.48,93.34,1032.9,101.27,1022.32,112.9Z"
      transform="translate(-44.77 -21.16)"
      fill="#ee8e9e"
    />
    <rect
      x="511.46"
      y="87.01"
      width="514"
      height="618.97"
      rx="19.8"
      fill="#464353"
    />
    <rect
      x="555.8"
      y="149.45"
      width="425.32"
      height="494.09"
      fill="#ee8e9e"
      opacity="0.1"
    />
    <circle cx="768.46" cy="676.12" r="18.1" fill="#fff" />
    <path
      d="M813.23,152.92a8.55,8.55,0,1,1,8.55-8.55A8.57,8.57,0,0,1,813.23,152.92Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
    />
    <path
      d="M813.23,136.32a8.05,8.05,0,1,1-8.05,8.05,8.06,8.06,0,0,1,8.05-8.05m0-1a9.05,9.05,0,1,0,9,9.05,9,9,0,0,0-9-9.05Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
    />
    <rect
      x="575.56"
      y="302.51"
      width="88.21"
      height="119.92"
      rx="4.3"
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit="10"
    />
    <rect
      x="583.83"
      y="332.73"
      width="71.67"
      height="38.05"
      rx="7.14"
      fill="#ee8e9e"
      opacity="0.5"
    />
    <rect
      x="598.79"
      y="386.3"
      width="41.75"
      height="5.91"
      rx="1.69"
      fill="#ee8e9e"
    />
    <rect
      x="724.69"
      y="302.51"
      width="88.21"
      height="119.92"
      rx="4.3"
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit="10"
    />
    <rect
      x="747.89"
      y="321.24"
      width="42.27"
      height="22.44"
      rx="1.46"
      fill="#ee8e9e"
      opacity="0.5"
    />
    <rect
      x="741.71"
      y="364.71"
      width="53.96"
      height="5.91"
      rx="1.69"
      fill="#ee8e9e"
    />
    <rect
      x="741.71"
      y="375.73"
      width="53.96"
      height="5.91"
      rx="1.69"
      fill="#ee8e9e"
    />
    <rect
      x="873.15"
      y="217.32"
      width="88.21"
      height="119.92"
      rx="4.3"
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit="10"
    />
    <rect
      x="888.54"
      y="235.93"
      width="57.43"
      height="26.8"
      rx="1.46"
      fill="#ee8e9e"
      opacity="0.5"
    />
    <rect
      x="888.54"
      y="274.88"
      width="57.43"
      height="26.8"
      rx="1.46"
      fill="#ee8e9e"
      opacity="0.5"
    />
    <rect
      x="883.95"
      y="323.28"
      width="18.84"
      height="8.27"
      rx="3.83"
      fill="#ee8e9e"
    />
    <rect
      x="907.84"
      y="323.28"
      width="18.84"
      height="8.27"
      rx="3.83"
      fill="#ee8e9e"
    />
    <rect
      x="931.73"
      y="323.28"
      width="18.84"
      height="8.27"
      rx="3.83"
      fill="#ee8e9e"
    />
    <rect
      x="872.94"
      y="387.7"
      width="88.21"
      height="119.92"
      rx="4.3"
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit="10"
    />
    <rect
      x="879.75"
      y="401.72"
      width="26.36"
      height="26.8"
      rx="1.46"
      fill="#ee8e9e"
      opacity="0.5"
    />
    <rect
      x="890.07"
      y="444.84"
      width="53.96"
      height="5.91"
      rx="1.69"
      fill="#ee8e9e"
    />
    <rect
      x="890.07"
      y="456.79"
      width="53.96"
      height="5.91"
      rx="1.69"
      fill="#ee8e9e"
    />
    <rect
      x="890.07"
      y="468.74"
      width="53.96"
      height="5.91"
      rx="1.69"
      fill="#ee8e9e"
    />
    <path
      d="M759.29,380.77l-1.35.65L747,386.68l-1,.47a.54.54,0,0,1-.73-.29.59.59,0,0,1,0-.2v-3.11a.53.53,0,0,0-.53-.53H718.15a.54.54,0,0,1-.54-.53V378.1a.54.54,0,0,1,.54-.53h26.62a.54.54,0,0,0,.53-.54v-3.18a.65.65,0,0,1,0-.2.54.54,0,0,1,.73-.28l1,.47,10.91,5.31,1.35.66A.53.53,0,0,1,759.29,380.77Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit="10"
      className="animate-arrow"
    />
    <path
      d="M907.32,353.8l-.88,1.21-7.16,9.76-.63.87a.55.55,0,0,1-.78.09.48.48,0,0,1-.12-.16l-1.46-2.74a.55.55,0,0,0-.73-.23l-23.5,12.51a.53.53,0,0,1-.72-.22L869.28,371a.53.53,0,0,1,.22-.72L893,357.79a.53.53,0,0,0,.22-.72l-1.49-2.81a.35.35,0,0,1-.06-.19.52.52,0,0,1,.51-.59l1.07,0,12.12-.44,1.5-.05A.53.53,0,0,1,907.32,353.8Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit="10"
      className="animate-arrow animate-arrow-delay"
    />
    <path
      d="M907.24,405.06h-1.49l-12.11,0h-1.07a.53.53,0,0,1-.53-.57.45.45,0,0,1,.05-.19l1.34-2.81a.53.53,0,0,0-.25-.71l-24-11.52a.54.54,0,0,1-.25-.72l1.9-3.95a.52.52,0,0,1,.71-.25l24,11.53a.55.55,0,0,0,.72-.25l1.38-2.87a.52.52,0,0,1,.89-.1l.67.83,7.53,9.52.93,1.18A.53.53,0,0,1,907.24,405.06Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit="10"
      className="animate-arrow animate-arrow-delay"
    />
    <polygon
      points="424.19 606.65 424.11 609.58 419.01 789.65 410.43 789.65 414.64 609.58 414.72 606.2 424.19 606.65"
      fill="#504f60"
    />
    <polygon
      points="424.19 606.65 424.11 609.58 419.01 789.65 410.43 789.65 414.64 609.58 414.72 606.2 424.19 606.65"
      opacity="0.1"
    />
    <polygon
      points="473.84 759.19 467.42 759.17 371.97 758.97 366.89 758.96 369.59 750.61 473.16 750.61 473.84 759.19"
      fill="#504f60"
    />
    <polygon
      points="424.19 606.65 424.11 609.58 414.64 609.58 414.72 606.2 424.19 606.65"
      opacity="0.1"
    />
    <rect x="411.9" y="602.25" width="15.91" height="5.98" fill="#504f60" />
    <polygon
      points="372.82 750.61 371.97 758.97 366.89 758.96 369.59 750.61 372.82 750.61"
      opacity="0.1"
    />
    <polygon
      points="386.52 602.14 386.25 604.73 365.08 813.56 355.38 813.11 377.69 604.73 377.94 602.36 386.52 602.14"
      fill="#504f60"
    />
    <polygon
      points="473.84 759.19 467.42 759.17 466.55 750.61 473.16 750.61 473.84 759.19"
      opacity="0.1"
    />
    <polygon
      points="484 813.11 474.29 813.56 453.12 604.73 452.86 602.14 461.43 602.36 461.68 604.73 484 813.11"
      fill="#504f60"
    />
    <rect x="311.38" y="396.23" width="213.91" height="205.11" fill="#fff" />
    <rect
      x="264.46"
      y="396.23"
      width="308"
      height="205.11"
      rx="4.13"
      fill="#fff"
    />
    <path
      d="M467.27,348.8v49.53h-8.34V348.8a4.17,4.17,0,1,1,8.34,0Z"
      transform="translate(-44.77 -21.16)"
      fill="#504f60"
    />
    <rect x="414.16" y="372.66" width="8.35" height="4.51" opacity="0.1" />
    <path
      d="M470.55,397.2v16.36H455.66V397.2a2,2,0,0,1,2-2h10.83A2,2,0,0,1,470.55,397.2Z"
      transform="translate(-44.77 -21.16)"
      fill="#504f60"
    />
    <circle cx="418.33" cy="384.39" r="3.16" opacity="0.1" />
    <circle cx="418.33" cy="383.71" r="3.16" fill="#3f3d56" />
    <rect x="410.89" y="390.37" width="14.89" height="2.03" opacity="0.1" />
    <rect x="404.79" y="393.08" width="27.08" height="4.51" opacity="0.1" />
    <rect x="404.79" y="391.72" width="27.08" height="4.51" fill="#504f60" />
    <path
      d="M364.63,596H476.21a6,6,0,0,1,6,6v0a0,0,0,0,1,0,0H358.65a0,0,0,0,1,0,0v0A6,6,0,0,1,364.63,596Z"
      opacity="0.1"
    />
    <polygon
      points="377.94 602.36 386.52 602.14 386.25 604.73 377.69 604.73 377.94 602.36"
      opacity="0.1"
    />
    <rect x="411.9" y="602.25" width="15.91" height="2.48" opacity="0.1" />
    <polygon
      points="461.68 604.73 453.12 604.73 452.86 602.14 461.43 602.36 461.68 604.73"
      opacity="0.1"
    />
    <path
      d="M364.63,597.4H476.21a6,6,0,0,1,6,6v0a0,0,0,0,1,0,0H358.65a0,0,0,0,1,0,0v0a6,6,0,0,1,6-6Z"
      fill="#504f60"
    />
    <path
      d="M562.59,441.48a1.49,1.49,0,0,1,1.71,1.64c-1.45,14-.52,28.34,1.05,42.31.73,6.39,1.72,13.15,4.55,17.89a1.51,1.51,0,0,1-.2,1.86,4,4,0,0,1-2.78.83l-44.63.25a1.49,1.49,0,0,1-1.46-1.84c3.59-15.3,2.82-32,1.38-47.87-.71-7.81-1.12-12,4.71-12.55,6-.54,12-.79,18-1.29C546.36,442.59,557.9,442.25,562.59,441.48Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
      stroke="#33313f"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <path
      d="M528.44,533.17a1.49,1.49,0,0,0-1.71,1.64c1.45,14,.52,28.34-1.06,42.31-.72,6.39-1.71,13.15-4.54,17.9a1.49,1.49,0,0,0,.2,1.85,4,4,0,0,0,2.78.83l44.63.26a1.51,1.51,0,0,0,1.46-1.85c-3.59-15.3-2.82-32-1.38-47.87.71-7.81,1.12-12-4.71-12.55s-12-.79-18-1.29C544.67,534.28,533.13,533.94,528.44,533.17Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
      stroke="#33313f"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <path
      d="M541.55,558.93a132.37,132.37,0,0,1,15.56.19,1.47,1.47,0,0,1,1.32,1.3l.49,4.09a.58.58,0,0,1-.12.53.55.55,0,0,1-.38.1c-2.18.06-4.36-.19-6.53,0-1.35.11-2.69.37-4,.52a47.75,47.75,0,0,1-6.66.12,33.56,33.56,0,0,1-9.27-1.14s.18-3.39.18-3.71c0-1.58-.05-1.72,1.58-1.76Z"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M541.55,577.37a130.24,130.24,0,0,0,15.56-.2,1.47,1.47,0,0,0,1.32-1.3l.49-4.08a.6.6,0,0,0-.12-.54.55.55,0,0,0-.38-.1c-2.18-.06-4.36.2-6.53,0-1.35-.1-2.69-.36-4-.51a46.26,46.26,0,0,0-6.66-.12,33.56,33.56,0,0,0-9.27,1.14s.18,3.38.18,3.71c0,1.58-.05,1.71,1.58,1.76Z"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M541.55,584.59a130.24,130.24,0,0,1,15.56.2,1.47,1.47,0,0,1,1.32,1.3l.49,4.08a.6.6,0,0,1-.12.54.55.55,0,0,1-.38.1c-2.18.06-4.36-.2-6.53,0-1.35.1-2.69.37-4,.52a47.75,47.75,0,0,1-6.66.11,33.55,33.55,0,0,1-9.27-1.13s.18-3.39.18-3.72c0-1.58-.05-1.71,1.58-1.75Z"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M548.12,499a6.61,6.61,0,0,1,.44,3.48.52.52,0,0,1-.07.27.54.54,0,0,1-.42.15l-9.5.37s.53-2.8.6-3c.33-1.14,1.16-.84,2.23-.9Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M562.47,499a6.61,6.61,0,0,1,.43,3.48.51.51,0,0,1-.06.27.56.56,0,0,1-.42.15l-9.51.37s.54-2.8.61-3c.32-1.14,1.15-.84,2.23-.9Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M556.74,451.26l1.28,11a3,3,0,0,1-2.73,3.31,142.81,142.81,0,0,1-24.38-.16,3,3,0,0,1-2.71-2.86,42.69,42.69,0,0,0-.86-5.83c-.33-2-.69-3.93,1.67-4.52s5.59-.17,8.17-.22q4.64-.09,9.25-.26C547.29,451.72,556.74,451.21,556.74,451.26Z"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <path
      d="M556.74,491,558,480a3,3,0,0,0-2.73-3.31,143.84,143.84,0,0,0-24.38.15,3,3,0,0,0-2.71,2.87,42.69,42.69,0,0,1-.86,5.83c-.33,2-.69,3.93,1.67,4.52s5.59.17,8.17.22c3.09.06,6.17.14,9.25.26C547.29,490.57,556.74,491.08,556.74,491Z"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <path
      d="M543.89,540.57q-.5,5.49-.63,11a52.07,52.07,0,0,1-10.91-1.25,1.93,1.93,0,0,1-1.79-2.36c-.07-2.28-1.27-7.37,1.94-7.69C533.46,540.17,543.88,540.75,543.89,540.57Z"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M367.32,490.61a3.19,3.19,0,0,1,3.52,3.47c-1.15,13.31-.24,26.94,1.26,40.21.67,5.9,1.56,12.11,3.92,16.76a2.62,2.62,0,0,1-2.32,3.82h0l-44.28.26a1.76,1.76,0,0,1-1.73-2.14c3.51-15.22,2.74-31.84,1.31-47.58-.72-7.81-1.12-12,4.7-12.55,6-.53,12-.78,17.95-1.29C352.92,491.47,362,491.19,367.32,490.61Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <path
      d="M428.92,490.36a1.59,1.59,0,0,0-1.82,1.76c1.43,13.93.5,28.25-1.07,42.17-.72,6.39-1.71,13.12-4.53,17.87a1.58,1.58,0,0,0,.42,2.07,4.19,4.19,0,0,0,2.54.64l44.51.26a1.6,1.6,0,0,0,1.55-2c-3.55-15.27-2.79-31.95-1.35-47.75.71-7.81,1.12-12-4.7-12.55-6-.53-12-.78-18-1.29C445,491.45,433.7,491.12,428.92,490.36Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
      stroke="#33313f"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <line
      x1="296.04"
      y1="478.29"
      x2="318.68"
      y2="508.49"
      fill="#fff"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <line
      x1="318.68"
      y1="476.03"
      x2="296.79"
      y2="510"
      fill="#fff"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <line
      x1="397.07"
      y1="479.71"
      x2="409.4"
      y2="496.16"
      fill="#fff"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <line
      x1="409.4"
      y1="478.47"
      x2="397.48"
      y2="496.98"
      fill="#fff"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M348.29,539.3a132.56,132.56,0,0,1,15.57.19,1.49,1.49,0,0,1,1.32,1.3l.48,4.09a.63.63,0,0,1-.11.54.7.7,0,0,1-.38.1c-2.18.06-4.37-.2-6.54,0-1.35.1-2.68.36-4,.51a47.72,47.72,0,0,1-6.66.12,33.44,33.44,0,0,1-9.26-1.14c-.06,0,.18-3.38.18-3.71,0-1.58-.06-1.71,1.57-1.76Z"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M443.41,524.2a130.43,130.43,0,0,1,15.57.2,1.47,1.47,0,0,1,1.32,1.3l.48,4.08a.63.63,0,0,1-.11.54.56.56,0,0,1-.38.1c-2.18.06-4.37-.2-6.54,0-1.35.1-2.68.37-4,.51a46.26,46.26,0,0,1-6.66.12,33.56,33.56,0,0,1-9.27-1.14c-.05,0,.18-3.38.18-3.71,0-1.58-.05-1.71,1.58-1.76Z"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M451.34,535.53a132.39,132.39,0,0,0-15.56.19,1.47,1.47,0,0,0-1.32,1.3L434,541.1a.57.57,0,0,0,.11.54.55.55,0,0,0,.38.1c2.18.06,4.36-.19,6.54,0,1.35.1,2.68.37,4,.52a49.33,49.33,0,0,0,6.66.12,33.47,33.47,0,0,0,9.27-1.14c.05,0-.18-3.39-.18-3.71,0-1.59.06-1.72-1.57-1.76Z"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M386.63,528.13s14.71-.75,17.35,0"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <path
      d="M404,520.21s6.41,6.41,6.41,7.92-8.3,6.79-8.3,6.79"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <path
      d="M482.84,514.45s13.33-6.24,16.06-6.54"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <path
      d="M495.92,500.58s8.35,3.52,8.92,4.91-5.12,9.42-5.12,9.42"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <path
      d="M482.7,530.43s13.55,5.75,15.6,7.59"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <path
      d="M501.76,530.89s3,8.57,2.3,9.93-10.43,2.48-10.43,2.48"
      transform="translate(-44.77 -21.16)"
      fill="none"
      stroke="#33313f"
      strokeMiterlimit="10"
      strokeWidth="3"
    />
    <path
      d="M535.29,499a6.61,6.61,0,0,1,.43,3.48.51.51,0,0,1-.06.27.56.56,0,0,1-.42.15l-9.51.37s.54-2.8.61-3c.32-1.14,1.16-.84,2.23-.9Z"
      transform="translate(-44.77 -21.16)"
      fill="#fff"
      stroke="#33313f"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <polygon
      points="310.87 564.02 314.23 560.89 311.23 560.77 309.66 563.18 310.87 564.02"
      fill="#33313f"
    />
    <polygon
      points="286.7 585.94 290.26 581.37 291.05 580.55 301.95 569.13 305.66 565.25 307.4 565.04 309.9 562.56 311.37 563.85 308.94 566.69 308.98 568.18 305.19 572.29 294.49 583.91 293.8 584.65 289.5 588.63 286.7 585.94"
      fill="#65617d"
    />
    <polygon
      points="291.05 580.55 301.95 569.13 305.19 572.29 294.49 583.91 291.05 580.55"
      fill="#33313f"
    />
    <path
      d="M352.27,606.11a48,48,0,0,1-8.19-10c-4.8-7.48-12.82-11.52-18.32-13.53l0-2.43.34-.07-.15-2.26.15,0-.39-6v-.05h0L323.73,542s-7.05-19.85,5.48-38.16.78-35.87-11-42.74c0,0-5.48-29-.78-35.87a203.68,203.68,0,0,0-19.68-9.95c-.11-.36-.2-.72-.29-1.1-.13-2.7-.3-5.4-.45-8.1a29.47,29.47,0,0,1,.77-4.16c.15-.57.32-1.14.5-1.73a29.78,29.78,0,0,0,19.15-27.61,29,29,0,0,0-1.86-10.24A12.87,12.87,0,0,0,317,359c.75-3.09-.1-6.39-1.86-9.52C312,342.7,304.17,336.35,298.49,334c-8.14-3.3-20.39-2.52-28.87-1.5-4.76.57-10.19,2.16-11.91,6.52-.63,1.6-.64,3.37-1.08,5-1.78,6.66-9.47,9.76-14.22,14.86-4.2,4.5-6,10.59-7.4,16.52a151.21,151.21,0,0,0-2.75,51.85c.48,4,1.12,7.95,1.8,11.91-2.86,4-5.44,11.07-4.26,23.35l-9.4,44.26-3.91,25.95s-2.35,10.68,7,19.84c6,5.84,13.25,15.71,17.72,22.1a52.45,52.45,0,0,0-2.85,17.59c.1,2.72.25,5.35.44,7.85a69.33,69.33,0,0,0,3,15.64c1.1,10.66,3.27,24.29,7.52,33l1.56,46.55s-2.35,42.74-7,51.13,10.17,79.37,10.17,79.37v9.92l-2.5,7.34-.63-.47c-11.74,14.5,0,19.84,0,19.84s3.2.15,8.31.35a9.36,9.36,0,0,0,5,10.34s66.53,3.05,78.28,0,8.61-13.74,2.34-13c-2.39.3-5.92-.33-9.37-1.22,3.65-4.25.73-10-3.93-9.46-6.26.76-20.35-4.78-20.35-4.78l-.07.09a10.5,10.5,0,0,0-1.38-.42,156.67,156.67,0,0,1-15.49-4.33c-3-6.43-10-23.71-5-37.11,2.26-6.06,3-14.12,3-21.94a249,249,0,0,1,10.31-69.66l9.39-32s13.31-38.93,14.09-49.61L326,614.13c11,7,19.75,4.9,25.33,1.63A6,6,0,0,0,352.27,606.11Zm-104.47-81c.27-1.12.49-2.34.68-3.63,1.84,0,3.69,0,5.53-.06a28.17,28.17,0,0,1,2.78,15C252.55,535.11,246.21,531.9,247.8,525.16Z"
      transform="translate(-44.77 -21.16)"
      fill="url(#ed123d47-1cc8-43ee-8efc-264e01b6d696)"
    />
    <path
      d="M255.24,832l-3,9,9.79,9.79,32.39,7.53,23.35-2.26-1.51-8.29h0a10,10,0,0,0-7.42-7.29c-9.6-2.26-27.9-7.4-31.75-14.55Z"
      transform="translate(-44.77 -21.16)"
      fill="#db8b8b"
    />
    <path
      d="M255.24,832l-3,9,9.79,9.79,32.39,7.53,23.35-2.26-1.51-8.29h0a10,10,0,0,0-7.42-7.29c-9.6-2.26-27.9-7.4-31.75-14.55Z"
      transform="translate(-44.77 -21.16)"
      opacity="0.1"
    />
    <path
      d="M310.23,853.8l-4.52-6,4.52-7s13.55,5.47,19.58,4.72,9,9.79-2.26,12.8-75.32,0-75.32,0-11.3-5.27,0-19.58l9.79,7.53s16.57,9,24.86,7.53Z"
      transform="translate(-44.77 -21.16)"
      fill="#2e3037"
    />
    <path
      d="M330.56,866.61l-23.35,2.26-32.39-7.54L265,851.54l.8-2.39,1.12-3.36,1.1-3.29,21.84-6a13.5,13.5,0,0,0,4.43,4.43c7.09,4.85,19.84,8.36,27.32,10.11.31.08.63.17.93.28a9.92,9.92,0,0,1,6.49,7Z"
      transform="translate(-44.77 -21.16)"
      fill="#db8b8b"
    />
    <path
      d="M330.56,866.61l-23.35,2.26-32.39-7.54L265,851.54l.8-2.39,9,6.91s16.58,9,24.86,7.53H323l-4.52-6,4.06-6.27a9.92,9.92,0,0,1,6.49,7Z"
      transform="translate(-44.77 -21.16)"
      opacity="0.1"
    />
    <path
      d="M323,864.35l-4.52-6,4.52-7s13.56,5.47,19.58,4.72,9,9.79-2.25,12.81-75.33,0-75.33,0-11.3-5.28,0-19.59l9.79,7.53s16.58,9,24.86,7.54Z"
      transform="translate(-44.77 -21.16)"
      fill="#2e3037"
    />
    <path
      d="M304.2,427.48s-36.15,3.76-30.88-11.3a27,27,0,0,0,1.11-13.3,36.91,36.91,0,0,0-6.38-15.32l33.89,5.27a42.32,42.32,0,0,0-4.59,10.88C293.31,419.7,304.2,427.48,304.2,427.48Z"
      transform="translate(-44.77 -21.16)"
      fill="#db8b8b"
    />
    <path
      d="M242.44,599.21s.75,32.39,8.28,48.21l1.51,45.94s-2.26,42.19-6.78,50.47,9.79,78.34,9.79,78.34v12.05s24.1,9,30.88-1.51l-6.78-89.63,3-124.28Z"
      transform="translate(-44.77 -21.16)"
      fill="#35323e"
    />
    <path
      d="M242.43,599.21s.75,32.39,8.28,48.21l1.51,45.94s-2.26,42.19-6.78,50.47,9.79,78.34,9.79,78.34v12.05s24.1,9,30.88-1.51l-6.78-89.63,3-124.28Z"
      transform="translate(-44.77 -21.16)"
      opacity="0.1"
    />
    <path
      d="M227.37,495.27l-4.52,12.05-3.76,25.61a22.65,22.65,0,0,0,6.78,19.58c9,9,21.09,27.87,21.09,27.87l14.31-42.93s-14.31-2.26-12-12.05,1.5-27.87,1.5-27.87Z"
      transform="translate(-44.77 -21.16)"
      fill="#ee8e9e"
    />
    <path
      d="M294.32,840.91c-9.67,15.21-24.7,6.59-27.37,4.88l1.1-3.29,21.84-6A13.5,13.5,0,0,0,294.32,840.91Z"
      transform="translate(-44.77 -21.16)"
      opacity="0.1"
    />
    <path
      d="M324.54,628.59c-.76,10.54-13.56,49-13.56,49l-9,31.61A251.29,251.29,0,0,0,292,777.92c0,7.71-.71,15.67-2.88,21.65-6,16.57,6,39.17,6,39.17-10.54,18.83-28.62,6-28.62,6v-12S252.23,767.18,256,754.38s5.28-47.46,5.28-47.46V644.41a70.9,70.9,0,0,1-20.67-45c-.18-2.47-.33-5.06-.42-7.75-.61-17,11-36.92,15.54-44,1.1-1.72,1.78-2.68,1.78-2.68L324,571.36l.15.06,0,2.57,0,5.7Z"
      transform="translate(-44.77 -21.16)"
      fill="#35323e"
    />
    <path
      d="M301.94,392.83a42.32,42.32,0,0,0-4.59,10.88,29.42,29.42,0,0,1-22.92-.83,36.91,36.91,0,0,0-6.38-15.32Z"
      transform="translate(-44.77 -21.16)"
      opacity="0.1"
    />
    <circle cx="242.11" cy="353.59" r="29.38" fill="#db8b8b" />
    <path
      d="M324.54,579.63l-.33.06C292.63,586.18,253,553.27,253,553.27a38,38,0,0,0,2.74-5.61c1.1-1.72,1.78-2.68,1.78-2.68L324,571.36l.17,2.63Z"
      transform="translate(-44.77 -21.16)"
      opacity="0.1"
    />
    <path
      d="M316.25,426.73s-42.18-25.61-55.74-15.07l-18.83,24.1s-12.05,3.77-9.79,27.87l-9,43.69L250,514.1s15.82,15.06,3,36.91c0,0,39.92,33.14,71.56,26.36L322.28,542s-6.78-19.59,5.27-37.66.75-35.4-10.54-42.18C317,462.13,311.73,433.5,316.25,426.73Z"
      transform="translate(-44.77 -21.16)"
      fill="#ee8e9e"
    />
    <path
      d="M318.51,580.38s15.82,3,23.35,15.07a46.86,46.86,0,0,0,7.89,9.85,6,6,0,0,1-.94,9.52c-6,3.6-15.72,5.81-28-4.31C299.68,593.19,318.51,580.38,318.51,580.38Z"
      transform="translate(-44.77 -21.16)"
      fill="#db8b8b"
    />
    <path
      d="M295.16,441s-15.06-1.51-18.83,37.66-9.79,48.2-9.79,48.2-3.77,20.34,5.27,32.39S298.17,597,298.17,597s18.84,5.28,22.6-13.56l-23.35-43.68s-3.76-15.07,5.27-25.61S318.51,433.5,295.16,441Z"
      transform="translate(-44.77 -21.16)"
      opacity="0.1"
    />
    <path
      d="M296.67,438.78s-15.07-1.51-18.83,37.66-9.79,48.2-9.79,48.2S264.28,545,273.32,557s26.36,37.66,26.36,37.66,18.83,5.28,22.6-13.55l-23.35-43.69s-3.77-15.07,5.27-25.61S320,431.24,296.67,438.78Z"
      transform="translate(-44.77 -21.16)"
      fill="#ee8e9e"
    />
    <path
      d="M309.1,467s1.5,23.35-5.28,36.16-6.78,29.37,0,38.41"
      transform="translate(-44.77 -21.16)"
      opacity="0.1"
    />
    <path
      d="M312.86,438.4s-6-6-23.35-6.78-24.85-6-24.85-6"
      transform="translate(-44.77 -21.16)"
      opacity="0.1"
    />
    <path
      d="M271,336.79c-4.58.56-9.81,2.13-11.46,6.44-.61,1.58-.62,3.32-1.05,5-1.71,6.58-9.11,9.64-13.68,14.67-4,4.44-5.81,10.45-7.12,16.3A153.13,153.13,0,0,0,235,430.34c1.47,12.49,4.47,24.78,5.32,37.33s-.7,25.75-7.56,36.29c-3,4.54-6.84,8.52-8.93,13.51,4.32,3.5,10.28,4,15.84,4.19q9.72.33,19.44,0c3.4-.12,6.95-.34,9.88-2.06a15.31,15.31,0,0,0,5.19-5.56c3.7-6.29,4.64-13.85,4.48-21.15s-1.31-14.55-1.45-21.85c-.07-4,.24-8.2,2.53-11.46,1.65-2.35,4.16-3.93,6.31-5.84,8.07-7.14,10.83-18.6,11.1-29.37s-1.5-21.56-.59-32.29c.35-4.21,1.92-9.25,6.06-10.07,1.3-.26,2.69,0,3.93-.5,3.32-1.27,3-5.95,3.94-9.37,1.07-3.85,4.35-6.82,5.27-10.7,2.17-9.11-9.43-20-17-23.16C290.91,335,279.12,335.79,271,336.79Z"
      transform="translate(-44.77 -21.16)"
      opacity="0.1"
    />
    <path
      d="M270.21,335.29c-4.58.56-9.81,2.13-11.46,6.43a46,46,0,0,0-1,5c-1.71,6.58-9.12,9.64-13.69,14.68-4,4.43-5.81,10.44-7.12,16.3a153.33,153.33,0,0,0-2.64,51.17c1.47,12.49,4.47,24.79,5.31,37.33s-.69,25.75-7.55,36.29c-3,4.54-6.84,8.52-8.93,13.51,4.32,3.51,10.28,4,15.84,4.19q9.72.33,19.44,0c3.4-.12,6.95-.33,9.88-2.06a15.13,15.13,0,0,0,5.18-5.56c3.71-6.29,4.64-13.85,4.49-21.15s-1.32-14.55-1.45-21.85c-.07-4,.24-8.2,2.52-11.45,1.66-2.36,4.17-3.94,6.32-5.84,8.06-7.15,10.83-18.61,11.1-29.38s-1.51-21.56-.6-32.29c.36-4.2,1.93-9.25,6.06-10.06,1.31-.26,2.7,0,3.94-.51,3.32-1.27,3-5.94,3.94-9.37,1.06-3.85,4.34-6.81,5.27-10.69,2.17-9.12-9.43-20-17-23.17C290.15,333.51,278.37,334.28,270.21,335.29Z"
      transform="translate(-44.77 -21.16)"
      fill="#35323e"
    />
  </ProcessStyled>
);

export default Process;
