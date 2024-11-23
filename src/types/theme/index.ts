export type Theme = "dark" | "light" | "system";

export interface ThemeManagerContext {
  theme: Theme; // User-selected theme
  resolvedTheme: "dark" | "light"; // Actual resolved theme
  setTheme: (theme: Theme) => void;
}
