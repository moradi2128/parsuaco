import styled from "styled-components";
import { motion } from "framer-motion";
export const Wrapper = styled(motion.section)`
  padding: 90px 0 50px 0;
  position: relative;
  z-index: 1;
  top: 0;
  height: 70vh;
  display: flex;
  align-items: center;

  div {
    position: relative;
    left: 0;
  }

  @media only screen and (min-width: 1024px) {
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: end;
    height: auto;
    width: 400px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
    bottom: 0;
    h1 {
      font-size: 30px;
      line-height: 33px;
      padding-bottom: 10px;
    }
    &.p-abs {
      position: absolute;
      bottom: 0;
      height: 100vh;
      top: unset;
    }
  }
  @media only screen and (min-width: 1200px) {
    width: 440px;
  }
  @media only screen and (min-width: 1440px) {
    width: 500px;
  }
`;
export const ImageBg = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  // filter: brightness(0.5);
`;
export const Corner = styled.span`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 70px;
  height: 70px;
  z-index: 21;
  border-color: currentcolor currentcolor
    ${(props) => props.theme.colors.colorMainLight}
    ${(props) => props.theme.colors.colorMainLight};
  border-right: 1px solid ${(props) => props.theme.colors.colorMainLight};
  border-top: 1px solid ${(props) => props.theme.colors.colorMainLight};
  @media only screen and (min-width: 10px) {
    display: none;
  }
`;
