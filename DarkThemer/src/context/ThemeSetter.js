import { createContext,useContext } from "react";
export const themeContext = createContext({
    ThemeMode:"light",
    DarkTheme:()=>{},
    LightTheme:()=>{}
});

export const ThemeProvider = themeContext.Provider;
export default function useThemer(){
    return useContext(themeContext)
}