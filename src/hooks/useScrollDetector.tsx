import { useEffect, useState } from "react";

const useScrollDetector = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const handleScroll = () => {
    setIsScrolling(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolling;
};

export default useScrollDetector;
