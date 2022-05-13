import React from "react";
import { Wrapper, Title, SectionNumber } from "./index";

import Theme from "../../Theme/Theme";
import { LeftToRightVariants } from "../../motionVariants/motionVariants";
const BlogSection = ({ number, title, children }) => {
  return (
    <Theme>
      <Wrapper className="container">
        <Title
          className="line-bottom"
          variants={LeftToRightVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionNumber>
            <span>0</span>
            {number}.
          </SectionNumber>
          <h3>{title}</h3>
        </Title>
        {children}
      </Wrapper>
    </Theme>
  );
};

export default BlogSection;
