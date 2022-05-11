import styled from "styled-components";

// Tab
export const TabContainer = styled.div`
  padding: 20px 0;
`;
export const BoxNone = styled.div`
  overflow: hidden;
  position: relative;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.colorMain};
  color: ${(props) => props.theme.colors.colorText};
  font-size: 18px;
  border-radius: 10px;
  &:before {
    content: "";
    position: absolute;
    width: 7px;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.colorPrimary};
  }
`;
// === Tab Navigation ===
export const UlNavigation = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.colorMainSecLight};
`;

export const BtnNavigation = styled.button`
  position: relative;
  font-size: 12px;
  font-family: inherit;
  color: ${(props) => props.theme.colors.colorMain};
  cursor: pointer;
  background: unset;
  border: none;
  outline: unset;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colors.colorPrimary};
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s, opacity 0.4s ease-in-out;
  }
  &.active:after {
    opacity: 1;
    visibility: visible;
    transition: visibility 0s, opacity 0.4s ease-in-out;
    color: ${(props) => props.theme.colors.colorPrimary};
    border-bottom: 2px solid ${(props) => props.theme.colors.colorPrimary};
  }
`;
