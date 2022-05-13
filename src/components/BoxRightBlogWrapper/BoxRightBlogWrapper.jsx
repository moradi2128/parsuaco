import React from "react";
import Theme from "../../Theme/Theme";
import ScrollDown from "../ScrollDown/ScrollDown";
import { Wrapper, ImageBg, Corner } from "./index";
import { openImgVariants } from "../../motionVariants/motionVariants";
const BoxRightBlogWrapper = ({ children, image, endPointBoxLeft }) => {
  return (
    <Theme>
      <Wrapper className={endPointBoxLeft && "p-abs"}>
        <Corner />
        <ScrollDown />
        {children}
        <ImageBg
          src={image}
          alt="services"
          variants={openImgVariants}
          initial="hidden"
          animate="visible"
        />
      </Wrapper>
    </Theme>
  );
};

export default BoxRightBlogWrapper;
