import { createContext } from "react";
export const ColorContext = createContext({
    color:"red",
    setColor:()=>{}
})
export const ColorProvider= ColorContext.Provider;