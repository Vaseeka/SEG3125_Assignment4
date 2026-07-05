export const products = [
  // ── Mario ──
  { id: "nsmb", code: "NSMB", name: "New Super Mario Bros.", franchise: "Mario", publisher: ["Nintendo"], genre: ["Platformer"], players: ["Single Player", "Multiplayer"], price: 24.99, discount: 15 },
  { id: "mh3", code: "MH3", name: "Mario Hoops 3-on-3", franchise: "Mario", publisher: ["Nintendo", "Square Enix"], genre: ["Sports", "Action"], players: ["Single Player", "Multiplayer"], price: 19.99, discount: 0 },
  { id: "bis", code: "BIS", name: "Mario & Luigi: Bowser's Inside Story", franchise: "Mario", publisher: ["Nintendo"], genre: ["Role Playing"], players: ["Single Player"], price: 34.99, discount: 0 },
  { id: "pit", code: "PiT", name: "Mario & Luigi: Partners in Time", franchise: "Mario", publisher: ["Nintendo"], genre: ["Role Playing"], players: ["Single Player"], price: 29.99, discount: 0 },
  { id: "sm64", code: "SM64", name: "Super Mario 64 DS", franchise: "Mario", publisher: ["Nintendo"], genre: ["Platformer"], players: ["Single Player", "Multiplayer"], price: 19.99, discount: 0 },
  { id: "mso", code: "M&S", name: "Mario & Sonic at the Olympic Games", franchise: "Mario", publisher: ["Nintendo", "Sega"], genre: ["Sports"], players: ["Single Player", "Multiplayer"], price: 24.99, discount: 15 },
  { id: "msw", code: "M&SW", name: "Mario & Sonic at the Olympic Winter Games", franchise: "Mario", publisher: ["Nintendo", "Sega"], genre: ["Sports"], players: ["Single Player", "Multiplayer"], price: 14.99, discount: 20 },
  { id: "mkds", code: "MKDS", name: "Mario Kart DS", franchise: "Mario", publisher: ["Nintendo"], genre: ["Racing"], players: ["Single Player", "Multiplayer"], price: 27.99, discount: 10 },
  { id: "mpds", code: "MPDS", name: "Mario Party DS", franchise: "Mario", publisher: ["Nintendo"], genre: ["Strategy"], players: ["Single Player", "Multiplayer"], price: 25.99, discount: 20 },

  // ── Standalone ──
  { id: "twewy", code: "TWEWY", name: "The World Ends with You", franchise: "Standalone", publisher: ["Square Enix"], genre: ["Action", "Role Playing"], players: ["Single Player"], price: 39.99, discount: 0 },
  { id: "ct", code: "CT", name: "Chrono Trigger", franchise: "Standalone", publisher: ["Square Enix"], genre: ["Role Playing", "Strategy"], players: ["Single Player"], price: 39.99, discount: 0 },

  // ── Sonic ──
  { id: "sasr", code: "SASR", name: "Sonic & Sega All-Stars Racing", franchise: "Sonic", publisher: ["Sega"], genre: ["Racing"], players: ["Single Player", "Multiplayer"], price: 14.99, discount: 15 },
  { id: "sst", code: "SST", name: "Sega Superstars Tennis", franchise: "Sonic", publisher: ["Sega"], genre: ["Sports"], players: ["Single Player", "Multiplayer"], price: 24.99, discount: 15 },
  { id: "sr", code: "SR", name: "Sonic Rush", franchise: "Sonic", publisher: ["Sega"], genre: ["Platformer", "Action"], players: ["Single Player", "Multiplayer"], price: 16.99, discount: 0 },

  // ── Final Fantasy ──
  { id: "ff3", code: "FF3", name: "Final Fantasy III", franchise: "Final Fantasy", publisher: ["Square Enix"], genre: ["Role Playing", "Strategy"], players: ["Single Player"], price: 29.99, discount: 0 },
  { id: "ff4", code: "FF4", name: "Final Fantasy IV", franchise: "Final Fantasy", publisher: ["Square Enix"], genre: ["Role Playing", "Strategy"], players: ["Single Player"], price: 29.99, discount: 10 },

  // ── Pokemon ──
  { id: "pmd", code: "PMD", name: "Pokemon Mystery Dungeon: Explorers of Sky", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Role Playing", "Strategy"], players: ["Single Player"], price: 32.99, discount: 0 },
  { id: "pr", code: "PR", name: "Pokemon Ranger: Shadows of Almia", franchise: "Pokemon", publisher: ["Nintendo"], genre: ["Action", "Role Playing"], players: ["Single Player"], price: 27.99, discount: 0 },

  // ── Kirby ──
  { id: "kss", code: "KSS", name: "Kirby: Squeak Squad", franchise: "Kirby", publisher: ["Nintendo"], genre: ["Platformer"], players: ["Single Player", "Multiplayer"], price: 21.99, discount: 0 },
  { id: "ksu", code: "KSU", name: "Kirby Super Star Ultra", franchise: "Kirby", publisher: ["Nintendo"], genre: ["Platformer", "Action"], players: ["Single Player", "Multiplayer"], price: 26.99, discount: 0 },
];

export const facetOptions = {
  publisher: ["Nintendo", "Sega", "Square Enix"],
  franchise: ["Standalone", "Mario", "Sonic", "Final Fantasy", "Pokemon", "Kirby"],
  genre: ["Action", "Racing", "Role Playing", "Sports", "Strategy", "Platformer"],
  players: ["Single Player", "Multiplayer"],
};

export default products;
