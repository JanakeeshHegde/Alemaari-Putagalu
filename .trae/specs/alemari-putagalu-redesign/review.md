# ಅಲೆಮಾರಿ ಪುಟಗಳು — Digital Field Journal Redesign (Independent Review)

- **Artifact status**: Created 2026-10-02. Evidence fields blank until a reviewer runs each checkpoint.
- **Review environment**: `http://localhost:8080/` (Python HTTP server running from `c:\Users\hegde\Desktop\New folder\`). Browser DevTools available for DOM / computed-style / console checks.
- **Source files to inspect**:
  - [index.html](file:///c:/Users/hegde/Desktop/New%20folder/index.html)
  - [style.css](file:///c:/Users/hegde/Desktop/New%20folder/style.css)
  - [script.js](file:///c:/Users/hegde/Desktop/New%20folder/script.js)
  - [spec.md](file:///c:/Users/hegde/Desktop/New%20folder/.trae/specs/alemari-putagalu-redesign/spec.md) (authoritative AC definitions)
  - [tasks.md](file:///c:/Users/hegde/Desktop/New%20folder/.trae/specs/alemari-putagalu-redesign/tasks.md) (implementation plan + TR tests)

---

## Rule Checkpoints (binary pass / fail)

- [ ] **CP-01 (rule · AC-1)**: Asymmetric Field-Note hero contains (a) oversized bleeding photo, (b) offset two-line `ಅಲೆಮಾರಿ` → `ಪುಟಗಳು` T01 title (NOT centered), (c) visible T05 Micro Note `FIELD NOTES / 001` with monospace family, (d) a thin vertical rule element, (e) `SCROLL TO WANDER` hint without `<button>` semantics, (f) title sits only in photo negative-space (sky / highlight areas).
  - **Covers**: AC-1
  - **Evidence**: Pending

- [ ] **CP-02 (rule · AC-2)**: T01…T05 personalities have 5 distinct primary `font-family` computed values AND different size / letter-spacing / weight regimes.
  - **Covers**: AC-2, FR-2
  - **Evidence**: Pending

- [ ] **CP-03 (rule · AC-3)**: 5 mega-word sections present with unique strategies (ಕಾಡು crop-right parent overflow; ಮಂಜು elegant beside; ನೀರು vertical-rl or vertical stack; ಹಾದಿ far-left near 0 or negative; ಮೌನ centered empty); all T02 family; count ≥ 5.
  - **Covers**: AC-3, FR-3
  - **Evidence**: Pending

- [ ] **CP-04 (rule · AC-4)**: Memory Fragment 01 and 02 each have ≥ 3 distinct staggered start positions with ≥ 0.15 s relative gap between element classes; timing differs between M01 and M02 (not both the same uniform 1.0 s linear).
  - **Covers**: AC-4, FR-4
  - **Evidence**: Pending

- [ ] **CP-05 (rule · AC-5)**: ≥ 10 photo-treatment CSS signatures across figures; ≥ 2 photo containers are completely static (`.photo-static`, no reveal class, no scrub/timeline target). Treatments to verify exist: fullbleed · 70vp · float25 · strip-vert · pan · overlap · bleed-out · clip-reveal · blur→sharp · dark→light · static.
  - **Covers**: AC-5, FR-5
  - **Evidence**: Pending

- [ ] **CP-06 (rule · AC-6)**: 7 cinematic strategies ALL used at least once — (a) clip-path reveal variants, (b) slow scale 1.1→1.0, (c) yPercent parallax, (d) xPercent drift (trek), (e) opacity crossfade, (f) blur→sharp filter, (g) dark→light brightness. ≥ 2 photo sections have NO animation selector.
  - **Covers**: AC-6, FR-6
  - **Evidence**: Pending

- [ ] **CP-07 (rule · AC-7)**: Waterfall bg Water `#426F76` or dark-water intermediate; giant image slow reveal; low-opacity SVG gradient wash (no particles); ನೀರು vertical writing mode on desktop ≥ 1100 px; 2-line caption emerges.
  - **Covers**: AC-7, FR-7
  - **Evidence**: Pending

- [ ] **CP-08 (rule · AC-8)**: Forest bg rgb(16,42,32) ≡ #102A20; large photo; ≥ 2 SVG `.forest-line-*` paths animate stroke-dashoffset; ಕಾಡು parent `.forest__megaword-wrap` has overflow:hidden (crop-right); T05 `FIELD NOTE / 04` visible.
  - **Covers**: AC-8, FR-8
  - **Evidence**: Pending

- [ ] **CP-09 (rule · AC-9)**: Mist section contains filter blur start→end on `.mist__photo` target (blur ≥ 8 px → 0); ಮಂಜು present; mist palette bg.
  - **Covers**: AC-9, FR-9
  - **Evidence**: Pending

- [ ] **CP-10 (rule · AC-10)**: Trek ≥ 1 photo gets xPercent scrub on scroll; ಹಾದಿ text-align near 0 or negative left; 3 distinct trek photos (trail / road / human).
  - **Covers**: AC-10, FR-10
  - **Evidence**: Pending

- [ ] **CP-11 (rule · AC-11)**: Zero matches of regex `/[A-Z][a-z]+ [A-Z][a-z]+/` outside T04/T05 classes; no element matching `.profile,.tag,.name,a[href*="@"],a[href*="instagram"]`; no `<a>` pointing to personal pages.
  - **Covers**: AC-11, FR-11
  - **Evidence**: Pending

- [ ] **CP-12 (rule · AC-12)**: ≥ 6 distinct palette hex tokens across sections' inline style/`--bg`/`background-color` (Warm Paper · Forest · Stone · Mist · Water · Charcoal · DeepGreen · Moss). No hex outside the 9-token set used in any section bg/fg.
  - **Covers**: AC-12, FR-12
  - **Evidence**: Pending

- [ ] **CP-13 (rule · AC-13)**: `.grain-layer` computed `opacity` ≤ 0.05, `pointer-events:none`, `position:fixed inset:0`. No heavy paper texture > 0.1.
  - **Covers**: AC-13, FR-13
  - **Evidence**: Pending

- [ ] **CP-14 (rule · AC-14)**: Desktop (≥ 1024 px). Hover on any `figure img` triggers `transform: scale(≥1.02)` with `transition-duration ≥ 600 ms`. At least 3 distinct figures show visible indicator reveal on hover (opacity / transform) — e.g. caption, label, frame-counter.
  - **Covers**: AC-14, FR-14
  - **Evidence**: Pending

- [ ] **CP-15 (rule · AC-15)**: `!!window.Lenis === true`; `ScrollTrigger.getAll().length > 0`; `gsap.plugins.ScrollTrigger` active.
  - **Covers**: AC-15, FR-15
  - **Evidence**: Pending

- [ ] **CP-16 (rule · AC-16)**: Ending — (a) large final photo bg, (b) darken overlay toward charcoal, (c) `ಇನ್ನೂ ಕೆಲವು ದಾರಿಗಳು ಕರೆಯುತ್ತಿವೆ…`, (d) `ಅಲೆಮಾರಿ ಪುಟಗಳು` signature, (e) `THE JOURNEY CONTINUES.`; AND (f) `document.querySelector('footer, nav, form, [class*="social"], a[href*="mailto"], a[href*="instagram"], a[href*="@"]') === null`.
  - **Covers**: AC-16, FR-19
  - **Evidence**: Pending

- [ ] **CP-17 (rule · AC-17)**: 375×667 viewport. (a) caption ≥ 13 px; (b) body.scrollWidth ≤ vpW; (c) 3 adjacent photo containers with different aspect-ratios; (d) mega-word clamp() scaling; (e) overlaps readable no clipping of caption text.
  - **Covers**: AC-17, FR-20
  - **Evidence**: Pending

- [ ] **CP-18 (rule · AC-18)**: Non-hero `<img>` all have `loading=lazy` + `decoding=async`; hero image has `loading=eager`; GSAP tweens only animate `transform`/`filter`/`opacity`/`clipPath` (no top/left/width/margin in tween vars); `setInterval` 0 calls in first 2 s (no rAF outside GSAP); JS prefers-reduced-motion branch present AND CSS `@media (prefers-reduced-motion: reduce)` block present.
  - **Covers**: AC-18, FR-21, NFR-4
  - **Evidence**: Pending

- [ ] **CP-19 (rule · AC-19)**: Top-of-script.js `journalData` has exact 4 sub-store keys `{photos, captions, megawords, fieldnotes}`; 4 `inject*()` helpers exist (`injectImages/injectCaptions/injectMegawords/injectFieldnotes`); grep of index.html for actual Kannada CAPTION SENTENCES (e.g. ಮಂಜಿನೊಳಗೆ ದಾರಿ ಕಾಣಲಿಲ್ಲ, ಮರಗಳ ನಡುವೆ, ದಾರಿ ಎಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ, ಬೀಳುವ ನೀರಿನ ಸದ್ದಿನಲ್ಲಿ etc.) === 0 matches.
  - **Covers**: AC-19, FR-22, NFR-5
  - **Evidence**: Pending

- [ ] **CP-20 (rule · AC-20)**: Semantic — `<main>` wraps narrative; `<section>` per narrative; every `<img>` has non-empty alt after inject; decorative SVGs have `aria-hidden="true"`; CSS `@media (prefers-reduced-motion: reduce)` block disables costlies; JS `matchMedia('(prefers-reduced-motion: reduce)')` branch disables Lenis/scrubs/parallax/hovers.
  - **Covers**: AC-20, NFR-7, NFR-4
  - **Evidence**: Pending

---

## Rubric Checkpoints (numeric 1-5; pass ≥ 4)

- [ ] **CP-21 (rubric · AC-21)**: No v1 resemblance. Scale 1-5. Anchors: 1=indistinguishable; 3=some changes but 2+ v1 layouts remain; 5=zero carryover (asymmetric hero, broken-grid, mega-words, fragment staggers, section colors, micro-details, field-note counters all new; no v1 section class prefixes remain). ≥ 4.
  - **Covers**: AC-21, NFR-1
  - **Scale**: 1-5 · **Pass Threshold**: ≥ 4
  - **Score**: Pending · **Rationale**: Pending
  - **Evidence**: Pending

- [ ] **CP-22 (rubric · AC-22)**: Experimental editorial personality. "ಈ ತರದ travel page ನಾನು ನೋಡಿಲ್ಲ". Scale 1-5. Anchors: 1=template; 3=premium but familiar; 5=unpredictable compositions, Kannada identity creates uniqueness, fragment/mega-word rhythm surprises. ≥ 4.
  - **Covers**: AC-22, Purpose statement
  - **Scale**: 1-5 · **Pass Threshold**: ≥ 4
  - **Score**: Pending · **Rationale**: Pending
  - **Evidence**: Pending

- [ ] **CP-23 (rubric · AC-23)**: Mobile (≤560px) still experimental — mega-words scaled, overlap/floater variants, aspect-ratios vary, NOT stacked identical image cards. Scale 1-5. Anchors: 1=cards; 3=hierarchy but personality collapsed; 5=mega-word asymmetry preserved, overlap retained but readable, adjacent aspect ratios vary meaningfully. ≥ 4.
  - **Covers**: AC-23, FR-20
  - **Scale**: 1-5 · **Pass Threshold**: ≥ 4
  - **Score**: Pending · **Rationale**: Pending
  - **Evidence**: Pending

- [ ] **CP-24 (rubric · AC-24)**: Animation still/moving contrast. ≥ 2 silent sections; scrub count ≤ ~15; no perceived scroll lag; still sections genuinely still; only meaningful cinematic moves. Scale 1-5. Anchors: 1=everything animates; 3=mix but excessive; 5=strong still/moving contrast, scroll responsive. ≥ 4.
  - **Covers**: AC-24, NFR-8
  - **Scale**: 1-5 · **Pass Threshold**: ≥ 4
  - **Score**: Pending · **Rationale**: Pending
  - **Evidence**: Pending

---

## Review History

### Review R1 (pending — waiting for reviewer agent)
- **Result**: `pass | fail | blocked`
- **Performed By**: Independent Review subagent (read-only contract: inspect files, run DOM checks via browser evaluate, populate Evidence, assign pass/fail + rubric scores; do NOT modify any file)
- **Checks Performed**: Pending
- **Overall Evidence Summary**: Pending
- **Per-Checkpoint Results**: Pending
- **Findings**:
  - (findings: `actionable` | `advisory`, severity, reproduction)
- **Recommended Review Issues** (only if result=fail):
  - I-1 title, priority, links to failed CP/AC

### Review Rules (enforced for reviewer)
1. **Pass** requires every rule checkpoint to PASS and every rubric checkpoint to SCORE ≥ 4. Any actionable finding → fail.
2. **Fail** requires at least one actionable finding linked to a specific failed CP/AC + a recommended Issue in tasks.md.
3. **Blocked** records unavailable environment / permission / CDN dependency — not an implementation defect.
4. Reviewer MUST:
   - read `spec.md` first (AC definitions authoritative)
   - inspect all 3 source files (`index.html`, `style.css`, `script.js`) directly from disk
   - navigate browser to `http://localhost:8080/` and use DOM / console / computed-style checks via evaluate tools
   - populate EVERY Evidence field with an observable fact (not subjective opinion): e.g. "Counted `.photo-*` classes in DOM = 9 distinct + reveal classes 3 → total 12 ≥ 10 ✓" or "rubric CP-21 score=4, rationale=hero asymmetric no v1 carryover; sections 1-10 names differ; vertical-progress different placement; memory staggers new; only editorial label font Inter reused, others are new; -1 because color palette has overlap in warm paper (v1 had paper too)".
5. Reviewer MUST NOT modify any file. Read-only contract.
6. After completing checks, write a section `### Review R1` above with completed fields + pass/fail/blocked verdict + findings.
