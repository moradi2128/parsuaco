import styled from "styled-components";
import { motion } from "framer-motion";
export const ImgContainer = styled.div`
  padding-top: 4rem;
  position: relative;
  @media screen and (min-width: 640px) {
    margin-bottom: 50px;
  }
`;
export const HeightEmulator = styled.div`
  height: 625px;
  position: absolute;
  z-index: -2;
  width: 100%;
`;

export const Img = styled(motion.img)`
  width: 100%;
`;
export const ImgDes = styled.div`
  color: #fff;
  padding: 50px;
  position: absolute;
  bottom: -70px;
  right: 100px;
  width: 350px;
  z-index: 2;
  background: ${(props) => props.theme.colors.colorMainSec};
  @media only screen and (max-width: 640px) {
    padding: 50px;
    position: relative;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 2;
    top: -3px;
  }
`;
export const Li = styled.li`
  a {
    color: #efb81f;
    :hover {
      color: white;
    }
  }
  display: block;
  margin-bottom: 20px;
  text-align: left;
  color: hsla(0, 0%, 100%, 0.81);
  text-transform: uppercase;
  letter-spacing: 1px;
  word-spacing: 0;
  font-size: 10px;
  strong {
    color: hsla(0, 0%, 100%, 0.41);
    float: left;
    padding-right: 4px;
  }
`;
export const TextContainer = styled.div`
  margin-top: 1rem;
  position: relative;
  h3 {
    font-size: 22px;
    text-align: left;
    color: #000;
    font-weight: 800;
    float: left;
    width: 100%;
    padding-bottom: 20px;
    margin-top: 3rem;
    line-height: 34px;
  }

  p {
    font-size: 12px;
    line-height: 24px;
    padding-bottom: 10px;
    font-weight: 500;
    color: #5e646a;
    text-align: justify;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 1rem;
    h3 {
      width: 40%;
    }
    p {
      width: 60%;
    }
  }
`;
