import React from "react";
import { Main } from "./index";
// === motion Variants ===
import { containerVariants } from "../../motionVariants/motionVariants";
// === Components ===
import CarouselHome from "../../components/CarouselHome/CarouselHome";

const Home = () => {
  return (
    <Main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section style={{ height: "100%" }}>
        <CarouselHome />
      </section>
    </Main>
  );
};

export default Home;
