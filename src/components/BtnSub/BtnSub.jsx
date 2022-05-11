import React from "react";
import { Wrapper } from "./index";
// === Components ===
import Theme from "../../Theme/Theme";
const BtnSub = ({ children }) => {
  return (
    <Theme>
      <Wrapper>{children}</Wrapper>
    </Theme>
  );
};

export default BtnSub;
