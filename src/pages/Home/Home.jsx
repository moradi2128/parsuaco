import React from "react";
import { Main } from "./index";
// === Components ===
import CarouselHome from "../../components/CarouselHome/CarouselHome";

const Home = () => {
  return (
    <Main>
      <section style={{ height: "100%" }}>
        <CarouselHome />
      </section>
    </Main>
  );
};

export default Home;
