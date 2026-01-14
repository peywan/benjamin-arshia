# Social Media Delningsbild (OG Image) - Specifikationer

## 📐 Tekniska Krav

**Filnamn:** `og-image.jpg`  
**Placering:** `/public/assets/og-image.jpg`  
**Storlek:** 1200 x 630 pixels (exakt!)  
**Format:** JPG (optimerad kvalitet 85-90%)  
**Max filstorlek:** < 1 MB

---

## 🎨 Design Layout

### Bakgrund
- Använd en av de coola action-shots (förslag: safi-hq-win.jpg eller kalandadze-final-win.jpg)
- Lägg ett **mörkt gradient overlay** för att texten ska synas tydligt
- Gradient: radial-gradient(circle, rgba(0,0,0,0.3), rgba(0,0,0,0.8))

### Text Overlay (lägg till i Photoshop/Figma/Canva)

**HUVUDTEXT (topp-vänster eller centrerad):**
```
ARSHIA
Benjamin Hajijan
```

**STATS (botten-vänster):**
```
🏆 3-0 UNDEFEATED
🥊 PROFESSIONAL MMA
🇸🇪 MALMÖ, SWEDEN
```

**OPTIONAL (botten-höger):**
```
ALLSTARS TRAINING CENTER
```

---

## 🎨 Typografi

- **"ARSHIA"**: Anton font, 120-140px, vit (#FFFFFF)
- **"Benjamin Hajijan"**: Teko font, 48px, ljusgrå (#CCCCCC)
- **Stats**: Teko font, 32px, vit (#FFFFFF)

---

## 📱 Förhandsgranskning

Så här ser det ut när du delar:

**iMessage:**
```
┌─────────────────────────────┐
│  [BILD: Benjamin i action]  │
│                             │
│  ARSHIA | 3-0 Undefeated    │
│  🥊 Professional MMA Fighter│
│  benjaminarshia.com         │
└─────────────────────────────┘
```

**Instagram/WhatsApp:**
Samma layout, men 1200x630 passar perfekt för alla plattformar.

---

## 🛠️ Snabb Lösning (Temporary)

Om du vill ha något ASAP:
1. Öppna Canva.com (gratis)
2. Välj "Custom Size" → 1200 x 630 px
3. Ladda upp en av vinst-bilderna som bakgrund
4. Lägg till text enligt ovan
5. Exportera som JPG
6. Spara som `/public/assets/og-image.jpg`

---

## ✅ Checklista

- [ ] Bild är 1200x630px
- [ ] Texten är tydligt läsbar på mobil
- [ ] Namnet "ARSHIA" syns tydligt
- [ ] 3-0 record är synlig
- [ ] Filen är < 1 MB
- [ ] Sparad som `/public/assets/og-image.jpg`

---

**När du är klar, testa delningen:**
1. https://www.opengraph.xyz/ (test preview)
2. Dela länken på iMessage/WhatsApp till dig själv
3. LinkedIn post preview
