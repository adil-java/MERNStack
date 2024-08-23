import React, { useContext } from "react";
import { themeContext } from "../context/Theme";

function Btn() {
  const { ThemeMode, Theme } = useContext(themeContext);

  return (
    <button onClick={Theme}>
      Switch to Dark Theme (Current: {ThemeMode})
    </button>
  );
}

export default Btn;
