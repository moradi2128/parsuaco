import React, { useState } from "react";
import { NavBtn, SidebarContainer, BackDrop,SocialMediaContainer } from "./index";
// === Components ===
import Theme from "../../Theme/Theme";
import NavList from "../NavList/NavList";
import SocialMedia from "../SocialMedia/SocialMedia";
const Sidebar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <Theme>
      <NavBtn onClick={() => setIsSidebar(!isSidebar)} isSidebar={isSidebar}>
        <span></span>
      </NavBtn>
      <SidebarContainer className={isSidebar && "sidebar-show"}>
        <NavList setIsSidebar={setIsSidebar} />
        <SocialMediaContainer>
          <SocialMedia />
        </SocialMediaContainer>
      </SidebarContainer>
      <BackDrop onClick={() => setIsSidebar(false)} isSidebar={isSidebar} />
    </Theme>
  );
};

export default Sidebar;
