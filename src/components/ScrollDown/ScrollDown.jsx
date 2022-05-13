import React from "react";
import { Wrapper, ScrollText, ScrollContainer, Mouse, Wheel } from "./index";
import Theme from "../../Theme/Theme";

import { openBoxLeftToRightVariants } from "../../motionVariants/motionVariants";

const ScrollDown = () => {
  return (
    <Theme>
      <Wrapper
        variants={openBoxLeftToRightVariants}
        initial="hidden"
        animate="visible"
      >
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
