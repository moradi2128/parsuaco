import styled from "styled-components";
export const Wrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.colorMainSecLight};
  padding-top: 50px;
  padding-bottom: 50px;
  :last-child {
    border-bottom: none;
  }
`;
export const Title = styled.div`
  position: relative;
  h3 {
    font-size: 26px;
    text-align: left;
    color: ${(props) => props.theme.colors.colorDark};
    font-weight: 800;
    width: 100%;
    letter-spacing: 2px;
    padding-bottom: 10px;
    line-height: 34px;
  }
`;
export const SectionNumber = styled.div`
  position: absolute;
  top: -60px;
  font-size: 124px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.colorMainSecLight};
  opacity: 0.7;
  right: 0;
  span:before {
    content: "";
    position: absolute;
    width: 50%;
    height: 42%;
    bottom: 50%;
    left: 0;
    background: ${(props) => props.theme.colors.colorText};
    z-index: 2;
  }
  @media only screen and (max-width: 1064px) {
    overflow: hidden;
  }
`;
