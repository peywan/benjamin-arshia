export const fighterProfile = {
  identity: {
    fightName: "Arshia",
    givenName: "Benjamin Hajijan",
    discipline: "Professional MMA",
    weightClass: "Bantamweight",
    record: "3-0"
  },
  personal: {
    dob: "2001-09-27",
    nationality: "Sweden",
    fightingOutOf: "Malmö, Sweden", // Updated to match "Fighting out of: Malmö"
    height: "170 cm",
    stance: "Orthodox"
  },
  teams: {
    primary: "Allstars Training Center",
    former: "Redline TC"
  },
  highlights: [
    "Undefeated professional record",
    "First round TKO finish",
    "IMMAF World Championship experience"
  ],
  socials: [] // No links requested in footer
};

export const professionalRecord = [
  {
    id: "pro-3",
    date: "2025-11-29",
    event: "FCR 26",
    opponent: "Safiullah Husseini",
    result: "Win",
    method: "Unanimous Decision",
    round: 3,
    time: "5:00",
    highlightBroadcast: true,
    videoPoster: "/assets/safi-striking.jpg",
    photos: [
      "/assets/safi-striking.jpg", // Striking action - Position 1
      "/assets/safi-action-1.jpg", // Action shot - Position 2
      "/assets/safi-hq-win.jpg" // Winning moment - Position 3
    ]
  },
  {
    id: "pro-2",
    date: "2025-05-24",
    event: "FCR 24",
    opponent: "Nika Kalandadze",
    result: "Win",
    method: "Unanimous Decision",
    round: 3,
    time: "5:00",
    highlightBroadcast: true,
    videoPoster: "/assets/nikakalandadze3.JPG",
    photos: [
      "/assets/nikakalandadze3.JPG", // Action 3 - Position 1
      "/assets/kalandadze-action-1.jpg", // Action 1 - Position 2
      "/assets/nikakalandadze2.JPG", // Action 2 - Position 3
      "/assets/kalandadze-final-win.jpg" // Victory - Position 4
    ]
  },
  {
    id: "pro-1",
    date: "2024-06-29",
    event: "AFN 7",
    opponent: "Eli Elias",
    result: "Win",
    method: "TKO (Punches)",
    round: 1,
    time: "0:51",
    highlightBroadcast: true,
    videoPoster: "/assets/eli-elias-celebration.jpg.JPG",
    photos: [
      "/assets/eli-elias-celebration.jpg.JPG", // Celebration scream - FIRST
      "/assets/eli-elias-striking.jpg.JPG", // Body kick - Position 2
      "/assets/eli-elias-backflip.jpg.JPG", // BACKFLIP - EPIC! - Position 3
      "/assets/eli-elias-final-v2.jpg" // Victory pose - LAST
    ]
  }
];

export const amateurRecord = [
  // Placeholder for amateur record data if provided, or generic structure based on "IMMAF Experience"
  // For now, prompt implies separate Amateur Record timeline with "neutral losses".
  // Since no specific amateur fights were listed in the "Master Prompt" detail (only Pro),
  // I will leave this empty or add a placeholder if the structure requires it.
  // Wait, the prompt says "Amateur losses displayed neutrally", "IMMAF exp as highlight".
  // But didn't provide specific amateur fight list.
  // "3. Designfilosofi... tona ner amatörförluster".
  // I will assume we might need at least one example or just the section header?
  // Actually, "PRO FIGHT 1... 3... CANCELLED..." were the only ones listed detailed.
  // I will stick to Pro for now and adding a generic "Amateur Career" block if needed or just skip until user provides data.
  // Actually, "Professional debut 29 June 2024. Timeline begins there. All before is Amateur."
  // So I'll focus on Pro first.
];
