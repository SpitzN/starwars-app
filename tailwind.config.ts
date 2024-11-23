// tailwind.config.ts
import type { Config } from "tailwindcss";
import { shadcnPreset } from "./src/lib/shadcn-preset";
import { starWarsPlugin } from "./src/lib/starwars-plugin";

const config: Config = {
  plugins: [starWarsPlugin],
  presets: [shadcnPreset],
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        starJedi: ['"Star Jedi"', "sans-serif"],
        starJediHollow: ['"Star Jedi Hollow"', "sans-serif"],
        orbitron: ['"Orbitron"', "sans-serif"],
        dosis: ['"Dosis"', "sans-serif"],
      },
    },
  },
} satisfies Config;

export default config;
