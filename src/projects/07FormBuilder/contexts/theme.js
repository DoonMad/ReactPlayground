import React, { useContext } from "react";

const ThemeContext = React.createContext({
    theme: "light",
    toggleTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}