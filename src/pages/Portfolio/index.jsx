import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 10px;
  & > div {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    gap: 0.5rem;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    & > div {
      grid-template-columns: 1fr 1fr 1fr;
    }
    margin-top: 0;
    margin-bottom:0;
  }
`;
export const FilterWrapper = styled(motion.div)`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    height: 50px;
  }
`;
export const Filter = styled("button")`
  background-color: transparent;
  border: none;
  outline: none;
  color: hsla(0, 0%, 100%, 0.51);
  padding: 1rem 0;
  flex-shrink: 0;
  > input {
    width: 0;
    height: 0;

    &:checked {
      & + label {
        color: ${(props) => props.theme.colors.colorPrimary};
      }
    }
  }

  > label {
    font-size: 11px;

    text-transform: uppercase;
    padding: 0.7rem;

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`;
export const TitleFilter = styled.div`
  background: ${(props) => props.theme.colors.colorPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  line-height: 60px;
  color: #fff;
  left: 0;
  top: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 10px;
  svg {
    transform: rotate(90deg);
    font-size: larger;
    margin-left: 0.5rem;
  }
  @media screen and (min-width: 1024px) {
    flex: 1;
    height: 100%;
    svg {
      transform: unset;
    }
  }
`;
export const Card = styled("div")`
  &.test {
    background-color: blue !important;
  }

  &.test1 {
    background-color: red !important;
  }
`;
export const FilterContainer = styled.div`
  @media screen and (min-width: 1024px) {
    flex: 4;
    display: flex;
    overflow-x: auto;
  }
`;
export const CardDirection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  position: absolute;
  inset: 20px;
  right: 20px;
  overflow: hidden;
  background: rgba(45, 45, 50, 0.81);
  transition: all 0.2s ease-in-out;
  opacity: 0;
  & > div {
    position: absolute;
    right: 20px;
    left: 20px;
  }
`;
export const CardDescriptionTitle = styled.div`
  opacity: 0;
  font-size: x-small;
  top: -40px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.colorPrimary};
  transition: all 0.3s 0.3s ease;
`;
export const CardDescriptionLink = styled.div`
  opacity: 0;
  transition: all 0.3s 0.3s ease;
  position: relative;
  bottom: -40px;
  a {
    font-size: medium;
    transition: all 0.3s ease;

    svg {
      transition: all 0.3s ease;
      color: ${(props) => props.theme.colors.colorPrimary};
    }
    :hover svg {
      margin-left: 0.5rem;
    }
  }
`;
