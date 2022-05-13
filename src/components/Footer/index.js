import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #262627;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    right: 0;
    height: calc(100vh - 90px);
    position: fixed;
    left: 90px;
    top: 90px;
    bottom: 0;
    z-index: -1;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    margin-top: 2rem;
    flex-direction: row;
    gap: 1rem;
  }
`;

export const AboutSection = styled.div`
  padding: 1rem 0;
  @media screen and (min-width: 1024px) {
    flex-grow: 1;
    width: 100%;
    padding: 0;
  }
`;
export const Logo = styled(Link)`
  width: 50px;
  height: 50px;
  display: inline-block;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const AboutDescription = styled.div`
  padding-right: 50px;
  margin-top: 40px;
  p {
    font-family: Roboto, "Montserrat", sans-serif;
    color: ${(props) => props.theme.colors.colorMainLight};
  }
  @media screen and (min-width: 1024px) {
    padding-right: 0;
    margin-top: 25px;
  }
`;

export const ContactSection = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const TitleHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3,
  span {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-top: 10px;
    font-weight: 700;
    margin-bottom: 15px;
    color: ${(props) => props.theme.colors.colorMainLight};
  }
  span {
    color: ${(props) => props.theme.colors.colorPrimary};
    font-size: 16px;
  }
  :before {
    content: "";
    position: absolute;
    bottom: 13px;
    left: 100px;
    right: 0;
    height: 1px;
    background: ${(props) => props.theme.colors.colorMainLight};
  }
`;
export const ContactItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: baseline;
  color: ${(props) => props.theme.colors.colorMainLight};
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-bottom: 15px;
  h3 {
    // padding-right: 30px;
    min-width: 100px;
    font-size: smaller;
    display: inline-block;
  }
  a {
    color: hsla(0, 0%, 100%, 0.81);
    font-size: 11px;
    font-weight: 600;
    transition: all 0.3s ease;
    :hover {
      color: ${(props) => props.theme.colors.colorPrimary};
    }
  }
  :last-child {
    display: block;
    line-height: 17px;
  }
  :last-child a {
    line-height: 25px;
  }
`;
export const UlContainer = styled.div`
  margin-top: 30px;
`;
export const LinkAbout = styled(Link)`
  align-self: start;
  display: flex;
  align-items: center;
  margin-top: 20px;
  border: 1px solid hsla(0, 0%, 100%, 0.08);
  padding: 12px 20px;
  color: #767676;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  svg {
    font-size: larger;
    margin-left: 1rem;
  }

  :hover {
    background: ${(props) => props.theme.colors.colorPrimary};
    color: #fff;
    border-color: transparent;
  }
  @media screen and (max-width: 1023px) {
    display: inline-block;
  }
`;

export const SubscribeForm = styled.div`
  margin-top: 20px;
`;
export const FormEmail = styled.form`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    background: bottom;
    padding: 15px 100px 15px 0;
    position: relative;
    z-index: 1;
    color: #fff;
    border: none;
    outline: none;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.21);
    ::placeholder {
      color: white;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: end;
    position: absolute;
    top: 15px;
    right: 0;
    width: 100px;
    z-index: 2;
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
    text-align: right;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    svg {
      font-size: larger;
      margin-left: 1rem;
      color: ${(props) => props.theme.colors.colorPrimary};
    }
    :hover {
      color: ${(props) => props.theme.colors.colorPrimary};
    }
  }
  @media only screen and (max-width: 1064px) {
    max-width: 550px;
  }
`;

export const SubFooter = styled.div``;
export const SubContainer = styled.div`
  background: ${(props) => props.theme.colors.colorMain};
  display: flex;
  flex-direction: column;
  text-align: left;
  color: hsla(0, 0%, 100%, 0.41);
  font-size: 10px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 25px;
  span {
    margin-bottom: 0.5rem;
  }
  a {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
  @media (max-width: 768px) {
    // padding-bottom: 34px;
    padding-top: 34px;
  }
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    align-items: center;
  }
`;
export const SubContainerText = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 769px) {
    padding-left: 1rem;
  }
`;
export const BackToTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 10px;
  font-weight: 600;
  height: 90px;
  line-height: 90px;
  color: #fff;
  width: 180px;
  background: #35353a;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  svg {
    font-size: large;
    transition: all 0.3s ease;
    margin-left: 0.5rem;
  }
  :hover {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
  :hover svg {
    margin-left: 1rem;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
