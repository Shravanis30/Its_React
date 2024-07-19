import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// this is minimization of the code this avoid making of the another file of the provider
export default function useTheme() {
    return useContext(ThemeContext)
}