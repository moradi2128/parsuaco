import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Li} from "./index";
// === Components ===
import Theme from "../../Theme/Theme";


const NavItem = ({ children, to, setIsSidebar }) => {
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
      <Li>
        <Link to={to} onClick={() => !matchesM && setIsSidebar(false)}>
          {children}
        </Link>
      </Li>
    </Theme>
  );
};

export default NavItem;
