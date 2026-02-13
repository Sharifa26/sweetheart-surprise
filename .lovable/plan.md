

# Interactive Animated Valentine Surprise Website 💕

## Overview
A premium, fully animated romantic quiz website with a soft pastel pink aesthetic. The experience guides your partner through a series of personalized questions before asking the big Valentine's question — with a playful twist where the "No" button runs away!

---

## Global Design & Animations
- **Pastel pink gradient background** with light grid pattern overlay
- **Animated scalloped/wave borders** at top and bottom of every page (gentle wave motion)
- **Floating mini hearts** gently drifting across the screen
- **Smooth page transitions** (fade + slide up between pages)
- **Slightly tilted card** centered on each page (like the reference images)
- **Button hover effects** with scale + glow
- Fully responsive, mobile-first design
- On refresh → always reset to Page 1

---

## Page 1 – Intro ("Hey Cutiepie 💕")
- Embedded GIF from Tenor (cute panda character)
- Title: "Hey Cutiepie 💕"
- Subtitle: "This Valentine, I made a little something special for you."
- "Open it" button with pulse glow animation
- Card has subtle tilt effect

## Page 2 – Question 1: "How much do you love me? 💞"
- Embedded love cat GIF from Tenor
- Four answer options (A through D) styled as pink rounded buttons with heart labels
- **Correct answer: C** ("I love you ∞ * ∞ time")
- ✅ Correct → heart burst animation → auto-transition to Page 3
- ❌ Wrong → dark overlay with angry Bubu GIF + "I'm going to kill you 😡💢" → resets after 2.5s

## Page 3 – Question 2: Photo Question
- Displays your couple selfie (uploaded image)
- Question: "When did we take this picture?"
- Four date options; **Correct: D** (December 30)
- Same correct/wrong behavior

## Page 4 – Question 3: Bracelet Question
- Displays the bracelet image (uploaded image)
- Question: "Why did we exchange this?"
- Four date options; **Correct: C** (March 8)
- Same correct/wrong behavior

## Page 5 – Question 4: Travel Question
- Embedded travel GIF from Tenor
- Question: "Which place I want to visit with you? 🌍"
- Four destination options with placeholder travel images
- **Correct: A** (Maldives)
- Same correct/wrong behavior

## Final Page – "Will You Be My Valentine? 💖"
- Embedded romantic GIF from Tenor
- Big question text
- Two buttons: **YES 💕** and **NO 🙈**
- **YES** → transitions to celebration page with:
  - Sweet message: "Thank you so much darling 💕 I know you will say yes only 😘 Love you so much chellam 💖✨"
  - Large kiss bear GIF from Tenor
  - Heart rain animation falling across screen
  - Emojis and glow effects everywhere
- **NO** → the No button randomly teleports away from the cursor every time they try to click it (playful dodge mechanic), making it impossible to actually select No 😄

---

## Technical Approach
- Single-page React app with state-based page navigation (no backend needed)
- CSS animations + Tailwind for all micro-interactions (floating hearts, waves, transitions)
- Quiz progress tracked via React state
- Uploaded images (couple photo, bracelet) embedded directly
- GIFs loaded from Tenor embed URLs
- Mobile-first responsive layout

