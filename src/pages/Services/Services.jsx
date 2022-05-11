import React, { useRef } from "react";
import {
  HeightEmulator,
  ImgContainer,
  Img,
  ImgDes,
  Li,
  TextContainer,
} from "./index";

// === Img ===
import imgBg from "../../assets/images/services/services.jpg";
import img from "../../assets/images/home/1.jpg";
// === Components ===
import BoxRightBlogWrapper from "../../components/BoxRightBlogWrapper/BoxRightBlogWrapper";
import Captions from "../../components/Captions/Captions";
import BoxLeftBlogWrapper from "../../components/BoxLeftBlogWrapper/BoxLeftBlogWrapper";
import Footer from "../../components/Footer/Footer";
import BlogSection from "../../components/BlogSection/BlogSection";
import useScrollTop from "../../components/useScrollTop/useScrollTop";

const Services = () => {
  const ref = useRef();
  const [endPointBox] = useScrollTop({ ref });
  return (
    <>
      <main>
        <div>
          <BoxRightBlogWrapper
            image={imgBg}
            endPointBoxLeft={endPointBox}
            
          >
            <div className="container">
              <Captions
                title="OUR SERVICES"
                subTitle="Branding & Visualization Services For Industrial and Constructors"
              ></Captions>
            </div>
          </BoxRightBlogWrapper>
          <BoxLeftBlogWrapper>
            <BlogSection title="Export & Import " number="1">
              <ImgContainer>
                <Img src={img} alt="export & import" />
                <ImgDes>
                  <ul>
                    <Li>
                      <span>Raw Materials : </span> Contact
                    </Li>
                    <Li>
                      <span>Equipment : </span> Contact
                    </Li>
                    <Li>
                      <span>Machinery : </span> Contact
                    </Li>
                  </ul>
                </ImgDes>
              </ImgContainer>
              <TextContainer className="line-top">
                <p>
                  <strong>EXPORT</strong>
                </p>
                <p>
                  <strong>Exports</strong> are incredibly important to modern
                  economies because they offer people and firms;many more
                  markets;for their goods. One of the core functions of
                  diplomacy and foreign policy between;governments is to foster
                  economic trade, encouraging exports and imports for the
                  benefit of all trading;parties.
                </p>
                <p>
                  According to research firm Statista, in 2019, the world’s
                  largest exporting countries (in terms of dollars) were China,
                  the United States, Germany, The Netherlands, and Japan.1﻿
                  China posted exports of approximately $2.5 trillion in goods,
                  primarily electronic equipment, and machinery. The United
                  States exported approximately $1.6 trillion, primarily capital
                  goods. Germany's exports, which come to approximately $1.5
                  trillion, were dominated by motor vehicles—as were Japan's,
                  which totaled approximately $705 billion. Finally, The
                  Netherlands had exports of approximately $709 billion.
                </p>
                <p>
                  <strong>IMPORT</strong>
                </p>
                <p>
                  <strong>Importing</strong> goods from different countries is
                  an important commercial and economic activity that has long
                  been popular in different societies to meet the needs of
                  society. In fact, as you know, the production of some goods
                  due to lack of facilities or diversity of geographical
                  location, can not be done easily, and therefore to produce
                  this category of special goods have to pay heavy costs, so
                  governments are trying to provide Bringing suitable conditions
                  for the import process to meet the needs of their community.
                  Therefore, in general, it can be said that the import of goods
                  is an important need recognized in different societies and
                  policymakers and governments of each country are obliged to
                  consider an appropriate response to this vital need, so by
                  formulating laws and creating appropriate conditions for
                  Carrying out the process of importing goods They try to help
                  traders and merchants in accelerating the process of processes
                  related to importing goods.
                </p>
              </TextContainer>
            </BlogSection>
            <BlogSection title="Import & Export" number="2">
              <ImgContainer>
                <Img src={img} alt="export & import" />
                <ImgDes>
                  <ul>
                    <Li>
                      <strong>01 .</strong>
                      <span>Raw Materials : </span> Contact
                    </Li>
                    <Li>
                      <strong>02 .</strong>
                      <span>Equipment : </span> Contact
                    </Li>
                    <Li>
                      <strong>03 .</strong>
                      <span>Machinery : </span> Contact
                    </Li>
                  </ul>
                </ImgDes>
              </ImgContainer>
              <TextContainer className="line-top">
                <p>
                  <strong>EXPORT</strong>
                </p>
                <p>
                  <strong>Exports</strong> are incredibly important to modern
                  economies because they offer people and firms;many more
                  markets;for their goods. One of the core functions of
                  diplomacy and foreign policy between;governments is to foster
                  economic trade, encouraging exports and imports for the
                  benefit of all trading;parties.
                </p>
                <p>
                  According to research firm Statista, in 2019, the world’s
                  largest exporting countries (in terms of dollars) were China,
                  the United States, Germany, The Netherlands, and Japan.1﻿
                  China posted exports of approximately $2.5 trillion in goods,
                  primarily electronic equipment, and machinery. The United
                  States exported approximately $1.6 trillion, primarily capital
                  goods. Germany's exports, which come to approximately $1.5
                  trillion, were dominated by motor vehicles—as were Japan's,
                  which totaled approximately $705 billion. Finally, The
                  Netherlands had exports of approximately $709 billion.
                </p>
                <p>
                  <strong>IMPORT</strong>
                </p>
                <p>
                  <strong>Importing</strong> goods from different countries is
                  an important commercial and economic activity that has long
                  been popular in different societies to meet the needs of
                  society. In fact, as you know, the production of some goods
                  due to lack of facilities or diversity of geographical
                  location, can not be done easily, and therefore to produce
                  this category of special goods have to pay heavy costs, so
                  governments are trying to provide Bringing suitable conditions
                  for the import process to meet the needs of their community.
                  Therefore, in general, it can be said that the import of goods
                  is an important need recognized in different societies and
                  policymakers and governments of each country are obliged to
                  consider an appropriate response to this vital need, so by
                  formulating laws and creating appropriate conditions for
                  Carrying out the process of importing goods They try to help
                  traders and merchants in accelerating the process of processes
                  related to importing goods.
                </p>
              </TextContainer>
            </BlogSection>
          </BoxLeftBlogWrapper>
        </div>
      </main>
      <HeightEmulator ref={ref} />
      <Footer />
    </>
  );
};

export default Services;
