import React from "react";
import styled from "styled-components";
import Theme from "../../Theme/Theme";
const Loading = () => {
  return (
    <Theme>
      <Wrapper>
        <LoadingContainer>
          <div className="loading-item1"></div>
          <div className="loading-item2"></div>
          <div className="loading-item3"></div>
          <div className="loading-item4"></div>
        </LoadingContainer>
      </Wrapper>
    </Theme>
  );
};

export default Loading;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  // background-color: ${(props) => props.theme.colors.colorMain};
  background: radial-gradient(circle, rgba(58,58,64,1) 0%, rgba(45,45,50,1) 100%);
  position: fixed;
  inset: 0;
  z-index: 999;
`;
export const LoadingContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  & .loading-item1,
  & .loading-item2,
  & .loading-item3,
  & .loading-item4 {
    width: 3px;
    background-color: ${(props) => props.theme.colors.colorPrimary};
    animation: loading 1.2s infinite ease-in-out;
  }

  & .loading-item1 {
    animation-delay: -0.3s;
  }
  & .loading-item2 {
    animation-delay: -0.2s;
  }
  & .loading-item3 {
    animation-delay: -0.1s;
  }
  & .loading-item4 {
    animation-delay: -0s;
  }
  @keyframes loading {
    0% {
      height: 10px;
    }
    50% {
      height: 100%;
    }
    100% {
      height: 10px;
    }
  }
`;
