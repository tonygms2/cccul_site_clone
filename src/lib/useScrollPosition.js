import { useEffect, useState } from "react";

function useScrollPosition(offest = 60) {
  const [scrolled, setScrolled] = useState(false);

  let handleScroll = () => setScrolled(window.scrollY > offest ? true : false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
}

export default useScrollPosition;
