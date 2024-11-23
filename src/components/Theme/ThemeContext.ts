import { createContext } from "react";
import { ThemeManagerContext } from "@/types";

export const ThemeContext = createContext<ThemeManagerContext | undefined>(undefined);
