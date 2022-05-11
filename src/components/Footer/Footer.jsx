import React, { useRef } from "react";

import {
  FooterWrapper,
  Container,
  AboutSection,
  Logo,
  AboutDescription,
  ContactSection,
  TitleHeader,
  ContactItem,
  UlContainer,
  LinkAbout,
  SubscribeForm,
  FormEmail,
  SubFooter,
  SubContainer,
  SubContainerText,
  BackToTop,
} from "./index";
// === Icons ===
import {
  AiOutlineMail,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import logo from "../../assets/images/logo/logo.png";
// === Components ===
import Theme from "../../Theme/Theme";

const Footer = () => {
  // ===  Back to Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Theme>
      <FooterWrapper>
        <Container className="container">
          {/* === About Section === */}
          <AboutSection>
            <Logo to="/">
              <img src={logo} alt="logo" />
            </Logo>
            <AboutDescription>
              <p>
                Providing commercial and supply of materials & equipment
                services. EPC (Engineering, procurement and construction) in
                industrial projects
              </p>
            </AboutDescription>
          </AboutSection>
          {/*  === Contact Section === */}
          <ContactSection>
            <TitleHeader>
              <h3>contact</h3>
              <span>01.</span>
            </TitleHeader>
            <UlContainer>
              <ul>
                <ContactItem>
                  <h3>email :</h3>
                  <a href="mailto:moradi8785@gmail.com">moradi8785@gmail.com</a>
                </ContactItem>
                <ContactItem>
                  <h3>call :</h3>
                  <a href="tel:09381416784">+989381416784</a>
                </ContactItem>
                <ContactItem>
                  <h3>find us :</h3>
                  <a href="#">
                    No.51, Floor 2th, Unit 6, 67 Sq, Narmak, Tehran, Iran
                  </a>
                </ContactItem>
              </ul>
            </UlContainer>
            <LinkAbout to="/about">
              get in touch
              <AiOutlineMail />
            </LinkAbout>
          </ContactSection>
          {/* === Subscribe === */}
          <ContactSection>
            <div>
              <TitleHeader>
                <h3>subscribe</h3>
                <span>02.</span>
              </TitleHeader>
              <AboutDescription>
                <p>
                  Want to be notified latest news. Just sign up and we'll send
                  you a notification by email.
                </p>
              </AboutDescription>
            </div>
            <SubscribeForm>
              <FormEmail>
                <input type="text" name="email" placeholder="Your Email" />
                <button type="submit">
                  send
                  <AiOutlineArrowRight />
                </button>
              </FormEmail>
            </SubscribeForm>
          </ContactSection>
        </Container>
        <SubFooter>
          <SubContainer className="container">
            <SubContainerText>
              <span>
                Development by{" "}
                <a href="https://github.com/moradi2128">moradi</a>
              </span>
              <span>© Parsuaco 2022 / All rights reserved. </span>
            </SubContainerText>
            <BackToTop onClick={scrollToTop}>
              back to top
              <AiOutlineArrowUp />
            </BackToTop>
          </SubContainer>
        </SubFooter>
      </FooterWrapper>
    </Theme>
  );
};

export default Footer;
