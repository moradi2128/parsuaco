import React from "react";
import Theme from "../../Theme/Theme";
import { TextContainer, Date, Title, SubTitle, AnimationStart } from "./index";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BottomToTopVariants } from "../../motionVariants/motionVariants";
const Captions = ({ date, title, subTitle, linkTitle, to }) => {
  const widthZeroBoxVariants = {
    hidden: {
      width: "117%",
    },
    visible: {
      width: "0",
      transition: { delay: 2.4, duration: 0.2 },
    },
  };
  return (
    <Theme>
      <TextContainer
        variants={BottomToTopVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimationStart
          variants={widthZeroBoxVariants}
          initial="hidden"
          animate="visible"
        />
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
