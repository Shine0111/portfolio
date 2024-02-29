import { useEffect, useState } from "react";

const useViewport = () => {
  const [viewWidth, setViewWidth] = useState<number>(window.innerWidth);

  const breakpoint = 815;

  useEffect(() => {
    const handleViewportResize = () => setViewWidth(window.innerWidth);
    window.addEventListener("resize", handleViewportResize);
    return () => window.removeEventListener("resize", handleViewportResize);
  }, []);

  return { viewWidth, breakpoint };
};

export default useViewport;
