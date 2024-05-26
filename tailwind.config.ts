import type { Config } from "tailwindcss";
import { shadcnPreset } from "./src/lib/shadcn-preset";

const config: Config = {
  presets: [shadcnPreset],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
} satisfies Config;

export default config;
