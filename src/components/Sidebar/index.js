import styled from "styled-components";
export const NavBtn = styled.div`
  position: relative;
  display: flex;
  width: 30px;
  height: 20px;
  justify-content: end;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem;
  transition: all 0.3s ease;
  &:hover:before,
  &:hover:after {
    width: 100%;
  }
  span {
    width: ${(props) => (props.isSidebar ? "0" : "75%")};
    background: ${(props) => props.theme.colors.colorPrimary};
    height: 2px;
    position: relative;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    background: ${(props) => props.theme.colors.colorPrimary};
    transition: all 0.3s ease;
  }
  &:before {
    width: 100%;
    top: 0;
    transform: ${(props) =>
      props.isSidebar && "rotate(45deg) translateX(12px)"};
  }
  &:after {
    width: ${(props) => (props.isSidebar ? "100%" : "55%")};
    top: 18px;
    transform: ${(props) =>
      props.isSidebar && "rotate(-45deg) translateX(12px)"};
  }
  @media (pointer: coarse) {
    &:before,
    &:after {
      width: 100%;
    }
  }
`;
export const SidebarContainer = styled.div`
  overflow: hidden;
  max-width: 375px;
  width: 0;
  background: ${(props) => props.theme.colors.colorMainSec};
  position: absolute;
  top: 90px;
  right: 0;
  z-index: -1;
  height: calc(100vh - 90px);
  transition: all 0.3s ease;
  & > ul {
    flex-direction: column;
    direction: rtl;
    margin: 1rem 0;
    li {
      margin-right: 30px;
      a {
        font-size: 12px;
      }
    }
  }
  &.sidebar-show {
    width: 100%;
  }
`;
export const BackDrop = styled.div`
  cursor: pointer;
  position: absolute;
  width: ${(props) => (props.isSidebar ? "100%" : "0")};
  top: 90px;
  right: 0;
  z-index: -2;
  height: calc(100vh - 90px);
  background: rgba(37, 36, 37, 0.71);
  transition: all 0.3s ease;
`;
export const SocialMediaContainer = styled.div`
  ul {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    li {
      height: 50px;
      width: 100%;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
      border-right: 0;
      :last-child {
        border-right: 1px solid hsla(0, 0%, 100%, 0.08);
      }
    }
  }
`;
