export const products = [
  // ── Mario ──
  { id: "nsmb", image: "/games/nsmb.png", code: "NSMB", name: "New Super Mario Bros.", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Platformer"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 30 },
  { id: "mh3", image: "/games/mh3.png", code: "MH3", name: "Mario Hoops 3-on-3", franchise: "Mario", publisher: ["Nintendo", "Square Enix"], genre: ["Action", "Sports"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 0 },
  { id: "bis", image: "/games/bis.png", code: "BIS", name: "Mario & Luigi: Bowser's Inside Story", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 0 },
  { id: "pit", image: "/games/pit.png", code: "PiT", name: "Mario & Luigi: Partners in Time", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 15 },
  { id: "sm64", image: "/games/sm64.png", code: "SM64", name: "Super Mario 64 DS", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Platformer"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 0 },
  { id: "mso", image: "/games/mso.png", code: "M&S", name: "Mario & Sonic at the Olympic Games", franchise: "Mario", publisher: ["Nintendo", "Sega"], genre: ["Action", "Sports"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 30 },
  { id: "msw", image: "/games/msw.png", code: "M&SW", name: "Mario & Sonic at the Olympic Winter Games", franchise: "Mario", publisher: ["Nintendo", "Sega"], genre: ["Action", "Sports"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 0 },
  { id: "mkds", image: "/games/mkds.png", code: "MKDS", name: "Mario Kart DS", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Racing"], players: ["Single Player", "Multiplayer"], price: 19.99, discount: 0 },
  { id: "mp", image: "/games/mp.png", code: "MP", name: "Mario Party", franchise: "Mario", publisher: ["Nintendo"], genre: ["Action", "Sports"], players: ["Single Player", "Multiplayer"], price: 19.99, discount: 0 },

  // ── Standalone ──
  { id: "twewy", image: "/games/twewy.png", code: "TWEWY", name: "The World Ends with You", franchise: "Standalone", publisher: ["Square Enix"], genre: ["Action", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 0 },
  { id: "ct", image: "/games/ct.png", code: "CT", name: "Chrono Trigger", franchise: "Standalone", publisher: ["Square Enix"], genre: ["Strategy", "Role Playing"], players: ["Single Player"], price: 29.99, discount: 0 },

  // ── Sonic ──
  { id: "sasr", image: "/games/sasr.png", code: "SASR", name: "Sonic & Sega All-Stars Racing", franchise: "Sonic", publisher: ["Sega"], genre: ["Action", "Racing"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 30 },
  { id: "sst", image: "/games/sst.png", code: "SST", name: "Sega Superstars Tennis", franchise: "Sonic", publisher: ["Sega"], genre: ["Action", "Sports"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 30 },
  { id: "sr", image: "/games/sr.png", code: "SR", name: "Sonic Rush", franchise: "Sonic", publisher: ["Sega"], genre: ["Action", "Platformer"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 0 },

  // ── Final Fantasy ──
  { id: "ff3", image: "/games/ff3.png", code: "FF3", name: "Final Fantasy III", franchise: "Final Fantasy", publisher: ["Square Enix"], genre: ["Strategy", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 15 },
  { id: "ff4", image: "/games/ff4.png", code: "FF4", name: "Final Fantasy IV", franchise: "Final Fantasy", publisher: ["Square Enix"], genre: ["Strategy", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 0 },

  // ── Pokemon ──
  { id: "pdash", image: "/games/pdash.png", code: "PDASH", name: "Pokemon Dash", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Action", "Racing"], players: ["Single Player", "Multiplayer"], price: 10.99, discount: 30 },
  { id: "pmd", image: "/games/pmd.png", code: "PMD", name: "Pokemon Mystery Dungeon: Explorers of Sky", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Strategy", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 0 },
  { id: "prng", image: "/games/prng.png", code: "PRNG", name: "Pokemon Rangers", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Action", "Role Playing"], players: ["Single Player"], price: 19.99, discount: 15 },
  { id: "pplt", image: "/games/pplt.png", code: "PPLT", name: "Pokemon Platinum", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Strategy", "Role Playing"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 0 },
  { id: "pblk", image: "/games/pblk.png", code: "PBLK", name: "Pokemon Black", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Strategy", "Role Playing"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 0 },

  // ── Kirby ──
  { id: "kcc", image: "/games/kcc.png", code: "KCC", name: "Kirby Canvas Curse", franchise: "Kirby", publisher: ["Nintendo"], genre: ["Action", "Platformer"], players: ["Single Player"], price: 10.99, discount: 0 },
  { id: "kss", image: "/games/kss.png", code: "KSS", name: "Kirby: Squeak Squad", franchise: "Kirby", publisher: ["Nintendo"], genre: ["Action", "Platformer"], players: ["Single Player", "Multiplayer"], price: 29.99, discount: 30 },
  { id: "ksu", image: "/games/ksu.png", code: "KSU", name: "Kirby Super Star Ultra", franchise: "Kirby", publisher: ["Nintendo"], genre: ["Action", "Platformer"], players: ["Single Player", "Multiplayer"], price: 19.99, discount: 0 },
  { id: "kma", image: "/games/kma.png", code: "KMA", name: "Kirby Mass Attack", franchise: "Kirby", publisher: ["Nintendo"], genre: ["Strategy", "Platformer"], players: ["Single Player"], price: 10.99, discount: 15 },
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
