import React from "react";
import { Wrapper, Title, SectionNumber } from "./index";

import Theme from "../../Theme/Theme";

const BlogSection = ({ number, title, children }) => {
  return (
    <Theme>
      <Wrapper className="container">
        <Title className="line-bottom">
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
