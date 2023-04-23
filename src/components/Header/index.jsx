import { Link } from "react-router-dom";
// === Styled Components ===
import styled from "styled-components";

export const HeaderSection = styled.header`
  position: fixed;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.03);
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  width: 100%;
  z-index: 100;
  background: ${(props) => props.theme.colors.colorMain};
`;
export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLogo = styled(Link)`
  /* display: inline-block; */
  height: 90px;
  width: 90px;
  display:flex;
  justify-content:center;
  align-items:center;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;