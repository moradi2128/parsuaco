import styled from "styled-components";
import { motion } from "framer-motion";
export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 15%;
  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.colorText};
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1rem 0;
    margin-top: 1rem;
    transition: all 0.3s ease;
    svg {
      font-size: larger;
      margin-left: 0.7rem;
      transition: all 0.3s ease;
      color: ${(props) => props.theme.colors.colorPrimary};
    }
    &:hover {
      color: ${(props) => props.theme.colors.colorMainLight};
    }
    :hover svg {
      margin-left: 1.2rem;
    }
  }
  &:before {
    content: "";
    top: -20px;
    position: absolute;
    background: ${(props) => props.theme.colors.colorPrimary};
    width: 70px;
    height: 2px;
  }

  @media screen and (min-width: 768px) {
    &:before {
      top: -40px;
    }
    a {
      margin-top: 2rem;
    }
  }
`;
export const Date = styled.div`
  display: none;
  color: ${(props) => props.theme.colors.colorMainLight};
  font-weight: 900;
  font-size: 14px;
  text-transform: uppercase;
  position: absolute;
  left: -40px;
  top: -23px;
  transform-origin: 0 0;
  transform: rotate(-90deg) translateY(-20px) translateX(calc(-100% - 40px));
  @media screen and (min-width: 640px) {
    display: block;
  }
`;
export const Title = styled.h1`
  inline-size: min-content;
  font-size: 32px;
  line-height: 40px;
  color: ${(props) => props.theme.colors.colorText};
  font-family: Oswald, sans-serif, "Montserrat";
  text-transform: uppercase;
  font-weight: 900;
  padding-bottom: 12px;
  position: relative;
  :first-line {
    color: ${(props) => props.theme.colors.colorPrimary};
  }

  @media screen and (min-width: 768px) {
    font-size: 50px;
    line-height: 60px;
    padding-bottom: 20px;
  }
`;
export const SubTitle = styled.h4`
  font-size: 12px;
  float: left;
  max-width: 550px;
  color: ${(props) => props.theme.colors.colorMainLight};
  font-weight: 500;
`;
export const AnimationStart = styled(motion.div)`
  background: ${(props) => props.theme.colors.colorMain};
  height: 110%;
  position: absolute;
  top: -45px;
  right: 0;
  left: -57px;
  z-index: 1;
`;
