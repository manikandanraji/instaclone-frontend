import React, { useState, createContext } from "react";
import { lightTheme } from "../styles/theme";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // const localSt = JSON.parse(localStorage.getItem('theme'))
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
