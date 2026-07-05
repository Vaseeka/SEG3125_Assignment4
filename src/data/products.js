// ============================================================
// PRODUCT CATALOG
// `discount` is a percentage off `price` (0 = not on sale).
// `genre`, `players`, and `publisher` are arrays so a game can
// belong to more than one facet value (co-published titles,
// multi-genre games). The faceted search matches a filter if
// ANY of a game's values in that facet overlap the selection.
//
// TO ADD BOX ART: add an `image` field to any product below,
// e.g. `image: "/games/nsmb.jpg"` (put the file in /public/games/
// and reference it as "/games/nsmb.jpg"), or a full URL. Cards
// without an `image` field show a placeholder box automatically.
// ============================================================

export const products = [
  // ── Mario ──
  { id: "nsmb", code: "NSMB", name: "New Super Mario Bros.", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Platformer"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 30 },
  { id: "mh3", code: "MH3", name: "Mario Hoops 3-on-3", franchise: "Mario", publisher: ["Nintendo", "Square Enix"], genre: ["Action", "Sports"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 0 },
  { id: "bis", code: "BIS", name: "Mario & Luigi: Bowser's Inside Story", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 0 },
  { id: "pit", code: "PiT", name: "Mario & Luigi: Partners in Time", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 15 },
  { id: "sm64", code: "SM64", name: "Super Mario 64 DS", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Platformer"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 0 },
  { id: "mso", code: "M&S", name: "Mario & Sonic at the Olympic Games", franchise: "Mario", publisher: ["Nintendo", "Sega"], genre: ["Action", "Sports"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 30 },
  { id: "msw", code: "M&SW", name: "Mario & Sonic at the Olympic Winter Games", franchise: "Mario", publisher: ["Nintendo", "Sega"], genre: ["Action", "Sports"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 0 },
  { id: "mkds", code: "MKDS", name: "Mario Kart DS", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Racing"], players: ["Single Player", "Multiplayer"], price: 19.99, discount: 0 },
  { id: "mp", code: "MP", name: "Mario Party", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Sports"], players: ["Single Player", "Multiplayer"], price: 19.99, discount: 0 },

  // ── Standalone ──
  { id: "twewy", code: "TWEWY", name: "The World Ends with You", franchise: "Standalone", publisher: ["Square Enix"], genre: ["Action", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 0 },
  { id: "ct", code: "CT", name: "Chrono Trigger", franchise: "Standalone", publisher: ["Square Enix"], genre: ["Strategy", "Role Playing"], players: ["Single Player"], price: 29.99, discount: 0 },

  // ── Sonic ──
  { id: "sasr", code: "SASR", name: "Sonic & Sega All-Stars Racing", franchise: "Sonic", publisher: ["Sega"], genre: ["Action", "Racing"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 30 },
  { id: "sst", code: "SST", name: "Sega Superstars Tennis", franchise: "Sonic", publisher: ["Sega"], genre: ["Action", "Sports"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 30 },
  { id: "sr", code: "SR", name: "Sonic Rush", franchise: "Sonic", publisher: ["Sega"], genre: ["Action", "Platformer"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 0 },

  // ── Final Fantasy ──
  { id: "ff3", code: "FF3", name: "Final Fantasy III", franchise: "Final Fantasy", publisher: ["Square Enix"], genre: ["Strategy", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 15 },
  { id: "ff4", code: "FF4", name: "Final Fantasy IV", franchise: "Final Fantasy", publisher: ["Square Enix"], genre: ["Strategy", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 0 },

  // ── Pokemon ──
  { id: "pdash", code: "PDASH", name: "Pokemon Dash", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Action", "Racing"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 30 },
  { id: "pmd", code: "PMD", name: "Pokemon Mystery Dungeon: Explorers of Sky", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Strategy", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 0 },
  { id: "prng", code: "PRNG", name: "Pokemon Rangers", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Action", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 15 },
  { id: "pplt", code: "PPLT", name: "Pokemon Platinum", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Strategy", "Role Playing"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 0 },
  { id: "pblk", code: "PBLK", name: "Pokemon Black", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Strategy", "Role Playing"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 0 },

  // ── Kirby ──
  { id: "kcc", code: "KCC", name: "Kirby Canvas Curse", franchise: "Kirby", publisher: ["Nintendo"], genre: ["Action", "Platformer"], players: ["Single Player"], price: 10.99, discount: 0 },
  { id: "kss", code: "KSS", name: "Kirby: Squeak Squad", franchise: "Kirby", publisher: ["Nintendo"], genre: ["Action", "Platformer"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 30 },
  { id: "ksu", code: "KSU", name: "Kirby Super Star Ultra", franchise: "Kirby", publisher: ["Nintendo"], genre: ["Action", "Platformer"], players: ["Single Player", "Multiplayer"], price: 19.99, discount: 0 },
  { id: "kma", code: "KMA", name: "Kirby Mass Attack", franchise: "Kirby", publisher: ["Nintendo"], genre: ["Strategy", "Platformer"], players: ["Single Player"], price: 10.99, discount: 15 },
];

export const facetOptions = {
  publisher: ["Nintendo", "Sega", "Square Enix"],
  franchise: ["Mario", "Sonic", "Pokemon", "Kirby", "Final Fantasy", "Standalone"],
  genre: ["Action", "Platformer", "Role Playing", "Strategy", "Racing", "Sports"],
  players: ["Single Player", "Multiplayer"],
};

export const PRICE_MIN = 10;
export const PRICE_MAX = 30;

// Fixed picks for homepage sections, referenced by id above.
export const POPULAR_GAME_IDS = ["sm64", "ct", "ksu"]; // Super Mario 64 DS, Chrono Trigger, Kirby Super Star Ultra

export default products;
