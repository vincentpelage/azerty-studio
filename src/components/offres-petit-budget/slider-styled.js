import { css } from "styled-components";
import { theme } from "../globalStyle";

export const sliderStyled = () => {
  return css`
    /* Slider */
    .slick-slider {
      position: relative;

      display: block;
      box-sizing: border-box;

      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
    }

    .slick-list {
      position: relative;

      display: block;
      overflow: hidden;

      margin: 0;
      padding: 0;
    }
    .slick-list:focus {
      outline: none;
    }
    .slick-list.dragging {
      cursor: pointer;
      cursor: hand;
    }

    .slick-slider .slick-track,
    .slick-slider .slick-list {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    .slick-track {
      position: relative;
      top: 0;
      left: 0;

      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .slick-track:before,
    .slick-track:after {
      display: table;

      content: "";
    }
    .slick-track:after {
      clear: both;
    }
    .slick-loading .slick-track {
      visibility: hidden;
    }

    .slick-slide {
      display: none;
      float: left;

      height: 100%;
      min-height: 1px;
    }
    [dir="rtl"] .slick-slide {
      float: right;
    }
    .slick-slide img {
      display: block;
    }
    .slick-slide.slick-loading img {
      display: none;
    }
    .slick-slide.dragging img {
      pointer-events: none;
    }
    .slick-initialized .slick-slide {
      display: block;
    }
    .slick-loading .slick-slide {
      visibility: hidden;
    }
    .slick-vertical .slick-slide {
      display: block;

      height: auto;

      border: 1px solid transparent;
    }
    .slick-arrow.slick-hidden {
      display: none;
    }

    .slick-dots li.slick-active button::before,
    .slick-prev::before,
    .slick-next::before {
      color: ${props => props.theme.darkGreen};
    }

    /* .slick-dots li button::before {
      font-size: 10px;
    } */

    /* Arrows */

    .slick-prev,
    .slick-next {
      position: absolute;
      display: block;
      height: 20px;
      width: 20px;
      line-height: 0px;
      font-size: 0px;
      cursor: pointer;
      background: transparent;
      color: transparent;
      top: 50%;
      -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);
      padding: 0;
      border: none;
      outline: none;
      &:hover,
      &:focus {
        outline: none;
        background: transparent;
        color: transparent;
        &:before {
          opacity: 1;
        }
      }
      &.slick-disabled:before {
        opacity: 0.25;
      }
      &:before {
        /* font-family: $slick-font-family; */
        font-size: 20px;
        line-height: 1;
        color: white;
        opacity: 0.75;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    }

    .slick-prev {
      left: -25px;
      [dir="rtl"] & {
        left: auto;
        right: -25px;
      }
      &:before {
        content: "\2190";
        [dir="rtl"] & {
          content: "\2192";
        }
      }
    }

    .slick-next {
      right: -25px;
      [dir="rtl"] & {
        left: -25px;
        right: auto;
      }
      &:before {
        content: "\2192";
        [dir="rtl"] & {
          content: "\2190";
        }
      }
    }

    /* Dots */

    .slick-dotted.slick-slider {
      margin-bottom: 30px;
    }

    .slick-dots {
      position: absolute;
      bottom: -25px;
      list-style: none;
      display: block;
      text-align: center;
      padding: 0;
      margin: 0;
      width: 100%;
      li {
        position: relative;
        display: inline-block;
        height: 20px;
        width: 20px;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
        button {
          border: 0;
          background: transparent;
          display: block;
          height: 20px;
          width: 20px;
          outline: none;
          line-height: 0px;
          font-size: 0px;
          color: transparent;
          padding: 5px;
          cursor: pointer;
          &:hover,
          &:focus {
            outline: none;
            &:before {
              opacity: 1;
            }
          }
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "\2022";
            width: 20px;
            height: 20px;
            /* font-family: $slick-font-family; */
            font-size: 10px;
            line-height: 20px;
            text-align: center;
            color: black;
            opacity: 0.25;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }
        &.slick-active button:before {
          color: ${theme.darkGreen};
          opacity: 0.75;
        }
      }
    }
  `;
};
