import styled from "styled-components";
import { motion } from "framer-motion";
export const Wrapper = styled(motion.div)`
  background: ${(props) => props.theme.colors.colorPrimary};
  position: absolute !important;
  top: 90px;
  left: 0px;
  z-index: 111;
  padding: 20px 0 90px;
  width: 70px;
  height: 224px;
  overflow: hidden;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
export const ScrollText = styled.div`
  position: relative;
  left: -22px !important;
  height: 44px;
  top: 43px;
  width: 120px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  padding: 20px 0;
  letter-spacing: 2px;
  font-size: 10px;
  text-transform: uppercase;
  color: #fff;
`;
export const ScrollContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute !important;
  top: 154px;
  bottom: 0;
  width: 70px;
  height: 70px;
  left: 0;
  line-height: 70px;
  background: #2a2a2e;
`;
export const Mouse = styled.div`
  height: 38px;
  width: 24px;
  border-radius: 5px;
  transform: none;
  border: 1px solid hsla(0, 0%, 100%, 0.41);
`;
export const Wheel = styled.div`
  display: block;
  margin: 5px auto;
  background: white;
  position: relative;

  height: 7px;
  width: 1px;
  border: 1px solid ${(props) => props.theme.colors.colorPrimary};
  -webkit-border-radius: 8px;
  border-radius: 8px;

  -webkit-animation: mouse-wheel 0.6s linear infinite;
  -moz-animation: mouse-wheel 0.6s linear infinite;
  animation: mouse-wheel 2s linear infinite;

  @-webkit-keyframes mouse-wheel {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translateY(6px);
      -ms-transform: translateY(6px);
      transform: translateY(6px);
    }
  }
  @-moz-keyframes mouse-wheel {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }

    50% {
      transform: translateY(6px);
      opacity: 1;
    }

    100% {
      transform: translateY(12px);
      opacity: 0;
    }
  }
  @-o-keyframes mouse-wheel {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }

    50% {
      transform: translateY(6px);
      opacity: 1;
    }

    100% {
      transform: translateY(12px);
      opacity: 0;
    }
  }
  @keyframes mouse-wheel {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }

    50% {
      transform: translateY(6px);
      opacity: 1;
    }

    100% {
      transform: translateY(12px);
      opacity: 0;
    }
  }

  @-webkit-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
