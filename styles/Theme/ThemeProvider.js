import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from "react";

const initialState = {
  mode: "light",
  toggle: () => {},
};
const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
  const [mode, setMode] = useState(initialState.mode);

  useEffect(() => {
    if (localStorage.getItem("mode") === null) {
      const isDark =
        window?.matchMedia &&
        window?.matchMedia("(prefers-color-scheme: dark)")?.matches;
      setMode(isDark ? "dark" : "light");
      // watch for system changes
      window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
        setMode(e.matches ? "dark" : "light");
        if (e.matches) {
          document.body.classList.add("theme-dark");
          document.body.classList.remove("theme-light");
        } else {
          document.body.classList.add("theme-light");
          document.body.classList.remove("theme-dark");
        }
      });
    } else {
      const isDark = JSON.parse(localStorage.getItem("mode")) === "dark";
      setMode(isDark ? "dark" : "light");
    }
  }, [mode]);

  const toggle = useCallback(() => {
    const nextTheme = mode === "dark" ? "light" : "dark";
    if (nextTheme === "dark") {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
    }
    document.documentElement.setAttribute(
      "data-color-scheme",
      nextTheme === "dark" ? "dark" : "light",
    );
    localStorage.setItem("mode", JSON.stringify(nextTheme));
    setMode(nextTheme);
  }, [mode]);

  const value = useMemo(() => {
    return { mode, toggle };
  }, [mode, toggle]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
