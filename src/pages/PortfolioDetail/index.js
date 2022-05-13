import { motion } from "framer-motion";
import styled from "styled-components";
export const Wrapper = styled(motion.h2)`
  padding: 90px 0;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    right: 0;
    width: 35%;
    top: 10%;
    bottom: 10%;
    z-index: 2;
    background: hsla(0, 0%, 100%, 0.04);
  }
`;
export const HeightEmulator = styled.div`
  height: 625px;
  position: absolute;
  z-index: -2;
  width: 100%;
`;
export const DetailTitle = styled.h2`
  font-size: 30px;
  line-height: 44px;
`;
export const SubTitle = styled.p`
  font-size: 13px;
  margin-top: 0.5rem;
  max-width: 550px;
  color: hsla(0, 0%, 100%, 0.51);
  font-weight: 600;
`;
export const LinkDetail = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: unset;
  cursor: pointer;
  font-size: 10px;
  color: ${(props) => props.theme.colors.colorText};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
  position: relative;
  transition: all 0.4s ease;

  svg {
    font-size: small;
    transition: all 0.4s ease;
    color: ${(props) => props.theme.colors.colorText};
  }
  :hover {
    color: ${(props) => props.theme.colors.colorPrimary};
    svg {
      transform: rotate(90deg);
    }
  }
`;
export const WrapperImg = styled.div`
  width: 75%;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;
export const DetailWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.colorText};
  color: ${(props) => props.theme.colors.colorMain};
  padding: 40px 0;
  h3 {
    font-size: 22px;
    font-weight: 600;
    padding-right: 20px;
    color: ${(props) => props.theme.colors.colorDark};
  }
  @media screen and (min-width: 1024px) {
    padding-top: 110px;
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 1rem;
  }
`;
export const BoxDescription = styled.div`
  background-color: ${(props) => props.theme.colors.colorMain};
  color: ${(props) => props.theme.colors.colorMainLight};
  padding: 40px 45px;
  margin-top: 40px;
  li {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: smaller;
    :last-child {
      margin-bottom: 0;
    }
    span {
      margin-right: 0.5rem;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;

export const TabContainer = styled.div`
  margin: 20px 0;
  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`;
