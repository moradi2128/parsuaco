import styled from "styled-components";

export const Ul = styled.ul``;
export const Li = styled.li`
  border: 1px solid hsla(0, 0%, 100%, 0.08);
  border-bottom: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    width: 40px;
    height: 40px;
    justify-content: center;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    color: #767676;
  }
  :before {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 100%;
    top: 0;
    background: hsla(0, 0%, 100%, 0.08);
    z-index: 1;
    transition: all 0.2s ease-out;
  }
  :last-child {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
  }
  :hover:before {
    width: 100%;
  }
  :hover a {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;