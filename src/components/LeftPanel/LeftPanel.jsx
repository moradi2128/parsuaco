import React from "react";
import { Wrapper, Top, Down } from "./index";

// === Components ===
import Theme from "../../Theme/Theme";
import SocialMedia from "../SocialMedia/SocialMedia";

const LeftPanel = () => {
  return (
    <Theme>
      <Wrapper>
        <Top>
          <span>
            <strong>builmond</strong>
          </span>
        </Top>
        <Down>
          <SocialMedia />
        </Down>
      </Wrapper>
    </Theme>
  );
};

export default LeftPanel;
