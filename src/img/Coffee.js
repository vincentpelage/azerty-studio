import React from "react";
import styled from "styled-components";
import { globalVariables } from "../components/globalStyle";

const CoffeStyled = styled.svg`
  width: 310px;
  height: 200px;
  position: absolute;
  bottom: 0;
  right: 15%;
  @media (max-width: ${globalVariables.maxTablet}) {
    width: 170px;
    height: 110px;
    right: -1rem;
    bottom: -2rem;
  }
`;

const Coffee = () => {
  return (
    <CoffeStyled data-name="Layer 1" viewBox="0 0 1024.7 671.65">
      <defs>
        <linearGradient
          id="a374d817-ded2-4154-8f0a-fb69bb0241af"
          x1="720.55"
          y1="535.76"
          x2="720.55"
          y2="325.76"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="gray" stopOpacity="0.25" />
          <stop offset="0.54" stopColor="gray" stopOpacity="0.12" />
          <stop offset="1" stopColor="gray" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="fd39efba-8078-41b8-857e-e17431406f47"
          x1="798.2"
          y1="607.44"
          x2="798.2"
          y2="482.44"
        />
        <linearGradient
          id="b2bf7fa1-65c2-4695-aeca-af8d6fc55ae3"
          x1="232.99"
          y1="451.99"
          x2="232.99"
          y2="143.26"
          gradientTransform="translate(-7.27 39.37)"
        />
        <linearGradient
          id="a8abeec4-29f5-4a5c-9a38-56f560b9b0a3"
          x1="453.72"
          y1="451.99"
          x2="453.72"
          y2="143.26"
          gradientTransform="translate(-12.71 -9.36)"
        />
        <linearGradient
          id="af3e6cbd-120e-45f3-bb1d-3967e91ae903"
          x1="512.72"
          y1="536.99"
          x2="512.72"
          y2="228.26"
          gradientTransform="translate(4.6 -24.48)"
        />
        <linearGradient
          id="ad46d94a-2a5e-454e-b2ea-f38dffec9c1a"
          x1="922.12"
          y1="409.21"
          x2="1052.98"
          y2="100.2"
          gradientTransform="translate(1246.61 -701.51) rotate(90)"
        />
      </defs>
      <circle
        cx="720.55"
        cy="430.76"
        r="105"
        fill="url(#a374d817-ded2-4154-8f0a-fb69bb0241af)"
      />
      <circle cx="720.55" cy="430.76" r="100" fill="#f5f5f5" />
      <g opacity="0.5">
        <path
          d="M811,482.47a62.52,62.52,0,0,0-64.27,55.82h-18a3.64,3.64,0,0,0-3.64,3.64v6a3.65,3.65,0,0,0,3.64,3.65h18A62.5,62.5,0,1,0,811,482.47Z"
          transform="translate(-87.65 -114.18)"
          fill="url(#fd39efba-8078-41b8-857e-e17431406f47)"
        />
      </g>
      <path
        d="M810.19,486.22a58.75,58.75,0,0,0-60.41,52.47H732.36a2.91,2.91,0,0,0-2.91,2.91v6.67a2.91,2.91,0,0,0,2.91,2.92h17.42a58.75,58.75,0,1,0,60.41-65Z"
        transform="translate(-87.65 -114.18)"
        fill="#fff"
      />
      <circle cx="720.55" cy="430.76" r="41.25" fill="#795548" />
      <path
        d="M829.45,524.94s11.77,18.28,8.4,32.5C837.85,557.44,851.3,535.09,829.45,524.94Z"
        transform="translate(-87.65 -114.18)"
        fill="#fff"
        opacity="0.2"
      />
      <circle cx="746.8" cy="453.26" r="3.75" fill="#fff" opacity="0.2" />
      <rect
        x="119.09"
        y="182.63"
        width="213.27"
        height="308.72"
        transform="translate(-156.47 -56.04) rotate(-12.75)"
        fill="url(#b2bf7fa1-65c2-4695-aeca-af8d6fc55ae3)"
      />
      <rect
        x="334.38"
        y="133.91"
        width="213.27"
        height="308.72"
        transform="translate(-140.4 -9.72) rotate(-12.75)"
        fill="url(#a8abeec4-29f5-4a5c-9a38-56f560b9b0a3)"
      />
      <rect
        x="122.15"
        y="186.27"
        width="207.97"
        height="302.01"
        transform="translate(-156.52 -55.94) rotate(-12.75)"
        fill="#00bec5"
      />
      <rect
        x="336.06"
        y="137.86"
        width="207.97"
        height="302.01"
        transform="translate(-140.56 -9.92) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="135.55"
        y="222.61"
        width="124.88"
        height="20.81"
        transform="translate(-134.2 -64.73) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="124.12"
        y="271.86"
        width="166.5"
        height="5.2"
        transform="translate(-143.12 -61.63) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="126.8"
        y="283.7"
        width="166.5"
        height="5.2"
        transform="translate(-145.67 -60.75) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="129.48"
        y="295.54"
        width="166.5"
        height="5.2"
        transform="translate(-148.21 -59.87) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="133.23"
        y="316.95"
        width="79.78"
        height="5.2"
        transform="translate(-153.92 -68.08) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="135.76"
        y="327.46"
        width="91.92"
        height="5.2"
        transform="translate(-156.02 -65.92) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="137.52"
        y="331.07"
        width="166.5"
        height="5.2"
        transform="translate(-155.86 -57.21) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="140.2"
        y="342.91"
        width="166.5"
        height="5.2"
        transform="translate(-158.4 -56.33) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="143.03"
        y="356.09"
        width="154.36"
        height="5.2"
        transform="translate(-161.39 -56.72) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="145.56"
        y="366.59"
        width="166.5"
        height="5.2"
        transform="translate(-163.5 -54.56) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="149.22"
        y="387.24"
        width="86.72"
        height="5.2"
        transform="translate(-168.95 -62.05) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="372.13"
        y="350.43"
        width="91.92"
        height="5.2"
        transform="translate(-155.26 -13.18) rotate(-12.75)"
        fill="#00bec5"
        opacity="0.3"
      />
      <rect
        x="373.89"
        y="354.04"
        width="166.5"
        height="5.2"
        transform="translate(-155.1 -4.47) rotate(-12.75)"
        fill="#00bec5"
        opacity="0.3"
      />
      <rect
        x="376.57"
        y="365.88"
        width="166.5"
        height="5.2"
        transform="translate(-157.64 -3.59) rotate(-12.75)"
        fill="#00bec5"
        opacity="0.3"
      />
      <rect
        x="379.4"
        y="379.06"
        width="154.36"
        height="5.2"
        transform="translate(-160.63 -3.98) rotate(-12.75)"
        fill="#00bec5"
        opacity="0.3"
      />
      <rect
        x="381.93"
        y="389.56"
        width="166.5"
        height="5.2"
        transform="translate(-162.74 -1.82) rotate(-12.75)"
        fill="#00bec5"
        opacity="0.3"
      />
      <rect
        x="385.59"
        y="410.21"
        width="86.72"
        height="5.2"
        transform="translate(-168.19 -9.31) rotate(-12.75)"
        fill="#00bec5"
        opacity="0.3"
      />
      <rect
        x="221.62"
        y="391.43"
        width="100.59"
        height="69.38"
        transform="translate(-175 -43.64) rotate(-12.75)"
        fill="#f5f5f5"
      />
      <rect
        x="337.76"
        y="165.98"
        width="100.59"
        height="69.38"
        transform="translate(-122.37 -23.57) rotate(-12.75)"
        fill="#00bec5"
        opacity="0.3"
      />
      <rect
        x="433.79"
        y="236.72"
        width="100.59"
        height="69.38"
        transform="translate(-135.62 -0.63) rotate(-12.75)"
        fill="#00bec5"
        opacity="0.3"
      />
      <rect
        x="410.68"
        y="203.79"
        width="213.27"
        height="308.72"
        rx="13.44"
        transform="translate(-153.95 8.85) rotate(-12.75)"
        fill="url(#af3e6cbd-120e-45f3-bb1d-3967e91ae903)"
      />
      <rect
        x="412.36"
        y="207.74"
        width="207.97"
        height="302.01"
        rx="13.44"
        transform="translate(-154.1 8.65) rotate(-12.75)"
        fill="#00bec5"
      />
      <g opacity="0.5">
        <rect x="220.35" y="542.11" width="3" height="17" fill="#47e6b1" />
        <rect
          x="308"
          y="656.29"
          width="3"
          height="17"
          transform="translate(886.64 241.11) rotate(90)"
          fill="#47e6b1"
        />
      </g>
      <g opacity="0.5">
        <rect x="726.55" y="32.76" width="3" height="17" fill="#47e6b1" />
        <rect
          x="814.2"
          y="146.94"
          width="3"
          height="17"
          transform="translate(883.49 -774.44) rotate(90)"
          fill="#47e6b1"
        />
      </g>
      <g opacity="0.5">
        <rect x="636.55" y="249.76" width="3" height="17" fill="#47e6b1" />
        <rect
          x="724.2"
          y="363.94"
          width="3"
          height="17"
          transform="translate(1010.49 -467.44) rotate(90)"
          fill="#47e6b1"
        />
      </g>
      <g opacity="0.5">
        <rect x="894.15" y="288.76" width="3" height="17" fill="#47e6b1" />
        <rect
          x="981.8"
          y="402.94"
          width="3"
          height="17"
          transform="translate(1307.08 -686.03) rotate(90)"
          fill="#47e6b1"
        />
      </g>
      <path
        d="M482.69,654.59a3.68,3.68,0,0,1-2.05-4.44,1.15,1.15,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a2.53,2.53,0,0,0-.2.36,3.67,3.67,0,0,1-4.44,2,1.86,1.86,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.88,1.88,0,0,0,.36.21,3.67,3.67,0,0,1,2.05,4.44,1.89,1.89,0,0,0-.08.4h0a1.84,1.84,0,0,0,3.31,1.23h0a1.9,1.9,0,0,0,.2-.37,3.68,3.68,0,0,1,4.45-2,1.77,1.77,0,0,0,.4.08h0a1.84,1.84,0,0,0,1.22-3.31h0A1.62,1.62,0,0,0,482.69,654.59Z"
        transform="translate(-87.65 -114.18)"
        fill="#4d8af0"
        opacity="0.5"
      />
      <path
        d="M628.89,779.24a3.68,3.68,0,0,1-2-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.66,3.66,0,0,1-4.44,2.05,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.62,1.62,0,0,0,.36.21,3.68,3.68,0,0,1,2,4.44,1.86,1.86,0,0,0-.08.41h0a1.84,1.84,0,0,0,3.31,1.22h0a1.65,1.65,0,0,0,.2-.37,3.67,3.67,0,0,1,4.44-2,2,2,0,0,0,.41.08h0a1.84,1.84,0,0,0,1.22-3.31h0A1.62,1.62,0,0,0,628.89,779.24Z"
        transform="translate(-87.65 -114.18)"
        fill="#4d8af0"
        opacity="0.5"
      />
      <path
        d="M847.89,348.24a3.68,3.68,0,0,1-2-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.66,3.66,0,0,1-4.44,2.05,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.62,1.62,0,0,0,.36.21,3.68,3.68,0,0,1,2,4.44,1.86,1.86,0,0,0-.08.41h0a1.84,1.84,0,0,0,3.31,1.22h0a1.65,1.65,0,0,0,.2-.37,3.67,3.67,0,0,1,4.44-2,2,2,0,0,0,.41.08h0a1.84,1.84,0,0,0,1.22-3.31h0A1.62,1.62,0,0,0,847.89,348.24Z"
        transform="translate(-87.65 -114.18)"
        fill="#4d8af0"
        opacity="0.5"
      />
      <path
        d="M999.89,509.24a3.68,3.68,0,0,1-2-4.44,1.86,1.86,0,0,0,.08-.41h0a1.84,1.84,0,0,0-3.31-1.22h0a1.82,1.82,0,0,0-.2.36,3.66,3.66,0,0,1-4.44,2.05,2,2,0,0,0-.41-.08h0a1.84,1.84,0,0,0-1.22,3.31h0a1.62,1.62,0,0,0,.36.21,3.68,3.68,0,0,1,2,4.44,1.86,1.86,0,0,0-.08.41h0a1.84,1.84,0,0,0,3.31,1.22h0a1.65,1.65,0,0,0,.2-.37,3.67,3.67,0,0,1,4.44-2,2,2,0,0,0,.41.08h0a1.84,1.84,0,0,0,1.22-3.31h0A1.62,1.62,0,0,0,999.89,509.24Z"
        transform="translate(-87.65 -114.18)"
        fill="#4d8af0"
        opacity="0.5"
      />
      <circle cx="142.35" cy="487.11" r="6" fill="#f55f44" opacity="0.5" />
      <circle cx="523.55" cy="50.76" r="6" fill="#4d8af0" opacity="0.5" />
      <circle cx="498.55" cy="489.76" r="6" fill="#47e6b1" opacity="0.5" />
      <circle cx="844.55" cy="639.76" r="6" fill="#f55f44" opacity="0.5" />
      <g opacity="0.5">
        <path
          d="M848.9,203.3h286a6.29,6.29,0,0,1,6.29,6.29V362.51a6.29,6.29,0,0,1-6.29,6.29h-286a6.28,6.28,0,0,1-6.28-6.28V209.58A6.29,6.29,0,0,1,848.9,203.3Z"
          transform="translate(346.54 1040.57) rotate(-73.39)"
          fill="url(#ad46d94a-2a5e-454e-b2ea-f38dffec9c1a)"
        />
      </g>
      <rect
        x="911.41"
        y="140.66"
        width="161.02"
        height="290.64"
        rx="13.64"
        transform="translate(35.53 -385.86) rotate(16.61)"
        fill="#fff"
      />
      <path
        d="M1070.15,165.27a13,13,0,0,1-15.5,7l-53.29-15.91A13.05,13.05,0,0,1,992.2,142L964,133.59a6.13,6.13,0,0,0-7.61,4.11L880.92,390.53a6.11,6.11,0,0,0,4.12,7.6l134.84,40.24a6.11,6.11,0,0,0,7.6-4.11l75.44-252.83a6.1,6.1,0,0,0-4.11-7.6Z"
        transform="translate(-87.65 -114.18)"
        fill="#e0e0e0"
      />
      <rect
        x="1010.74"
        y="156.59"
        width="35.88"
        height="2.24"
        rx="1.12"
        transform="translate(-5.15 -389.83) rotate(15.89)"
        fill="#dbdbdb"
      />
      <circle cx="965.68" cy="50.32" r="1.35" fill="#dbdbdb" />
      <rect
        x="953.4"
        y="188.74"
        width="44"
        height="38"
        transform="translate(2.54 -365.73) rotate(15.4)"
        fill="#fff"
      />
      <rect
        x="938.79"
        y="241.77"
        width="44"
        height="38"
        transform="translate(16.09 -359.95) rotate(15.4)"
        fill="#00bec5"
        opacity="0.3"
      />
      <rect
        x="924.19"
        y="294.79"
        width="44"
        height="38"
        transform="translate(29.65 -354.17) rotate(15.4)"
        fill="#fff"
      />
      <rect
        x="909.58"
        y="347.82"
        width="44"
        height="38"
        transform="translate(43.2 -348.39) rotate(15.4)"
        fill="#3ad29f"
        opacity="0.3"
      />
      <rect
        x="1008.3"
        y="214.49"
        width="58"
        height="4"
        transform="translate(7.08 -381.86) rotate(15.4)"
        fill="#fff"
      />
      <rect
        x="1005.11"
        y="226.06"
        width="58"
        height="4"
        transform="translate(10.04 -380.6) rotate(15.4)"
        fill="#fff"
      />
      <rect
        x="993.96"
        y="266.56"
        width="58"
        height="4"
        transform="translate(20.39 -376.18) rotate(15.4)"
        fill="#fff"
      />
      <rect
        x="990.77"
        y="278.12"
        width="58"
        height="4"
        transform="translate(23.35 -374.92) rotate(15.4)"
        fill="#fff"
      />
      <rect
        x="979.62"
        y="318.62"
        width="58"
        height="4"
        transform="translate(33.7 -370.5) rotate(15.4)"
        fill="#fff"
      />
      <rect
        x="976.43"
        y="330.19"
        width="58"
        height="4"
        transform="translate(36.66 -369.24) rotate(15.4)"
        fill="#fff"
      />
      <rect
        x="965.28"
        y="370.68"
        width="58"
        height="4"
        transform="translate(47.01 -364.83) rotate(15.4)"
        fill="#fff"
      />
      <rect
        x="962.09"
        y="382.25"
        width="58"
        height="4"
        transform="translate(49.97 -363.56) rotate(15.4)"
        fill="#fff"
      />
    </CoffeStyled>
  );
};

export default Coffee;
