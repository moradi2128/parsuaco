import React, { useRef } from "react";
import {
  Wrapper,
  HeightEmulator,
  DetailTitle,
  SubTitle,
  LinkDetail,
  WrapperImg,
  DetailWrapper,
  BoxContainer,
  BoxDescription,
  TabContainer,
} from "./index";
// === Components ===
import Theme from "../../Theme/Theme";
import Tabs from "../../components/Tabs/Tabs";
// === Icons ===
import { BsArrowRightShort } from "react-icons/bs";
// === Image ===
import img from "../../assets/images/portfolio/2.jpg";
import Footer from "../../components/Footer/Footer";
// === Data ===
const tabs = [
  {
    id: 1,
    name: "details",
    text: "The power of good choice",
  },
  {
    id: 2,
    name: "video presentation",
  },
  {
    id: 3,
    name: "plans",
  },
];

const PortfolioDetail = () => {
  const ref = useRef(null);
  const handlerScroll = () => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };
  return (
    <Theme>
      <main>
        <section>
          <div className="container">
            <Wrapper>
              <DetailTitle>
                parsua
                <br /> industrial group
                <br /> export & import
              </DetailTitle>
              <SubTitle>the power of good choice</SubTitle>

              <LinkDetail type="button" onClick={handlerScroll}>
                details
                <BsArrowRightShort />
              </LinkDetail>
            </Wrapper>
          </div>
        </section>
        <section>
          <WrapperImg>
            <img src={img} type="" />
          </WrapperImg>
        </section>
        <DetailWrapper ref={ref}>
          <div className="container">
            <h3>Project Derails</h3>
            <BoxContainer>
              <BoxDescription>
                <ul>
                  <li>
                    <span>data : </span> 2022.01.28
                  </li>
                  <li>
                    <span>category : </span> commerce
                  </li>
                  <li>
                    <span>status : </span> finished
                  </li>
                  <li>
                    <span>location : </span> iran
                  </li>
                </ul>
              </BoxDescription>
              <TabContainer>
                <Tabs tabs={tabs} />
              </TabContainer>
            </BoxContainer>
          </div>
        </DetailWrapper>
      </main>
      <HeightEmulator />
      <Footer />
    </Theme>
  );
};

export default PortfolioDetail;
