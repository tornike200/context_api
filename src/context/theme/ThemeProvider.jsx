import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [isDark, setIsdark] = useState(false);

  function toggle() {
    setIsdark((prev) => !prev);
    console.log(isDark);
  }

  return (
    <div>
      <ThemeContext.Provider value={{ isDark, toggle }}>{children}</ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
