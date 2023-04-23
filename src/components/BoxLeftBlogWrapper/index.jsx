// === Styled Components ===
import styled from "styled-components";
export const Wrapper = styled.section`
  padding: 50px 0;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.colorText};
  padding: 50px 0 20px;
  color: black;
  height: auto;
  padding-top: 80px;
  @media only screen and (min-width: 1024px) {
    width: calc(100% - 400px);
    padding-top: 100px;
    padding-right: calc(15px);
    padding-left: calc(15px);
  }
  @media only screen and (min-width: 1200px) {
    width: calc(100% - 440px);
  }
  @media only screen and (min-width: 1440px) {
    width: calc(100% - 500px);
  }
`;