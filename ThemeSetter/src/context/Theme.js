import {useContext,createContext} from "react"
export const ThemeContext = createContext({
    ThemeMode:"Light",
    darktheme:()=>{},
    lighttheme:()=>{}

})
export const ThemeProvider =ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}