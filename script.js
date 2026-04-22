// ==============================================
// NEBULA NEXUS — EVE Online Sites Database
// ==============================================

// ========== EXPLORATION SITES DATA ==========
const EXPLORATION_SITES = [
    // FULLERITE GAS SITES (WORMHOLE SPACE)
    { name: "Instrumental Core Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole C5/C6", gas: "Fullerite - C320", notes: "15-20min timer before Sleepers. HIGH VALUE! C5/C6 only.", yield: "~120-160 units/hr", value: "Very High", ship: "Venture / Prospect / Endurance" },
    { name: "Vital Core Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole C5/C6", gas: "Fullerite - C540", notes: "15-20min timer before Sleepers. HIGHEST VALUE! C5/C6 only.", yield: "~120-160 units/hr", value: "Highest", ship: "Venture / Prospect / Endurance" },
    { name: "Barren Perimeter Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C50/C84", notes: "15-20min timer. Primary: C50, Secondary: C84", yield: "~200 units/hr", value: "Medium", ship: "Venture / Prospect" },
    { name: "Token Perimeter Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C60/C50", notes: "15-20min timer. Primary: C60, Secondary: C50", yield: "~200 units/hr", value: "Medium", ship: "Venture / Prospect" },
    { name: "Minor Perimeter Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C70/C60", notes: "15-20min timer. Primary: C70, Secondary: C60", yield: "~200 units/hr", value: "Medium-High", ship: "Venture / Prospect" },
    { name: "Ordinary Perimeter Reservoir", type: "Gas - Fullerite", safety: "unsafe", region: "Wormhole", gas: "Fullerite - C72/C70", notes: "DANGER! 5 sentry drones on warp-in. Primary: C72, Secondary: C70", yield: "~200 units/hr", value: "Medium-High", ship: "Battlecruiser+ recommended" },
    { name: "Sizable Perimeter Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C84/C72", notes: "15-20min timer. Primary: C84, Secondary: C72", yield: "~200 units/hr", value: "High", ship: "Venture / Prospect" },
    { name: "Bountiful Frontier Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C28/C32", notes: "15-20min timer. Primary: C28, Secondary: C32", yield: "~200 units/hr", value: "Low-Medium", ship: "Venture / Prospect" },
    { name: "Vast Frontier Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C32/C28", notes: "15-20min timer. Primary: C32, Secondary: C28", yield: "~200 units/hr", value: "Low-Medium", ship: "Venture / Prospect" },

    // MYKOSEROCIN GAS (HIGHSEC/LOWSEC/NULLSEC)
    { name: "Sister Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Multiple", gas: "Mykoserocin - Lime", notes: "2,000 units total. Regions: Aridia, Curse, Derelik, Khanid, Omist, Solitude", yield: "~2,000 units total", value: "Low", ship: "Venture" },
    { name: "Helix Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Multiple", gas: "Mykoserocin - Lime", notes: "6,000 units total. Regions: Aridia, Curse, Derelik, Khanid, Kor-Azor, Solitude", yield: "~6,000 units total", value: "Low", ship: "Venture" },
    { name: "Wild Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Multiple", gas: "Mykoserocin - Malachite", notes: "2,000 units total. Regions: Aridia, Insmother, Kor-Azor, Curse, Omist, Solitude, Tash-Murkon", yield: "~2,000 units total", value: "Low", ship: "Venture" },
    { name: "Blackeye Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Multiple", gas: "Mykoserocin - Malachite", notes: "6,000 units total. Regions: Aridia, Curse, Khanid, Kor-Azor, Omist, Solitude", yield: "~6,000 units total", value: "Low", ship: "Venture" },
    { name: "Sunspark Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Caldari", gas: "Mykoserocin - Amber", notes: "2,000 units total. Regions: Black Rise, Lonetrek, Outer Passage, Sinq Laison, The Citadel, The Forge, The Spire", yield: "~2,000 units total", value: "Low", ship: "Venture" },
    { name: "Diablo Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Caldari", gas: "Mykoserocin - Amber", notes: "6,000 units total. Regions: Black Rise, Everyshore, Lonetrek, Outer Passage, Sinq Laison, The Citadel, The Forge, Vale of the Silent", yield: "~6,000 units total", value: "Low", ship: "Venture" },
    { name: "Smoking Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Caldari", gas: "Mykoserocin - Golden", notes: "2,000 units total. Regions: Black Rise, Everyshore, Lonetrek, Outer Passage, Perrigen Falls, Sinq Laison, The Citadel, The Spire", yield: "~2,000 units total", value: "Low", ship: "Venture" },
    { name: "Ring Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Caldari", gas: "Mykoserocin - Golden", notes: "6,000 units total. Regions: Black Rise, Everyshore, Lonetrek, Malpais, Outer Passage, Perrigen Falls, Sinq Laison, The Citadel", yield: "~6,000 units total", value: "Low", ship: "Venture" },
    { name: "Calabash Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Gallente", gas: "Mykoserocin - Celadon", notes: "2,000 units total. Regions: Domain, Genesis, Placid, Solitude, Fountain (Pegasus)", yield: "~2,000 units total", value: "Low", ship: "Venture" },
    { name: "Glass Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Gallente", gas: "Mykoserocin - Celadon", notes: "6,000 units total. Regions: Domain, Solitude, Pure Blind, Placid, Genesis", yield: "~6,000 units total", value: "Low", ship: "Venture" },
    { name: "Bright Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Gallente", gas: "Mykoserocin - Viridian", notes: "2,000 units total. Regions: Essence, Fountain, Placid, Tenal, Venal", yield: "~2,000 units total", value: "Low", ship: "Venture" },
    { name: "Sparking Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Gallente", gas: "Mykoserocin - Viridian", notes: "6,000 units total. Regions: Domain, Essence, Fountain, Genesis, Placid, Pure Blind, Tenal", yield: "~6,000 units total", value: "Low", ship: "Venture" },
    { name: "Ghost Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Minmatar", gas: "Mykoserocin - Azure", notes: "2,000 units total. Regions: Curse, Derelik, Devoid, The Bleak Lands, Heimatar, Molden Heath", yield: "~2,000 units total", value: "Low", ship: "Venture" },
    { name: "Eagle Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Minmatar", gas: "Mykoserocin - Azure", notes: "6,000 units total. Regions: Curse, Derelik, The Bleak Lands, Heimatar, Insmother, Metropolis, Molden Heath, Tenerifis", yield: "~6,000 units total", value: "Low", ship: "Venture" },
    { name: "Flame Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Minmatar", gas: "Mykoserocin - Vermillion", notes: "2,000 units total. Regions: Curse, Derelik, Devoid, The Bleak Lands, Great Wildlands, Heimatar, Insmother, Metropolis, Omist, Tenerifis", yield: "~2,000 units total", value: "Low", ship: "Venture" },
    { name: "Pipe Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Minmatar", gas: "Mykoserocin - Vermillion", notes: "6,000 units total. Regions: Curse, Derelik, Devoid, The Bleak Lands, Heimatar, Immensea, Metropolis, Tenerifis", yield: "~6,000 units total", value: "Low", ship: "Venture" },

    // CYTOSEROCIN GAS (LOWSEC/NULLSEC)
    { name: "Emerald Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Derelik", gas: "Cytoserocin - Lime", notes: "500 units. No NPCs, no explosions", yield: "500 units", value: "Medium", ship: "Venture" },
    { name: "Cheetah Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Catch", gas: "Cytoserocin - Lime", notes: "1,000 units. Explodes: 1000 thermal", yield: "1,000 units", value: "Medium", ship: "Venture (tanked)" },
    { name: "Duo Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Catch (9HXQ-G)", gas: "Cytoserocin - Lime", notes: "3,000 units. Explodes: 1000 EM + 1000 thermal", yield: "3,000 units", value: "Medium-High", ship: "Venture (tanked)" },
    { name: "Leopard Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Catch", gas: "Cytoserocin - Lime", notes: "18,000 units! NPCs present. Explodes: 1400 explosive", yield: "18,000 units", value: "High", ship: "Combat ship recommended" },
    { name: "Rimy Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Catch", gas: "Cytoserocin - Lime", notes: "3,000 units. NPCs present. Explodes: 1000 EM + 1000 thermal", yield: "3,000 units", value: "Medium-High", ship: "Combat ship recommended" },
    { name: "Crimson Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Aridia", gas: "Cytoserocin - Malachite", notes: "1,000 units. No NPCs, no explosions", yield: "1,000 units", value: "Medium", ship: "Venture" },
    { name: "Cobra Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Delve", gas: "Cytoserocin - Malachite", notes: "500 units. Explodes: 800 EM + 800 thermal", yield: "500 units", value: "Medium", ship: "Venture (tanked)" },
    { name: "Crab Spider Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Delve", gas: "Cytoserocin - Malachite", notes: "2,000 units. NPCs present. No explosions", yield: "2,000 units", value: "Medium-High", ship: "Combat ship recommended" },
    { name: "Hazy Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Delve (OK-FEM)", gas: "Cytoserocin - Malachite", notes: "18,000 units! NPCs. Explodes: 800 EM + 700 thermal", yield: "18,000 units", value: "High", ship: "Combat ship recommended" },
    { name: "Hidden Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Delve (OK-FEM)", gas: "Cytoserocin - Malachite", notes: "6,000 units. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Venture (tanked)" },
    { name: "Whirling Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Delve (OK-FEM)", gas: "Cytoserocin - Malachite", notes: "6,000 units. NPCs. DEADSPACE. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Combat ship recommended" },
    { name: "Bandit Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - The Forge", gas: "Cytoserocin - Amber", notes: "1,000 units. No NPCs, no explosions", yield: "1,000 units", value: "Medium", ship: "Venture" },
    { name: "Fluttering Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Vale of the Silent", gas: "Cytoserocin - Amber", notes: "500 units. Explodes: 1000 thermal", yield: "500 units", value: "Medium", ship: "Venture (tanked)" },
    { name: "Rocky Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Vale of the Silent", gas: "Cytoserocin - Amber", notes: "832 units. Explodes: 2500 thermal", yield: "832 units", value: "Medium", ship: "Venture (tanked)" },
    { name: "Dewy Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Vale (E-8CSQ)", gas: "Cytoserocin - Amber", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Combat ship recommended" },
    { name: "Foggy Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Vale (E-8CSQ)", gas: "Cytoserocin - Amber", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Combat ship recommended" },
    { name: "Shimmering Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Vale (E-8CSQ)", gas: "Cytoserocin - Amber", notes: "18,000 units! NPCs. Explodes: 1400 thermal", yield: "18,000 units", value: "Very High", ship: "Combat ship recommended" },
    { name: "Spacious Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Vale (E-8CSQ)", gas: "Cytoserocin - Amber", notes: "6,000 units. Mixed explosions or none", yield: "6,000 units", value: "High", ship: "Venture (tanked)" },
    { name: "Profiteer Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Lonetrek", gas: "Cytoserocin - Golden", notes: "1,000 units. No NPCs, no explosions", yield: "1,000 units", value: "Medium", ship: "Venture" },
    { name: "Moth Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Tenal", gas: "Cytoserocin - Golden", notes: "2,000 units. NPCs. No explosions", yield: "2,000 units", value: "Medium-High", ship: "Combat ship recommended" },
    { name: "Swarm Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Tenal", gas: "Cytoserocin - Golden", notes: "2,000 units. DEADSPACE. Explodes: 1000 thermal", yield: "2,000 units", value: "Medium-High", ship: "Venture (tanked)" },
    { name: "Lion Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Tenal (09-4XW)", gas: "Cytoserocin - Golden", notes: "6,000 units. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Venture (tanked)" },
    { name: "Shiny Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Tenal (09-4XW)", gas: "Cytoserocin - Golden", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Combat ship recommended" },
    { name: "Gaseous Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Tenal (09-4XW)", gas: "Cytoserocin - Golden", notes: "18,000 units! NPCs. Explodes: 700 EM + 700 thermal", yield: "18,000 units", value: "Very High", ship: "Combat ship recommended" },
    { name: "Phoenix Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Solitude", gas: "Cytoserocin - Celadon", notes: "1,000 units. No NPCs, no explosions", yield: "1,000 units", value: "Medium", ship: "Venture" },
    { name: "Flowing Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Fountain", gas: "Cytoserocin - Celadon", notes: "2,000 units. Explodes: 1000 thermal", yield: "2,000 units", value: "Medium-High", ship: "Venture (tanked)" },
    { name: "Thick Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Fountain", gas: "Cytoserocin - Celadon", notes: "1,000 units. NPCs present", yield: "1,000 units", value: "Medium", ship: "Combat ship recommended" },
    { name: "Diamond Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Fountain (Pegasus)", gas: "Cytoserocin - Celadon", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Combat ship recommended" },
    { name: "Massive Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Fountain (Pegasus)", gas: "Cytoserocin - Celadon", notes: "14,224 units. NPCs. Explodes: 800 thermal", yield: "14,224 units", value: "Very High", ship: "Combat ship recommended" },
    { name: "Peacock Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Fountain (Pegasus)", gas: "Cytoserocin - Celadon", notes: "6,000 units. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Venture (tanked)" },
    { name: "Forgotten Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Placid", gas: "Cytoserocin - Viridian", notes: "1,000 units. No NPCs, no explosions", yield: "1,000 units", value: "Medium", ship: "Venture" },
    { name: "Frosty Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Cloud Ring", gas: "Cytoserocin - Viridian", notes: "2,000 units. NPCs. No explosions", yield: "2,000 units", value: "Medium-High", ship: "Combat ship recommended" },
    { name: "Goose Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Cloud Ring", gas: "Cytoserocin - Viridian", notes: "2,000 units. Explodes: 1000 thermal", yield: "2,000 units", value: "Medium-High", ship: "Venture (tanked)" },
    { name: "Icy Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Cloud Ring (Assilot)", gas: "Cytoserocin - Viridian", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Combat ship recommended" },
    { name: "Pale Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Cloud Ring (Assilot)", gas: "Cytoserocin - Viridian", notes: "Unknown units. Explodes: 1000 thermal", yield: "Unknown", value: "Unknown", ship: "Venture (tanked)" },
    { name: "Polar Bear Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Cloud Ring (Assilot)", gas: "Cytoserocin - Viridian", notes: "18,000 units! NPCs. Explodes: 800 thermal", yield: "18,000 units", value: "Very High", ship: "Combat ship recommended" },
    { name: "Rapture Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Molden Heath", gas: "Cytoserocin - Azure", notes: "1,400 units. No NPCs, no explosions", yield: "1,400 units", value: "Medium", ship: "Venture" },
    { name: "Crystal Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Wicked Creek", gas: "Cytoserocin - Azure", notes: "2,000 units. Explodes: 400 thermal", yield: "2,000 units", value: "Medium-High", ship: "Venture (tanked)" },
    { name: "Snowy Owl Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Wicked Creek", gas: "Cytoserocin - Azure", notes: "2,000 units. NPCs. No explosions", yield: "2,000 units", value: "Medium-High", ship: "Combat ship recommended" },
    { name: "Arctic Fox Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Wicked Creek (760-9C)", gas: "Cytoserocin - Azure", notes: "9,000 units. NPCs. Explodes: 700 EM + 700 thermal", yield: "9,000 units", value: "High", ship: "Combat ship recommended" },
    { name: "Glistening Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Wicked Creek (760-9C)", gas: "Cytoserocin - Azure", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Combat ship recommended" },
    { name: "Murky Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Wicked Creek (760-9C)", gas: "Cytoserocin - Azure", notes: "3,000 units. Explodes: 1000 EM + 1000 thermal", yield: "3,000 units", value: "Medium-High", ship: "Venture (tanked)" },
    { name: "Saintly Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Heimatar", gas: "Cytoserocin - Vermillion", notes: "500 units. No NPCs", yield: "500 units", value: "Low-Medium", ship: "Venture" },
    { name: "Boisterous Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Feythabolis", gas: "Cytoserocin - Vermillion", notes: "2,000 units. Explodes: 1000 thermal", yield: "2,000 units", value: "Medium-High", ship: "Venture (tanked)" },
    { name: "Cardinal Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Feythabolis (I-3ODK)", gas: "Cytoserocin - Vermillion", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Combat ship recommended" },
    { name: "Red Dragonfly Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Feythabolis (I-3ODK)", gas: "Cytoserocin - Vermillion", notes: "18,000 units! NPCs. Explodes: 700 EM + 700 thermal", yield: "18,000 units", value: "Very High", ship: "Combat ship recommended" },
    { name: "Wispy Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Feythabolis (I-3ODK)", gas: "Cytoserocin - Vermillion", notes: "6,000 units. DEADSPACE. Explodes: 1000 EM + 1000 thermal", yield: "6,000 units", value: "High", ship: "Venture (tanked)" },

    // RELIC SITES - HIGHSEC
    { name: "Crumbling Antiquated Outpost", type: "Relic", safety: "safe", region: "Highsec", gas: "", notes: "10% signature strength. Low value loot.", value: "Low", ship: "Exploration Frigate" },
    { name: "Crumbling Crystal Quarry", type: "Relic", safety: "safe", region: "Highsec", gas: "", notes: "5% signature strength. T1 salvage.", value: "Low", ship: "Exploration Frigate" },
    { name: "Ruined (Faction) Monument Site", type: "Relic", safety: "safe", region: "Highsec", gas: "", notes: "Faction pirate relic site in highsec", value: "Low-Medium", ship: "Exploration Frigate" },
    { name: "Looted (Faction) Outpost", type: "Relic", safety: "safe", region: "Highsec", gas: "", notes: "Faction pirate relic site in highsec", value: "Low-Medium", ship: "Exploration Frigate" },

    // RELIC SITES - LOWSEC/NULLSEC
    { name: "Central (Faction) Crystal Quarry", type: "Relic", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Better loot than highsec. Sansha sites most valuable.", value: "High (Sansha)", ship: "Exploration Frigate" },
    { name: "Central (Faction) Sparking Transmitter", type: "Relic", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Pirate relic site with improved loot", value: "High (Sansha)", ship: "Exploration Frigate" },
    { name: "Regional (Faction) Crystal Quarry", type: "Relic", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Mid-tier pirate relic site", value: "Medium", ship: "Exploration Frigate" },
    { name: "Regional (Faction) Sparking Transmitter", type: "Relic", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Mid-tier pirate relic site", value: "Medium", ship: "Exploration Frigate" },
    { name: "Local (Faction) Crystal Quarry", type: "Relic", safety: "safe", region: "Nullsec", gas: "", notes: "Standard nullsec relic site", value: "Medium-High", ship: "Exploration Frigate" },
    { name: "Local (Faction) Sparking Transmitter", type: "Relic", safety: "safe", region: "Nullsec", gas: "", notes: "Standard nullsec relic site", value: "Medium-High", ship: "Exploration Frigate" },

    // RELIC SITES - WORMHOLE
    { name: "(Faction) Crystal Quarry", type: "Relic", safety: "safe", region: "Wormhole", gas: "", notes: "C1-C3 WHs only. No NPCs. Contains pirate faction loot.", value: "Medium-High", ship: "Exploration Frigate" },
    { name: "(Faction) Sparking Transmitter", type: "Relic", safety: "safe", region: "Wormhole", gas: "", notes: "C1-C3 WHs only. No NPCs.", value: "Medium-High", ship: "Exploration Frigate" },

    // SLEEPER RELIC SITES
    { name: "Unsecured Frontier Receiver", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs. Avoid in exploration frigate.", value: "N/A", ship: "Combat ship required" },
    { name: "Unsecured Frontier Server Bank", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs.", value: "N/A", ship: "Combat ship required" },
    { name: "Unsecured Frontier Digital Nexus", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs.", value: "N/A", ship: "Combat ship required" },
    { name: "Unsecured Frontier Database", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs.", value: "N/A", ship: "Combat ship required" },

    // DATA SITES - HIGHSEC
    { name: "Local (Faction) Mainframe", type: "Data", safety: "safe", region: "Highsec", gas: "", notes: "10% signature. Basic data site.", value: "Low", ship: "Exploration Frigate" },
    { name: "Local (Faction) Virus Test Site", type: "Data", safety: "safe", region: "Highsec", gas: "", notes: "10% signature. Contains datacores.", value: "Low", ship: "Exploration Frigate" },
    { name: "Local (Faction) Data Processing Center", type: "Data", safety: "safe", region: "Highsec", gas: "", notes: "5% signature. Blueprint copies possible.", value: "Low-Medium", ship: "Exploration Frigate" },
    { name: "Local (Faction) Shattered Life Support Unit", type: "Data", safety: "safe", region: "Highsec", gas: "", notes: "5% signature. Contains manufacturing materials.", value: "Low", ship: "Exploration Frigate" },

    // DATA SITES - LOWSEC/NULLSEC
    { name: "Central (Faction) Command Center", type: "Data", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Better loot table than highsec", value: "Medium", ship: "Exploration Frigate" },
    { name: "Central (Faction) Data Mining Site", type: "Data", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Can contain valuable faction BPCs", value: "Medium-High", ship: "Exploration Frigate" },
    { name: "Regional (Faction) Command Center", type: "Data", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Mid-tier data site", value: "Medium", ship: "Exploration Frigate" },
    { name: "Regional (Faction) Data Mining Site", type: "Data", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Mid-tier data site", value: "Medium", ship: "Exploration Frigate" },
    { name: "Local (Faction) Command Center", type: "Data", safety: "safe", region: "Nullsec", gas: "", notes: "Standard nullsec data site", value: "Medium-High", ship: "Exploration Frigate" },
    { name: "Local (Faction) Data Mining Site", type: "Data", safety: "safe", region: "Nullsec", gas: "", notes: "Standard nullsec data site", value: "Medium-High", ship: "Exploration Frigate" },

    // DATA SITES - WORMHOLE
    { name: "(Faction) Command Center", type: "Data", safety: "safe", region: "Wormhole", gas: "", notes: "C1-C3 WHs. No NPCs. Contains datacores and BPCs.", value: "Medium-High", ship: "Exploration Frigate" },
    { name: "(Faction) Data Mining Site", type: "Data", safety: "safe", region: "Wormhole", gas: "", notes: "C1-C3 WHs. No NPCs.", value: "Medium-High", ship: "Exploration Frigate" },

    // SLEEPER DATA SITES
    { name: "Unsecured Frontier Trinary Hub", type: "Data", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs.", value: "N/A", ship: "Combat ship required" },
    { name: "Unsecured Frontier Enclave", type: "Data", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs.", value: "N/A", ship: "Combat ship required" },
    { name: "Unsecured Frontier Server Bank", type: "Data", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs.", value: "N/A", ship: "Combat ship required" },

    // SPECIAL / FORGOTTEN SITES
    { name: "Forgotten Frontier Databank", type: "Data", safety: "unsafe", region: "Wormhole", gas: "", notes: "NOT SAFE - Contains NPCs despite 'Forgotten' prefix", value: "N/A", ship: "Combat ship required" },
    { name: "Forgotten Frontier Quarry", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "NOT SAFE - Contains NPCs", value: "N/A", ship: "Combat ship required" },
    { name: "Forgotten Perimeter Gateway", type: "Data", safety: "unsafe", region: "Wormhole", gas: "", notes: "NOT SAFE - Contains NPCs", value: "N/A", ship: "Combat ship required" },
    { name: "Forgotten Perimeter Habitation Coils", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "NOT SAFE - Contains NPCs", value: "N/A", ship: "Combat ship required" },

    // GHOST SITES
    { name: "Lesser Covert Research Facility", type: "Data/Relic", safety: "warning", region: "Highsec/Lowsec", gas: "", notes: "GHOST SITE! Invisible timer. Cans explode. Contains Ascendancy BPCs.", value: "High", ship: "Fast Frigate" },
    { name: "Standard Covert Research Facility", type: "Data/Relic", safety: "warning", region: "Lowsec", gas: "", notes: "GHOST SITE! Dangerous but valuable.", value: "High", ship: "Fast Frigate" },
    { name: "Improved Covert Research Facility", type: "Data/Relic", safety: "warning", region: "Nullsec", gas: "", notes: "GHOST SITE! High value loot.", value: "Very High", ship: "Fast Frigate" },
    { name: "Superior Covert Research Facility", type: "Data/Relic", safety: "warning", region: "Nullsec", gas: "", notes: "GHOST SITE! Best ghost site loot.", value: "Very High", ship: "Fast Frigate" },

    // COMBAT RELIC SITES
    { name: "Ancient Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Catch", gas: "", notes: "RARE! Only in Catch region. Requires combat ship. Many rats.", value: "High", ship: "Combat Ship" },
    { name: "Bloated Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Wicked Creek", gas: "", notes: "RARE! Combat relic site. High difficulty.", value: "High", ship: "Combat Ship" },
    { name: "Crumbling Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Vale of the Silent", gas: "", notes: "RARE! Combat relic site.", value: "High", ship: "Combat Ship" },
    { name: "Festering Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Fountain", gas: "", notes: "RARE! Combat relic site.", value: "High", ship: "Combat Ship" },
    { name: "Forgotten Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Delve", gas: "", notes: "RARE! Combat relic site.", value: "High", ship: "Combat Ship" },
    { name: "Hidden Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Cloud Ring", gas: "", notes: "RARE! Combat relic site.", value: "High", ship: "Combat Ship" },
    { name: "Whispy Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Feythabolis", gas: "", notes: "RARE! Combat relic site.", value: "High", ship: "Combat Ship" },

    // DRONE SITES
    { name: "Abandoned Research Complex (Drone)", type: "Relic", safety: "unsafe", region: "Nullsec - Drone Regions", gas: "", notes: "NOT SAFE in nullsec. Contains rogue drones.", value: "Medium", ship: "Combat Ship" },
    { name: "Drone Data Site", type: "Data", safety: "warning", region: "Nullsec - Drone Regions", gas: "", notes: "Failing hack spawns hostile frigates. Can contain Augmented Drone BPCs (very valuable).", value: "Very High (rare)", ship: "Exploration Frigate (skilled)" },

    // FACTION WARFARE / SPECIAL
    { name: "AEGIS (Faction) Data Site", type: "Data", safety: "unsafe", region: "Special", gas: "", notes: "NOT SAFE - Contains NPCs", value: "Medium", ship: "Combat Ship" },
    { name: "SCC (Faction) Data Site", type: "Data", safety: "unsafe", region: "Special", gas: "", notes: "NOT SAFE - Contains NPCs", value: "Medium", ship: "Combat Ship" },
];

// ========== COMBAT ANOMALIES DATA ==========
const COMBAT_ANOMALIES = [
    // ANGEL CARTEL
    { name: "Angel Hideaway", faction: "Angel Cartel", difficulty: 1, security: "High/Low", escalation: "No", notes: "Easiest Angel site. Low bounties.", damage: "Explosive/Kinetic", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Angel Hidden Hideaway", faction: "Angel Cartel", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 2 variant with more spawns", damage: "Explosive/Kinetic", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Angel Forsaken Hideaway", faction: "Angel Cartel", difficulty: 1, security: "High/Low", escalation: "Yes", notes: "Level 3 variant with more spawns. Can escalate to DED 3/10 (Angel Repurposed Outpost)", damage: "Explosive/Kinetic", ewar: "None", reward: "Medium Bounties + DED 3/10", dedRating: "3/10" },
    { name: "Angel Forlorn Hideaway", faction: "Angel Cartel", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 4 variant with more spawns", damage: "Explosive/Kinetic", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Angel Burrow", faction: "Angel Cartel", difficulty: 2, security: "High", escalation: "No", notes: "High Sec Ratting", damage: "Explosive/Kinetic", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Angel Refuge", faction: "Angel Cartel", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "Can escalate to DED 5/10 (Angel's Red Light District)", damage: "Explosive/Kinetic", ewar: "Webs", reward: "Medium + DED 5/10", dedRating: "5/10" },
    { name: "Angel Den", faction: "Angel Cartel", difficulty: 4, security: "High/Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 5/10 (Angel's Red Light District).", damage: "Explosive/Kinetic", ewar: "Webs/TP", reward: "Medium + DED 5/10", dedRating: "5/10" },
    { name: "Angel Hidden Den", faction: "Angel Cartel", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 2 Den with elite spawns", damage: "Explosive/Kinetic", ewar: "Webs/Scram", reward: "Medium Bounties", dedRating: "N/A" },
    { name: "Angel Forsaken Den", faction: "Angel Cartel", difficulty: 4, security: "Low/Null", escalation: "Yes", notes: "Elite variant of Den. May escalate to DED 7/10 (Angel Military Operations Complex)", damage: "Explosive/Kinetic", ewar: "Webs/Scram/TP", reward: "Good + DED 7/10", dedRating: "7/10" },
    { name: "Angel Forlorn Den", faction: "Angel Cartel", difficulty: 4, security: "Low/Null", escalation: "Yes", notes: "Elite variant of Den. May escalate to DED 7/10 (Angel Military Operations Complex)", damage: "Explosive/Kinetic", ewar: "Webs/Scram/TP", reward: "Good + DED 7/10", dedRating: "7/10" },
    { name: "Angel Yard", faction: "Angel Cartel", difficulty: 5, security: "Low", escalation: "Yes", notes: "Lowsec site. Can escalate to DED 5/10 (Angel's Red Light District).", damage: "Explosive/Kinetic", ewar: "Webs", reward: "Good + DED 5/10", dedRating: "5/10" },
    { name: "Angel Rally Point", faction: "Angel Cartel", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 6/10 (Angel Mineral Acquisition Outpost)", damage: "Explosive/Kinetic", ewar: "Webs/Scram", reward: "Good + DED 6/10", dedRating: "6/10" },
    { name: "Angel Hidden Rally Point", faction: "Angel Cartel", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 2 Rally Point. Can escalate to DED 6/10 (Angel Mineral Acquisition Outpost)", damage: "Explosive/Kinetic", ewar: "Webs/Scram", reward: "Good + DED 6/10", dedRating: "6/10" },
    { name: "Angel Forsaken Rally Point", faction: "Angel Cartel", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 3 Rally Point variant. May escalate to DED 8/10 (Cartel Prisoner Retention)", damage: "Explosive/Kinetic", ewar: "Webs/Scram/TP", reward: "High + DED 8/10", dedRating: "8/10" },
    { name: "Angel Forlorn Rally Point", faction: "Angel Cartel", difficulty: 6, security: "Low/Null", escalation: "No", notes: "Level 4 Rally Point variant", damage: "Explosive/Kinetic", ewar: "Webs/Scram", reward: "Good Bounties", dedRating: "N/A" },
    { name: "Angel Port", faction: "Angel Cartel", difficulty: 7, security: "Low/Null", escalation: "Yes", notes: "Nullsec only. High difficulty. Can escalate to DED 7/10 (Angel Military Operations Complex)", damage: "Explosive/Kinetic", ewar: "Webs/Scram/TP", reward: "High + DED 7/10", dedRating: "7/10" },
    { name: "Angel Hub", faction: "Angel Cartel", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Nullsec Hub. Good bounties. Can escalate to DED 8/10 (Cartel Prisoner Retention)", damage: "Explosive/Kinetic", ewar: "Webs/Scram/TP/Neut", reward: "Very High + DED 8/10", dedRating: "8/10" },
    { name: "Angel Hidden Hub", faction: "Angel Cartel", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Elite Hub variant. May escalate to DED 9/10 (Angel Domination Fleet Staging Point)", damage: "Explosive/Kinetic", ewar: "Webs/Scram/TP/Neut", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Angel Forsaken Hub", faction: "Angel Cartel", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Level 3. Can escalate to DED 9/10 (Angel Domination Fleet Staging Point)", damage: "Explosive/Kinetic", ewar: "Webs/Scram/TP/Neut", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Angel Forlorn Hub", faction: "Angel Cartel", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Level 4. Can escalate to DED 9/10 (Angel Domination Fleet Staging Point)", damage: "Explosive/Kinetic", ewar: "Webs/Scram/TP/Neut", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Angel Haven", faction: "Angel Cartel", difficulty: 9, security: "Null", escalation: "No", notes: "One of hardest sites. Excellent bounties. Can escalate to DED 10/10 (Angel Cartel Naval Shipyard)", damage: "Explosive/Kinetic", ewar: "Webs/Scram/TP/Neut", reward: "Excellent Bounties + DED 10/10", dedRating: "10/10" },
    { name: "Angel Sanctum", faction: "Angel Cartel", difficulty: 10, security: "Null", escalation: "No", notes: "Hardest Angel site. Best rewards. Can escalate to DED 10/10 (n/a)", damage: "Explosive/Kinetic", ewar: "Full EWAR", reward: "Best Bounties + DED 10/10", dedRating: "10/10" },

    // BLOOD RAIDERS
    { name: "Blood Hideaway", faction: "Blood Raiders", difficulty: 1, security: "High/Low", escalation: "No", notes: "Easiest Blood site", damage: "EM/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Blood Hidden Hideaway", faction: "Blood Raiders", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 2 variant", damage: "EM/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Blood Forsaken Hideaway", faction: "Blood Raiders", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 3 variant", damage: "EM/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Blood Forlorn Hideaway", faction: "Blood Raiders", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 4 variant", damage: "EM/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Blood Burrow", faction: "Blood Raiders", difficulty: 2, security: "High", escalation: "Yes", notes: "High Sec Site", damage: "EM/Thermal", ewar: "None", reward: "Low + DED", dedRating: "N/A" },
    { name: "Blood Refuge", faction: "Blood Raiders", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "Can escalate to DED 4/10 (Mul-Zatah Monastery)", damage: "EM/Thermal", ewar: "Neut", reward: "Medium + DED 4/10", dedRating: "4/10" },
    { name: "Blood Den", faction: "Blood Raiders", difficulty: 4, security: "High/Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 5/10 (Blood Raider Psychotropics Depot)", damage: "EM/Thermal", ewar: "Neut", reward: "Medium + DED 5/10", dedRating: "5/10" },
    { name: "Blood Hidden Den", faction: "Blood Raiders", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 2 Den", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Medium Bounties", dedRating: "N/A" },
    { name: "Blood Forsaken Den", faction: "Blood Raiders", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 3 Den", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Medium Bounties", dedRating: "N/A" },
    { name: "Blood Forlorn Den", faction: "Blood Raiders", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 4 Den", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Medium Bounties", dedRating: "N/A" },
    { name: "Blood Yard", faction: "Blood Raiders", difficulty: 5, security: "Low", escalation: "Yes", notes: "Lowsec. Can escalate to DED 6/10 (Crimson Hand Supply Depot)", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Good + DED 6/10", dedRating: "6/10" },
    { name: "Blood Rally Point", faction: "Blood Raiders", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 6/10 (Crimson Hand Supply Depot)", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Good + DED 6/10", dedRating: "6/10" },
    { name: "Blood Hidden Rally Point", faction: "Blood Raiders", difficulty: 6, security: "Low/Null", escalation: "No", notes: "Level 2 Rally Point", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Good Bounties", dedRating: "N/A" },
    { name: "Blood Forsaken Rally Point", faction: "Blood Raiders", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 3 Rally Point. May escalate to DED 8/10 (Blood Raider Prison Camp)", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "High + DED 8/10", dedRating: "8/10" },
    { name: "Blood Forlorn Rally Point", faction: "Blood Raiders", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 4 Rally Point. May escalate to DED 8/10 (Blood Raider Prison Camp)", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "High + DED 8/10", dedRating: "8/10" },
    { name: "Blood Port", faction: "Blood Raiders", difficulty: 7, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 7/10 (Blood Raider Coordination Center)", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "High + DED 7/10", dedRating: "7/10" },
    { name: "Blood Hub", faction: "Blood Raiders", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Level 1. Can escalate to DED 8/10 (Blood Raider Prison Camp)", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "Very High + DED 8/10", dedRating: "8/10" },
    { name: "Blood Hidden Hub", faction: "Blood Raiders", difficulty: 8, security: "Low/Null", escalation: "No", notes: "Level 2", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "Very High Bounties", dedRating: "N/A" },
    { name: "Blood Forsaken Hub", faction: "Blood Raiders", difficulty: 8, security: "low/Null", escalation: "Yes", notes: "Level 3. Can escalate to DED 9/10", damage: "EM/Thermal", ewar: "Full EWAR", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Blood Forlorn Hub", faction: "Blood Raiders", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Level 3. Can escalate to DED 9/10", damage: "EM/Thermal", ewar: "Full EWAR", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Blood Haven", faction: "Blood Raiders", difficulty: 9, security: "Null", escalation: "Yes", notes: "High-tier ratting site. Can escalate to DED 10/10 (Blood Raider Naval Shipyard)", damage: "EM/Thermal", ewar: "Full EWAR/Neut", reward: "Excellent + DED 10/10", dedRating: "10/10" },
    { name: "Blood Sanctum", faction: "Blood Raiders", difficulty: 10, security: "Null", escalation: "Yes", notes: "Hardest Blood site. Can escalate to DED 10/10 (Blood Raider Naval Shipyard)", damage: "EM/Thermal", ewar: "Full EWAR/Heavy Neut", reward: "Best + DED 10/10", dedRating: "10/10" },

    // GURISTAS
    { name: "Guristas Hideaway", faction: "Guristas", difficulty: 1, security: "High", escalation: "Yes", notes: "Easiest Guristas site. Can escalate to DED 4/10", damage: "Kinetic/Thermal", ewar: "None", reward: "Low + DED 4/10", dedRating: "4/10" },
    { name: "Guristas Hidden Hideaway", faction: "Guristas", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 2 variant", damage: "Kinetic/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Guristas Forsaken Hideaway", faction: "Guristas", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 3 variant", damage: "Kinetic/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Guristas Forlorn Hideaway", faction: "Guristas", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 4 variant", damage: "Kinetic/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Guristas Burrow", faction: "Guristas", difficulty: 2, security: "High/Low", escalation: "No", notes: "Level 2 variant", damage: "Kinetic/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Guristas Refuge", faction: "Guristas", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "More spawns. Can escalate to DED 4/10 (Guristas Scout Outpost)", damage: "Kinetic/Thermal", ewar: "None", reward: "Medium + DED 4/10", dedRating: "4/10" },
    { name: "Guristas Den", faction: "Guristas", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 5/10 (Guristas Hallucinogen Supply Waypoint)", damage: "Kinetic/Thermal", ewar: "ECM", reward: "Medium + DED 5/10", dedRating: "5/10" },
    { name: "Guristas Hidden Den", faction: "Guristas", difficulty: 4, security: "Low/Null", escalation: "Yes", notes: "Level 2 Den. Can escalate to DED 6/10 (Guristas Troop Reinvigoration Camp)", damage: "Kinetic/Thermal", ewar: "ECM/Scram", reward: "Good + DED 6/10", dedRating: "6/10" },
    { name: "Guristas Forsaken Den", faction: "Guristas", difficulty: 4, security: "Low/Null", escalation: "Yes", notes: "Level 3 Den. Can escalate to DED 7/10 (Gurista Military Operations Complex)", damage: "Kinetic/Thermal", ewar: "ECM/Scram", reward: "Good + DED 7/10", dedRating: "7/10" },
    { name: "Guristas Forlorn Den", faction: "Guristas", difficulty: 4, security: "Low/Null", escalation: "Yes", notes: "Level 4 Den. Can escalate to DED 7/10(Guristas Hallucinogen Supply Waypoint)", damage: "Kinetic/Thermal", ewar: "ECM/Scram", reward: "Good + DED 7/10", dedRating: "7/10" },
    { name: "Guristas Yard", faction: "Guristas", difficulty: 5, security: "Low", escalation: "Yes", notes: "Lowsec/nullsec. Can escalate to DED 5/10 (Guristas Hallucinogen Supply Waypoint)", damage: "Kinetic/Thermal", ewar: "ECM", reward: "Good + DED 5/10", dedRating: "5/10" },
    { name: "Guristas Rally Point", faction: "Guristas", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 6/10 (Guristas Troop Reinvigoration Camp)", damage: "Kinetic/Thermal", ewar: "ECM/Scram", reward: "Good + DED 6/10", dedRating: "6/10" },
    { name: "Guristas Hidden Rally Point", faction: "Guristas", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 2 Rally. Can escalate to DED 9/10 (Dread Guristas Fleet Staging Point)", damage: "Kinetic/Thermal", ewar: "ECM/Scram", reward: "High + DED 9/10", dedRating: "9/10" },
    { name: "Guristas Forsaken Rally Point", faction: "Guristas", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 3 Rally. Can escalate to DED 9/10 (Pith's Penal Complex)", damage: "Kinetic/Thermal", ewar: "ECM/Scram", reward: "High + DED 9/10", dedRating: "9/10" },
    { name: "Guristas Forlorn Rally Point", faction: "Guristas", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 4 Rally. Can escalate to DED 9/10 (Pith's Penal Complex)", damage: "Kinetic/Thermal", ewar: "ECM/Scram", reward: "High + DED 9/10", dedRating: "9/10" },
    { name: "Guristas Port", faction: "Guristas", difficulty: 7, security: "Low/Null", escalation: "Yes", notes: "High difficulty. Can escalate to DED 7/10(Gurista Military Operations Complex)", damage: "Kinetic/Thermal", ewar: "ECM/Scram/TP", reward: "High + DED 7/10", dedRating: "7/10" },
    { name: "Guristas Hub", faction: "Guristas", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Elite Hub. May escalate to DED 8/10 (Pith's Penal Complex)", damage: "Kinetic/Thermal", ewar: "ECM/Scram/TP", reward: "Very High + DED 8/10", dedRating: "8/10" },
    { name: "Guristas Hidden Hub", faction: "Guristas", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Elite Hub. May escalate to DED 9/10 (Dread Guristas Fleet Staging Point)", damage: "Kinetic/Thermal", ewar: "ECM/Scram/TP", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Guristas Forsaken Hub", faction: "Guristas", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Very hard Hub -drone friendly-. Can escalate to DED 9/10 (Dread Guristas Fleet Staging Point)", damage: "Kinetic/Thermal", ewar: "ECM/Scram/TP", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Guristas Forlorn Hub", faction: "Guristas", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Very hard Hub. Can escalate to DED 9/10 (Dread Guristas Fleet Staging Point)", damage: "Kinetic/Thermal", ewar: "ECM/Scram/TP", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Guristas Haven", faction: "Guristas", difficulty: 9, security: "Null", escalation: "Yes", notes: "High-tier site (Rock -drone friendly- and Gas -drone enemy-). Can escalate to DED 10/10 (The Maze)", damage: "Kinetic/Thermal", ewar: "ECM/Scram/TP", reward: "Excellent + DED 10/10", dedRating: "10/10" },
    { name: "Guristas Sanctum", faction: "Guristas", difficulty: 10, security: "Null", escalation: "Yes", notes: "Hardest Guristas site. Can escalate to DED 10/10 (The Maze)", damage: "Kinetic/Thermal", ewar: "Full EWAR", reward: "Best + DED 10/10", dedRating: "10/10" },

    // SANSHA'S NATION
    { name: "Sansha Hideaway", faction: "Sansha's Nation", difficulty: 1, security: "High", escalation: "No", notes: "Easiest Sansha site. Can escalate to DED 3/10 (Sansha's Command Relay Outpost)", damage: "EM/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Sansha Hidden Hideaway", faction: "Sansha's Nation", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 2 variant", damage: "EM/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Sansha Forsaken Hideaway", faction: "Sansha's Nation", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 3 variant", damage: "EM/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Sansha Forlorn Hideaway", faction: "Sansha's Nation", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 4 variant", damage: "EM/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Sansha Burrow", faction: "Sansha's Nation", difficulty: 2, security: "High", escalation: "No", notes: "High Sec Site", damage: "EM/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Sansha Refuge", faction: "Sansha's Nation", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "More spawns. Can escalate to DED 3/10 (Sansha's Command Relay Outpost)", damage: "EM/Thermal", ewar: "Neut", reward: "Medium + DED 3/10", dedRating: "3/10" },
    { name: "Sansha Den", faction: "Sansha's Nation", difficulty: 4, security: "High/Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 5/10 (Sansha's Nation Neural Paralytic Facility)", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Medium + DED 5/10", dedRating: "5/10" },
    { name: "Sansha Hidden Den", faction: "Sansha's Nation", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 2 Den", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Medium Bounties", dedRating: "N/A" },
    { name: "Sansha Forsaken Den", faction: "Sansha's Nation", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 3 Den with True Sansha spawns", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Medium Bounties + chance TS", dedRating: "N/A" },
    { name: "Sansha Forlorn Den", faction: "Sansha's Nation", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 4 Den", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Medium Bounties", dedRating: "N/A" },
    { name: "Sansha Yard", faction: "Sansha's Nation", difficulty: 5, security: "Low", escalation: "Yes", notes: "Lowsec. Can escalate to DED 6/10 (Sansha War Supply Complex)", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Good + DED 6/10", dedRating: "6/10" },
    { name: "Sansha Rally Point", faction: "Sansha's Nation", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 6/10 (Sansha War Supply Complex)", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "Good + DED 6/10", dedRating: "6/10" },
    { name: "Sansha Hidden Rally Point", faction: "Sansha's Nation", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 2 Rally. Can escalate to DED 9/10 (True Sansha Fleet Staging Point)", damage: "EM/Thermal", ewar: "Neut/Scram", reward: "High + DED 9/10", dedRating: "9/10" },
    { name: "Sansha Forsaken Rally Point", faction: "Sansha's Nation", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 3 Rally. May escalate to DED 8/10 (Sansha Prison Camp)", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "High + DED 8/10", dedRating: "8/10" },
    { name: "Sansha Forlorn Rally Point", faction: "Sansha's Nation", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 4 Rally. May escalate to DED 8/10 (Sansha Prison Camp)", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "High + DED 8/10", dedRating: "8/10" },
    { name: "Sansha Port", faction: "Sansha's Nation", difficulty: 7, security: "Low/Null", escalation: "Yes", notes: "May escalate to DED 7/10 (Sansha Military Operations Complex)", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "High + DED 7/10", dedRating: "7/10" },
    { name: "Sansha Hub", faction: "Sansha's Nation", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "May escalate to DED 8/10 (Sansha Prison Camp)", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "Very High + DED 8/10", dedRating: "8/10" },
    { name: "Sansha Hidden Hub", faction: "Sansha's Nation", difficulty: 8, security: "Low/Null", escalation: "No", notes: "Level 2 Hub", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "Very High Bounties", dedRating: "N/A" },
    { name: "Sansha Forsaken Hub", faction: "Sansha's Nation", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Level 3 Hub. Can escalate to DED 9/10 (True Sansha Fleet Staging Point)", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Sansha Forlorn Hub", faction: "Sansha's Nation", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Level 4 Hub. Can escalate to DED 9/10 (True Sansha Fleet Staging Point)", damage: "EM/Thermal", ewar: "Neut/Scram/TP", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Sansha Haven", faction: "Sansha's Nation", difficulty: 9, security: "Null", escalation: "Yes", notes: "High-tier site. Can escalate to DED 10/10 (Centus Assembly T.P. Co.)", damage: "EM/Thermal", ewar: "Full EWAR/Neut", reward: "Excellent + DED 10/10", dedRating: "10/10" },
    { name: "Sansha Sanctum", faction: "Sansha's Nation", difficulty: 10, security: "Null", escalation: "Yes", notes: "Hardest Sansha site. Can escalate to DED 10/10 (Centus Assembly T.P. Co.)", damage: "EM/Thermal", ewar: "Full EWAR/Heavy Neut", reward: "Best + DED 10/10", dedRating: "10/10" },

    // SERPENTIS
    { name: "Serpentis Hideaway", faction: "Serpentis", difficulty: 1, security: "High/Low", escalation: "Yes", notes: "Easiest Serpentis site. Can escalate to DED 3/10 (Serpentis Narcotic Warehouses)", damage: "Kinetic/Thermal", ewar: "None", reward: "Low + DED 3/10", dedRating: "3/10" },
    { name: "Serpentis Hidden Hideaway", faction: "Serpentis", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 2 variant", damage: "Kinetic/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Serpentis Forsaken Hideaway", faction: "Serpentis", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 3 variant", damage: "Kinetic/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Serpentis Forlorn Hideaway", faction: "Serpentis", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 4 variant", damage: "Kinetic/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Serpentis Burrow", faction: "Serpentis", difficulty: 2, security: "High", escalation: "No", notes: "High Sec Site", damage: "Kinetic/Thermal", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Serpentis Refuge", faction: "Serpentis", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "More spawns. Can escalate to DED 3/10 (Serpentis Narcotic Warehouses)", damage: "Kinetic/Thermal", ewar: "Damp", reward: "Medium + DED 3/10", dedRating: "3/10" },
    { name: "Serpentis Den", faction: "Serpentis", difficulty: 4, security: "High/Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 5/10 (Serpentis Corporation Hydroponics Site)", damage: "Kinetic/Thermal", ewar: "Damp/Scram", reward: "Medium + DED 5/10", dedRating: "5/10" },
    { name: "Serpentis Hidden Den", faction: "Serpentis", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 2 Den", damage: "Kinetic/Thermal", ewar: "Damp/Scram", reward: "Medium Bounties", dedRating: "N/A" },
    { name: "Serpentis Forsaken Den", faction: "Serpentis", difficulty: 4, security: "Low/Null", escalation: "Yes", notes: "Level 3 Den with Shadow Serpentis spawns. Can escalate to DED 7/10 (Serpentis Paramilitary Complex)", damage: "Kinetic/Thermal", ewar: "Damp/Scram", reward: "Good + DED 7/10 + SS drops", dedRating: "7/10" },
    { name: "Serpentis Forlorn Den", faction: "Serpentis", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 4 Den", damage: "Kinetic/Thermal", ewar: "Damp/Scram", reward: "Medium Bounties", dedRating: "N/A" },
    { name: "Serpentis Yard", faction: "Serpentis", difficulty: 5, security: "Low/Null", escalation: "Yes", notes: "Lowsec. Can escalate to DED 6/10 (Serpentis Logistical Outpost)", damage: "Kinetic/Thermal", ewar: "Damp/Scram", reward: "Good + DED 6/10", dedRating: "6/10" },
    { name: "Serpentis Rally Point", faction: "Serpentis", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 6/10 (Serpentis Logistical Outpost)", damage: "Kinetic/Thermal", ewar: "Damp/Scram", reward: "Good + DED 6/10", dedRating: "6/10" },
    { name: "Serpentis Hidden Rally Point", faction: "Serpentis", difficulty: 6, security: "Low/Null", escalation: "No", notes: "Level 2 Rally", damage: "Kinetic/Thermal", ewar: "Damp/Scram", reward: "Good Bounties", dedRating: "N/A" },
    { name: "Serpentis Forsaken Rally Point", faction: "Serpentis", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 3 Rally. May escalate to DED 8/10 (Serpentis Prison Camp)", damage: "Kinetic/Thermal", ewar: "Damp/Scram/TP", reward: "High + DED 8/10", dedRating: "8/10" },
    { name: "Serpentis Forlorn Rally Point", faction: "Serpentis", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 4 Rally. May escalate to DED 8/10 (Serpentis Prison Camp)", damage: "Kinetic/Thermal", ewar: "Damp/Scram/TP", reward: "High + DED 8/10", dedRating: "8/10" },
    { name: "Serpentis Port", faction: "Serpentis", difficulty: 7, security: "Low/Null", escalation: "Yes", notes: "Nullsec only. Can escalate to DED 7/10 (Serpentis Paramilitary Complex)", damage: "Kinetic/Thermal", ewar: "Damp/Scram/TP", reward: "High + DED 7/10", dedRating: "7/10" },
    { name: "Serpentis Hub", faction: "Serpentis", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "High difficulty. Can escalate to DED 8/10 (Serpentis Prison Camp)", damage: "Kinetic/Thermal", ewar: "Damp/Scram/TP", reward: "Very High + DED 8/10", dedRating: "8/10" },
    { name: "Serpentis Hidden Hub", faction: "Serpentis", difficulty: 8, security: "Null", escalation: "No", notes: "Level 2 Hub", damage: "Kinetic/Thermal", ewar: "Damp/Scram/TP", reward: "Very High Bounties", dedRating: "N/A" },
    { name: "Serpentis Forsaken Hub", faction: "Serpentis", difficulty: 8, security: "Null", escalation: "Yes", notes: "Level 3 Hub. Can escalate to DED 9/10 (Shadow Serpentis Fleet Staging Point)", damage: "Kinetic/Thermal", ewar: "Damp/Scram/TP", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Serpentis Forlorn Hub", faction: "Serpentis", difficulty: 8, security: "Null", escalation: "Yes", notes: "Level 4 Hub. Can escalate to DED 9/10 (Shadow Serpentis Fleet Staging Point)", damage: "Kinetic/Thermal", ewar: "Damp/Scram/TP", reward: "Very High + DED 9/10", dedRating: "9/10" },
    { name: "Serpentis Haven", faction: "Serpentis", difficulty: 9, security: "Null", escalation: "Yes", notes: "High-tier site. Can escalate to DED 10/10 (Serpentis Fleet Shipyard)", damage: "Kinetic/Thermal", ewar: "Full EWAR/Damp", reward: "Excellent + DED 10/10", dedRating: "10/10" },
    { name: "Serpentis Sanctum", faction: "Serpentis", difficulty: 10, security: "Null", escalation: "Yes", notes: "Hardest Serpentis site. Can escalate to DED 10/10 (Serpentis Fleet Shipyard)", damage: "Kinetic/Thermal", ewar: "Full EWAR/Heavy Damp", reward: "Best + DED 10/10", dedRating: "10/10" },

    // ROGUE DRONES
    { name: "Drone Cluster", faction: "Rogue Drones", difficulty: 1, security: "High/Low", escalation: "No", notes: "Easiest drone site", damage: "Omni", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Drone Collection", faction: "Rogue Drones", difficulty: 2, security: "High", escalation: "No", notes: "Low value, skip in highsec", damage: "Omni", ewar: "None", reward: "Low Bounties", dedRating: "N/A" },
    { name: "Drone Assembly", faction: "Rogue Drones", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 3/10 (Rogue Drone Asteroid Infestation)", damage: "Omni", ewar: "None", reward: "Medium + DED 3/10", dedRating: "3/10" },
    { name: "Drone Gathering", faction: "Rogue Drones", difficulty: 4, security: "High/Low/Null", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 3/10 (Rogue Drone Asteroid Infestation)", damage: "Omni", ewar: "None", reward: "Medium + DED 3/10", dedRating: "3/10" },
    { name: "Drone Surveillance", faction: "Rogue Drones", difficulty: 5, security: "Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 3/10 (Rogue Drone Asteroid Infestation)", damage: "Omni", ewar: "Webs", reward: "Good + DED 3/10", dedRating: "3/10" },
    { name: "Drone Menagerie", faction: "Rogue Drones", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "High difficulty Can escalate to DED 5/10 (Outgrowth Rogue Drone Hive)", damage: "Omni", ewar: "Webs/Scram", reward: "Good + DED 5/10", dedRating: "5/10" },
    { name: "Drone Herd", faction: "Rogue Drones", difficulty: 7, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 5/10 (Outgrowth Rogue Drone Hive/Drone Infested Starbase)", damage: "Omni", ewar: "Webs/Scram", reward: "High + DED 5/10", dedRating: "5/10" },
    { name: "Drone Squad", faction: "Rogue Drones", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Best drone site for newbro. Can escalate to DED 10/10 (Outgrowth Rogue Drone Hive)", damage: "Omni", ewar: "Webs/Scram", reward: "High + DED 10/10", dedRating: "10/10" },
    { name: "Drone Patrol", faction: "Rogue Drones", difficulty: 9, security: "Null", escalation: "Yes", notes: "Very hard drone site (scram/web). Can escalate to DED 10/10 (Outgrowth Rogue Drone Hive)", damage: "Omni", ewar: "Webs/Scram/Web", reward: "Very High + DED 10/10", dedRating: "10/10" },
    { name: "Drone Horde", faction: "Rogue Drones", difficulty: 10, security: "Null", escalation: "Yes", notes: "Hardest drone site. Can escalate to DED 10/10 (Outgrowth Rogue Drone Hive)", damage: "Omni", ewar: "Full EWAR", reward: "Best + DED 10/10", dedRating: "10/10" },

    // EQUINOX SPECIAL SITES
    { name: "Angel Forsaken Sanctum", faction: "Angel Cartel", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. More NPCs than regular Sanctum. NPCs target drones/fighters. Can escalate to DED 10/10. Equinox exclusive.", damage: "Explosive/Kinetic", ewar: "Full EWAR", reward: "Extreme + DED 10/10", dedRating: "10/10" },
    { name: "Blood Forsaken Sanctum", faction: "Blood Raiders", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. More Dark Blood spawns than regular Sanctum. NPCs target drones/fighters. Can escalate to DED 10/10. Equinox exclusive.", damage: "EM/Thermal", ewar: "Full EWAR/Heavy Neut", reward: "Extreme + DED 10/10", dedRating: "10/10" },
    { name: "Guristas Forsaken Sanctum", faction: "Guristas", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. More Dread Guristas spawns. NPCs target drones/fighters aggressively. Can escalate to DED 10/10. Equinox exclusive.", damage: "Kinetic/Thermal", ewar: "Full EWAR", reward: "Extreme + DED 10/10", dedRating: "10/10" },
    { name: "Sansha Forsaken Sanctum", faction: "Sansha's Nation", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. More True Sansha spawns. NPCs target drones/fighters. Can escalate to DED 10/10. Equinox exclusive.", damage: "EM/Thermal", ewar: "Full EWAR/Heavy Neut", reward: "Extreme + DED 10/10", dedRating: "10/10" },
    { name: "Serpentis Forsaken Sanctum", faction: "Serpentis", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. More Shadow Serpentis spawns. NPCs target drones/fighters. Takes 3+ siege cycles for Navy Dread. Can escalate to DED 10/10. Equinox exclusive.", damage: "Kinetic/Thermal", ewar: "Full EWAR/Heavy Damp", reward: "Extreme + DED 10/10", dedRating: "10/10" },
    { name: "Teeming Drone Horde", faction: "Rogue Drones", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. Harder than regular Drone Horde. More Sentient drone spawns. Can escalate to DED 10/10. NPCs aggressively target drones/fighters. Equinox exclusive.", damage: "Omni", ewar: "Full EWAR", reward: "Extreme + DED 10/10", dedRating: "10/10" },

    { name: "Besieged Covert Research Facility", faction: "Mordu's Legion", difficulty: 8, security: "Low", escalation: "No", notes: "UNIQUE! Found in all lowsec. Mordu's Legion NPCs. Can switch damage types.", damage: "Omni (switches)", ewar: "Webs/Scram", reward: "Mordu's BPC + loot", dedRating: "N/A" },
];

// ========== APP STATE ==========
let currentTab = 'exploration';
let filteredSites = [...EXPLORATION_SITES];
let filteredCombat = [...COMBAT_ANOMALIES];
let expandedCard = null;

// ========== INIT ==========
function init() {
    updateStats();
    renderCurrentList();
    setupEventListeners();
}

function updateStats() {
    const expCount = EXPLORATION_SITES.length;
    const comCount = COMBAT_ANOMALIES.length;
    const safeCount = [...EXPLORATION_SITES, ...COMBAT_ANOMALIES].filter(s => s.safety === 'safe').length;
    const total = expCount + comCount;

    document.getElementById('totalSites').textContent = total;
    document.getElementById('explorationSites').textContent = expCount;
    document.getElementById('combatSites').textContent = comCount;
    document.getElementById('safeSites').textContent = safeCount;
}

function updateShowingCount(count) {
    document.getElementById('showingCount').textContent = count;
    document.getElementById('resultsLabel').textContent = `Showing ${count} site${count !== 1 ? 's' : ''}`;
}

// ========== RENDER ==========
function renderCurrentList() {
    if (currentTab === 'exploration') {
        renderCards(filteredSites, false);
        updateShowingCount(filteredSites.length);
    } else {
        renderCards(filteredCombat, true);
        updateShowingCount(filteredCombat.length);
    }
}

function renderCards(sites, isCombat) {
    const container = document.getElementById('siteList');
    const noResults = document.getElementById('noResults');

    if (sites.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        updateShowingCount(0);
        return;
    }

    noResults.style.display = 'none';

    container.innerHTML = sites.map((site, i) => {
        const safetyBadge = getSafetyBadge(site.safety);
        const metaItems = getMetaItems(site, isCombat);
        const detailContent = getDetailContent(site, isCombat);

        return `
            <div class="site-card" data-safety="${site.safety}" data-index="${i}" onclick="toggleCard(this)">
                <div class="card-top">
                    <span class="card-name">${site.name}</span>
                    <div class="card-badges">${safetyBadge}</div>
                </div>
                <div class="card-meta">${metaItems}</div>
                <div class="expand-indicator">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                </div>
                <div class="card-expand">${detailContent}</div>
            </div>
        `;
    }).join('');
}

function getMetaItems(site, isCombat) {
    if (isCombat) {
        return `
            <span><span class="meta-icon">⚔️</span> ${site.faction}</span>
            <span><span class="meta-icon">📊</span> ${getDifficultySmall(site.difficulty)}</span>
            <span><span class="meta-icon">🛡️</span> ${site.security}</span>
            <span><span class="meta-icon">🚀</span> Escalation: ${site.escalation}</span>
        `;
    }

    let items = `<span><span class="meta-icon">📂</span> ${site.type}</span>`;
    items += `<span><span class="meta-icon">📍</span> ${site.region}</span>`;
    if (site.gas) items += `<span><span class="meta-icon">⛽</span> ${site.gas}</span>`;
    if (site.value) items += `<span><span class="meta-icon">💰</span> ${site.value}</span>`;
    return items;
}

function getDetailContent(site, isCombat) {
    if (isCombat) {
        return `
            <div class="detail-grid">
                <div class="detail-item">
                    <span class="detail-label">Faction</span>
                    <span class="detail-value">${site.faction}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Difficulty</span>
                    <span class="detail-value">${getDifficultyStars(site.difficulty)}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Security Space</span>
                    <span class="detail-value">${site.security}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Primary Damage</span>
                    <span class="detail-value">${site.damage || 'Unknown'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">EWAR</span>
                    <span class="detail-value">${site.ewar || 'None'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Escalation</span>
                    <span class="detail-value">${site.escalation === 'Yes' ? '<span class="escalation-badge escalation-yes">✓ YES</span>' : '<span class="escalation-badge escalation-no">✗ NO</span>'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">DED Rating</span>
                    <span class="detail-value">${site.dedRating || 'N/A'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Rewards</span>
                    <span class="detail-value">${site.reward || 'Unknown'}</span>
                </div>
            </div>
            <div class="detail-notes">${highlightNotes(site.notes)}</div>
        `;
    }

    let detailGrid = `
        <div class="detail-grid">
            <div class="detail-item">
                <span class="detail-label">Site Type</span>
                <span class="detail-value">${site.type}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Region</span>
                <span class="detail-value">${site.region}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Safety</span>
                <span class="detail-value">${getSafetyLabel(site.safety)}</span>
            </div>
    `;

    if (site.gas) {
        detailGrid += `
            <div class="detail-item">
                <span class="detail-label">Gas Type</span>
                <span class="detail-value">${site.gas}</span>
            </div>
        `;
    }

    detailGrid += `
            <div class="detail-item">
                <span class="detail-label">Est. Value</span>
                <span class="detail-value">${site.value || 'Unknown'}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Yield / Units</span>
                <span class="detail-value">${site.yield || 'N/A'}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Recommended Ship</span>
                <span class="detail-value">${site.ship || 'Any'}</span>
            </div>
        </div>
        <div class="detail-notes">${highlightNotes(site.notes)}</div>
    `;

    return detailGrid;
}

function highlightNotes(notes) {
    return notes
        .replace(/(DANGER|NOT SAFE|UNSAFE|⚠️|GHOST SITE|RARE)/g, '<strong>$1</strong>')
        .replace(/(HIGH VALUE|HIGHEST VALUE|Very High|Excellent|Best)/g, '<strong>$1</strong>')
        .replace(/(Explodes:?\s*)(\d+\s*\w+(\s*\+\s*\d+\s*\w+)*)/gi, '$1<strong>$2</strong>');
}

function getDifficultySmall(difficulty) {
    return '★'.repeat(difficulty) + '☆'.repeat(10 - difficulty) + ` ${difficulty}/10`;
}

function getDifficultyStars(difficulty) {
    const filled = '★'.repeat(difficulty);
    const empty = '☆'.repeat(10 - difficulty);
    return `<span class="difficulty-stars">${filled}${empty}</span><span class="diff-num">${difficulty}/10</span>`;
}

function getSafetyBadge(safety) {
    const map = {
        'safe': '<span class="badge badge-safe">✓ Safe</span>',
        'unsafe': '<span class="badge badge-unsafe">⚠ Unsafe</span>',
        'warning': '<span class="badge badge-warning">⚡ Warning</span>'
    };
    return map[safety] || '';
}

function getSafetyLabel(safety) {
    const map = {
        'safe': '<span class="text-safe">✓ Safe</span>',
        'unsafe': '<span class="text-unsafe">⚠ Unsafe</span>',
        'warning': '<span class="text-warning">⚡ Warning</span>'
    };
    return map[safety] || safety;
}

// ========== CARD INTERACTIONS ==========
function toggleCard(el) {
    const expand = el.querySelector('.card-expand');
    const wasOpen = el.classList.contains('expanded');

    // Close all
    document.querySelectorAll('.site-card.expanded').forEach(c => {
        c.classList.remove('expanded');
        c.querySelector('.card-expand').classList.remove('open');
    });

    if (!wasOpen) {
        el.classList.add('expanded');
        expand.classList.add('open');
        // Scroll into view smoothly
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
    }
}

// ========== TAB SWITCHING ==========
function switchTab(tab, btn) {
    currentTab = tab;

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    document.getElementById('explorationFilters').style.display = tab === 'exploration' ? '' : 'none';
    document.getElementById('combatFilters').style.display = tab === 'combat' ? '' : 'none';
    document.getElementById('explorationChips').style.display = tab === 'exploration' ? '' : 'none';
    document.getElementById('combatChips').style.display = tab === 'combat' ? '' : 'none';

    // Swap sort options for combat tab
    const sortSelect = document.getElementById('sortBy');
    if (tab === 'combat') {
        sortSelect.innerHTML = `
            <option value="name-asc">Name A→Z</option>
            <option value="name-desc">Name Z→A</option>
            <option value="difficulty-asc">Easy First</option>
            <option value="difficulty-desc">Hard First</option>
            <option value="faction-asc">Faction A→Z</option>
            <option value="security-asc">Security A→Z</option>
        `;
    } else {
        sortSelect.innerHTML = `
            <option value="name-asc">Name A→Z</option>
            <option value="name-desc">Name Z→A</option>
            <option value="safety-asc">Safe First</option>
            <option value="safety-desc">Unsafe First</option>
            <option value="type-asc">Type A→Z</option>
            <option value="region-asc">Region A→Z</option>
        `;
    }

    // Reset filters
    clearAllFilters(true);
    renderCurrentList();
}

// ========== FILTERING ==========
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('safetyFilter').addEventListener('change', applyFilters);
    document.getElementById('typeFilter').addEventListener('change', applyFilters);
    document.getElementById('regionFilter').addEventListener('change', applyFilters);
    document.getElementById('gasFilter').addEventListener('change', applyFilters);
    document.getElementById('combatFactionFilter').addEventListener('change', applyFilters);
    document.getElementById('combatSecFilter').addEventListener('change', applyFilters);
    document.getElementById('combatDifficultyFilter').addEventListener('change', applyFilters);
    document.getElementById('combatEscalationFilter').addEventListener('change', applyFilters);

    // Close modals on backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) modal.classList.remove('active');
        });
    });
}

function applyFilters() {
    const search = document.getElementById('searchInput').value.toLowerCase().trim();

    // Show/hide clear button
    document.getElementById('clearSearch').style.display = search ? '' : 'none';

    if (currentTab === 'exploration') {
        const safety = document.getElementById('safetyFilter').value;
        const type = document.getElementById('typeFilter').value.toLowerCase();
        const region = document.getElementById('regionFilter').value.toLowerCase();
        const gas = document.getElementById('gasFilter').value.toLowerCase();

        filteredSites = EXPLORATION_SITES.filter(site => {
            // Comprehensive search across ALL fields
            if (search) {
                const searchable = [
                    site.name, site.type, site.region, site.gas, site.notes,
                    site.safety, site.value, site.yield, site.ship
                ].join(' ').toLowerCase();
                if (!searchable.includes(search)) return false;
            }
            if (safety && site.safety !== safety) return false;
            if (type && !site.type.toLowerCase().includes(type)) return false;
            if (region && !site.region.toLowerCase().includes(region)) return false;
            if (gas && !(site.gas && site.gas.toLowerCase().includes(gas))) return false;
            return true;
        });

        applySort();
    } else {
        const faction = document.getElementById('combatFactionFilter').value.toLowerCase();
        const security = document.getElementById('combatSecFilter').value.toLowerCase();
        const difficulty = document.getElementById('combatDifficultyFilter').value;
        const escalation = document.getElementById('combatEscalationFilter').value.toLowerCase();

        filteredCombat = COMBAT_ANOMALIES.filter(site => {
            if (search) {
                const searchable = [
                    site.name, site.faction, site.security, site.notes,
                    site.damage, site.ewar, site.reward, site.dedRating
                ].join(' ').toLowerCase();
                if (!searchable.includes(search)) return false;
            }
            if (faction && !site.faction.toLowerCase().includes(faction)) return false;
            if (security && !site.security.toLowerCase().includes(security)) return false;
            if (escalation === 'yes' && site.escalation !== 'Yes') return false;
            if (escalation === 'no' && site.escalation !== 'No') return false;

            if (difficulty) {
                if (difficulty === '1' && site.difficulty !== 1) return false;
                if (difficulty === '2-4' && (site.difficulty < 2 || site.difficulty > 4)) return false;
                if (difficulty === '5-7' && (site.difficulty < 5 || site.difficulty > 7)) return false;
                if (difficulty === '8-10' && (site.difficulty < 8 || site.difficulty > 10)) return false;
            }

            return true;
        });

        applySort();
    }

    renderCurrentList();
}

function applySort() {
    const sortVal = document.getElementById('sortBy').value;
    const [key, dir] = sortVal.split('-');
    const asc = dir === 'asc';

    const sorter = (a, b) => {
        let valA, valB;

        if (key === 'safety') {
            const order = { safe: 0, warning: 1, unsafe: 2 };
            valA = order[a.safety] ?? 1;
            valB = order[b.safety] ?? 1;
        } else if (key === 'difficulty') {
            valA = a.difficulty || 0;
            valB = b.difficulty || 0;
        } else if (key === 'security') {
            const order = { 'high': 0, 'high/low': 1, 'low': 2, 'low/null': 3, 'null': 4, 'low/null': 3 };
            valA = order[(a.security || '').toLowerCase()] ?? 5;
            valB = order[(b.security || '').toLowerCase()] ?? 5;
        } else {
            valA = (a[key] || '').toLowerCase();
            valB = (b[key] || '').toLowerCase();
        }

        if (valA < valB) return asc ? -1 : 1;
        if (valA > valB) return asc ? 1 : -1;
        return 0;
    };

    if (currentTab === 'exploration') {
        filteredSites.sort(sorter);
    } else {
        filteredCombat.sort(sorter);
    }
}

function clearAllFilters(silent) {
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearch').style.display = 'none';
    document.getElementById('safetyFilter').value = '';
    document.getElementById('typeFilter').value = '';
    document.getElementById('regionFilter').value = '';
    document.getElementById('gasFilter').value = '';
    document.getElementById('combatFactionFilter').value = '';
    document.getElementById('combatSecFilter').value = '';
    document.getElementById('combatDifficultyFilter').value = '';
    document.getElementById('combatEscalationFilter').value = '';

    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));

    if (!silent) {
        if (currentTab === 'exploration') {
            filteredSites = [...EXPLORATION_SITES];
        } else {
            filteredCombat = [...COMBAT_ANOMALIES];
        }
        applySort();
        renderCurrentList();
    }
}

// ========== QUICK FILTERS ==========
function quickFilter(el, filter) {
    const chips = document.querySelectorAll('#explorationChips .chip');
    const wasActive = el.classList.contains('active');

    chips.forEach(c => c.classList.remove('active'));
    if (!wasActive) el.classList.add('active');

    // Reset filter dropdowns
    document.getElementById('safetyFilter').value = '';
    document.getElementById('typeFilter').value = '';
    document.getElementById('regionFilter').value = '';
    document.getElementById('gasFilter').value = '';

    if (!wasActive) {
        switch (filter) {
            case 'safe': document.getElementById('safetyFilter').value = 'safe'; break;
            case 'gas': document.getElementById('typeFilter').value = 'gas'; break;
            case 'relic': document.getElementById('typeFilter').value = 'relic'; break;
            case 'data': document.getElementById('typeFilter').value = 'data'; break;
            case 'wormhole': document.getElementById('regionFilter').value = 'wormhole'; break;
            case 'mykoserocin':
                document.getElementById('typeFilter').value = 'gas';
                document.getElementById('gasFilter').value = 'mykoserocin';
                break;
            case 'fullerite':
                document.getElementById('typeFilter').value = 'gas';
                document.getElementById('gasFilter').value = 'fullerite';
                break;
            case 'ghost':
                document.getElementById('typeFilter').value = 'data/relic';
                document.getElementById('safetyFilter').value = 'warning';
                break;
        }
    }

    applyFilters();
}

function combatQuickFilter(el, filter) {
    const chips = document.querySelectorAll('#combatChips .chip');
    const wasActive = el.classList.contains('active');

    chips.forEach(c => c.classList.remove('active'));
    if (!wasActive) el.classList.add('active');

    document.getElementById('combatFactionFilter').value = '';
    document.getElementById('combatSecFilter').value = '';
    document.getElementById('combatDifficultyFilter').value = '';
    document.getElementById('combatEscalationFilter').value = '';

    if (!wasActive) {
        switch (filter) {
            case 'angel': document.getElementById('combatFactionFilter').value = 'angel'; break;
            case 'blood': document.getElementById('combatFactionFilter').value = 'blood'; break;
            case 'guristas': document.getElementById('combatFactionFilter').value = 'guristas'; break;
            case 'sansha': document.getElementById('combatFactionFilter').value = 'sansha'; break;
            case 'serpentis': document.getElementById('combatFactionFilter').value = 'serpentis'; break;
            case 'rogue': document.getElementById('combatFactionFilter').value = 'rogue'; break;
            case 'highsec': document.getElementById('combatSecFilter').value = 'high'; break;
            case 'escalation': document.getElementById('combatEscalationFilter').value = 'yes'; break;
        }
    }

    applyFilters();
}

// ========== MODALS ==========
function showModal(type) {
    document.getElementById(type + 'Modal').classList.add('active');
}

function closeModal(type) {
    document.getElementById(type + 'Modal').classList.remove('active');
}

// ========== SORT + RENDER WRAPPER ==========
function applySortAndRender() {
    applySort();
    renderCurrentList();
}

// ========== BOOT ==========
document.addEventListener('DOMContentLoaded', init);

// Auto-update copyright year
document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('copyright-text');
    if (el) el.textContent = `\u00A9 ${new Date().getFullYear()} KingSyah`;
});
