import { useEffect } from "react";
import theme from "../config/theme";

const cssVarMap = {
  primary: "--color-primary",
  primaryDark: "--color-primary-dark",
  primaryLight: "--color-primary-light",
  dark: "--color-dark",
  darkSoft: "--color-dark-soft",
  accent: "--color-accent",
  accentDark: "--color-accent-dark",
  cartAction: "--color-cart-action",
  cartActionDark: "--color-cart-action-dark",
  surface: "--color-surface",
  surfaceAlt: "--color-surface-alt",
  text: "--color-text",
  textMuted: "--color-text-muted",
  textOnDark: "--color-text-on-dark",
  success: "--color-success",
  warning: "--color-warning",
  border: "--color-border",
};

// Applies every colour in src/config/theme.js to the document root
// as a CSS variable, so changing that one file re-themes the whole app.
export default function ThemeInjector() {
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(cssVarMap).forEach(([key, cssVar]) => {
      if (theme.colors[key]) root.style.setProperty(cssVar, theme.colors[key]);
    });
    if (theme.fonts?.heading) root.style.setProperty("--font-heading", theme.fonts.heading);
    if (theme.fonts?.body) root.style.setProperty("--font-body", theme.fonts.body);
    if (theme.radius?.sm) root.style.setProperty("--radius-sm", theme.radius.sm);
    if (theme.radius?.md) root.style.setProperty("--radius-md", theme.radius.md);
    if (theme.radius?.lg) root.style.setProperty("--radius-lg", theme.radius.lg);
    if (theme.radius?.pill) root.style.setProperty("--radius-pill", theme.radius.pill);
  }, []);

  return null;
}
