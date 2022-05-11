import React from "react";
import Theme from "../../Theme/Theme";
import { Wrapper } from "./index";

const BoxLeftBlogWrapper = ({ children }) => {
  return (
    <Theme>
      <Wrapper>{children}</Wrapper>
    </Theme>
  );
};

export default BoxLeftBlogWrapper;
