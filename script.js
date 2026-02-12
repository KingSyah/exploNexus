// ==============================================
// DATA CONFIGURATION SECTION
// Easy to edit - add or modify entries here
// ==============================================

// EXPLORATION SITES DATA
const EXPLORATION_SITES = [
    // ============================================
    // FULLERITE GAS SITES (WORMHOLE SPACE)
    // ============================================
    
    // High Value C5/C6 Sites
    { name: "Instrumental Core Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole C5/C6", gas: "Fullerite - C320", notes: "15-20min timer before Sleepers. HIGH VALUE! C5/C6 only." },
    { name: "Vital Core Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole C5/C6", gas: "Fullerite - C540", notes: "15-20min timer before Sleepers. HIGHEST VALUE! C5/C6 only." },
    
    // Perimeter Reservoirs
    { name: "Barren Perimeter Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C50/C84", notes: "15-20min timer. Primary: C50, Secondary: C84" },
    { name: "Token Perimeter Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C60/C50", notes: "15-20min timer. Primary: C60, Secondary: C50" },
    { name: "Minor Perimeter Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C70/C60", notes: "15-20min timer. Primary: C70, Secondary: C60" },
    { name: "Ordinary Perimeter Reservoir", type: "Gas - Fullerite", safety: "unsafe", region: "Wormhole", gas: "Fullerite - C72/C70", notes: "DANGER! 5 sentry drones on warp-in. Primary: C72, Secondary: C70" },
    { name: "Sizable Perimeter Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C84/C72", notes: "15-20min timer. Primary: C84, Secondary: C72" },
    
    // Frontier Reservoirs
    { name: "Bountiful Frontier Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C28/C32", notes: "15-20min timer. Primary: C28, Secondary: C32" },
    { name: "Vast Frontier Reservoir", type: "Gas - Fullerite", safety: "warning", region: "Wormhole", gas: "Fullerite - C32/C28", notes: "15-20min timer. Primary: C32, Secondary: C28" },

    // ============================================
    // MYKOSEROCIN GAS (HIGHSEC/LOWSEC/NULLSEC)
    // Safe sites - no NPCs
    // ============================================
    
    // Lime/Frentix
    { name: "Sister Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Multiple", gas: "Mykoserocin - Lime", notes: "2,000 units total. Regions: Aridia, Curse, Derelik, Khanid, Omist, Solitude" },
    { name: "Helix Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Multiple", gas: "Mykoserocin - Lime", notes: "6,000 units total. Regions: Aridia, Curse, Derelik, Khanid, Kor-Azor, Solitude" },
    
    // Malachite/Mindflood
    { name: "Wild Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Multiple", gas: "Mykoserocin - Malachite", notes: "2,000 units total. Regions: Aridia, Insmother, Kor-Azor, Curse, Omist, Solitude, Tash-Murkon" },
    { name: "Blackeye Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Multiple", gas: "Mykoserocin - Malachite", notes: "6,000 units total. Regions: Aridia, Curse, Khanid, Kor-Azor, Omist, Solitude" },
    
    // Amber/Blue Pill
    { name: "Sunspark Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Caldari", gas: "Mykoserocin - Amber", notes: "2,000 units total. Regions: Black Rise, Lonetrek, Outer Passage, Sinq Laison, The Citadel, The Forge, The Spire" },
    { name: "Diablo Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Caldari", gas: "Mykoserocin - Amber", notes: "6,000 units total. Regions: Black Rise, Everyshore, Lonetrek, Outer Passage, Sinq Laison, The Citadel, The Forge, Vale of the Silent" },
    
    // Golden/Crash
    { name: "Smoking Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Caldari", gas: "Mykoserocin - Golden", notes: "2,000 units total. Regions: Black Rise, Everyshore, Lonetrek, Outer Passage, Perrigen Falls, Sinq Laison, The Citadel, The Spire" },
    { name: "Ring Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Caldari", gas: "Mykoserocin - Golden", notes: "6,000 units total. Regions: Black Rise, Everyshore, Lonetrek, Malpais, Outer Passage, Perrigen Falls, Sinq Laison, The Citadel" },
    
    // Celadon/Exile
    { name: "Calabash Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Gallente", gas: "Mykoserocin - Celadon", notes: "2,000 units total. Regions: Domain, Genesis, Placid, Solitude, Fountain (Pegasus)" },
    { name: "Glass Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Gallente", gas: "Mykoserocin - Celadon", notes: "6,000 units total. Regions: Domain, Solitude, Pure Blind, Placid, Genesis" },
    
    // Viridian/Drop
    { name: "Bright Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Gallente", gas: "Mykoserocin - Viridian", notes: "2,000 units total. Regions: Essence, Fountain, Placid, Tenal, Venal" },
    { name: "Sparking Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Gallente", gas: "Mykoserocin - Viridian", notes: "6,000 units total. Regions: Domain, Essence, Fountain, Genesis, Placid, Pure Blind, Tenal" },
    
    // Azure/Sooth Sayer
    { name: "Ghost Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Minmatar", gas: "Mykoserocin - Azure", notes: "2,000 units total. Regions: Curse, Derelik, Devoid, The Bleak Lands, Heimatar, Molden Heath" },
    { name: "Eagle Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Minmatar", gas: "Mykoserocin - Azure", notes: "6,000 units total. Regions: Curse, Derelik, The Bleak Lands, Heimatar, Insmother, Metropolis, Molden Heath, Tenerifis" },
    
    // Vermillion/X-Instinct
    { name: "Flame Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Minmatar", gas: "Mykoserocin - Vermillion", notes: "2,000 units total. Regions: Curse, Derelik, Devoid, The Bleak Lands, Great Wildlands, Heimatar, Insmother, Metropolis, Omist, Tenerifis" },
    { name: "Pipe Nebula", type: "Gas - Mykoserocin", safety: "safe", region: "Highsec - Minmatar", gas: "Mykoserocin - Vermillion", notes: "6,000 units total. Regions: Curse, Derelik, Devoid, The Bleak Lands, Heimatar, Immensea, Metropolis, Tenerifis" },

    // ============================================
    // CYTOSEROCIN GAS (LOWSEC/NULLSEC)
    // Warning: Gas clouds may explode!
    // ============================================
    
    // Lime/Frentix - Lowsec/Nullsec
    { name: "Emerald Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Derelik", gas: "Cytoserocin - Lime", notes: "500 units. No NPCs, no explosions" },
    { name: "Cheetah Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Catch", gas: "Cytoserocin - Lime", notes: "1,000 units. Explodes: 1000 thermal" },
    { name: "Duo Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Catch (9HXQ-G)", gas: "Cytoserocin - Lime", notes: "3,000 units. Explodes: 1000 EM + 1000 thermal" },
    { name: "Leopard Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Catch", gas: "Cytoserocin - Lime", notes: "18,000 units! NPCs present. Explodes: 1400 explosive" },
    { name: "Rimy Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Catch", gas: "Cytoserocin - Lime", notes: "3,000 units. NPCs present. Explodes: 1000 EM + 1000 thermal" },
    
    // Malachite/Mindflood - Lowsec/Nullsec
    { name: "Crimson Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Aridia", gas: "Cytoserocin - Malachite", notes: "1,000 units. No NPCs, no explosions" },
    { name: "Cobra Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Delve", gas: "Cytoserocin - Malachite", notes: "500 units. Explodes: 800 EM + 800 thermal" },
    { name: "Crab Spider Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Delve", gas: "Cytoserocin - Malachite", notes: "2,000 units. NPCs present. No explosions" },
    { name: "Hazy Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Delve (OK-FEM)", gas: "Cytoserocin - Malachite", notes: "18,000 units! NPCs. Explodes: 800 EM + 700 thermal" },
    { name: "Hidden Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Delve (OK-FEM)", gas: "Cytoserocin - Malachite", notes: "6,000 units. Explodes: 1000 EM + 1000 thermal" },
    { name: "Whirling Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Delve (OK-FEM)", gas: "Cytoserocin - Malachite", notes: "6,000 units. NPCs. DEADSPACE. Explodes: 1000 EM + 1000 thermal" },
    
    // Amber/Blue Pill - Lowsec/Nullsec
    { name: "Bandit Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - The Forge", gas: "Cytoserocin - Amber", notes: "1,000 units. No NPCs, no explosions" },
    { name: "Fluttering Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Vale of the Silent", gas: "Cytoserocin - Amber", notes: "500 units. Explodes: 1000 thermal" },
    { name: "Rocky Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Vale of the Silent", gas: "Cytoserocin - Amber", notes: "832 units. Explodes: 2500 thermal" },
    { name: "Dewy Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Vale (E-8CSQ)", gas: "Cytoserocin - Amber", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal" },
    { name: "Foggy Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Vale (E-8CSQ)", gas: "Cytoserocin - Amber", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal" },
    { name: "Shimmering Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Vale (E-8CSQ)", gas: "Cytoserocin - Amber", notes: "18,000 units! NPCs. Explodes: 1400 thermal" },
    { name: "Spacious Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Vale (E-8CSQ)", gas: "Cytoserocin - Amber", notes: "6,000 units. Mixed explosions or none" },
    
    // Golden/Crash - Lowsec/Nullsec
    { name: "Profiteer Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Lonetrek", gas: "Cytoserocin - Golden", notes: "1,000 units. No NPCs, no explosions" },
    { name: "Moth Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Tenal", gas: "Cytoserocin - Golden", notes: "2,000 units. NPCs. No explosions" },
    { name: "Swarm Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Tenal", gas: "Cytoserocin - Golden", notes: "2,000 units. DEADSPACE. Explodes: 1000 thermal" },
    { name: "Lion Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Tenal (09-4XW)", gas: "Cytoserocin - Golden", notes: "6,000 units. Explodes: 1000 EM + 1000 thermal" },
    { name: "Shiny Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Tenal (09-4XW)", gas: "Cytoserocin - Golden", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal" },
    { name: "Gaseous Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Tenal (09-4XW)", gas: "Cytoserocin - Golden", notes: "18,000 units! NPCs. Explodes: 700 EM + 700 thermal" },
    
    // Celadon/Exile - Lowsec/Nullsec
    { name: "Phoenix Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Solitude", gas: "Cytoserocin - Celadon", notes: "1,000 units. No NPCs, no explosions" },
    { name: "Flowing Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Fountain", gas: "Cytoserocin - Celadon", notes: "2,000 units. Explodes: 1000 thermal" },
    { name: "Thick Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Fountain", gas: "Cytoserocin - Celadon", notes: "1,000 units. NPCs present" },
    { name: "Diamond Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Fountain (Pegasus)", gas: "Cytoserocin - Celadon", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal" },
    { name: "Massive Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Fountain (Pegasus)", gas: "Cytoserocin - Celadon", notes: "14,224 units. NPCs. Explodes: 800 thermal" },
    { name: "Peacock Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Fountain (Pegasus)", gas: "Cytoserocin - Celadon", notes: "6,000 units. Explodes: 1000 EM + 1000 thermal" },
    
    // Viridian/Drop - Lowsec/Nullsec
    { name: "Forgotten Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Placid", gas: "Cytoserocin - Viridian", notes: "1,000 units. No NPCs, no explosions" },
    { name: "Frosty Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Cloud Ring", gas: "Cytoserocin - Viridian", notes: "2,000 units. NPCs. No explosions" },
    { name: "Goose Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Cloud Ring", gas: "Cytoserocin - Viridian", notes: "2,000 units. Explodes: 1000 thermal" },
    { name: "Icy Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Cloud Ring (Assilot)", gas: "Cytoserocin - Viridian", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal" },
    { name: "Pale Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Cloud Ring (Assilot)", gas: "Cytoserocin - Viridian", notes: "Unknown units. Explodes: 1000 thermal" },
    { name: "Polar Bear Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Cloud Ring (Assilot)", gas: "Cytoserocin - Viridian", notes: "18,000 units! NPCs. Explodes: 800 thermal" },
    
    // Azure/Sooth Sayer - Lowsec/Nullsec
    { name: "Rapture Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Molden Heath", gas: "Cytoserocin - Azure", notes: "1,400 units. No NPCs, no explosions" },
    { name: "Crystal Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Wicked Creek", gas: "Cytoserocin - Azure", notes: "2,000 units. Explodes: 400 thermal" },
    { name: "Snowy Owl Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Wicked Creek", gas: "Cytoserocin - Azure", notes: "2,000 units. NPCs. No explosions" },
    { name: "Arctic Fox Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Wicked Creek (760-9C)", gas: "Cytoserocin - Azure", notes: "9,000 units. NPCs. Explodes: 700 EM + 700 thermal" },
    { name: "Glistening Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Wicked Creek (760-9C)", gas: "Cytoserocin - Azure", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal" },
    { name: "Murky Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Wicked Creek (760-9C)", gas: "Cytoserocin - Azure", notes: "3,000 units. Explodes: 1000 EM + 1000 thermal" },
    
    // Vermillion/X-Instinct - Lowsec/Nullsec
    { name: "Saintly Nebula", type: "Gas - Cytoserocin", safety: "safe", region: "Lowsec - Heimatar", gas: "Cytoserocin - Vermillion", notes: "500 units. No NPCs" },
    { name: "Boisterous Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Feythabolis", gas: "Cytoserocin - Vermillion", notes: "2,000 units. Explodes: 1000 thermal" },
    { name: "Cardinal Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Feythabolis (I-3ODK)", gas: "Cytoserocin - Vermillion", notes: "6,000 units. NPCs. Explodes: 1000 EM + 1000 thermal" },
    { name: "Red Dragonfly Nebula", type: "Gas - Cytoserocin", safety: "unsafe", region: "Nullsec - Feythabolis (I-3ODK)", gas: "Cytoserocin - Vermillion", notes: "18,000 units! NPCs. Explodes: 700 EM + 700 thermal" },
    { name: "Wispy Nebula", type: "Gas - Cytoserocin", safety: "warning", region: "Nullsec - Feythabolis (I-3ODK)", gas: "Cytoserocin - Vermillion", notes: "6,000 units. DEADSPACE. Explodes: 1000 EM + 1000 thermal" },

    // === RELIC SITES - HIGHSEC ===
    { name: "Crumbling Antiquated Outpost", type: "Relic", safety: "safe", region: "Highsec", gas: "", notes: "10% signature strength. Low value loot." },
    { name: "Crumbling Crystal Quarry", type: "Relic", safety: "safe", region: "Highsec", gas: "", notes: "5% signature strength. T1 salvage." },
    { name: "Ruined (Faction) Monument Site", type: "Relic", safety: "safe", region: "Highsec", gas: "", notes: "Faction pirate relic site in highsec" },
    { name: "Looted (Faction) Outpost", type: "Relic", safety: "safe", region: "Highsec", gas: "", notes: "Faction pirate relic site in highsec" },

    // === RELIC SITES - LOWSEC/NULLSEC ===
    { name: "Central (Faction) Crystal Quarry", type: "Relic", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Better loot than highsec. Sansha sites most valuable." },
    { name: "Central (Faction) Sparking Transmitter", type: "Relic", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Pirate relic site with improved loot" },
    { name: "Regional (Faction) Crystal Quarry", type: "Relic", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Mid-tier pirate relic site" },
    { name: "Regional (Faction) Sparking Transmitter", type: "Relic", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Mid-tier pirate relic site" },
    { name: "Local (Faction) Crystal Quarry", type: "Relic", safety: "safe", region: "Nullsec", gas: "", notes: "Standard nullsec relic site" },
    { name: "Local (Faction) Sparking Transmitter", type: "Relic", safety: "safe", region: "Nullsec", gas: "", notes: "Standard nullsec relic site" },

    // === RELIC SITES - WORMHOLE ===
    { name: "(Faction) Crystal Quarry", type: "Relic", safety: "safe", region: "Wormhole", gas: "", notes: "C1-C3 WHs only. No NPCs. Contains pirate faction loot." },
    { name: "(Faction) Sparking Transmitter", type: "Relic", safety: "safe", region: "Wormhole", gas: "", notes: "C1-C3 WHs only. No NPCs." },

    // === SLEEPER RELIC SITES (UNSAFE) ===
    { name: "Unsecured Frontier Receiver", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs. Avoid in exploration frigate." },
    { name: "Unsecured Frontier Server Bank", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs." },
    { name: "Unsecured Frontier Digital Nexus", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs." },
    { name: "Unsecured Frontier Database", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs." },

    // === DATA SITES - HIGHSEC ===
    { name: "Local (Faction) Mainframe", type: "Data", safety: "safe", region: "Highsec", gas: "", notes: "10% signature. Basic data site." },
    { name: "Local (Faction) Virus Test Site", type: "Data", safety: "safe", region: "Highsec", gas: "", notes: "10% signature. Contains datacores." },
    { name: "Local (Faction) Data Processing Center", type: "Data", safety: "safe", region: "Highsec", gas: "", notes: "5% signature. Blueprint copies possible." },
    { name: "Local (Faction) Shattered Life Support Unit", type: "Data", safety: "safe", region: "Highsec", gas: "", notes: "5% signature. Contains manufacturing materials." },

    // === DATA SITES - LOWSEC/NULLSEC ===
    { name: "Central (Faction) Command Center", type: "Data", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Better loot table than highsec" },
    { name: "Central (Faction) Data Mining Site", type: "Data", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Can contain valuable faction BPCs" },
    { name: "Regional (Faction) Command Center", type: "Data", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Mid-tier data site" },
    { name: "Regional (Faction) Data Mining Site", type: "Data", safety: "safe", region: "Lowsec/Nullsec", gas: "", notes: "Mid-tier data site" },
    { name: "Local (Faction) Command Center", type: "Data", safety: "safe", region: "Nullsec", gas: "", notes: "Standard nullsec data site" },
    { name: "Local (Faction) Data Mining Site", type: "Data", safety: "safe", region: "Nullsec", gas: "", notes: "Standard nullsec data site" },

    // === DATA SITES - WORMHOLE ===
    { name: "(Faction) Command Center", type: "Data", safety: "safe", region: "Wormhole", gas: "", notes: "C1-C3 WHs. No NPCs. Contains datacores and BPCs." },
    { name: "(Faction) Data Mining Site", type: "Data", safety: "safe", region: "Wormhole", gas: "", notes: "C1-C3 WHs. No NPCs." },

    // === SLEEPER DATA SITES (UNSAFE) ===
    { name: "Unsecured Frontier Trinary Hub", type: "Data", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs." },
    { name: "Unsecured Frontier Enclave", type: "Data", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs." },
    { name: "Unsecured Frontier Server Bank", type: "Data", safety: "unsafe", region: "Wormhole", gas: "", notes: "UNSAFE - Contains Sleeper NPCs." },

    // === SPECIAL SITES ===
    { name: "Forgotten Frontier Databank", type: "Data", safety: "unsafe", region: "Wormhole", gas: "", notes: "NOT SAFE - Contains NPCs despite 'Forgotten' prefix" },
    { name: "Forgotten Frontier Quarry", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "NOT SAFE - Contains NPCs" },
    { name: "Forgotten Perimeter Gateway", type: "Data", safety: "unsafe", region: "Wormhole", gas: "", notes: "NOT SAFE - Contains NPCs" },
    { name: "Forgotten Perimeter Habitation Coils", type: "Relic", safety: "unsafe", region: "Wormhole", gas: "", notes: "NOT SAFE - Contains NPCs" },

    // === GHOST SITES (SPECIAL) ===
    { name: "Lesser Covert Research Facility", type: "Data/Relic", safety: "warning", region: "Highsec/Lowsec", gas: "", notes: "GHOST SITE! Invisible timer. Cans explode. Contains Ascendancy BPCs." },
    { name: "Standard Covert Research Facility", type: "Data/Relic", safety: "warning", region: "Lowsec", gas: "", notes: "GHOST SITE! Dangerous but valuable." },
    { name: "Improved Covert Research Facility", type: "Data/Relic", safety: "warning", region: "Nullsec", gas: "", notes: "GHOST SITE! High value loot." },
    { name: "Superior Covert Research Facility", type: "Data/Relic", safety: "warning", region: "Nullsec", gas: "", notes: "GHOST SITE! Best ghost site loot." },

    // === COMBAT RELIC SITES (RARE) ===
    { name: "Ancient Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Catch", gas: "", notes: "RARE! Only in Catch region. Requires combat ship. Many rats." },
    { name: "Bloated Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Wicked Creek", gas: "", notes: "RARE! Combat relic site. High difficulty." },
    { name: "Crumbling Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Vale of the Silent", gas: "", notes: "RARE! Combat relic site." },
    { name: "Festering Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Fountain", gas: "", notes: "RARE! Combat relic site." },
    { name: "Forgotten Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Delve", gas: "", notes: "RARE! Combat relic site." },
    { name: "Hidden Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Cloud Ring", gas: "", notes: "RARE! Combat relic site." },
    { name: "Whispy Ruins", type: "Relic - Combat", safety: "unsafe", region: "Nullsec - Feythabolis", gas: "", notes: "RARE! Combat relic site." },

    // === DRONE SITES ===
    { name: "Abandoned Research Complex (Drone)", type: "Relic", safety: "unsafe", region: "Nullsec - Drone Regions", gas: "", notes: "NOT SAFE in nullsec. Contains rogue drones." },
    { name: "Drone Data Site", type: "Data", safety: "warning", region: "Nullsec - Drone Regions", gas: "", notes: "Failing hack spawns hostile frigates. Can contain Augmented Drone BPCs (very valuable)." },

    // === FACTION WARFARE / SPECIAL ===
    { name: "AEGIS (Faction) Data Site", type: "Data", safety: "unsafe", region: "Special", gas: "", notes: "NOT SAFE - Contains NPCs" },
    { name: "SCC (Faction) Data Site", type: "Data", safety: "unsafe", region: "Special", gas: "", notes: "NOT SAFE - Contains NPCs" },
];

// COMBAT ANOMALIES DATA
const COMBAT_ANOMALIES = [
    // === ANGEL CARTEL ===
    { name: "Angel Hideaway", faction: "Angel Cartel", difficulty: 1, security: "High/Low", escalation: "No", notes: "Easiest Angel site. Low bounties." },
    { name: "Angel Hidden Hideaway", faction: "Angel Cartel", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 2 variant with more spawns" },
    { name: "Angel Forsaken Hideaway", faction: "Angel Cartel", difficulty: 1, security: "High/Low", escalation: "Yes", notes: "Level 3 variant with more spawns. Can escalate to DED 3/10 (Angel Repurposed Outpost)" },
    { name: "Angel Forlorn Hideaway", faction: "Angel Cartel", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 4 variant with more spawns" },
    { name: "Angel Burrow", faction: "Angel Cartel", difficulty: 2, security: "High", escalation: "No", notes: "High Sec Ratting" },
    { name: "Angel Refuge", faction: "Angel Cartel", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "Can escalate to DED 5/10 (Angel's Red Light District)" },
    { name: "Angel Den", faction: "Angel Cartel", difficulty: 4, security: "High/Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 5/10 (Angel's Red Light District)." },
    { name: "Angel Hidden Den", faction: "Angel Cartel", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 2 Den with elite spawns" },
    { name: "Angel Forsaken Den", faction: "Angel Cartel", difficulty: 4, security: "Low/Null", escalation: "Yes", notes: "Elite variant of Den. May escalate to DED 7/10 (Angel Military Operations Complex)" },
    { name: "Angel Forlorn Den", faction: "Angel Cartel", difficulty: 4, security: "Low/Null", escalation: "Yes", notes: "Elite variant of Den. May escalate to DED 7/10 (Angel Military Operations Complex)" },
    { name: "Angel Yard", faction: "Angel Cartel", difficulty: 5, security: "Low", escalation: "Yes", notes: "Lowsec site. Can escalate to DED 5/10 (Angel's Red Light District)." },
    { name: "Angel Rally Point", faction: "Angel Cartel", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 6/10 (Angel Mineral Acquisition Outpost)" },
    { name: "Angel Hidden Rally Point", faction: "Angel Cartel", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 2 Rally Point. Can escalate to DED 6/10 (Angel Mineral Acquisition Outpost)" },
    { name: "Angel Forsaken Rally Point", faction: "Angel Cartel", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 3 Rally Point variant. May escalate to DED 8/10 (Cartel Prisoner Retention)" },
    { name: "Angel Forlorn Rally Point", faction: "Angel Cartel", difficulty: 6, security: "Low/Null", escalation: "No", notes: "Level 4 Rally Point variant" },
    { name: "Angel Port", faction: "Angel Cartel", difficulty: 7, security: "Low/Null", escalation: "Yes", notes: "Nullsec only. High difficulty. Can escalate to DED 7/10 (Angel Military Operations Complex)" },
    { name: "Angel Hub", faction: "Angel Cartel", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Nullsec Hub. Good bounties. Can escalate to DED 8/10 (Cartel Prisoner Retention)" },
    { name: "Angel Hidden Hub", faction: "Angel Cartel", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Elite Hub variant. May escalate to DED 9/10 (Angel Domination Fleet Staging Point)" },
    { name: "Angel Forsaken Hub", faction: "Angel Cartel", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Level 3. Can escalate to DED 9/10 (Angel Domination Fleet Staging Point)" },
    { name: "Angel Forlorn Hub", faction: "Angel Cartel", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Level 4. Can escalate to DED 9/10 (Angel Domination Fleet Staging Point)" },
    { name: "Angel Haven", faction: "Angel Cartel", difficulty: 9, security: "Null", escalation: "No", notes: "One of hardest sites. Excellent bounties. Can escalate to DED 10/10 (Angel Cartel Naval Shipyard)" },
    { name: "Angel Sanctum", faction: "Angel Cartel", difficulty: 10, security: "Null", escalation: "No", notes: "Hardest Angel site. Best rewards. Can escalate to DED 10/10 (Angel Cartel Naval Shipyard)" },

    // === BLOOD RAIDERS ===
    { name: "Blood Hideaway", faction: "Blood Raiders", difficulty: 1, security: "High/Low", escalation: "No", notes: "Easiest Blood site" },
    { name: "Blood Hidden Hideaway", faction: "Blood Raiders", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 2 variant" },
    { name: "Blood Forsaken Hideaway", faction: "Blood Raiders", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 3 variant" },
    { name: "Blood Forlorn Hideaway", faction: "Blood Raiders", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 4 variant" },
    { name: "Blood Burrow", faction: "Blood Raiders", difficulty: 2, security: "High", escalation: "Yes", notes: "High Sec Site" },
    { name: "Blood Refuge", faction: "Blood Raiders", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "Can escalate to DED 4/10 (Mul-Zatah Monastery)" },
    { name: "Blood Den", faction: "Blood Raiders", difficulty: 4, security: "High/Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 5/10 (Blood Raider Psychotropics Depot)" },
    { name: "Blood Hidden Den", faction: "Blood Raiders", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 2 Den" },
    { name: "Blood Forsaken Den", faction: "Blood Raiders", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 3 Den" },
    { name: "Blood Forlorn Den", faction: "Blood Raiders", difficulty: 4, security: "Low/Null", escalation: "No", notes: "Level 4 Den" },
    { name: "Blood Yard", faction: "Blood Raiders", difficulty: 5, security: "Low", escalation: "Yes", notes: "Lowsec. Can escalate to DED 6/10 (Crimson Hand Supply Depot)" },
    { name: "Blood Rally Point", faction: "Blood Raiders", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 6/10 (Crimson Hand Supply Depot)" },
    { name: "Blood Hidden Rally Point", faction: "Blood Raiders", difficulty: 6, security: "Low/Null", escalation: "No", notes: "Level 2 Rally Point" },
    { name: "Blood Forsaken Rally Point", faction: "Blood Raiders", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 3 Rally Point. May escalate to DED 8/10 (Blood Raider Prison Camp)" },
    { name: "Blood Forlorn Rally Point", faction: "Blood Raiders", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 4 Rally Point. May escalate to DED 8/10 (Blood Raider Prison Camp)" },
    { name: "Blood Port", faction: "Blood Raiders", difficulty: 7, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 7/10 (Blood Raider Coordination Center)" },
    { name: "Blood Hub", faction: "Blood Raiders", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Level 1. Can escalate to DED 8/10 (Blood Raider Prison Camp)" },
    { name: "Blood Hidden Hub", faction: "Blood Raiders", difficulty: 8, security: "Low/Null", escalation: "No", notes: "Level 2" },
    { name: "Blood Forsaken Hub", faction: "Blood Raiders", difficulty: 8, security: "low/Null", escalation: "Yes", notes: "Level 3. Can escalate to DED 9/10" },
    { name: "Blood Forlorn Hub", faction: "Blood Raiders", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Level 3. Can escalate to DED 9/10" },
    { name: "Blood Haven", faction: "Blood Raiders", difficulty: 9, security: "Null", escalation: "Yes", notes: "High-tier ratting site. Can escalate to DED 10/10 (Blood Raider Naval Shipyard)" },
    { name: "Blood Sanctum", faction: "Blood Raiders", difficulty: 10, security: "Null", escalation: "Yes", notes: "Hardest Blood site. Can escalate to DED 10/10 (Blood Raider Naval Shipyard)" },

    // === GURISTAS ===
    { name: "Guristas Hideaway", faction: "Guristas", difficulty: 1, security: "High", escalation: "Yes", notes: "Easiest Guristas site. Can escalate to DED 4/10" },
    { name: "Guristas Hidden Hideaway", faction: "Guristas", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 2 variant" },
    { name: "Guristas Forsaken Hideaway", faction: "Guristas", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 3 variant" },
    { name: "Guristas Forlorn Hideaway", faction: "Guristas", difficulty: 1, security: "High/Low", escalation: "No", notes: "Level 4 variant" },
    { name: "Guristas Burrow", faction: "Guristas", difficulty: 2, security: "High/Low", escalation: "No", notes: "Level 2 variant" },
    { name: "Guristas Refuge", faction: "Guristas", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "More spawns. Can escalate to DED 4/10 (Guristas Scout Outpost)" },
    { name: "Guristas Den", faction: "Guristas", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 5/10 (Guristas Hallucinogen Supply Waypoint)" },
    { name: "Guristas Hidden Den", faction: "Guristas", difficulty: 4, security: "Low/Null", escalation: "Yes", notes: "Level 2 Den. Can escalate to DED 6/10 (Guristas Troop Reinvigoration Camp)" },
    { name: "Guristas Forsaken Den", faction: "Guristas", difficulty: 4, security: "Low/Null", escalation: "Yes", notes: "Level 3 Den. Can escalate to DED 7/10 (Gurista Military Operations Complex)" },
    { name: "Guristas Forlorn Den", faction: "Guristas", difficulty: 4, security: "Low/Null", escalation: "Yes", notes: "Level 4 Den. Can escalate to DED 7/10(Guristas Hallucinogen Supply Waypoint)" },
    { name: "Guristas Yard", faction: "Guristas", difficulty: 5, security: "Low", escalation: "Yes", notes: "Lowsec/nullsec. Can escalate to DED 5/10 (Guristas Hallucinogen Supply Waypoint)" },
    { name: "Guristas Rally Point", faction: "Guristas", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 6/10 (Guristas Troop Reinvigoration Camp)" },
    { name: "Guristas Hidden Rally Point", faction: "Guristas", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 2 Rally. Can escalate to DED 9/10 (Dread Guristas Fleet Staging Point)" },
    { name: "Guristas Forsaken Rally Point", faction: "Guristas", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 3 Rally. Can escalate to DED 9/10 (Pith's Penal Complex)" },
    { name: "Guristas Forlorn Rally Point", faction: "Guristas", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 4 Rally. Can escalate to DED 9/10 (Pith's Penal Complex)" },
    { name: "Guristas Port", faction: "Guristas", difficulty: 7, security: "Low/Null", escalation: "Yes", notes: "High difficulty. Can escalate to DED 7/10(Gurista Military Operations Complex)" },
    { name: "Guristas Hub", faction: "Guristas", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Elite Hub. May escalate to DED 8/10 (Pith's Penal Complex)" },
    { name: "Guristas Hidden Hub", faction: "Guristas", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Elite Hub. May escalate to DED 9/10 (Dread Guristas Fleet Staging Point)" },
    { name: "Guristas Forsaken Hub", faction: "Guristas", difficulty: 8, security: "Low/Null", escalation: "Yes", notes: "Very hard Hub. Can escalate to DED 9/10 (Dread Guristas Fleet Staging Point)" },
    { name: "Guristas Forlorn Hub", faction: "Guristas", difficulty: 8, security: "Null", escalation: "Yes", notes: "Very hard Hub. Can escalate to DED 9/10 (Dread Guristas Fleet Staging Point)" },
    { name: "Guristas Haven", faction: "Guristas", difficulty: 9, security: "Null", escalation: "Yes", notes: "High-tier site. Can escalate to DED 10/10 (The Maze)" },
    { name: "Guristas Sanctum", faction: "Guristas", difficulty: 10, security: "Null", escalation: "Yes", notes: "Hardest Guristas site. Can escalate to DED 10/10 (The Maze)" },

    // === SANSHA'S NATION ===
    { name: "Sansha Hideaway", faction: "Sansha's Nation", difficulty: 1, security: "High", escalation: "No", notes: "Easiest Sansha site. Entry level" },
    { name: "Sansha Hidden Hideaway", faction: "Sansha's Nation", difficulty: 2, security: "High/Low", escalation: "No", notes: "Level 2 variant" },
    { name: "Sansha Burrow", faction: "Sansha's Nation", difficulty: 2, security: "High/Low", escalation: "Yes", notes: "Can escalate to DED 3/10" },
    { name: "Sansha Hidden Burrow", faction: "Sansha's Nation", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "More spawns. Can escalate to DED 4/10" },
    { name: "Sansha Forsaken Burrow", faction: "Sansha's Nation", difficulty: 3, security: "Low", escalation: "Yes", notes: "Elite Burrow. May escalate to DED 4/10" },
    { name: "Sansha Den", faction: "Sansha's Nation", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 3/10 or 4/10" },
    { name: "Sansha Hidden Den", faction: "Sansha's Nation", difficulty: 4, security: "Low", escalation: "Yes", notes: "Level 2 Den. Can escalate to DED 5/10" },
    { name: "Sansha Forsaken Den", faction: "Sansha's Nation", difficulty: 4, security: "Low", escalation: "Yes", notes: "Elite Den with True Sansha spawns. Can escalate to DED 5/10" },
    { name: "Sansha Yard", faction: "Sansha's Nation", difficulty: 5, security: "Low/Null", escalation: "Yes", notes: "Lowsec/nullsec. Can escalate to DED 5/10" },
    { name: "Sansha Rally Point", faction: "Sansha's Nation", difficulty: 5, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 3/10" },
    { name: "Sansha Hidden Rally Point", faction: "Sansha's Nation", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 2 Rally. Can escalate to DED 6/10" },
    { name: "Sansha Forsaken Rally Point", faction: "Sansha's Nation", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Elite Rally. May escalate to DED 7/10" },
    { name: "Sansha Port", faction: "Sansha's Nation", difficulty: 7, security: "Null", escalation: "Yes", notes: "Nullsec only" },
    { name: "Sansha Hub", faction: "Sansha's Nation", difficulty: 8, security: "Null", escalation: "Yes", notes: "High difficulty. Best relic loot in game." },
    { name: "Sansha Hidden Hub", faction: "Sansha's Nation", difficulty: 8, security: "Null", escalation: "Yes", notes: "Elite Hub. May escalate to DED 8/10" },
    { name: "Sansha Forsaken Hub", faction: "Sansha's Nation", difficulty: 9, security: "Null", escalation: "Yes", notes: "Very hard Hub. Can escalate to DED 10/10" },
    { name: "Sansha Haven", faction: "Sansha's Nation", difficulty: 9, security: "Null", escalation: "No", notes: "High-tier site. Can escalate to DED 10/10 (Sansha War Supply Complex)" },
    { name: "Sansha Sanctum", faction: "Sansha's Nation", difficulty: 10, security: "Null", escalation: "No", notes: "Hardest Sansha site. Can escalate to DED 10/10" },

    // === SERPENTIS ===
    { name: "Serpentis Hideaway", faction: "Serpentis", difficulty: 1, security: "High", escalation: "No", notes: "Easiest Serpentis site. Entry level" },
    { name: "Serpentis Hidden Hideaway", faction: "Serpentis", difficulty: 2, security: "High/Low", escalation: "No", notes: "Level 2 variant" },
    { name: "Serpentis Burrow", faction: "Serpentis", difficulty: 2, security: "High/Low", escalation: "Yes", notes: "Can escalate to DED 3/10" },
    { name: "Serpentis Hidden Burrow", faction: "Serpentis", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "More spawns. Can escalate to DED 4/10" },
    { name: "Serpentis Forsaken Burrow", faction: "Serpentis", difficulty: 3, security: "Low", escalation: "Yes", notes: "Elite Burrow. May escalate to DED 4/10" },
    { name: "Serpentis Den", faction: "Serpentis", difficulty: 3, security: "High/Low", escalation: "Yes", notes: "Medium difficulty. Can escalate to DED 3/10 or 4/10" },
    { name: "Serpentis Hidden Den", faction: "Serpentis", difficulty: 4, security: "Low", escalation: "Yes", notes: "Level 2 Den. Can escalate to DED 5/10" },
    { name: "Serpentis Forsaken Den", faction: "Serpentis", difficulty: 4, security: "Low", escalation: "Yes", notes: "Elite Den with Shadow Serpentis spawns. Can escalate to DED 5/10" },
    { name: "Serpentis Yard", faction: "Serpentis", difficulty: 5, security: "Low/Null", escalation: "Yes", notes: "Lowsec/nullsec. Can escalate to DED 5/10" },
    { name: "Serpentis Rally Point", faction: "Serpentis", difficulty: 5, security: "Low/Null", escalation: "Yes", notes: "Can escalate to DED 3/10" },
    { name: "Serpentis Hidden Rally Point", faction: "Serpentis", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Level 2 Rally. Can escalate to DED 6/10 (Serpentis Logistical Outpost)" },
    { name: "Serpentis Forsaken Rally Point", faction: "Serpentis", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "Elite Rally. May escalate to DED 7/10" },
    { name: "Serpentis Port", faction: "Serpentis", difficulty: 7, security: "Null", escalation: "Yes", notes: "Nullsec only. Can escalate to DED 7/10" },
    { name: "Serpentis Hub", faction: "Serpentis", difficulty: 8, security: "Null", escalation: "Yes", notes: "High difficulty. Can escalate to DED 8/10" },
    { name: "Serpentis Hidden Hub", faction: "Serpentis", difficulty: 8, security: "Null", escalation: "Yes", notes: "Elite Hub. May escalate to DED 8/10" },
    { name: "Serpentis Forsaken Hub", faction: "Serpentis", difficulty: 9, security: "Null", escalation: "Yes", notes: "Very hard Hub. Can escalate to DED 10/10" },
    { name: "Serpentis Haven", faction: "Serpentis", difficulty: 9, security: "Null", escalation: "No", notes: "High-tier site. Can escalate to DED 10/10 (Serpentis Phi-Outpost)" },
    { name: "Serpentis Sanctum", faction: "Serpentis", difficulty: 10, security: "Null", escalation: "No", notes: "Hardest Serpentis site. Can escalate to DED 10/10" },

    // === ROGUE DRONES ===
    { name: "Drone Cluster", faction: "Rogue Drones", difficulty: 1, security: "High", escalation: "No", notes: "Easiest drone site" },
    { name: "Drone Collection", faction: "Rogue Drones", difficulty: 2, security: "High", escalation: "No", notes: "Low value, skip in highsec" },
    { name: "Drone Assembly", faction: "Rogue Drones", difficulty: 3, security: "High/Low", escalation: "No", notes: "Medium difficulty. Can escalate to DED 3/10 or 4/10" },
    { name: "Drone Gathering", faction: "Rogue Drones", difficulty: 4, security: "Low", escalation: "No", notes: "Lowsec drone site" },
    { name: "Drone Surveillance", faction: "Rogue Drones", difficulty: 5, security: "Low/Null", escalation: "No", notes: "Medium-high difficulty" },
    { name: "Drone Menagerie", faction: "Rogue Drones", difficulty: 6, security: "Low/Null", escalation: "Yes", notes: "High difficulty Can escalate to DED 5/10" },
    { name: "Drone Herd", faction: "Rogue Drones", difficulty: 7, security: "Null", escalation: "Yes", notes: "Can escalate to DED 5/10" },
    { name: "Drone Squad", faction: "Rogue Drones", difficulty: 8, security: "Null", escalation: "Yes", notes: "Best drone site for newbro. Can escalate to DED 10/10 (Outgrowth Rogue Drone Hive)" },
    { name: "Drone Patrol", faction: "Rogue Drones", difficulty: 9, security: "Null", escalation: "Yes", notes: "Very hard drone site (scram/web). Can escalate to DED 10/10 (Outgrowth Rogue Drone Hive)" },
    { name: "Drone Horde", faction: "Rogue Drones", difficulty: 10, security: "Null", escalation: "Yes", notes: "Hardest drone site. Can escalate to DED 10/10 (Outgrowth Rogue Drone Hive)" },

    // === SPECIAL SITES ===
    
    // === FORSAKEN SANCTUMS (HIGHEST TIER - EQUINOX UPDATE) ===
    // Introduced in June 2024 Equinox expansion
    // Only spawn with Major Threat Detection Array upgrades at Sovereignty Hub
    // Harder than regular Sanctums - designed for Marauders and Capital ships
    { name: "Angel Forsaken Sanctum", faction: "Angel Cartel", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. More NPCs than regular Sanctum. NPCs target drones/fighters. Can escalate to DED 10/10. Equinox exclusive." },
    { name: "Blood Forsaken Sanctum", faction: "Blood Raiders", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. More Dark Blood spawns than regular Sanctum. NPCs target drones/fighters. Can escalate to DED 10/10. Equinox exclusive." },
    { name: "Guristas Forsaken Sanctum", faction: "Guristas", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. More Dread Guristas spawns. NPCs target drones/fighters aggressively. Can escalate to DED 10/10. Equinox exclusive." },
    { name: "Sansha Forsaken Sanctum", faction: "Sansha's Nation", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. More True Sansha spawns. NPCs target drones/fighters. Can escalate to DED 10/10. Equinox exclusive." },
    { name: "Serpentis Forsaken Sanctum", faction: "Serpentis", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. More Shadow Serpentis spawns. NPCs target drones/fighters. Takes 3+ siege cycles for Navy Dread. Can escalate to DED 10/10. Equinox exclusive." },
    { name: "Teeming Drone Horde", faction: "Rogue Drones", difficulty: 10, security: "Null", escalation: "Yes", notes: "⚠️ EXTREME DIFFICULTY! Requires Marauder or Capital ship. Harder than regular Drone Horde. More Sentient drone spawns. Can escalate to DED 10/10. NPCs aggressively target drones/fighters. Equinox exclusive." },

    { name: "Besieged Covert Research Facility", faction: "Mordu's Legion", difficulty: 8, security: "Low", escalation: "No", notes: "UNIQUE! Found in all lowsec. Mordu's Legion NPCs. Can switch damage types." },
];

// ==============================================
// APPLICATION CODE
// Don't edit below unless you know what you're doing
// ==============================================

let explorationSites = [...EXPLORATION_SITES];
let combatAnomalies = [...COMBAT_ANOMALIES];
let filteredSites = [...explorationSites];
let filteredCombat = [...combatAnomalies];
let currentSort = { column: 0, ascending: true };

// Initialize the application
function init() {
    updateStats();
    renderTable(filteredSites);
    renderCombatTable(filteredCombat);
    setupEventListeners();
}

// Update statistics
function updateStats() {
    const safeSitesCount = explorationSites.filter(s => s.safety === 'safe').length;
    
    document.getElementById('totalSites').textContent = explorationSites.length + combatAnomalies.length;
    document.getElementById('explorationSites').textContent = explorationSites.length;
    document.getElementById('combatSites').textContent = combatAnomalies.length;
    document.getElementById('safeSites').textContent = safeSitesCount;
}

// Render exploration table
function renderTable(sites) {
    const tbody = document.getElementById('explorationTableBody');
    tbody.innerHTML = '';

    if (sites.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 2rem; color: var(--text-secondary);">No sites found matching your filters</td></tr>';
        return;
    }

    sites.forEach(site => {
        const row = document.createElement('tr');
        
        const safetyBadge = getSafetyBadge(site.safety);
        
        row.innerHTML = `
            <td>${site.name}</td>
            <td>${site.type}</td>
            <td>${safetyBadge}</td>
            <td>${site.region}</td>
            <td>${site.notes}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Render combat table
function renderCombatTable(sites) {
    const tbody = document.getElementById('combatTableBody');
    tbody.innerHTML = '';

    if (sites.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-secondary);">No combat sites found matching your filters</td></tr>';
        return;
    }

    sites.forEach(site => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${site.name}</td>
            <td>${site.faction}</td>
            <td>${getDifficultyStars(site.difficulty)}</td>
            <td>${site.security}</td>
            <td>${site.escalation}</td>
            <td>${site.notes}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Get safety badge HTML
function getSafetyBadge(safety) {
    const badges = {
        'safe': '<span class="badge badge-safe">✓ Safe</span>',
        'unsafe': '<span class="badge badge-unsafe">⚠ Unsafe</span>',
        'warning': '<span class="badge badge-warning">⚡ Warning</span>'
    };
    return badges[safety] || safety;
}

// Get difficulty stars
function getDifficultyStars(difficulty) {
    const filled = '★'.repeat(difficulty);
    const empty = '☆'.repeat(10 - difficulty);
    return `<span style="color: var(--accent-warning);">${filled}</span><span style="color: var(--text-muted);">${empty}</span> ${difficulty}/10`;
}

// Setup event listeners
function setupEventListeners() {
    // Exploration filters
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('safetyFilter').addEventListener('change', applyFilters);
    document.getElementById('typeFilter').addEventListener('change', applyFilters);
    document.getElementById('regionFilter').addEventListener('change', applyFilters);
    document.getElementById('gasFilter').addEventListener('change', applyFilters);
    
    // Combat filters
    document.getElementById('combatSearchInput').addEventListener('input', applyCombatFilters);
    document.getElementById('combatFactionFilter').addEventListener('change', applyCombatFilters);
    document.getElementById('combatSecFilter').addEventListener('change', applyCombatFilters);
    document.getElementById('combatDifficultyFilter').addEventListener('change', applyCombatFilters);
}

// Apply exploration filters
function applyFilters() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const safety = document.getElementById('safetyFilter').value.toLowerCase();
    const type = document.getElementById('typeFilter').value.toLowerCase();
    const region = document.getElementById('regionFilter').value.toLowerCase();
    const gas = document.getElementById('gasFilter').value.toLowerCase();

    filteredSites = explorationSites.filter(site => {
        // Search in ALL fields: name, type, region, gas, notes
        const matchSearch = !search || 
                          site.name.toLowerCase().includes(search) || 
                          site.type.toLowerCase().includes(search) ||
                          site.region.toLowerCase().includes(search) ||
                          (site.gas && site.gas.toLowerCase().includes(search)) ||
                          (site.notes && site.notes.toLowerCase().includes(search));
        
        const matchSafety = !safety || site.safety === safety;
        const matchType = !type || site.type.toLowerCase().includes(type);
        const matchRegion = !region || site.region.toLowerCase().includes(region.toLowerCase());
        
        // Improved gas matching
        const matchGas = !gas || (site.gas && site.gas.toLowerCase().includes(gas));

        return matchSearch && matchSafety && matchType && matchRegion && matchGas;
    });

    renderTable(filteredSites);
}

// Apply combat filters
function applyCombatFilters() {
    const search = document.getElementById('combatSearchInput').value.toLowerCase();
    const faction = document.getElementById('combatFactionFilter').value.toLowerCase();
    const security = document.getElementById('combatSecFilter').value.toLowerCase();
    const difficulty = document.getElementById('combatDifficultyFilter').value;

    filteredCombat = combatAnomalies.filter(site => {
        // Search in ALL fields: name, faction, security, notes
        const matchSearch = !search ||
                          site.name.toLowerCase().includes(search) || 
                          site.faction.toLowerCase().includes(search) ||
                          site.security.toLowerCase().includes(search) ||
                          site.notes.toLowerCase().includes(search);
        
        const matchFaction = !faction || site.faction.toLowerCase().includes(faction);
        const matchSecurity = !security || site.security.toLowerCase().includes(security);
        
        let matchDifficulty = true;
        if (difficulty) {
            if (difficulty === '1') matchDifficulty = site.difficulty === 1;
            else if (difficulty === '2-4') matchDifficulty = site.difficulty >= 2 && site.difficulty <= 4;
            else if (difficulty === '5-7') matchDifficulty = site.difficulty >= 5 && site.difficulty <= 7;
            else if (difficulty === '8-10') matchDifficulty = site.difficulty >= 8 && site.difficulty <= 10;
        }

        return matchSearch && matchFaction && matchSecurity && matchDifficulty;
    });

    renderCombatTable(filteredCombat);
}

// Quick filter for exploration
function quickFilter(filter) {
    // Remove active class from all chips
    document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
    event.target.classList.add('active');

    // Reset all filters first
    document.getElementById('safetyFilter').value = '';
    document.getElementById('typeFilter').value = '';
    document.getElementById('regionFilter').value = '';
    document.getElementById('gasFilter').value = '';

    switch(filter) {
        case 'safe':
            document.getElementById('safetyFilter').value = 'safe';
            break;
        case 'gas':
            document.getElementById('typeFilter').value = 'gas';
            break;
        case 'relic':
            document.getElementById('typeFilter').value = 'relic';
            break;
        case 'data':
            document.getElementById('typeFilter').value = 'data';
            break;
        case 'wormhole':
            document.getElementById('regionFilter').value = 'wormhole';
            break;
        case 'mykoserocin':
            document.getElementById('typeFilter').value = 'gas';
            document.getElementById('gasFilter').value = 'mykoserocin';
            break;
        case 'fullerite':
            document.getElementById('typeFilter').value = 'gas';
            document.getElementById('gasFilter').value = 'fullerite';
            break;
    }
    
    applyFilters();
}

// Quick filter for combat
function combatQuickFilter(filter) {
    document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
    event.target.classList.add('active');

    document.getElementById('combatFactionFilter').value = '';
    document.getElementById('combatSecFilter').value = '';
    document.getElementById('combatDifficultyFilter').value = '';

    switch(filter) {
        case 'angel':
            document.getElementById('combatFactionFilter').value = 'angel';
            break;
        case 'blood':
            document.getElementById('combatFactionFilter').value = 'blood';
            break;
        case 'guristas':
            document.getElementById('combatFactionFilter').value = 'guristas';
            break;
        case 'sansha':
            document.getElementById('combatFactionFilter').value = 'sansha';
            break;
        case 'serpentis':
            document.getElementById('combatFactionFilter').value = 'serpentis';
            break;
        case 'rogue':
            document.getElementById('combatFactionFilter').value = 'rogue';
            break;
        case 'highsec':
            document.getElementById('combatSecFilter').value = 'high';
            break;
    }
    
    applyCombatFilters();
}

// Sort exploration table
function sortTable(column) {
    if (currentSort.column === column) {
        currentSort.ascending = !currentSort.ascending;
    } else {
        currentSort.column = column;
        currentSort.ascending = true;
    }

    const keys = ['name', 'type', 'safety', 'region', 'notes'];
    const key = keys[column];

    filteredSites.sort((a, b) => {
        let valA = (a[key] || '').toLowerCase();
        let valB = (b[key] || '').toLowerCase();

        if (valA < valB) return currentSort.ascending ? -1 : 1;
        if (valA > valB) return currentSort.ascending ? 1 : -1;
        return 0;
    });

    renderTable(filteredSites);
}

// Sort combat table
function sortCombatTable(column) {
    const keys = ['name', 'faction', 'difficulty', 'security', 'escalation', 'notes'];
    const key = keys[column];

    filteredCombat.sort((a, b) => {
        let valA = typeof a[key] === 'number' ? a[key] : (a[key] || '').toLowerCase();
        let valB = typeof b[key] === 'number' ? b[key] : (b[key] || '').toLowerCase();

        if (valA < valB) return -1;
        if (valA > valB) return 1;
        return 0;
    });

    renderCombatTable(filteredCombat);
}

// Switch tabs
function switchTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(tab + 'Tab').classList.add('active');
}

// Modal functions
function showModal(type) {
    document.getElementById(type + 'Modal').classList.add('active');
}

function closeModal(type) {
    document.getElementById(type + 'Modal').classList.remove('active');
}

// Close modal on background click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
