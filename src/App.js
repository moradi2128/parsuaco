import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
// === Components ===
import Header from "./components/Header/Header";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Loading from "./components/Loading/Loading";
import ScrollToTop from "./components/ScrollToTopRouter/ScrollToTopRouter";

function App() {
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
      <Router>
        <ScrollToTop>
          <Header />
          {matchesLg && <LeftPanel />}
          <Routes>
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
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
