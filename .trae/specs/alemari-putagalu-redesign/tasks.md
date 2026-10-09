# ಅಲೆಮಾರಿ ಪುಟಗಳು — Implementation Plan (Digital Field Journal Redesign)

## Task 1: Typography System + Google Fonts + Palette Tokens in CSS
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Rewrite [style.css](file:///c:/Users/hegde/Desktop/New%20folder/style.css) top section from scratch.
  - Define 5 typography classes with distinct Google Fonts:
    - T01 `.title-main` → Main Title display serif Kannada (Noto Serif Kannada 700 + Cormorant Garamond italic accent with high contrast, letter-spacing -0.02).
    - T02 `.title-section` → Section Titles (distinct different Kannada Noto Sans Kannada 500 + serif fallback; larger for mega-word mode `.title-section--mega` with `clamp(64px,14vw,200px)` and alignment modifiers `--left/--center/--crop/--vertical`).
    - T03 `.caption-poetic` → Poetic Captions (Noto Serif Kannada 300 italic/light + line-height 1.8).
    - T04 `.label-editorial` → Editorial Labels English (Space Grotesk or Inter Condensed uppercase, tracking 0.32em).
    - T05 `.micro-note` → Micro Notes English (JetBrains Mono / Space Mono tiny 10-11px, tracking 0.05em).
  - Update `<link>` to load the new font families in [index.html](file:///c:/Users/hegde/Desktop/New%20folder/index.html).
  - Define 9-token CSS palette vars exactly from spec: `--warm-paper:#F4F0E6; --forest:#102A20; --deep-green:#1D4231; --moss:#627553; --mist:#DDE4DE; --stone:#C7BBA5; --earth:#75563F; --water:#426F76; --charcoal:#171E1B`.
  - Add `.grain` texture layer `< 0.05 opacity`; filmic-vignette mixin `.vignette`.
- **Acceptance Criteria Addressed**: AC-2, AC-12, AC-13
- **Test Requirements**:
  - `rule` TR-1.1: Computed font-family differs for sample elements of each of `.title-main`, `.title-section`, `.caption-poetic`, `.label-editorial`, `.micro-note`; Evidence: DevTools getComputedStyle font-family output (5 distinct values).
  - `rule` TR-1.2: All 9 palette tokens defined as CSS custom properties; Evidence: grep `--forest` etc in CSS.
  - `rule` TR-1.3: Global grain layer opacity ≤ 0.05 via computed style; Evidence: computedStyle.
  - `rubric` TR-1.4: Typography coherence; scale 1-5; anchors: 1 = fonts clash, 3 = readable but not distinctive, 5 = 5 personalities clearly distinct yet visually harmonious; threshold >= 4; evidence: 1440×900 hero screenshot.
- **Notes**: Must NOT re-use old T classes.

## Task 2: Rewrite index.html with 9+ new sections using asymmetric grid + mega-words + data hooks
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - Completely replace `<main id="journal">` in [index.html](file:///c:/Users/hegde/Desktop/New%20folder/index.html) with the following narrative sections (NO section from v1 re-used verbatim):
    1. **Asymmetric Hero Field-Note** — `.s-hero-fieldnote` — oversized bleeding photo; offset 2-line title-main `ಅಲೆಮಾರಿ` + `ಪುಟಗಳು`; `FIELD NOTES / 001` micro-note on left with vertical-rule SVG; `SCROLL TO WANDER` hint on right; safe negative-space overlap only; `data-photo="hero"`, `data-megaword="hero"`.
    2. **Memory Fragment Discovery** — `.s-memory-01` (bg warm-paper) — staggered: 25% small photo `data-photo="m1_small"` + `FIELD NOTE / 002` micro-note → T03 poetic caption → 70% large photo `data-photo="m1_large"` → small follow-up photo later.
    3. **Deep Forest — ಕಾಡು (mega-word)** — `.s-forest-kadu` (bg `--forest:#102A20`) — large partially-cropped forest image; organic SVG lines; mega-word T02 `ಕಾಡು` right-cropped (writing overflow parent width 130%, clip on right); micro-note `FIELD NOTE / 04`; T03 caption.
    4. **Mist — ಮಂಜು (mega-word)** — `.s-mist-manju` (bg `--mist`) — blur→sharp mist photo; mega-word ಮಂಜು elegant beside photo; small field label; T03 caption.
    5. **Road/Trek — ಹಾದಿ (mega-word)** — `.s-trek-haadi` (bg warm-paper/earth) — far-left mega-word ಹಾದಿ; 3 photos (trail, road, human); one photo gets horizontal movement class `.photo-drift-x`; micro-note counters.
    6. **Memory Fragment 02** — `.s-memory-02` — small photo + field note + intimate T03 human caption + 25% floater.
    7. **Waterfall — ನೀರು (mega-word)** — `.s-water-neeru` (bg `--water`) — giant waterfall photo slow reveal; water-light SVG wash; vertical mega-word ನೀರು (writing-mode: vertical-rl); T03 caption.
    8. **Quiet — ಮೌನ (mega-word)** — `.s-silent-mauna` (bg warm paper/stone) — centered empty space + mega-word ಮೌನ; one 1:1 framed photo; T03 small caption only.
    9. **Fullscreen Penultimate Photo** — `.s-penultimate` edge-to-edge.
    10. **Emotional Ending** — `.s-final` (bg `--charcoal`) — final photo darkened; T01 `ಇನ್ನೂ ಕೆಲವು ದಾರಿಗಳು ಕರೆಯುತ್ತಿವೆ…`; T01 signature `ಅಲೆಮಾರಿ ಪುಟಗಳು`; small `THE JOURNEY CONTINUES.`; no footer/nav/a tags.
  - Every image uses ONLY `data-photo="KEY"` attribute; empty src in HTML file (no hardcoded Unsplash URLs). Captions also empty placeholder injected by JS. Mega-words via `data-megaword="KEY"`. Field-notes via `data-fieldnote="KEY"`.
  - Add micro-detail utility classes scattered: thin vertical rule `.vrule`, tiny dot `.dot`, thin border `.hairline-border`, small arrow deco.
- **Acceptance Criteria Addressed**: AC-1, AC-3, AC-4, AC-5, AC-7, AC-8, AC-9, AC-10, AC-11, AC-14 (part), AC-16, AC-20 (semantic structure)
- **Test Requirements**:
  - `rule` TR-2.1: 10 unique `<section>` classes exist; none match v1 section class names (hero/intro/fullscreen/editorial/forest/trek/waterfall/collage/mountain/quiet/penultimate/final forbidden exact names in new code); Evidence: `document.querySelectorAll('section').length >= 10` + names diff.
  - `rule` TR-2.2: Mega-word nodes `[data-megaword]` = 5+ unique (ಕಾಡು, ಮಂಜು, ಹಾದಿ, ನೀರು, ಮೌನ); each layout distinct; Evidence: DOM list + writing-mode/align values.
  - `rule` TR-2.3: No photo src in HTML (all empty; injected); Evidence: `grep -c 'src="http' index.html === 0` or all start blank.
  - `rule` TR-2.4: No caption hardcoded in HTML (all injected); Evidence: grep for known Kannada captions returns 0 in HTML.
  - `rubric` TR-2.5: Broken-grid + asymmetry; scale 1-5; anchors: 1 = standard grid everywhere, 3 = some asymmetry but most 12-col, 5 = unexpected margins, overlapping elements, bleed images, 25% floaters, vertical text, controlled chaos while balanced; threshold >= 4; evidence: 3 full-page screenshots at different scroll positions.

## Task 3: Rewrite style.css — section-specific layouts + reveals + responsive breakpoints
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2 (needs new HTML structure)
- **Description**:
  - Delete old v1 section classes. Add all new section-specific layout CSS for `.s-hero-fieldnote`, `.s-memory-01`, `.s-forest-kadu`, `.s-mist-manju`, `.s-trek-haadi`, `.s-memory-02`, `.s-water-neeru`, `.s-silent-mauna`, `.s-penultimate`, `.s-final`.
  - Add photo-treatment utility classes (≥10 distinct total): `.photo-fullbleed`, `.photo-70vp`, `.photo-float-25`, `.photo-strip-vert`, `.photo-pan`, `.photo-overlap`, `.photo-bleed-out`, `.photo-reveal-clip`, `.photo-reveal-blur`, `.photo-reveal-darken`, `.photo-static` (silent).
  - Add reveal mixins (NOT pre-applied; reveal classes distinct from static): `.reveal-clip-tb`, `.reveal-clip-lr`, `.reveal-scale`, `.reveal-up`, `.reveal-fade-only` (for reduced-motion still sections), `.reveal-blur-sharp`, `.reveal-dark-light`.
  - Add mega-word modifiers: `.title-section--mega`, `.title-section--crop-right`, `.title-section--vertical`, `.title-section--left`, `.title-section--center`.
  - Add micro details: `.vrule` (1px `#627553` width 20–120px), `.dot`, `.hairline-border`, `.field-corner`.
  - Responsive breakpoints: 1440+ (max desktop canvas), 900–1440 (normal desktop), 560–900 (tablet: preserve asymmetry, reduce overlap %), 0–560 (mobile vertical photo journal: collapse overlap but keep different aspect ratios, keep mega-word clamp size distinct, keep different image scales, caption base ≥ 13px at 320px).
  - Reduced motion CSS `@media (prefers-reduced-motion: reduce)`: disable grain animation; disable transitions on hover; disable reveal animation classes to just opacity 1 immediately.
- **Acceptance Criteria Addressed**: AC-5, AC-11, AC-12, AC-13, AC-14 (hover CSS), AC-17 (mobile), AC-20 (reduced motion CSS), AC-21, AC-22, AC-23
- **Test Requirements**:
  - `rule` TR-3.1: ≥10 distinct photo-treatment utility classes defined + actually used on DOM; Evidence: class list grep + used count.
  - `rule` TR-3.2: ≥2 `.photo-static` containers exist with NO reveal class; Evidence: DOM selector match.
  - `rule` TR-3.3: Reduced-motion `@media` block exists with 5+ overrides; Evidence: CSS rule count inside media block.
  - `rule` TR-3.4: Mobile 320px viewport caption base ≥ 13px; Evidence: `window.getComputedStyle(document.querySelector('.caption-poetic')).fontSize >= 13` via emulation.
  - `rule` TR-3.5: Mobile body.scrollWidth never exceeds viewport width; Evidence: manual check 360/375/420.
  - `rubric` TR-3.6: Editorial-art-direction originality; scale 1-5; threshold >= 4.

## Task 4: Rewrite script.js — new journalData structure + injectors + GSAP animations
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2 & Task 3
- **Description**:
  - Top `journalData` rewrite with 4 sub-stores:
    ```
    journalData = {
      photos: {hero, m1_small, m1_large, forest, mist, trek_trail, trek_road, trek_human, m2_human, m2_floater, waterfall, silent, penultimate, final_photo} → each {src, alt}
      captions: {memory1, forest, mist, trek, memory2, waterfall, silent, final} → each string or {line1, line2}
      megawords: {hero_1, hero_2, kadu, manju, haadi, neeru, mauna, final_line, final_signature} → Kannada strings
      fieldnotes: {hero:'FIELD NOTES / 001', memory1:'FIELD NOTE / 002', ..., ending:...} → EN labels, frame counters etc.
    }
    ```
  - Add idempotent injectors: `injectImages()`, `injectCaptions()`, `injectMegawords()`, `injectFieldnotes()`.
  - Initialize Lenis + GSAP ScrollTrigger (robust fallback for SplitText — never required; manually implement line/word reveal using simple wrap or opacity stagger).
  - Wire reveals per class: `.reveal-clip-tb` → clip-path inset; `.reveal-blur-sharp` → filter blur 10→0; `.reveal-dark-light` → brightness 0.4→1; `.reveal-scale`; `.reveal-up`; `.reveal-fade-only`. Stagger durations vary.
  - Section-specific cinematic animations:
    - Hero: image slow scale 1.04→1.10 scrub yPercent -6; title-main fade during first scroll; hint float keyframe.
    - Memory Fragment 01: ScrollTrigger stagger — small photo @ 10% → fieldnote 0.2s later → caption 0.2s later → large photo 0.4s later → follow-up 0.3s later.
    - Forest: SVG lines draw stroke-dashoffset; kadu crop slide-in; dark entrance saturation shift.
    - Mist: blur→sharp; manju fades.
    - Trek haadi: `.photo-drift-x` horizontal xPercent -4 → +4 scrub; far-left haadi slide-in.
    - Memory 02: variant stagger (different timing from Memory 01, no uniform 1.0s).
    - Waterfall: slow reveal; water-light SVG opacity wash; vertical neeru writing slide-in.
    - Silent mauna: no animation (static section) — mauna word fade only; photo fully static.
    - Penultimate: slow yPercent -5, scale 1.02→1.09 scrub.
    - Final ending: fade signature + rule.
  - Desktop-only mouse-move on photo frames: translate ±8px (NOT ±10 from v1; differ). Hover scale: 1→1.025 (NOT 1.035). Mobile removed.
  - Setup scroll progress indicator differently: thin 1px top horizontal bar instead of v1's right vertical (to differ from v1 design). Label optional.
  - Wire `prefers-reduced-motion`: disable Lenis, disable scrub animations, disable hover mousemove, keep only `reveal-fade-only`.
- **Acceptance Criteria Addressed**: AC-4, AC-6, AC-7, AC-8, AC-9, AC-10, AC-15, AC-18, AC-19, AC-20 (JS reduced motion), AC-24
- **Test Requirements**:
  - `rule` TR-4.1: `journalData` top-level has exactly 4 stores: `photos`, `captions`, `megawords`, `fieldnotes`; all injectors run cleanly without errors; Evidence: console no errors + dump object keys.
  - `rule` TR-4.2: 7 strategies present in GSAP targets: clip, scale, yPercent parallax, xPercent drift, opacity crossfade, blur→sharp, brightness/filter dark→light; Evidence: ScrollTrigger.getAll + GSAP tweens audit.
  - `rule` TR-4.3: SplitText NOT referenced in a required code path; graceful fallback if undefined; Evidence: `typeof SplitText` conditional in code.
  - `rule` TR-4.4: Prefers-reduced-motion JS branch disables Lenis and disables scrub/parallax animations; Evidence: code inspection + runtime toggle.
  - `rule` TR-4.5: Scroll progress top-bar 1px wide; differs from v1 (right vertical); Evidence: CSS + JS scroll progress.
  - `rubric` TR-4.6: Animation purpose & contrast; scale 1-5; anchors: 1 = all things animate, 3 = okay, 5 = strong still/moving contrast, responsive always, no jank; threshold >= 4; evidence: ScrollTrigger count + timing profile.

## Task 5: Wire CDN correctly, performance + accessibility verification, end-to-end local run
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Tasks 1–4
- **Description**:
  - Update `index.html` `<script>` CDN to use safe endpoints (avoid github/jsdelivr raw blocked by ORB): GSAP cdnjs for gsap + ScrollTrigger (standard); Lenis via `unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js`. Ensure `defer` attribute.
  - Ensure fonts preconnect with `<link rel="preconnect" crossorigin>`.
  - Verify every `<img>`: non-hero has `loading="lazy" decoding="async"`; hero `loading="eager"`.
  - Verify alt text injected from `journalData.photos.*.alt`.
  - Verify decorative SVGs have `aria-hidden="true"`; semantic `<main><section>`; `<blockquote>` for poetic captions.
  - Stop any existing v1 Python server; restart in same directory.
  - Load in browser, confirm no console errors, confirm Lenis + ScrollTrigger active, confirm all sections render, confirm responsive modes 1440 / 768 / 375 all function without horizontal scroll.
  - Confirm ending has NO footer/nav/social/form.
- **Acceptance Criteria Addressed**: AC-1 (hero), AC-15 (Lenis/ScrollTrigger), AC-16 (ending), AC-17 (mobile), AC-18 (lazy loading), AC-20 (semantic), AC-23
- **Test Requirements**:
  - `rule` TR-5.1: 0 console errors on load at http://localhost:8080/; Evidence: console clean screenshot.
  - `rule` TR-5.2: `document.body.scrollWidth <= viewport.innerWidth` at 375px; Evidence: console check.
  - `rule` TR-5.3: No `<footer>`/`<nav>`/form/social `<a>` in final section bottom 10%; Evidence: `document.querySelector('footer, nav, form, [class*="social"]') === null`.
  - `rule` TR-5.4: Lenis + ScrollTrigger active (non-reduced-motion); Evidence: window.Lenis !== undefined && ScrollTrigger.getAll().length > 0.

## Task 6: Self-verify every rule AC + rubrics, populate completion evidence, then delegate Independent Review
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Tasks 1–5 all `completed`
- **Description**: Implementer self-verifies against every `rule` AC and every `rubric` AC in [spec.md](file:///c:/Users/hegde/Desktop/New%20folder/.trae/specs/alemari-putagalu-redesign/spec.md). Records pass/fail, rubric scores, rationale, evidence. Then transitions to Review Phase (creates review.md checkpoints, delegates independent reviewer fresh context, collects result, if `fail` creates pending remediation Issue items before re-entering Implement).
- **Acceptance Criteria Addressed**: All AC-1..AC-24 via Review gate checkpoints.
- **Test Requirements**:
  - `rule` TR-6.1: Every AC has a completed self-verification in task completion evidence; Evidence: review.md checkpoints present + all 5 phases tracked in spec workflow.
  - `rubric` TR-6.2: Workflow fidelity; scale 0-2 (per skill rules); threshold >= 2; evidence: file creation order spec.md → tasks.md → user approved → implement → review.md.
