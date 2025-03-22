import { useState } from "react";

export function useRainbow() {
  const [isRainbow, setIsRainbow] = useState(false);

  const toggleRainbow = () => {
    setIsRainbow((prev) => !prev);
  };

  return { isRainbow, toggleRainbow };
}
