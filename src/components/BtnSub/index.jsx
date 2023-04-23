import styled from "styled-components";
export const Wrapper = styled.button`
  outline: unset;
  border: unset;
  background: ${(props) => props.theme.colors.colorPrimary};
  position: absolute;
  bottom: -20px;
  right: 10%;
  z-index: 2;
  height: 50px;
  line-height: 50px;
  padding: 0 80px 0 40px;
  color: ${(props) => props.theme.colors.colorText};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.2s linear;
  cursor: pointer;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background: ${(props) => props.theme.colors.colorMain};
    svg {
      transition: all 0.2s linear;
      font-size: large;
    }
  }
  :hover {
    padding-right: 90px;
  }
  :hover svg {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
  @media screen and (max-width: 425px) {
    padding: 0 65px 0 20px;
    font-size: 8px;
  }
`;
