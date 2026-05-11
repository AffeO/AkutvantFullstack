# Akutvänt - Vård i realtid

En professionell webbapp för att visa realtidsinformation om väntetider på akutmottagningar i Stockholm.

## 🎨 Design

Byggt enligt moderna vårdtech-principer:
- ✨ Vit bakgrund med mycket luft
- 🔵 Blå accent-färg för professionalism
- 📱 Smal, centrerad layout (max 448px) som funkar perfekt på mobil och desktop
- 🏥 Seriös känsla lämplig för både vårdpersonal och investerare

## 🚀 Komma igång

### Installera beroenden
```bash
npm install
```

### Starta utvecklingsserver
```bash
npm run dev
```

Appen öppnas på `http://localhost:5173`

### Bygga för produktion
```bash
npm run build
```

## 📱 Funktioner

### Startsida
- Ren, professionell hero-sektion
- Tydlig value proposition
- Info om pilot-versionen
- Om-sektion med syfte

### Sjukhuslista
- Visuellt tydliga kort med mycket whitespace
- Väntetid med färgkodning (grön badge)
- Status-indikator (kort/medel/lång väntetid)
- Avstånd och plats
- Telefonnummer
- Avdelningar (Akutmedicin, Kirurgi, etc.)
- Knappar för detaljer och navigation
- Spara som favorit-funktion

## 🛠️ Teknisk stack

- **React 18** - Modernt UI-bibliotek
- **Vite** - Blixtsnabb build tool
- **Tailwind CSS** - Utility-first CSS för snabb utveckling
- **PostCSS** - CSS processor

## 📊 Mockad data

Pilot-versionen innehåller 4 akutmottagningar:
1. Sankt Görans Sjukhus (kort väntetid, 25 min)
2. Karolinska Universitetssjukhuset (lång väntetid, 160 min)
3. Södersjukhuset (kort väntetid, 45 min)
4. Danderyds sjukhus (medel väntetid, 90 min)

## 🔮 Nästa steg

- [ ] Integration med faktisk akutdata
- [ ] GPS-baserad sortering
- [ ] Filtrera på avdelningar
- [ ] Push-notiser
- [ ] Favoriter med localStorage
- [ ] Historisk data och trender
- [ ] Admin-panel för sjukhus

## 🎯 Produktstrategi

Denna design följer samma principer som framgångsrika vårdtech-företag:
- **Seriös** nog för CGM och vårdorganisationer
- **Tydlig** för kliniskt användande
- **Investerbar** presentation för finansiering

## 🔒 GDPR & Dataskydd

Vid integration med riktig data:
- ✅ Endast aggregerad, anonymiserad data
- ✅ Ingen patientinformation
- ✅ Dataskyddsombud
- ✅ Avtal med vårdgivare

## 📦 Deployment

Projektet är redo för deployment på:
- **Vercel** (rekommenderat)
- **Netlify**
- **GitHub Pages**

Kör `npm run build` och deploya `dist/` mappen.
