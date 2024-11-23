import { useMemo } from "react";
import { useTheme } from "@/hooks/useTheme";

interface LogoPaths {
  fullLogo: string;
  hollowLogo: string;
}

const LOGO_PATHS = {
  dark: {
    full: "/images/logo_full_white.png",
    hollow: "/images/logo_hollow_white.png",
  },
  light: {
    full: "/images/logo_full.png",
    hollow: "/images/logo_hollow.png",
  },
} as const;

export const useLogo = (): LogoPaths => {
  const { resolvedTheme } = useTheme();

  return useMemo(
    () => ({
      fullLogo: LOGO_PATHS[resolvedTheme === "dark" ? "dark" : "light"].full,
      hollowLogo: LOGO_PATHS[resolvedTheme === "dark" ? "dark" : "light"].hollow,
    }),
    [resolvedTheme]
  );
};
