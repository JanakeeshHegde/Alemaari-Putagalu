# ಅಲೆಮಾರಿ ಪುಟಗಳು — Digital Field Journal Redesign (Product Requirements Document)

## Overview
- **Summary**: Full creative rewrite of the existing ಅಲೆಮಾರಿ ಪುಟಗಳು website into an original, high-end, experimental digital travel experience conceived as a "Digital Field Journal" — a private collection of Western Ghats memories reinterpreted as luxury editorial + independent art magazine + cinematic documentary + photography book + digital art object.
- **Purpose**: To produce a visually original, Kannada-first, photo-dominated vertical-scroll web experience that surprises the visitor while scrolling. The user reaction must be "ಈ ತರದ travel page ನಾನು ನೋಡಿಲ್ಲ" rather than "another photography portfolio".
- **Target Users**: Instagram / mobile-first visitors, design-aware viewers, and the photographer's inner circle of travel friends; people who open link-in-bio pages with short attention spans but high visual standards.

## Goals
1. Build a completely new visual system that has **zero visual overlap** with the current v1 design (no conventional hero, no repeating frames, no card-ized gallery feel).
2. Implement **5 distinct typography personalities** (Main Title, Section Titles, Poetic Captions, Editorial Labels, Micro Notes) using clearly different Kannada + English font families with deliberate, purposeful mixing.
3. Create a **continuous visual journey** with unpredictable art-directed sections using intentional asymmetry, overlapping elements, broken-grid compositions, typographic mega-words, memory fragments, vertical text, edge-to-edge photography, and controlled chaos.
4. Deliver purposeful cinematic transitions (mask/clip reveals, parallax, horizontal movement, blur→sharp, dark→light) combined with purposeful silence — contrast between animated and still sections.
5. Realize 6+ unique section environments: (1) asymmetric hero Field Notes 001, (2) memory-fragment discovery, (3) deep forest ಕಾಡು, (4) mist/mountain ಮಂಜು, (5) trekking road ಹಾದಿ, (6) waterfall ನೀರು, (7) human moments (ಪ್ರಯಾಣಿಕರು), (8) quiet pause, (9) emotional ending.
6. Implement evolving environmental palette (Warm Paper → Forest → Mist → Earth → Water → Charcoal) with subtle paper/film texture layer, plus micro-detail field-note numerators, vertical rules, and coordinate marks.
7. Preserve Instagram-bio mobile-first UX while retaining asymmetry and editorial personality, not generic stacked cards.
8. Keep image paths, captions, and section titles in ONE central JavaScript data object so they are editable without touching HTML or animation logic.

## Non-Goals
- No navbar / hamburger / menu system.
- No About / Gallery / Contact / Services / Footer sections.
- No React, Next.js, TypeScript, Tailwind, Bootstrap, or any framework — vanilla HTML5/CSS3/JS only.
- No slideshow / carousel as the main narrative.
- No inventing place names, GPS coordinates, dates, or person names.
- No long paragraphs of Kannada text; captions remain 1-2 poetic lines.
- No newsletter, social media grid, thank-you note, or footer links in the ending.
- No SplitText premium plugin hard dependency (must gracefully fall back to simple fade/translate).
- No generic AI-template feel, no repeating "cards + image + caption" sections, no excessive rounded rectangles/shadows/gradients.

## Background & Context
The current v1 was built in the same working directory ([index.html](file:///c:/Users/hegde/Desktop/New%20folder/index.html), [style.css](file:///c:/Users/hegde/Desktop/New%20folder/style.css), [script.js](file:///c:/Users/hegde/Desktop/New%20folder/script.js), `/images` folder). The user explicitly rejected the "minimal portfolio / gallery" look-and-feel even though v1 technically implemented their original section list. The redesign spec is written in absolute terms: every section, typography choice, grid, layout, and animation must be COMPLETELY DIFFERENT.

The redesign brief defines a "Digital Field Journal" concept: an old trekker's field notebook reinterpreted as modern digital art. The 27 numbered clauses in the brief constitute the authoritative functional spec. Key new structural devices absent from v1:
- Asymmetric "offset" hero with title partially overhanging negative-space of an oversized photo, plus `FIELD NOTES / 001` label and vertical rule.
- **Typographic Art Direction**: Massive single Kannada words (ಮಂಜು, ಕಾಡು, ನೀರು, ಹಾದಿ, ಮೌನ) filling near-viewport height, each with unique alignment, partially cropped or coupled to photos.
- **Memory Fragment sections**: staggered appearance of small photo + field-note label + tiny poetic caption + larger photo + small follow-up photo (discovered memories, not a grid).
- **Broken grid**: off-grid images, 25% floating small images, vertical strip images, bleed images, overlap between image and mega-word typography.
- **5 typography personalities** with font-family-per-role instead of a single family.
- **Environmental color transitions** tied to palette (Warm Paper `#F4F0E6`, Forest `#102A20`, Deep Green `#1D4231`, Moss `#627553`, Mist `#DDE4DE`, Stone `#C7BBA5`, Earth `#75563F`, Water `#426F76`, Charcoal `#171E1B`).
- **Blur-to-sharp** and **dark-to-light** reveal strategies (new vs v1).
- **Photo-installation treatments**: 70% viewport images, 25% floaters, panoramic strips, overlapping layouts.
- **Intentional quiet pauses** between intense sections.

## Functional Requirements
- **FR-1 Hero**: Asymmetric Field-Note hero with oversized photo extending beyond viewport; two-line offset Kannada title (`ಅಲೆಮಾರಿ` then `ಪುಟಗಳು`); `FIELD NOTES / 001` micro-label in monospace/mark personality; vertical rule; `SCROLL TO WANDER ↓` hint (no button); title can partially overlap photo only in naturally empty negative-space.
- **FR-2 Typography System**: 5 distinct visual personalities, each with dedicated CSS class + Google Font + different size/spacing/weight regime: (T01) Main Title display serif Kannada, (T02) Section Titles distinct Kannada sans/serif (different from T01), (T03) Poetic Captions lighter Kannada (handwritten-inspired aesthetic where readable), (T04) Editorial Labels English condensed/grotesk uppercase + generous letter-spacing, (T05) Micro Notes English monospace for `001`, `06:42 AM`, `FRAME 07`, `FIELD NOTE`.
- **FR-3 Typographic Art Direction**: At least 5 "mega-word" sections (`ಮಂಜು`, `ಕಾಡು`, `ನೀರು`, `ಹಾದಿ`, `ಮೌನ`) — each single Kannada word displayed near-viewport size with unique alignment: ಕಾಡು partially cropped on deep-green bg; ಮಂಜು in elegant type beside mist photo; ನೀರು vertical typography; ಹಾದಿ far-left aligned; ಮೌನ centered quiet empty-space.
- **FR-4 Memory Fragment Sections**: Multiple "fragment" rhythms where staggered elements appear: small photo → tiny FIELD NOTE label → 1-2 line poetic caption → large photo enters → small follow-up photo appears later. Timing uses ScrollTrigger-staggered reveals, not a uniform duration.
- **FR-5 Photography-as-Art-Installation**: At least 10 different photo treatments used across the experience — full-bleed, 70% vp, 25% floater, vertical strip, panoramic, overlap, bleed outside main content area, slow scroll-reveal, dark-to-light, blur-to-sharp. Section treatments must never repeat the same layout.
- **FR-6 Cinematic Transitions**: Use GSAP + ScrollTrigger for: image masking (clip-path variants), slow zoom (scale 1.15→1.0), subtle parallax, horizontal x-translate, scale transitions, opacity crossfade, blur→sharp reveal (filter: blur 8→0), dark→light (brightness 0.4→1) on at least one section per strategy. Purposeful silence must also exist — at least 2 sections with NO image animation at all.
- **FR-7 Waterfall Section**: Background gradually shifts to deep muted Water `#426F76` tone. One giant waterfall photo slowly reveals. Subtle water-like light movement (SVG gradient-mask or low-opacity animated wash, NOT fake particle water). Text emerges first: vertical `ನೀರು` mega-word, then 2-line poetic caption.
- **FR-8 Forest Section**: Background `#102A20`. Large forest photography. Extremely subtle organic SVG lines. Mega-word `ಕಾಡು` large but partially cropped (right side cut by viewport). Tiny `FIELD NOTE / 04` micro-note. Transition feels like entering the forest (darken, saturation shift during scroll).
- **FR-9 Mist/Mountain Section**: Background Mist `#DDE4DE` / Warm Paper blend. Large mist photo. Mega-word `ಮಂಜು` elegant type beside photo; blur→sharp reveal; low-saturation, quiet atmosphere.
- **FR-10 Trekking/Road Section**: Background Earth/Warm Paper. 3 photos (trail/road/human). One photo receives subtle horizontal x-movement during vertical scroll to create "forward travel" feeling. Layouts feel energetic but calm. Far-left `ಹಾದಿ` mega-word with tiny field-note enumerator.
- **FR-11 Human Moments**: No names/profiles/tags. Smaller intimate compositions. Captions feel personal (e.g. "ಜೊತೆಯಲ್ಲಿದ್ದ ಕ್ಷಣಗಳೇ ದಾರಿಯನ್ನು ನೆನಪಾಗಿಸುತ್ತವೆ.").
- **FR-12 Color System**: Environmental palette. Backgrounds change per section using `--bg` CSS var + CSS crossfade between adjacent sections where useful. Palette strictly: Warm Paper `#F4F0E6`, Forest `#102A20`, Deep Green `#1D4231`, Moss `#627553`, Mist `#DDE4DE`, Stone `#C7BBA5`, Earth `#75563F`, Water `#426F76`, Charcoal `#171E1B`. Color changes tied to narrative, not random.
- **FR-13 Texture**: Global subtle paper/film grain layer (opacity < 0.05). Optional soft vignette per photographic element. Dust specks via tiny SVG or CSS noise. Texture is *only* visible subconsciously.
- **FR-14 Interaction**: Desktop — subtle image hover zoom (scale 1.00→1.03, 600ms+), tiny editorial indicator on hover, cursor: default; selected photos mouse-move parallax ±8px within frame. Mobile — remove cursor/mouse effects entirely; preserve touch-zoom native; no complex gestures.
- **FR-15 Scroll**: Lenis smooth scroll (duration ~1.2s, natural easing). GSAP ScrollTrigger scrub-based animations. Responsive + reduced-motion.
- **FR-16 Visual Pauses / Rhythm**: At least two "quiet" sections with only 1 photo, 1 small caption, generous controlled breathing space — sandwiched between intense sections, followed by a FULLSCREEN impact photo.
- **FR-17 Micro Details**: FIELD NOTE counters 001, 002, 003, 004...; TRAIL / MIST / WATER / FOREST / ROAD labels; small vertical rules; tiny dots; thin 1px borders; subtle coordinate/deco marks (no invented coords/names); handwritten-style small SVG marks; small arrows. Each micro-detail uses T05 Micro Notes or T04 Editorial Labels personality.
- **FR-18 Kannada Content**: Kannada primary language throughout. All major headings/captions in Kannada. English only for T04 labels and T05 micro-notes. No long paragraphs; every caption ≤ 2 lines. All captions editable from central data object.
- **FR-19 Ending**: No footer. Final large photograph; darken to charcoal. Text: `ಇನ್ನೂ ಕೆಲವು ದಾರಿಗಳು ಕರೆಯುತ್ತಿವೆ…` → `ಅಲೆಮಾರಿ ಪುಟಗಳು` → small line `THE JOURNEY CONTINUES.` Photo remains visible; no menus/links/CTA.
- **FR-20 Responsive**: Desktop = large editorial canvas (typography fills space, overlaps intact). Tablet (768px) = preserve asymmetry, reduce overlaps to readable range. Mobile (≤560px) = vertical photo journal. Do NOT stack everything into same-sized cards. Preserve typographic hierarchy, image scale variation, overlap, and editorial rhythm while guaranteeing readable base text ≥ 13px on 320px viewport.
- **FR-21 Performance**: Lazy load for non-hero `<img>`; `decoding="async"`; GPU-friendly `transform`/`opacity` animations only (no layout animations); no rAF loops outside GSAP; `prefers-reduced-motion` disables Lenis and all non-essential reveals.
- **FR-22 Data Configuration**: `journalData` object at top of [script.js](file:///c:/Users/hegde/Desktop/New%20folder/script.js) contains: `photos{}` (key → src/alt), `captions{}` (by section), `megawords{}` (mega-word Kannada text by section key), `fieldnotes{}` (FIELD NOTE numbers/metadata). All sections in HTML use data-attributes (`data-photo="key"`, `data-caption="key"`, `data-megaword="key"`) and the DOM population happens inside `inject*()` JS helpers so the user edits ONLY script.js when swapping photos and words.
- **FR-23 Tech Stack**: Strictly HTML5 + CSS3 + Vanilla JS + GSAP (core + ScrollTrigger CDN, non-premium) + Lenis (unpkg). Same 3 files: [index.html](file:///c:/Users/hegde/Desktop/New%20folder/index.html), [style.css](file:///c:/Users/hegde/Desktop/New%20folder/style.css), [script.js](file:///c:/Users/hegde/Desktop/New%20folder/script.js). Existing `/images` folder retained.

## Non-Functional Requirements
- **NFR-1 Aesthetic Originality**: No section should visually recall v1. Section rhythms, photo sizes, typography personalities, and background colors must be distinct across sections. Visually test: rapid scroll should show different environments.
- **NFR-2 Typography Clarity**: All 5 typography personalities must remain legible at their assigned sizes on both 1440px desktop and 360px mobile. Kannada baseline grid should not collide.
- **NFR-3 Contrast**: On dark sections (Forest/Water/Charcoal), light-on-dark ratio ≥ 4.5:1 for all body captions. On light sections, dark-on-paper ratio ≥ 4.5:1 for body captions. Mega-word display type ≥ 3:1.
- **NFR-4 Reduced Motion**: For `prefers-reduced-motion: reduce`: Lenis disabled; all ScrollTrigger scrub animations disabled; only opacity fade-ins at 800ms remain; grain animation paused; hover transitions off.
- **NFR-5 Maintainability**: Any caption, photo src, or mega-word Kannada text is editable from the single `journalData` JS object — no HTML or CSS edit needed. `injectImages`, `injectCaptions`, `injectMegawords` helpers must be idempotent.
- **NFR-6 Mobile performance on 4G**: Largest hero image ≤ 350KB if served as user-supplied JPEG; placeholder CDN src okay for build; Lighthouse performance ≥ 75 target for final populated assets.
- **NFR-7 Accessibility**: Semantic `<section>`/`<main>`/`<blockquote>`/`<h1-h3>`; alt text on every `<img>` (editable in data); tab order natural; no keyboard traps; `aria-hidden` on decoration.
- **NFR-8 Animation restraint**: In any 10s scroll window, at most ~3 distinct animated elements; other content static. No perceived scroll jank.

## Constraints
- **Technical**: HTML5 + CSS3 + Vanilla JS only. No build tool. No frameworks/libraries outside GSAP core+ScrollTrigger and Lenis via CDN. SplitText NOT required (fallback mandatory). Same 3 files plus `/images`.
- **Business**: Creative direction is locked by the 27 clauses in the redesign brief. Deviation from 5-font personality system or mega-word art direction is out of scope. Location, personal names, and social/contact elements explicitly forbidden.
- **Dependencies**: External CDN: fonts.googleapis.com, cdnjs.cloudflare.com (GSAP), unpkg.com (Lenis). These must load with `<link rel=preconnect>`; graceful degradation if CDN unreachable (fonts fall back to system serif/sans/mono; animations skip).

## Assumptions
- Placeholder photos hosted on Unsplash CDN are acceptable for the initial build; the user will swap `journalData.photos[key].src` to `/images/*.jpg` later.
- SplitText premium GSAP plugin may be blocked by browser ORB security (as observed in v1 preview). Design around a fallback that still delivers word-by-word or line-by-line reveals without SplitText.
- The user does not supply specific coordinates, dates, or person names; the T05 micro-note numbers (`001`, `FRAME 07`, `06:42 AM`) are fictional and abstract, representing field documentation aesthetics without inventing facts.
- Kannada glyphs are sufficiently supported in Noto Serif Kannada + Noto Sans Kannada (Google Fonts) for the required text.

## Open Questions
- [ ] Is the user planning to provide 1:1 photo replacement for all sections, or only a subset? (Assumes: user updates `journalData` on their own schedule; architecture ready for partial swaps.)
- [ ] Should the "FIELD NOTE / 001..009" numbering reflect actual photos, or remain abstract? (Assumes: abstract fixed count per section.)
- [ ] Is a standalone favicon (`.ico` or `.png`) desired for the browser tab, or left default? (Assumes: left as default; out of scope.)

## Acceptance Criteria

### AC-1: Asymmetric Field-Note Hero Present and Correct
- **Type**: `rule`
- **Given**: The page loads successfully in a 1440×900 desktop viewport.
- **When**: The visitor is in the top viewport (Section 1, before any scroll).
- **Then**: The hero area contains (a) an oversized cinematic photograph extending beyond or bleeding the viewport edges, (b) two-line asymmetric Kannada title `ಅಲೆಮಾರಿ` then `ಪುಟಗಳು` using T01 personality (NOT centered), (c) a visible T05 Micro Note `FIELD NOTES / 001` in distinct monospace font, (d) a thin vertical rule element, (e) a visible `SCROLL TO WANDER ↓` hint without `<button>` semantics, (f) title overlap of image only occurs in sky/cloud/negative-space zones (never faces, mountains, main subjects).
- **Pass Condition**: All (a)-(f) observable in viewport and CSS DevTools class inspection confirms T01+T05 fonts differ.
- **Evidence**: Screenshot of hero + CSS font-family audit for T01 (`.title-main`) and T05 (`.micro-note`).

### AC-2: Five Typography Personalities Distinct and Coherent
- **Type**: `rule`
- **Given**: The page renders on desktop.
- **When**: Developer inspects any populated sample from each typography role.
- **Then**: (T01 Main Title), (T02 Section Title), (T03 Poetic Caption), (T04 Editorial Label), (T05 Micro Note) — each has a *different* effective `font-family` computed value AND a *different* letter-spacing/weight/size regime. No two personalities share the same primary font-family.
- **Pass Condition**: Computed `font-family` for one sample of each class (T01…T05) produces 5 distinct values; sample of each reads legibly at viewport size 1440×900.
- **Evidence**: DevTools `getComputedStyle` capture for one element per class.

### AC-3: Mega-Word Typographic Art Direction
- **Type**: `rule`
- **Given**: Full page load.
- **When**: Scrolling through all sections.
- **Then**: At least 5 mega-word sections occur — `ಕಾಡು`, `ಮಂಜು`, `ನೀರು`, `ಹಾದಿ`, `ಮೌನ`. Each has a **unique** layout strategy: (1) `ಕಾಡು` partial crop on deep forest background; (2) `ಮಂಜು` elegant placement beside/over mist photo; (3) `ನೀರು` vertical writing mode or vertical stack; (4) `ಹಾದಿ` far-left aligned; (5) `ಮೌನ` centered quiet/empty. All mega-words use T02 Section Title personality.
- **Pass Condition**: 5 different mega-word DOM nodes exist; CSS layout differs per node (inspect `writing-mode`, `text-align`, parent `--bg`); all 5 display visible in the DOM with correct Kannada glyphs.
- **Evidence**: DOM query `$('[data-megaword]').length >= 5`, plus computed `writing-mode/text-align/background-color` for each node.

### AC-4: Memory Fragment Rhythm
- **Type**: `rule`
- **Given**: Reduced motion OFF.
- **When**: Scrolling a memory-fragment section from start to past its end marker (or ScrollTrigger debug markers).
- **Then**: Elements arrive with intentional stagger: small photo → FIELD NOTE label → caption → large photo → follow-up photo. Durations differ per element (not all identical 1.0s linear); visual rhythm reads as "discovered memories," not a uniform fade-in.
- **Pass Condition**: GSAP ScrollTrigger timeline for at least one memory-fragment section includes ≥3 staggered `start` positions with ≥ 0.15s relative gap between different content classes.
- **Evidence**: ScrollTrigger.getById() timeline dumps OR DevTools performance record showing offset event times.

### AC-5: ≥10 Distinct Photo Treatments
- **Type**: `rule`
- **Given**: Full DOM.
- **When**: Counting CSS layout classes on photographic containers (`<figure>` / `.photo-wrap` / equivalent) plus their reveal classes.
- **Then**: The following treatments can ALL be identified with distinct CSS class or `style` signature: (1) full-bleed, (2) ~70% vp, (3) ~25% float, (4) vertical strip, (5) wide panoramic, (6) overlap sibling, (7) bleed outside main container (negative margin), (8) slow clip reveal, (9) blur-to-sharp, (10) dark-to-light. ≥2 sections are completely static (no reveal animation class, scrub, or timeline).
- **Pass Condition**: ≥10 distinct CSS signatures; ≥2 sections match "silent" (no GSAP target selectors, no reveal class).
- **Evidence**: Manual audit of CSS classes + DOM selectors for photos.

### AC-6: Cinematic Transition Set
- **Type**: `rule`
- **Given**: Reduced motion OFF.
- **When**: Scrolling through entire page.
- **Then**: The following strategies are each used at least once and identified via ScrollTrigger or GSAP targets: (a) clip-path mask reveal (any variant), (b) slow scale (1.1→1.0), (c) vertical parallax yPercent, (d) horizontal xPercent movement (road/trek section), (e) opacity crossfade, (f) blur→sharp (filter: blur), (g) dark→light (brightness/filter). Purposeful silence is also preserved — ≥2 photo containers have NO animation.
- **Pass Condition**: GSAP `getTweensOf(document.body)` + `ScrollTrigger.getAll()` contain targets matching 7 strategies (a-g) AND ≥2 sibling photo sections exist without any animation class.
- **Evidence**: ScrollTrigger.getAll().map(t => t.vars) summary.

### AC-7: Waterfall Section Environment
- **Type**: `rule`
- **Given**: Reduced motion OFF.
- **When**: The waterfall section scrolls into view.
- **Then**: (a) Background transitions into Water `#426F76` tone via CSS section `--bg`; (b) giant waterfall image present with slow reveal strategy (clip + scale); (c) subtle non-particle water-like light movement (animated gradient/SVG wash ≤ 0.3 opacity); (d) mega-word `ನೀರು` emerges first with vertical writing-mode; (e) 2-line Kannada caption emerges.
- **Pass Condition**: All (a)-(e) are observable during a scroll; computed CSS confirms writing-mode `vertical-rl` (or equivalent) for ನೀರು.
- **Evidence**: Annotated screenshot of waterfall mid-scroll + CSS audit.

### AC-8: Forest Section Environment
- **Type**: `rule`
- **Given**: Reduced motion OFF.
- **When**: Visitor scrolls through forest section.
- **Then**: (a) Background color `#102A20`; (b) large forest image; (c) ≥ 2 subtle organic SVG line paths drawn with stroke-dashoffset during enter; (d) mega-word ಕಾಡು present and partially clipped (right or top by viewport — clip-path or overflow:hidden on parent); (e) T05 `FIELD NOTE / 04` visible.
- **Pass Condition**: All 5 observables confirmed.
- **Evidence**: CSS `background-color`, SVG stroke-dashoffset animation, clip-path/overflow on ಕಾಡು parent.

### AC-9: Mist Blur→Sharp
- **Type**: `rule`
- **Given**: Reduced motion OFF.
- **When**: Mist section enters.
- **Then**: Large mist photo reveals from `filter: blur(10px)` → `blur(0)`; ಮಂಜು mega-word present; background is Mist palette.
- **Pass Condition**: Filter blur start→end present in GSAP target for mist image selector.
- **Evidence**: GSAP target getTweensOf() dump.

### AC-10: Road/Trek Horizontal Movement
- **Type**: `rule`
- **Given**: Reduced motion OFF.
- **When**: Scrolling the trek/road section.
- **Then**: One trek photo receives xPercent horizontal movement synced to scroll scrub; ಹಾದಿ mega-word sits far-left; 3 distinct photos present in different layouts.
- **Pass Condition**: ScrollTrigger vars include scrub + xPercent on at least one trek image selector; computed text-align/left for ಹಾದಿ near 0 or negative.
- **Evidence**: ScrollTrigger scrub target object.

### AC-11: Human Moments (No Names/Tags)
- **Type**: `rule`
- **Given**: Full page.
- **When**: Searching the DOM and central data for all human/people sections.
- **Then**: (a) No `<a>` profile link; (b) no name-like tokens in `journalData` or HTML text; (c) no "tags" class or label; (d) captions use first-person plural intimate tone (single/dual poetic lines).
- **Pass Condition**: Regex `/[A-Z][a-z]+ [A-Z][a-z]+/` across content yields 0 matches outside of Editorial Labels; DOM.querySelectorAll('.profile,.tag,.name').length === 0.
- **Evidence**: grep/regex output + DOM query.

### AC-12: Environmental Palette Correctly Applied
- **Type**: `rule`
- **Given**: Desktop viewport.
- **When**: Walking all `<section>` elements from top to bottom.
- **Then**: Background colors are applied in story order covering: Warm Paper, Forest (#102A20), Mist (#DDE4DE), Earth/Stone, Water (#426F76), Charcoal (#171E1B). No section uses a color outside the enumerated 9-token palette.
- **Pass Condition**: Collect unique computed background-color of each section's wrapper; values map 1:1 onto palette list; ≥6 distinct palette tokens observed.
- **Evidence**: Section bg color walk dump (hex → palette token).

### AC-13: Texture Layer Present and Subtle
- **Type**: `rule`
- **Given**: Page fully rendered.
- **When**: Checking the fixed background overlay and photographic elements.
- **Then**: (a) Global grain/noise layer exists with opacity ≤ 0.05, `pointer-events: none`, `z-index:9999`; (b) NO heavy paper texture above 0.1 opacity.
- **Pass Condition**: opacity ≤ 0.05 on grain element via computed style.
- **Evidence**: computedStyle on grain overlay.

### AC-14: Interaction (Desktop)
- **Type**: `rule`
- **Given**: Desktop (≥1024px width). Reduced motion OFF.
- **When**: Hovering a sample of 3 random photos.
- **Then**: Image scales between 1.0→1.035 with ease > 500ms; no giant custom cursor; at least 3 photos show tiny editorial indicator (frame number or label) on hover (opacity or transform reveal).
- **Pass Condition**: In DevTools: hover pseudo triggers `transform: scale(1.03)` on `img` with `transition-duration ≥ 600ms`; indicator opacity changes on ≥ 3 photos.
- **Evidence**: :hover transition + computed scale.

### AC-15: Lenis + ScrollTrigger Active
- **Type**: `rule`
- **Given**: Page fully loaded. Reduced motion OFF.
- **When**: Executing console checks.
- **Then**: `window.Lenis` defined and `gsap.plugins.ScrollTrigger` active; Lenis instance smoothWheel true; ScrollTrigger.refresh() fired after fonts ready.
- **Pass Condition**: Console boolean checks: `!!window.Lenis === true`, `!!ScrollTrigger.getAll().length > 0`.
- **Evidence**: Console output.

### AC-16: Ending Section
- **Type**: `rule`
- **Given**: Scrolled to final section.
- **When**: Checking DOM.
- **Then**: (a) Final large photo; (b) darkening overlay toward Charcoal; (c) text `ಇನ್ನೂ ಕೆಲವು ದಾರಿಗಳು ಕರೆಯುತ್ತಿವೆ…` present; (d) `ಅಲೆಮಾರಿ ಪುಟಗಳು` signature; (e) small `THE JOURNEY CONTINUES.` micro-line; (f) no `<footer>` element, no `<nav>`, no social `<a>`, no form, no newsletter CTA.
- **Pass Condition**: (a)-(e) found; (f) confirmed via `document.querySelector('footer, .social, form, nav') === null`.
- **Evidence**: DOM query + screenshot.

### AC-17: Responsive (Mobile Rhythm)
- **Type**: `rule`
- **Given**: Viewport 375×667 (iPhone-like).
- **When**: Full scroll pass.
- **Then**: (a) Base Kannada caption text ≥ 13px; (b) no horizontal scrollbar (`document.body.scrollWidth <= 375`); (c) layouts do NOT collapse into identical card heights — verify 3 adjacent photo containers have different aspect-ratios; (d) mega-word typography scales proportionally (clamp); (e) overlaps reduced to readable range.
- **Pass Condition**: All 5 tests pass.
- **Evidence**: body.scrollWidth check, caption font-size check, 3 aspect-ratio values.

### AC-18: Performance & Lazy Loading
- **Type**: `rule`
- **Given**: DOM loaded.
- **When**: Inspecting all `<img>` attributes and animation properties.
- **Then**: Every non-hero `<img>` has `loading="lazy"` and `decoding="async"`; hero image `loading="eager"`; all image animations use only `transform` and/or `filter` (no top/left/width/margin animation); no `setInterval` outside GSAP ticker; `prefers-reduced-motion` query path present in JS.
- **Pass Condition**: Attribute audit + animation type audit.
- **Evidence**: Attribute audit table.

### AC-19: Central Data Configuration
- **Type**: `rule`
- **Given**: The script.js file.
- **When**: Inspecting the top of [script.js](file:///c:/Users/hegde/Desktop/New%20folder/script.js).
- **Then**: A single `journalData` object exists at top-level and contains `photos{key:{src,alt}}`, `captions{section:text|{line1,line2}}`, `megawords{section:kannada_text}`, `fieldnotes{section:label}`. Inject helpers (`injectImages()`, `injectCaptions()`, `injectMegawords()`, `injectFieldnotes()`) read from that object only.
- **Pass Condition**: No caption or photo URL hardcoded inside `<section>` HTML (except empty data-attr hooks); string search of index.html for any actual Kannada caption returns 0 matches (captions injected); all 4 helpers exist.
- **Evidence**: grep of index.html for caption strings vs data hooks.

### AC-20: Semantic HTML + Alt Text + Reduced Motion
- **Type**: `rule`
- **Given**: Full page.
- **When**: Accessibility audit.
- **Then**: (a) `<main>` wraps all content; (b) `<section>` used per narrative segment; (c) every `<img>` has non-empty `alt`; (d) decorative SVGs have `aria-hidden="true"`; (e) CSS `@media (prefers-reduced-motion: reduce)` disables animations; JS branch does same.
- **Pass Condition**: All (a)-(e) true.
- **Evidence**: DOM audit + media query.

### AC-21: No V1 Visual Resemblance
- **Type**: `rubric`
- **Dimension**: Visual originality vs the current v1 page that was created immediately before this redesign.
- **Scale**: 1-5
- **Anchors**: 1 = indistinguishable from v1 (same grid, same frames, same reveal); 3 = some sections differ, but 2+ v1 layouts recognizable (e.g. editorial split repeats); 5 = zero visual carryover — hero asymmetric instead of centered, typography personalities distinct, broken-grid instead of grids, mega-words instead of headings, overlaps and fragments instead of symmetric photos, section colors differ, micro-details and field-note counters entirely new.
- **Pass Threshold**: >= 4
- **Evidence**: Side-by-side comparison screenshots (v1 vs redesign) + checklist of changed devices.

### AC-22: Editorial Personality & Surprise
- **Type**: `rubric`
- **Dimension**: "ಈ ತರದ travel page ನಾನು ನೋಡಿಲ್ಲ" — does the page feel like a private experimental digital art / photography book (intersection: luxury editorial + art mag + cinema + field journal), or like a known template?
- **Scale**: 1-5
- **Anchors**: 1 = template feel (predictable sections); 3 = premium editorial but familiar grid/cards; 5 = unpredictable, surprise next composition, distinct typography, memory fragments read as discovered not displayed, mega-words create identity, quiet pauses create cinematic rhythm.
- **Pass Threshold**: >= 4
- **Evidence**: Walkthrough commentary + 3-judge heuristic: (a) next section surprise on first scroll, (b) Kannada text identity vs English-only travel pages, (c) treatment variety across 10 photo treatments.

### AC-23: Mobile Personality Preservation
- **Type**: `rubric`
- **Dimension**: Does ≤ 560px mobile still feel like the same art-directed experimental journal (not just stacked generic cards)?
- **Scale**: 1-5
- **Anchors**: 1 = generic vertical identical image cards; 3 = hierarchy preserved but overlaps/mega-words collapsed and lost; 5 = mega-words still scale asymmetrically, some overlap and float preserved but re-styled for readability, caption scale still editorial, aspect-ratios vary across adjacent photos.
- **Pass Threshold**: >= 4
- **Evidence**: 375×667 full scroll screenshots + aspect-ratio variance check.

### AC-24: Animation Restraint & Rhythm
- **Type**: `rubric`
- **Dimension**: Purposefulness of animation — is there clear contrast between moving and still? Does scrolling feel responsive rather than a forced animation reel?
- **Scale**: 1-5
- **Anchors**: 1 = everything animates; 3 = mix but too much; 5 = strong still/moving contrast (≥2 silent sections), only meaningful moves (enter reveals + parallax + purposeful cinematic device), scroll always responsive, no perceptible lag.
- **Pass Threshold**: >= 4
- **Evidence**: Silent/animated section count tally; ScrollTrigger scrub count ≤ ~15; Lenis responsiveness.
