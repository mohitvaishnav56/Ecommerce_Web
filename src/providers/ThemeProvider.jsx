import { useEffect, useState } from "react"
import { getInitialTheme } from "../utils/ThemeUtils"
import ThemeContext from "../contexts/ThemeContext";
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme());
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('dark', 'light');
        root.classList.add(theme)
        localStorage.setItem('theme', theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider