import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import routes from "./routes";
// === Components ===
import Header from "./components/Header/Header";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Loading from "./components/Loading/Loading";
import ScrollToTop from "./components/ScrollToTopRouter/ScrollToTopRouter";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  // === Media Query 768 px ===
  const [matchesLg, setMatchesLg] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatchesLg(e.matches));
  }, []);

  return (
    <>
      <ScrollToTop>
        <Header />
        {matchesLg && <LeftPanel />}
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Suspense fallback={<Loading />}>
                      <route.element />
                    </Suspense>
                  }
                />
              );
            })}
          </Routes>
        </AnimatePresence>
      </ScrollToTop>
    </>
  );
}

export default App;
