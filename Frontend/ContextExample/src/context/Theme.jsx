import React, { createContext, useState } from "react";

// Define your context with default values
export const themeContext = createContext({
  ThemeMode: "light",
  Theme: () => {},
  
});

export const ThemeProvider = ({ children }) => {
  const [ThemeMode, setTheme] = useState("Light");

  const Theme = () => setTheme(ThemeMode==="Light" ? "Dark" : "Light");


  return (
    <themeContext.Provider value={{ ThemeMode,Theme }}>
      {children}
    </themeContext.Provider>
  );
};
