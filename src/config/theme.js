export const theme = {
  colors: {
    // Core brand colours
    primary: "#E23744",        // main red accent (buttons, links, badges)
    primaryDark: "#B92835",    // hover / active state for primary
    primaryLight: "#FCE8EA",   // subtle red tint for backgrounds/pills

    dark: "#121212",           // navbar / hero / footer background
    darkSoft: "#1E1E1E",       // secondary dark surface

    accent: "#D96B00",         // orange — quantity steppers & active filter chips
    accentDark: "#B85900",

    surface: "#F4F4F4",        // page background
    surfaceAlt: "#FFFFFF",     // card background

    text: "#1A1A1A",           // body text
    textMuted: "#6B6B6B",      // secondary text
    textOnDark: "#FFFFFF",     // text on dark backgrounds

    success: "#3BAA5C",
    warning: "#F5C344",
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
