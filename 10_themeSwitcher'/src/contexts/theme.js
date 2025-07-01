import { createContext, useContext } from "react";

// creating a context with initial value a object
export const ThemeContext = createContext({
    themeMode: "light",
    isDarkMode: "false",
    setMode: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// This custom hook will return states that is stored in contexts
export default function useTheme() {
    return useContext(ThemeContext);
}