import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  HeightEmulator,
  ImgContainer,
  Img,
  ImgDes,
  Li,
  TextContainer,
} from "./index";
// === motion Variants ===
import { containerVariants,showImgVariants } from "../../motionVariants/motionVariants";
// === Icons ===
import { BsPlayFill } from "react-icons/bs";
// === Img ===
import imgBg from "../../assets/images/about/12.jpg";
import img from "../../assets/images/about/8.jpg";
import imgContact from "../../assets/images/about/7.jpg";
// === Components ===
import BoxRightBlogWrapper from "../../components/BoxRightBlogWrapper/BoxRightBlogWrapper";
import Captions from "../../components/Captions/Captions";
import BoxLeftBlogWrapper from "../../components/BoxLeftBlogWrapper/BoxLeftBlogWrapper";
import Footer from "../../components/Footer/Footer";
import BlogSection from "../../components/BlogSection/BlogSection";
import useScrollTop from "../../components/useScrollTop/useScrollTop";
import FormAbout from "../../components/FormAbout/FormAbout";
import BtnSub from "../../components/BtnSub/BtnSub";

const About = () => {
  const ref = useRef();
  const [endPointBox] = useScrollTop({ ref });
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <main>
          <div>
            <BoxRightBlogWrapper image={imgBg} endPointBoxLeft={endPointBox}>
              <div className="container">
                <Captions
                  title="
                ABOUT OUR
                STUDIO"
                  subTitle="Providing commercial and supply of materials & equipment services. EPC (Engineering, procurement and construction) in industrial projects"
                ></Captions>
              </div>
            </BoxRightBlogWrapper>
            <BoxLeftBlogWrapper>
              <BlogSection title="Our company story " number="1">
                <ImgContainer>
                  <Img
                    src={img}
                    alt="export & import"
                    variants={showImgVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <BtnSub>
                    our story video
                    <span>
                      <BsPlayFill />
                    </span>
                  </BtnSub>
                </ImgContainer>
                <TextContainer className="line-top">
                  <h3>Award Winning Architecture Agency</h3>
                  <p>
                    For more than a decade; It has started its activity in
                    various sectors such as providing technical engineering
                    services, supplying casting raw materials and mineral raw
                    materials by using experienced and specialized personnel.
                    More than a decade of experience and experience in the
                    industry; This group has become a stronghold for customers
                    to supply raw materials and equipment. This group always
                    tries to keep its customers at the highest quality and
                    quantity level with the slogan of "the power of a good
                    choice". One of the plans for this complex is to set up a
                    production unit for ceramic parts and dry mortar to expand
                    its activity level. Customers have always played an
                    important role in the planning of this collection. This is
                    why this collection has used all its power for maximum
                    customer satisfaction. Therefore, we hope to be able to
                    always be with our good customers in the coming years.This
                    is why this collection has used all its power for maximum
                    customer satisfaction. Therefore, we hope to be able to
                    always be with our good customers in the coming years. Our
                    group consists of three companies named Parsua Sanat
                    Khavarmianeh, Parsua Faravar Iranian and Naqshineh Memari
                    Aria. Each of our companies is active in their own fields
                    and are ready to serve our dear customers.
                  </p>
                </TextContainer>
              </BlogSection>
              {/* === Contact Details === */}
              <BlogSection title="Contact Details" number="2">
                <ImgContainer>
                  <Img src={imgContact} alt="Contact" loading="lazy" />
                  <ImgDes>
                    <ul>
                      <Li>
                        <strong>01 .</strong>
                        <span>email : </span>{" "}
                        <a href="mailto:moradi2565@gmail.com">
                          Moradi2565@gmail.com
                        </a>
                      </Li>
                      <Li>
                        <strong>02 .</strong>
                        <span>call : </span> <a href="">+98213456789</a>
                      </Li>
                      <Li>
                        <strong>03 .</strong>
                        <span>Address : </span>{" "}
                        <a href="">
                        TEHRAN, IRAN
                        </a>
                      </Li>
                    </ul>
                  </ImgDes>
                </ImgContainer>
              </BlogSection>
              {/* === Form ===  */}
              <BlogSection title="Get In touch" number="3">
                <FormAbout />
              </BlogSection>
            </BoxLeftBlogWrapper>
          </div>
        </main>
        <HeightEmulator ref={ref} className="height-emulator" />
        <Footer />
      </motion.div>
    </>
  );
};

export default About;
