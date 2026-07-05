// ============================================================
// THEME CONFIG
// Edit these values to change the entire site's colour scheme.
// Every component reads colours from here (via CSS variables
// injected in src/index.css at runtime) — nothing is hard-coded
// in the components themselves.
// ============================================================

export const theme = {
  colors: {
    // Core brand colours
    primary: "#E23744",        // main red accent (buttons, links, badges)
    primaryDark: "#B92835",    // hover / active state for primary
    primaryLight: "#FCE8EA",   // subtle red tint for backgrounds/pills

    dark: "#121212",           // navbar / hero / footer background
    darkSoft: "#1E1E1E",       // secondary dark surface

    accent: "#FF7A00",         // bright orange — quantity steppers, active filter chips, feedback stars
    accentDark: "#E56A00",

    cartAction: "#E6398C",     // bright pink — "Add to cart" button, distinct from nav buttons
    cartActionDark: "#C22C74",

    surface: "#F4F4F4",        // page background
    surfaceAlt: "#FFFFFF",     // card background

    text: "#1A1A1A",           // body text
    textMuted: "#6B6B6B",      // secondary text
    textOnDark: "#FFFFFF",     // text on dark backgrounds

    success: "#3BAA5C",
    warning: "#FFD400",
    border: "#E4E4E4",

    // Category tag colours (used for Franchise / Publisher pills)
    tagMario: "#E23744",
    tagSonic: "#2E7DD1",
    tagNintendo: "#7A5CC0",
    tagSega: "#2E7DD1",
    tagSquareEnix: "#3BAA5C",
  },

  fonts: {
    heading: "'Poppins', 'Segoe UI', sans-serif",
    body: "'Inter', 'Segoe UI', sans-serif",
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    pill: "999px",
  },
};

export default theme;
