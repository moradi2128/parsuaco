import React from "react";
import { Link } from "react-router-dom";
import { Ul, Li } from "./index";
// === Icons ===
import { FaFacebookF, FaPinterest, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter, AiFillSkype } from "react-icons/ai";
// === Components ===
import Theme from "../../Theme/Theme";

const SocialMedia = () => {
  return (
    <Theme>
      <Ul>
        <Li>
          <Link to="/">
            <FaFacebookF />
          </Link>
        </Li>
        <Li>
          <Link to="/">
            <FaInstagram />
          </Link>
        </Li>
        <Li>
          <Link to="/">
            <AiOutlineTwitter />
          </Link>
        </Li>
        <Li>
          <Link to="/">
            <AiFillSkype />
          </Link>
        </Li>
        <Li>
          <Link to="/">
            <FaPinterest />
          </Link>
        </Li>
      </Ul>
    </Theme>
  );
};

export default SocialMedia;
