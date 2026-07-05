export const theme = {
  colors: {
    // Core brand colours
    primary: "#E23744",        // primary site colour for buttons, links and badges
    primaryDark: "#B92835",    // hover / active state for primary coloured elements
    primaryLight: "#FCE8EA",   // subtle red tint for backgrounds/pills

    dark: "#121212",           // navbar / hero / footer background
    darkSoft: "#1E1E1E",       // secondary dark surface

    accent: "#FF7A00",         // bright orange for quantity adjusters, active filter chips and feedback stars
    accentDark: "#E56A00",

    cartAction: "#E6398C",   
    cartActionDark: "#C22C74",

    surface: "#F4F4F4",        // page background
    surfaceAlt: "#FFFFFF",     // card background

    text: "#1A1A1A",           // body text
    textMuted: "#6B6B6B",      // secondary text
    textOnDark: "#FFFFFF",     // text on dark backgrounds

    success: "#3BAA5C",
    warning: "#FFD400",
    border: "#E4E4E4",

    // Was originally going to have dedicated colours for
    // different franchise tags, but for colour consitency's
    // sake I scratched this idea out. Leaving it here in case
    // I change my mind
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
