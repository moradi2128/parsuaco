import React, { useEffect, useState } from "react";

const useScrollTop = ({ ref }) => {
  //  === Ruf calculates the height of the element === 
  //  === endPointBox value of ref relative to scroll in Boolean
  
  let endPointBox = null;
// === Scroll Position ===  
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset - 10 ;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
// === height ref up offsetTop
  const [h, setH] = useState();
  useEffect(() => {
    const offsetTopEmulator = ref.current.offsetTop;
    const clientHeight = ref.current.clientHeight;
    const finishOffset = offsetTopEmulator - clientHeight;
    setH(finishOffset);
  }, [scrollPosition]);

  if (scrollPosition >= h) {
    endPointBox = true;
  } else {
    endPointBox = false;
  }
  return [endPointBox];
};

export default useScrollTop;
