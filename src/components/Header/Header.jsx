import React, { useState, useEffect } from "react";
import { HeaderSection, Wrapper, NavLogo } from "./index";
import Theme from "../../Theme/Theme";
import logo from "../../assets/images/logo/logo.png";

// === Components ===
import NavList from "../NavList/NavList";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  // === Media Query 768 px ===
  const [matchesM, setMatchesM] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatchesM(e.matches));
  }, []);
  return (
    <Theme>
      <HeaderSection>
        <Wrapper className="container">
          <NavLogo to="/">
            <h2>Logo</h2>
            {/* <img src={logo} alt="logo"></img> */}
          </NavLogo>
          {/* NavBar and Sidebar */}
          {matchesM ? <NavList /> : <Sidebar />}
        </Wrapper>
      </HeaderSection>
    </Theme>
  );
};

export default Header;
