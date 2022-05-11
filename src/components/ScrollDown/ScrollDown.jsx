import React from "react";
import { Wrapper, ScrollText, ScrollContainer, Mouse, Wheel } from "./index";
import Theme from "../../Theme/Theme";

const ScrollDown = () => {
  return (
    <Theme>
      <Wrapper>
        <ScrollText>Scroll Down</ScrollText>
        <ScrollContainer>
          <Mouse>
            <Wheel></Wheel>
          </Mouse>
        </ScrollContainer>
      </Wrapper>
    </Theme>
  );
};

export default ScrollDown;
