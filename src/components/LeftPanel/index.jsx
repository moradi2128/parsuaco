// === Styled Components ===
import styled from "styled-components";
export const Wrapper = styled.div`
  position: fixed;
  top: 89px;
  left: 0;
  width: 90px;
  bottom: 0;
  z-index: 101;
  background: #2d2d32;
  -webkit-transform: translateZ(0);
  border-right: 1px solid hsla(0, 0%, 100%, 0.03);
`;
export const Top = styled.div`
  position: absolute;
  left: 40px;
  top: 140px;
  span {
    position: absolute;
    left: -146px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 4px;
    padding: 10px 0;
    width: 300px;
    top: -6px;
    text-align: center;
    transform: rotate(-90deg);
    color: hsla(0, 0%, 100%, 0.31);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    strong {
      position: relative;
      display: block;
      ::first-letter {
        color: ${(props) => props.theme.colors.colorPrimary};
      }
    }
    :before {
      content: "";
      position: absolute;
      width: 171px;
      right: -28px;
      height: 100%;
      top: 0;
      background: hsla(0, 0%, 100%, 0.04);
    }
  }
`;
export const Down = styled.div`
  position: absolute;
  bottom:25px;
  left: 50%;
  margin-left: -20px;
  width: 40px;
`;