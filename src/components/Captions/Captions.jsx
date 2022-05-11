import React from "react";
import Theme from "../../Theme/Theme";
import { TextContainer, Date, Title, SubTitle, AnimationStart } from "./index";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const Captions = ({ date, title, subTitle, linkTitle, to }) => {
  return (
    <Theme>
      <TextContainer>
        <AnimationStart />
        {date && <Date>{date}</Date>}
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        {linkTitle && (
          <Link to={to}>
            {linkTitle}
            <AiOutlineArrowRight />
          </Link>
        )}
      </TextContainer>
    </Theme>
  );
};

export default Captions;
