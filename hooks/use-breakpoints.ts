import { useMediaQuery } from "react-responsive";

/**
 * Custom React Hook to manage responsive breakpoints.
 *
 * @returns {Object} - An object with boolean values indicating if the current viewport matches the mobile, tablet, or desktop breakpoints.
 */
export const useBreakpoints = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  const isSm = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 767px)",
  });
  const isMd = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isLg = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1279px)",
  });
  const isXl = useMediaQuery({
    query: "(min-width: 1280px) and (max-width: 1535px)",
  });
  const is2xl = useMediaQuery({
    query: "(min-width: 1536px)",
  });
  return {
    isMobile,
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
  };
};
