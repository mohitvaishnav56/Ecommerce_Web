export const getInitialTheme = () => {
    if(typeof(window) !== 'undefined' && window.localStorage) {
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme == 'light' || storedTheme == 'dark') {
            return storedTheme;
        }

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark').matches;
        return prefersDark ? "dark" : "light";
    }
    return "light"
}

