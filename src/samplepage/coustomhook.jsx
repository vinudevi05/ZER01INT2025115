import { useState } from "react";

// Custom hook for managing color
const useColor = (initialColor = "black") => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    setColor("red"); // Change color to red
  };

  const resetColor = () => {
    setColor("black"); // Reset color to black
  };

  return [color, changeColor, resetColor];
};

export default useColor;
