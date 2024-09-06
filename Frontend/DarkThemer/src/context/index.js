// Import Themer as default, and ThemeContext and ThemeProvider as named imports
import useThemer from "./ThemeSetter";
import  { themeContext, ThemeProvider } from "./ThemeSetter";

// Re-export Themer as the default export, and ThemeContext and ThemeProvider as named exports
export default useThemer;
export { themeContext, ThemeProvider };
