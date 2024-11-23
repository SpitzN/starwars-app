import React, { useEffect, useState } from "react";
import { Theme } from "@/types";
import { ThemeContext } from "./ThemeContext";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const ThemeProvider: React.FC<{ children: React.ReactNode; storageKey?: string }> = ({
  children,
  storageKey = "starwars-ui-theme",
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem(storageKey) as Theme) || "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">(
    theme === "system" ? getSystemTheme() : theme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    const applyTheme = (currentTheme: Theme) => {
      const newTheme = currentTheme === "system" ? getSystemTheme() : currentTheme;
      setResolvedTheme(newTheme);
      root.classList.add(newTheme);
    };

    applyTheme(theme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const value = {
    theme,
    resolvedTheme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
