/* ==========================================================================
   ಅಲೆಮಾರಿ ಪುಟಗಳು · DIGITAL TRAVEL VISUAL JOURNAL
   Cinematic Photography Book Cover + Natural Continuous Editorial Flow
   ========================================================================== */

/* --------------------------------------------------------------------------
   00. EDITABLE HERO IMAGE & EDITORIAL NARRATIVE DATA
   Single centralized data object as required:
   hero image, Kannada/English caption, and description.
   -------------------------------------------------------------------------- */
const hero = {
  image: "images/cover-valley-sunrise-gaze.webp",
  caption: {
    kn: "",
    en: ""
  },
  description: {
    kn: "",
    en: ""
  }
};

/* --------------------------------------------------------------------------
   01. CENTRALIZED 27-PHOTOGRAPH JOURNAL ARCHIVE
   All 27 images are curated and managed here.
   Captions and descriptions are fully editable in both Kannada and English.
   -------------------------------------------------------------------------- */
const journal = [
  {
    "id": "frame-01",
    "image": "images/cover-valley-sunrise-gaze.webp",
    "frameNum": "01",
    "label": "FRAME 01",
    "caption": {
      "kn": "",
      "en": ""
    },
    "description": {
      "kn": "",
      "en": ""
    },
    "layout": "hero-cover",
    "theme": "deep-forest",
    "anim": "scale-slow",
    "scale": "100%",
    "atmosphere": "forest",
    "palette": [
      "#90a8a8",
      "#a8c0d8",
      "#909090"
    ],
    "haloTint": "rgba(144, 168, 168, 0.24)",
    "hasContour": true,
    "contourType": "mountain",
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "grounded-casual"
  },
  {
    "id": "frame-02",
    "image": "images/trail-roadside-wildlife.webp",
    "frameNum": "02",
    "label": "FRAME 02",
    "caption": {
      "kn": "ಹಾರನ್ ಮುಟ್ಟೋ ಧೈರ್ಯ ಯಾರಿಗೂ ಇರಲಿಲ್ಲ; ಆತ ನಮ್ಮನ್ನೇ ಅಳೆಯುತ್ತಿದ್ದ.",
      "en": "Nobody dared touch the horn; he was calmly taking our measure."
    },
    "description": {
      "kn": "ರಸ್ತೆಯ ತಿರುವಿನಲ್ಲಿ ಅನಿರೀಕ್ಷಿತ ಅತಿಥಿ. ನಾವಿಲ್ಲಿ ಕೇವಲ ಪ್ರವಾಸಿಗರು, ಈ ಕಾಡಿನ ನಿಜವಾದ ಯಜಮಾನ ಇವನೇ ಎಂಬುದು ಆ ನೋಟದಲ್ಲೇ ಸ್ಪಷ್ಟವಾಗಿತ್ತು.",
      "en": "An unexpected guest at the mountain bend. We are mere passersby here; his steady gaze made it crystal clear who truly rules this jungle."
    },
    "layout": "asymmetric-duo",
    "theme": "deep-forest",
    "anim": "fade-up",
    "duoRole": "primary",
    "scale": "76%",
    "atmosphere": "forest",
    "palette": [
      "#78776e",
      "#575f43",
      "#383c2a"
    ],
    "haloTint": "rgba(120, 119, 110, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "dappled",
    "edgeTreatment": "standard",
    "tone": "witty-curious"
  },
  {
    "id": "frame-03",
    "image": "images/trail-slender-trees-mist.webp",
    "frameNum": "03",
    "label": "FRAME 03",
    "caption": {
      "kn": "ಮಂಜಿನ ಮಾಯೆಯಲ್ಲಿ, ಕಾಣದ ಜಲಧಾರೆಯ ಅನ್ವೇಷಣೆ!",
      "en": "In the spell of the mist, pursuing the unseen cascade!"
    },
    "description": {
      "kn": "ಕಣ್ಣಿಗೆ ಮಂಜಿನ ಮುಸುಕು ಕವಿದಿದ್ದರೂ, ದೂರದಿಂದ ಕೇಳಿಸುತ್ತಿದ್ದ ನೀರಿನ ಆರ್ಭಟವೇ ನಮ್ಮನ್ನು ಮುನ್ನಡೆಸುತ್ತಿತ್ತು. ಆ ಗುಪ್ತ ಜಲಪಾತವನ್ನು ಹುಡುಕುತ್ತಾ ಕಾಡಿನ ಆಳಕ್ಕೆ ಇಳಿದ ಆ ಸಾಹಸವೇ ಈ ಪಯಣಕ್ಕೆ ನಿಜವಾದ ಗತ್ತು ತಂದಿತ್ತು.",
      "en": "Even as dense mist veiled our eyes, the distant roar of water guided our every step. Descending into the heart of the forest in search of that hidden falls brought true adventure to this journey."
    },
    "layout": "asymmetric-duo",
    "theme": "mist",
    "anim": "fade-up",
    "duoRole": "secondary",
    "scale": "58%",
    "atmosphere": "mist",
    "palette": [
      "#595a52",
      "#898c88",
      "#b0b4b2"
    ],
    "haloTint": "rgba(89, 90, 82, 0.20)",
    "hasContour": false,
    "contourType": null,
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "poetic-minimal"
  },
  {
    "id": "frame-04",
    "image": "images/landscape-open-green-plateau.webp",
    "frameNum": "04",
    "label": "FRAME 04",
    "caption": {
      "kn": "ಹಸಿರು ಸಾಮ್ರಾಜ್ಯದ ಹೆಬ್ಬಾಗಿಲಲ್ಲಿ...",
      "en": "At the gateway of the emerald empire..."
    },
    "description": {
      "kn": "ದಟ್ಟ ಕಾನನವನ್ನು ತಲುಪುವ ಮುನ್ನ ಸಿಕ್ಕ ಈ ವಿಶಾಲ ಹಸಿರು, ಪಯಣಕ್ಕೆ ಹೊಸ ಉತ್ಸಾಹ ತುಂಬಿತ್ತು. ತಂಪಾದ ವಾತಾವರಣದಲ್ಲಿ, ಪ್ರತಿಯೊಂದು ಹೆಜ್ಜೆಯೂ ಹಿತ ನೀಡುತ್ತಿತ್ತು.",
      "en": "Before reaching the dense jungle, this vast rolling green plateau breathed fresh excitement into our trek. In the crisp cool air, every single step was pure joy."
    },
    "layout": "cinematic-feature",
    "theme": "rainforest",
    "anim": "scale-slow",
    "scale": "88%",
    "atmosphere": "trail",
    "palette": [
      "#869175",
      "#575f43",
      "#a8c0d8"
    ],
    "haloTint": "rgba(134, 145, 117, 0.24)",
    "hasContour": true,
    "contourType": "mountain",
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "expansive-free"
  },
  {
    "id": "frame-05",
    "image": "images/mist-ravine-boulder-trek.webp",
    "frameNum": "05",
    "label": "FRAME 05",
    "caption": {
      "kn": "ಅಖಂಡ ಅಧಿಕಾರವಿದ್ದರೂ ಅತಿ ವಿನಯವಾಗಿ ವರ್ತಿಸುವುದು ಪ್ರಕೃತಿ ಮಾತ್ರ!",
      "en": "Holding boundless dominion, yet carrying itself with absolute humility—that is nature alone!"
    },
    "description": {
      "kn": "ಆರ್ಭಟಿಸುವ ನೀರಿನ ಹರಿವಿನ ನಡುವೆ ನಿಂತಾಗ, ಪ್ರಕೃತಿಯ ಅಪರಿಮಿತ ಶಕ್ತಿಯ ಅರಿವು ಎದೆಗಿಳಿಯಿತು.\nತನ್ನಷ್ಟಕ್ಕೆ ತಾನು ಪ್ರಶಾಂತವಾಗಿ ಕಾಣುವ ಈ ನಿಸರ್ಗ, ಕೋಪಗೊಂಡರೆ ತಡೆಯಲಾರದ ರೌದ್ರಾವತಾರ ತಾಳಬಲ್ಲದು.",
      "en": "Standing amidst the raging torrent, the sheer boundless power of nature shook our chests.\nAppearing so serene in its solitude, this wilderness unleashes an unstoppable force when stirred!"
    },
    "layout": "vertical-story",
    "theme": "mist",
    "anim": "translate-fade",
    "align": "photo-right",
    "scale": "66%",
    "atmosphere": "rock",
    "palette": [
      "#6e726a",
      "#838586",
      "#505448"
    ],
    "haloTint": "rgba(110, 114, 106, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "rugged-ascent"
  },
  {
    "id": "frame-06",
    "image": "images/forest-stream-rock-path.webp",
    "frameNum": "06",
    "label": "FRAME 06",
    "caption": {
      "kn": "ಕಾನನದ ಒಡಲಲ್ಲಿ ಒಂದು ಚಂದದ ಪಯಣ!",
      "en": "A wonderful journey into the soul of the woods!"
    },
    "description": {
      "kn": "ಹರಿಯುವ ತೊರೆ ಹಾಗೂ ದಟ್ಟ ಮರಗಳ ನಡುವಿನ ಈ ಹಾದಿ, ನಮ್ಮನ್ನು ಪ್ರಕೃತಿಯ ಅನ್ಫಿಲ್ಟರ್ಡ್ ವೈಲ್ಡ್ ಜಗತ್ತಿಗೆ ಕರೆದೊಯ್ಯುತ್ತಿತ್ತು.\nಮಳೆಹನಿಯ ತಂಪಿನಲ್ಲಿ, ಕಾನನದ ಮೌನವನ್ನು ಆಲಿಸುತ್ತಾ ಸಾಗಿದ ಚಾರಣ.",
      "en": "This trail carved between the winding stream and towering canopy led us deep into nature's raw, unfiltered wilderness.\nTrekking through the cool monsoon drizzle, listening to the living silence of the forest."
    },
    "layout": "vertical-story",
    "theme": "rainforest",
    "anim": "translate-fade",
    "align": "photo-left",
    "scale": "66%",
    "atmosphere": "forest",
    "palette": [
      "#575f43",
      "#304830",
      "#7d8173"
    ],
    "haloTint": "rgba(87, 95, 67, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "mindful-footing"
  },
  {
    "id": "frame-07",
    "image": "images/trail-bikers-rain-halt.webp",
    "frameNum": "07",
    "label": "FRAME 07",
    "caption": {
      "kn": "ರೈನ್ಕೋಟ್ ಪವರ್ ರೇಂಜರ್ಸ್ನ ಟೀ ಸ್ಟಾಪ್!",
      "en": "Chai stop for the Raincoat Power Rangers!"
    },
    "description": {
      "kn": "ಫಾಲ್ಸ್ನ ರಭಸ ನೋಡುವ ಮುನ್ನ, ನಮ್ಮ ಮನಸ್ಸು ಸೆಳೆದದ್ದೇ ಈ ಸಮೃದ್ಧಿ ಹೋಟೆಲ್ನ ಬಿಸಿ ಟೀ! \n ಬಣ್ಣ ಬಣ್ಣದ ರೈನ್ಕೋಟ್ಗಳು, ಬಿಸಿಬಿಸಿ ಚಹಾ, ಮತ್ತು ಗ್ಯಾಂಗ್ನ ತರಲೆ-ಕಾಮಿಡಿ... ಇದೇ ನೋಡಿ ನಮ್ಮ ಅಸಲಿ ಸ್ಕ್ವಾಡ್ ವೈಬ್!",
      "en": "Before taking on the roaring falls, it was the piping-hot tea at Samruddhi Hotel that stole our hearts!\nColorful raincoats, steaming chai, and the squad's unstoppable laughs—this is our true travel vibe!"
    },
    "layout": "editorial-offset",
    "theme": "rainforest",
    "anim": "translate-fade",
    "align": "left",
    "scale": "80%",
    "atmosphere": "rain",
    "palette": [
      "#6c6865",
      "#1a3c68",
      "#8b2434"
    ],
    "haloTint": "rgba(108, 104, 101, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "rain",
    "edgeTreatment": "subtle-rounded",
    "tone": "candid-resilient"
  },
  {
    "id": "frame-08",
    "image": "images/mist-ridge-edge-clouds.webp",
    "frameNum": "08",
    "label": "FRAME 08",
    "caption": {
      "kn": "ಬೆಟ್ಟದ ತುದಿಯಲ್ಲಿ ಅಲೆಮಾರಿ",
      "en": "A wanderer standing at the edge of the world"
    },
    "description": {
      "kn": "ಬೆಟ್ಟದ ತುದಿಯಲ್ಲಿ ನಿಂತು ನೋಡಿದಾಗ ಅನಿಸಿದ್ದು ಒಂದೇ—ಭಯ ಅನ್ನೋದು ನಾವೇ ಮಾಡಿಕೊಂಡ ಗೆರೆ ಅಂತ.",
      "en": "Looking out from the mountain edge, one thing hit home—fear is just an imaginary line we draw for ourselves."
    },
    "layout": "vertical-story",
    "theme": "mist",
    "anim": "translate-fade",
    "align": "photo-right",
    "scale": "66%",
    "atmosphere": "mist",
    "palette": [
      "#979c8d",
      "#b4b8a8",
      "#6a7060"
    ],
    "haloTint": "rgba(151, 156, 141, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "humorous-ironic"
  },
  {
    "id": "frame-09",
    "image": "images/trail-poncho-ridge-trek.webp",
    "frameNum": "09",
    "label": "FRAME 09",
    "caption": {
      "kn": "ಕಾಡಿನಲ್ಲಿ ಪ್ರತ್ಯಕ್ಷವಾದ ಪ್ಲಾಸ್ಟಿಕ್ ಪವರ್ ರೇಂಜರ್ಸ್! 🔴🟣",
      "en": "Plastic Power Rangers spotted in the wild! 🔴🟣"
    },
    "description": {
      "kn": "೧೦೦ ರೂಪಾಯಿ ರೈನ್ಕೋಟ್ ಹಾಕೊಂಡು ಸಿನಿಮ್ಯಾಟಿಕ್ ಆಗಿ ಹೋದ್ರೆ, ನೋಡೋರಿಗೆ 'ನಡೆಯುವ ಬಣ್ಣದ ಕವರ್ಗಳು' ತರ ಕಾಣ್ತಿದ್ದೀವಿ!\nಕಾಡಿನ ಮೌನವನ್ನು ಎಂಜಾಯ್ ಮಾಡೋಣ ಅಂದ್ರೆ, ನಾವು ನಡೆಯುವಾಗ ಬರೋ ಈ ಪ್ಲಾಸ್ಟಿಕ್ ಸೌಂಡೇ ಬಿಜಿಎಮ್ ಆಗಿತ್ತು!",
      "en": "Wearing 100-rupee raincoats trying to look cinematic, we ended up looking like walking plastic carry bags!\nWe wanted to enjoy the peaceful silence of the woods, but the crinkle-crackle of our ponchos became our background score!"
    },
    "layout": "asymmetric-duo",
    "theme": "rainforest",
    "anim": "fade-up",
    "duoRole": "primary",
    "scale": "78%",
    "atmosphere": "trail",
    "palette": [
      "#7d8173",
      "#949888",
      "#5a6050"
    ],
    "haloTint": "rgba(125, 129, 115, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "playful-hardy"
  },
  {
    "id": "frame-10",
    "image": "images/forest-tall-cliff-waterfall.webp",
    "frameNum": "10",
    "label": "FRAME 10",
    "caption": {
      "kn": "ದಟ್ಟ ಕಾಡಿನಲ್ಲಿ ಅವಿತಿದ್ದ ಜಲಪಾತವನ್ನು ಹುಡುಕಿದ ಜಲಪಾತ ಹಂತಕರು",
      "en": "Waterfall hunters uncovering the secret cascade hidden deep in the jungle"
    },
    "description": {
      "kn": "ಭೂಪಟದಲ್ಲಿಲ್ಲದ ದಾರಿಯಲ್ಲಿ, ಕಾಡಿನ ಗರ್ಭಕ್ಕೆ ಇಳಿದು, ಕಡಿದಾದ ಜಾರುವ ಹಾದಿಯಲ್ಲಿ ಮಳೆಹನಿಯ ನಡುವೆ ಸಾಗಿದಾಗ ಕಂಡ  ಗುಪ್ತ ಗಾಮಿನಿ.",
      "en": "Descending on an unmapped trail into the belly of the rainforest, slipping down slick rocks in the rain, we finally discovered this secret hidden stream."
    },
    "layout": "asymmetric-duo",
    "theme": "deep-forest",
    "anim": "fade-up",
    "duoRole": "secondary",
    "scale": "56%",
    "atmosphere": "forest",
    "palette": [
      "#383c2a",
      "#54554a",
      "#8a9189"
    ],
    "haloTint": "rgba(56, 60, 42, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "dappled",
    "edgeTreatment": "standard",
    "tone": "quiet-discovery"
  },
  {
    "id": "frame-11",
    "image": "images/mist-distant-falls-valley.webp",
    "frameNum": "11",
    "label": "FRAME 11",
    "caption": {
      "kn": "ಝರಿ ತೊರೆಗಳ ದಾಟಿ ಗುಡ್ಡ ಬೆಟ್ಟಗಳ ಏರಿದಮೇಲೆ, ಸಿಕ್ಕಳು ಬೆಳ್ಳಿ",
      "en": "Crossing brooks and conquering ridges, we finally met the silver ribbon"
    },
    "description": {
      "kn": "ಕಣಿವೆಯ ಅಂಚಿನಲ್ಲಿ ನಿಂತು ಕಾದು ನೋಡುತ್ತಿದ್ದಾಗ, ಮಂಜಿನ ಪರದೆ ಕೊಂಚ ಸರಿದ ಮೇಲಷ್ಟೇ ಈ ಜಲಧಾರೆ ಬೆಳ್ಳಿಯಂತೆ ಮಿನುಗುತ್ತಾ ಗೋಚರಿಸುತ್ತಿತ್ತು.",
      "en": "Waiting patiently at the canyon edge, only when the misty curtain parted did this majestic cascade reveal itself, gleaming like liquid silver across the valley."
    },
    "layout": "cinematic-feature",
    "theme": "mist",
    "anim": "scale-slow",
    "scale": "86%",
    "atmosphere": "mist",
    "palette": [
      "#7f8f93",
      "#4e6066",
      "#a8c0d8"
    ],
    "haloTint": "rgba(127, 143, 147, 0.24)",
    "hasContour": true,
    "contourType": "mountain",
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "grand-monumental"
  },
  {
    "id": "frame-12",
    "image": "images/trail-forest-stream-wading.webp",
    "frameNum": "12",
    "label": "FRAME 12",
    "caption": {
      "kn": "ಒಬ್ಬರು ಜಾರಿದರೆ ಎಲ್ಲರೂ ಬೀಳುವ ಸಂಕಷ್ಟ; ಆದರೆ ಹಿಡಿದ ಕೈ ಯಾರೂ ಬಿಡಲಿಲ್ಲ",
      "en": "If one slips, we all tumble—yet nobody let go of the grip"
    },
    "description": {
      "kn": "ಹರಿವಿನ ಸೆಳೆತ ಮೊಣಕಾಲಿಗಿಂತ ಮೇಲಿತ್ತು, ಕಾಲ್ಕೆಳಗಿನ ಕಲ್ಲುಗಳು ಜಾರುತ್ತಿದ್ದವು. ಪರಸ್ಪರ ಕೈಬಿಗಿದು  ದಡ ತಲುಪಿದಾಗ ಉಸಿರು ನಿರಾಳವಾಯಿತು.",
      "en": "The rushing current rose above our knees, and the riverbed stones were slick. Holding each other tight and making it across brought a collective sigh of relief."
    },
    "layout": "counterweight",
    "theme": "rainforest",
    "anim": "translate-fade",
    "align": "photo-left",
    "scale": "60%",
    "atmosphere": "trail",
    "palette": [
      "#4b4d3e",
      "#6b7058",
      "#888c74"
    ],
    "haloTint": "rgba(75, 77, 62, 0.20)",
    "hasContour": false,
    "contourType": null,
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "self-effacing-fun"
  },
  {
    "id": "frame-13",
    "image": "images/forest-vine-canopy-rest.webp",
    "frameNum": "13",
    "label": "FRAME 13",
    "caption": {
      "kn": "ನೆಲಕ್ಕೂ ಮುಗಿಲಿಗೂ ನಡುವೆ, ಪ್ರಕೃತಿ ಹೆಣೆದ ತೊಟ್ಟಿಲು! 🍃",
      "en": "Between earth and sky, a cradle woven by nature! 🍃"
    },
    "description": {
      "kn": "ನಿಸರ್ಗವೇ ನೆಯ್ದ ಈ ನೈಸರ್ಗಿಕ ತೊಟ್ಟಿಲಲ್ಲಿ ವಿಶ್ರಮಿಸಿದಾಗ, ಕಾಡಿನ ಪ್ರತಿಯೊಂದು ಎಲೆಯೂ ಜೋಗುಳ ಹಾಡಿದಂತಿತ್ತು.",
      "en": "Resting in this living vine cradle crafted by the forest, it felt as though every rustling leaf was singing a gentle lullaby."
    },
    "layout": "small-memory",
    "theme": "deep-forest",
    "anim": "fade-up",
    "scale": "56%",
    "atmosphere": "forest",
    "palette": [
      "#54554a",
      "#383c2a",
      "#787a64"
    ],
    "haloTint": "rgba(84, 85, 74, 0.20)",
    "hasContour": false,
    "contourType": null,
    "texture": "dappled",
    "edgeTreatment": "standard",
    "tone": "serene-rest"
  },
  {
    "id": "frame-14",
    "image": "images/memory-companions-stream-rocks.webp",
    "frameNum": "14",
    "label": "FRAME 14",
    "caption": {
      "kn": "ಪ್ರಕೃತಿ ಕೊಟ್ಟ ಫ್ರೀ ಅನ್ಲಿಮಿಟೆಡ್ ನೆಚುರಲ್ ಮಸಾಜ್",
      "en": "Nature's complimentary unlimited spa therapy"
    },
    "description": {
      "kn": "ಒಮ್ಮೆ ಈ ಐಸ್-ಕೋಲ್ಡ್ ನೀರಿಗೆ ಬಿದ್ದಮೇಲೆ, ದಣಿವು ಕ್ಷಣಾರ್ಧದಲ್ಲಿ ಕರಗಿಹೋಯ್ತು, ಮೇಲಕ್ಕೆ ಬರೋ ಮನಸ್ಸೇ ಆಗ್ತಿರಲಿಲ್ಲ .",
      "en": "Once we dipped our feet into this ice-cold stream, miles of exhaustion vanished in seconds—we never wanted to step out."
    },
    "layout": "counterweight",
    "theme": "stone",
    "anim": "translate-fade",
    "align": "photo-right",
    "scale": "62%",
    "atmosphere": "trail",
    "palette": [
      "#7d7660",
      "#909090",
      "#a8a8a8"
    ],
    "haloTint": "rgba(125, 118, 96, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "restorative-relief"
  },
  {
    "id": "frame-15",
    "image": "images/trail-river-crossing-group.webp",
    "frameNum": "15",
    "label": "FRAME 15",
    "caption": {
      "kn": "ಕಾಲು ಬೆರಳು ಮುಳುಗೋ ನೀರಿಗೆ ಬಾಹುಬಲಿ ಲೆವೆಲ್ ಬಿಲ್ಡಪ್",
      "en": "Baahubali-level dramatic poses for ankle-deep stream water"
    },
    "description": {
      "kn": "ದೈತ್ಯ ಸಾಗರವನ್ನೇ ದಾಟುತ್ತಿದ್ದೇವೆ ಅನ್ನೋ ರೇಂಜ್ಗೆ ಸೀರಿಯಸ್ ಆಗಿ ಪೋಸ್ ಕೊಟ್ಟು ನಿಂತಿರೋ ನಮ್ಮ ಕೆಚ್ಚೆದೆಯ ಅಲೆಮಾರಿಗಳು.",
      "en": "Our brave wanderers striking dead-serious heroic poses, as if crossing an untamed raging ocean instead of a gentle shallow stream!"
    },
    "layout": "cinematic-feature",
    "theme": "rainforest",
    "anim": "scale-slow",
    "scale": "84%",
    "atmosphere": "forest",
    "palette": [
      "#757a64",
      "#304830",
      "#907860"
    ],
    "haloTint": "rgba(117, 122, 100, 0.22)",
    "hasContour": true,
    "contourType": "river",
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "collective-grit"
  },
  {
    "id": "frame-16",
    "image": "images/memory-boulder-rest-portrait.webp",
    "frameNum": "16",
    "label": "FRAME 16",
    "caption": {
      "kn": "ಬಂಡೆಯ ಮರೆಯಲ್ಲಿ ಬಚ್ಚಿಟ್ಟುಕೊಂಡ ಅಲೆಮಾರಿ",
      "en": "A quiet wanderer tucked behind the mountain boulder"
    },
    "description": {
      "kn": "ಬಂಡೆ ಗಟ್ಟಿಯಾಗಿರಬಹುದು, ಆದ್ರೆ ಈ ಸೈಲೆಂಟ್ ಲುಕ್ ಮಾತ್ರ ಫುಲ್ ಸಾಫ್ಟ್ & ಕ್ಯೂಟ್",
      "en": "The granite rock might be rugged and hard, but this quiet, peaceful gaze is all warmth and calm."
    },
    "layout": "quiet-pause",
    "theme": "stone",
    "anim": "fade-up",
    "scale": "54%",
    "atmosphere": "rock",
    "palette": [
      "#83857f",
      "#606060",
      "#787878"
    ],
    "haloTint": "rgba(131, 133, 127, 0.20)",
    "hasContour": false,
    "contourType": null,
    "texture": "subtle",
    "edgeTreatment": "standard",
    "tone": "zen-grounded"
  },
  {
    "id": "frame-17",
    "image": "images/memory-calm-river-boulders.webp",
    "frameNum": "17",
    "label": "FRAME 17",
    "caption": {
      "kn": "ಅಘನಾಶಿನಿಯ ತಟದಲ್ಲಿ...",
      "en": "By the untouched banks of Aghanashini..."
    },
    "description": {
      "kn": "ಯಾವುದೇ ಅಣೆಕಟ್ಟಿನ ಕಟ್ಟುಪಾಡಿಲ್ಲದೆ ಮುಕ್ತವಾಗಿ ಹರಿಯೋ ನದಿ ಇದು. ಬಂಡೆಯ ಮೇಲೆ ಕೂತು ಈ ಅನಂತ ಹರಿವನ್ನು ನೋಡುವುದು ಒಂದು ಯೋಗ.",
      "en": "A free river flowing wild without the chains of any dam. Sitting on the sunlit rocks and watching its timeless rhythm is pure meditation."
    },
    "layout": "memory-wall-item",
    "theme": "stone",
    "anim": "fade-up",
    "scale": "100%",
    "atmosphere": "rock",
    "palette": [
      "#838586",
      "#6a7072",
      "#a0a4a6"
    ],
    "haloTint": "rgba(131, 133, 134, 0.20)",
    "hasContour": false,
    "contourType": null,
    "texture": "subtle",
    "edgeTreatment": "subtle-rounded",
    "tone": "crystalline-pure"
  },
  {
    "id": "frame-18",
    "image": "images/coastal-rocks-ocean-gaze.webp",
    "frameNum": "18",
    "label": "FRAME 18",
    "caption": {
      "kn": "ಕಡಿದಾದ ಬೆಟ್ಟಗಳಿಂದ ಕಡಲತೀರದ ಕಪ್ಪು ಬಂಡೆಗಳವರೆಗೆ.",
      "en": "From rugged mountain peaks to dark coastal shores"
    },
    "description": {
      "kn": "ಉಪ್ಪು ಗಾಳಿ ಮತ್ತು ಬಂಡೆಗಳಿಗೆ ಅಪ್ಪಳಿಸುವ ಭೋರ್ಗರೆವ ಅಲೆಗಳು. ಕಾಡಿನ ಮೌನದಿಂದ ಸಾಗರದ ಆರ್ಭಟಕ್ಕೆ ದಿಢೀರ್ ಬದಲಾದ ಪ್ರಯಾಣದ ರಂಗು.",
      "en": "Salty breezes and thunderous breakers crashing against coastal rocks. A sudden, exhilarating shift from deep forest stillness to the roaring energy of the Arabian Sea."
    },
    "layout": "memory-wall-item",
    "theme": "stone",
    "anim": "fade-up",
    "scale": "100%",
    "atmosphere": "rock",
    "palette": [
      "#949b9e",
      "#4e5e66",
      "#728892"
    ],
    "haloTint": "rgba(148, 155, 158, 0.20)",
    "hasContour": false,
    "contourType": null,
    "texture": "subtle",
    "edgeTreatment": "subtle-rounded",
    "tone": "coastal-breath"
  },
  {
    "id": "frame-19",
    "image": "images/memory-beach-chair-solitude.webp",
    "frameNum": "19",
    "label": "FRAME 19",
    "caption": {
      "kn": "ಪ್ರಪಂಚದ ಬೆಸ್ಟ್ ಆಫೀಸ್ ಚೇರ್",
      "en": "The finest office chair in the world"
    },
    "description": {
      "kn": "ಯಾವ ಮೀಟಿಂಗೂ ಇಲ್ಲ, ಯಾವ ಇಮೇಲ್ ಕೂಡ ಇಲ್ಲಿಗೆ ತಲುಪಲ್ಲ. ಅಲೆಗಳನ್ನೇ ನೋಡುತ್ತಾ ಸಂಜೆ ಕಳೆದುಹೋದದ್ದು ಗೊತ್ತೇ ಆಗಲಿಲ್ಲ.",
      "en": "No meetings, no deadlines, no emails reaching here. Just gazing at the rhythmic waves until the entire evening dissolved into tranquility."
    },
    "layout": "memory-wall-item",
    "theme": "stone",
    "anim": "fade-up",
    "scale": "100%",
    "atmosphere": "rock",
    "palette": [
      "#9ca1a1",
      "#788080",
      "#b8c0c0"
    ],
    "haloTint": "rgba(156, 161, 161, 0.20)",
    "hasContour": false,
    "contourType": null,
    "texture": "subtle",
    "edgeTreatment": "subtle-rounded",
    "tone": "solitude-horizon"
  },
  {
    "id": "frame-20",
    "image": "images/water-wide-forest-cascade.webp",
    "frameNum": "20",
    "label": "FRAME 20",
    "caption": {
      "kn": "ಮಂಜಿನ ಮುಸುಕಲ್ಲಿ ನಿಸರ್ಗದ ಆಟ",
      "en": "Nature's grand symphony veiled in mist"
    },
    "description": {
      "kn": "ದಟ್ಟವಾದ ಕಾನನದ ನಡುವೆ, ಆ ಭವ್ಯವಾದ ಜಲಪಾತವು ಬಂಡೆಗಳ ಮೇಲೆ ರಭಸವಾಗಿ ಹರಿಯುತ್ತಿರುವ ನೋಟವೇ ಒಂದು ಅದ್ಭುತ ಅನುಭವ. ಸುತ್ತಲೂ ಮಂಜಿನ ಮಳೆ ಹನಿಗಳು, ಹಸಿರಿನ ಸಿರಿ... ನಿಜಕ್ಕೂ ನಿಸರ್ಗದ ಈ ಆಟವನ್ನು ನೋಡುವುದು ಮನಸ್ಸಿಗೆ ಶಾಂತಿ ನೀಡುತ್ತದೆ.",
      "en": "Amidst the dense jungle, watching the grand cascade thunder down the granite ledges was breathtaking. Surrounded by mist spray and lush greenery, witnessing nature's majestic spectacle brings deep peace to the soul."
    },
    "layout": "cinematic-master",
    "theme": "water",
    "anim": "scale-slow",
    "scale": "96%",
    "atmosphere": "water",
    "palette": [
      "#91948c",
      "#405048",
      "#6a7870"
    ],
    "haloTint": "rgba(145, 148, 140, 0.26)",
    "hasContour": true,
    "contourType": "river",
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "thunderous-master"
  },
  {
    "id": "frame-21",
    "image": "images/water-roaring-white-cascade.webp",
    "frameNum": "21",
    "label": "FRAME 21",
    "caption": {
      "kn": "ಪ್ರಕೃತಿಯ ರೌದ್ರ ಸೌಂದರ್ಯಕ್ಕೆ ಲೆನ್ಸ್ ಕೂಡ ಶರಣು",
      "en": "Even camera lenses surrender to nature's fierce beauty"
    },
    "description": {
      "kn": "ವೇಗ ಮತ್ತು ಶಕ್ತಿ ನೋಡಿದರೆ ಎದೆಬಡಿತ ಹೆಚ್ಚಾಗುತ್ತಿತ್ತು. ಚಿಮ್ಮುವ ಹನಿಗಳ ನಡುವೆ ಕ್ಯಾಮೆರಾ ಲೆನ್ಸ್ ಒರೆಸುವುದೇ ದೊಡ್ಡ ಕೆಲಸವಾಗಿತ್ತು.",
      "en": "The roaring speed and raw power made our hearts race. Constantly wiping water spray off the camera lens was a full-time task in itself!"
    },
    "layout": "split-visual",
    "theme": "water",
    "anim": "fade-up",
    "splitRole": "a",
    "scale": "68%",
    "atmosphere": "water",
    "palette": [
      "#91998c",
      "#606858",
      "#b8c0b0"
    ],
    "haloTint": "rgba(145, 153, 140, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "raw-force"
  },
  {
    "id": "frame-22",
    "image": "images/water-spray-embrace-figure.webp",
    "frameNum": "22",
    "label": "FRAME 22",
    "caption": {
      "kn": "ಕಾಡಿನ ನಿಶ್ಯಬ್ದತೆಯಲ್ಲಿ ಜಲಪಾತದ ನಾದ",
      "en": "The roar of the cascade breaking the forest silence"
    },
    "description": {
      "kn": "ದಟ್ಟ ಕಾಡಿನ ಮಂಜಿನಲ್ಲಿ ಜಲಧಾರೆ! ಜಲಪಾತದ ಆರ್ಭಟದ ಮುಂದೆ ನಿಂತು ಗೆದ್ದು ಬೀಗಿದ ಕ್ಷಣ.",
      "en": "A cascading torrent wrapped in mountain mist! Standing triumphant and soaked before the overwhelming roar of the falls."
    },
    "layout": "split-visual",
    "theme": "water",
    "anim": "fade-up",
    "splitRole": "b",
    "scale": "68%",
    "atmosphere": "water",
    "palette": [
      "#837f80",
      "#585052",
      "#a8a0a4"
    ],
    "haloTint": "rgba(131, 127, 128, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "surrender-joy"
  },
  {
    "id": "frame-23",
    "image": "images/water-hiker-staff-vertical-fall.webp",
    "frameNum": "23",
    "label": "FRAME 23",
    "caption": {
      "kn": "ಮಂಜಿನ ನಡುವೆ ಅಲೆಮಾರಿಯ ಮಾಸ್ ಎಂಟ್ರಿ",
      "en": "A cinematic hero entry amidst swirling mist! 😎"
    },
    "description": {
      "kn": "ಪ್ರಕೃತಿಯ ರೌದ್ರ ರೂಪದ ನಡುವೆ ಆ ಕ್ಷಣಕ್ಕೆ ನಾನೇ ಕಾಡಿನ ಹೀರೋ ಅನ್ನೋ ಫೀಲ್! 😎",
      "en": "Standing before nature's ferocious beauty with my walking staff, for that fleeting moment I truly felt like the king of the jungle! 😎"
    },
    "layout": "vertical-story",
    "theme": "water",
    "anim": "translate-fade",
    "align": "photo-right",
    "scale": "66%",
    "atmosphere": "water",
    "palette": [
      "#878a80",
      "#5c6054",
      "#b0b4a8"
    ],
    "haloTint": "rgba(135, 138, 128, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "humble-scale"
  },
  {
    "id": "frame-24",
    "image": "images/mist-cliff-valley-overlook.webp",
    "frameNum": "24",
    "label": "FRAME 24",
    "caption": {
      "kn": "ಇಲ್ಲಿ ಸಮಯ ಸ್ವಲ್ಪ ನಿಧಾನವಾಗಿತ್ತು...",
      "en": "Time stood gently still here... 🍃"
    },
    "description": {
      "kn": "ಮೋಡಗಳ ಆಟ ನೋಡುತ್ತಾ ಕುಳಿತಿದ್ದ ನಮಗೆ, ಮನೆಗೆ ಹೋಗೋಣ ಅನ್ನೋದನ್ನೇ ಮರೆತಿದ್ದೆವು! 🍃",
      "en": "Sitting and watching the dance of clouds over the endless blue valleys, we completely forgot about ever heading back home! 🍃"
    },
    "layout": "cinematic-feature",
    "theme": "mist",
    "anim": "scale-slow",
    "scale": "88%",
    "atmosphere": "mist",
    "palette": [
      "#7f8f88",
      "#4c5c56",
      "#a0b4ac"
    ],
    "haloTint": "rgba(127, 143, 136, 0.24)",
    "hasContour": true,
    "contourType": "mountain",
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "epic-perspective"
  },
  {
    "id": "frame-25",
    "image": "images/mist-cliff-waterfall-shroud.webp",
    "frameNum": "25",
    "label": "FRAME 25",
    "caption": {
      "kn": "ಪ್ರಕೃತಿಯ ಸೌಂದರ್ಯಕ್ಕೆ ಸೋಲದವರಿಲ್ಲ, ಈ ಜಲಪಾತದ ಗತ್ತಿಗೆ ಅಂಜದವರಿಲ್ಲ! ⚠️",
      "en": "None can resist its beauty, and none can remain fearless before its roar! ⚠️"
    },
    "description": {
      "kn": "ದೂರದಿಂದ ನೋಡಿದರೆ ಸ್ವರ್ಗದಂತೆ ಕಂಗೊಳಿಸುವ ಈ ಬುರಡೆ ಫಾಲ್ಸ್ ಆಳದಲ್ಲಿ, ಎದೆನಡುಗಿಸುವ ಕಥೆಗಳು ಅಡಗಿವೆ.",
      "en": "Looking like paradise from afar, the treacherous depths of Burude Falls hide thrilling and spine-chilling tales within its mist."
    },
    "layout": "vertical-story",
    "theme": "mist",
    "anim": "translate-fade",
    "align": "photo-left",
    "scale": "66%",
    "atmosphere": "mist",
    "palette": [
      "#5f5f5c",
      "#3a3a38",
      "#888884"
    ],
    "haloTint": "rgba(95, 95, 92, 0.22)",
    "hasContour": false,
    "contourType": null,
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "spectral-wild"
  },
  {
    "id": "frame-26",
    "image": "images/landscape-winding-river-reservoir.webp",
    "frameNum": "26",
    "label": "FRAME 26",
    "caption": {
      "kn": "ಬೆಟ್ಟಗಳ ನಡುವೆ ಹಾವಿನಂತೆ ಬಳುಕಿದ ಶರಾವತಿ 🌿",
      "en": "The Sharavathi river snaking through emerald mountain folds 🌿"
    },
    "description": {
      "kn": "ಘಾಟಿ ರಸ್ತೆಯ ತಿರುವಿನಲ್ಲಿ ಮರಗಳು ಸರಿದು ಬೆಟ್ಟಗಳ ನಡುವೆ ನೀಲಿ ಹಾವಿನಂತೆ ಮಲಗಿದ್ದ ಶರಾವತಿ,ಗಾಡಿ ನಿಲ್ಲಿಸಿ, ಮೌನವಾಗಿ ಆ ಹರಿವನ್ನೇ ನೋಡುತ್ತಾ ನಿಂತುಬಿಟ್ಟೆವು.",
      "en": "As the trees parted around a hairpin bend, the Sharavathi river lay winding like a blue ribbon through the hills. We stopped the engine and stood in awe, silently admiring its magnificent flow."
    },
    "layout": "cinematic-full",
    "theme": "rainforest",
    "anim": "scale-slow",
    "scale": "94%",
    "atmosphere": "forest",
    "palette": [
      "#82888a",
      "#384852",
      "#98b0c0"
    ],
    "haloTint": "rgba(130, 136, 138, 0.24)",
    "hasContour": true,
    "contourType": "river",
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "hypnotic-curve"
  },
  {
    "id": "frame-27",
    "image": "images/dusk-high-ridge-twilight.webp",
    "frameNum": "27",
    "label": "FRAME 27",
    "caption": {
      "kn": "ಇದು ಅಂತ್ಯವಲ್ಲ, ಮತ್ತೊಂದು ಪಯಣದ ಆರಂಭ...",
      "en": "This is not the end, but the dawn of another journey..."
    },
    "description": {
      "kn": "ಸೂರ್ಯ ಬೆಟ್ಟಗಳ ಹಿಂದೆ ಮರೆಯಾದರೂ, ಈ ಪಯಣದ ನೆನಪುಗಳು ಮನಸ್ಸಿನಲ್ಲಿ ಹಾಗೆಯೇ ಉಳಿದವು. ಅಲೆಮಾರಿಯ ಪುಟಗಳಿಗೆ ಇಂದಿಗೆ ವಿರಾಮ, ಮತ್ತೆ ಸಿಗೋಣ ಯಾವುದೋ ಹೊಸ ದಾರಿಯಲ್ಲಿ.",
      "en": "Though the sun dipped behind the mountain ridges, the memories of this expedition stay deeply etched in our hearts. A pause on these wanderer's pages for today—until we meet again on a brand new trail."
    },
    "layout": "quiet-ending",
    "theme": "charcoal",
    "anim": "scale-slow",
    "scale": "92%",
    "atmosphere": "mist",
    "palette": [
      "#7e8585",
      "#384044",
      "#506070"
    ],
    "haloTint": "rgba(126, 133, 133, 0.26)",
    "hasContour": true,
    "contourType": "mountain",
    "texture": "mist",
    "edgeTreatment": "standard",
    "tone": "final-twilight-closure"
  }
];

/* --------------------------------------------------------------------------
   02. LANGUAGE STATE & LOCALIZATION DICTIONARY
   -------------------------------------------------------------------------- */
let currentLang = 'kn';

const uiStrings = {
  "brandTitle": {
    "kn": "ಅಲೆಮಾರಿ ಪುಟಗಳು",
    "en": "Alemari Putagalu"
  },
  "tagline": {
    "kn": "ಕಂಡದ್ದು • ಅನುಭವಿಸಿದ್ದು • ಉಳಿಸಿಕೊಂಡದ್ದು",
    "en": "Seen • Experienced • Preserved"
  },
  "prologueQuote": {
    "kn": "ನಾವು ಹೊರಟಾಗ ಯಾವುದೇ ಪಕ್ಕಾ ಪ್ಲಾನ್ ಇರಲಿಲ್ಲ. ಎಲ್ಲಿ ಡಾಂಬರ್ ರಸ್ತೆ ಮುಗಿಯಿತೋ, ಅಲ್ಲಿಂದಲೇ ನಮ್ಮ ನಿಜವಾದ ನಡಿಗೆ ಶುರುವಾಯಿತು.",
    "en": "We left with zero rigid plans. Right where the paved road ran out, our real walking began."
  },
  "visualQuote": {
    "kn": "ಕ್ಯಾಮೆರಾ ಒಂದು ಸೆಕೆಂಡನ್ನು ಮಾತ್ರ ಕ್ಲಿಕ್ ಮಾಡುತ್ತದೆ. ಆದರೆ ಆ ದಿನದ ಚಳಿ, ಸುಸ್ತು, ಜೊತೆಯಲ್ಲಿದ್ದವರ ನಗು ಮಾತ್ರ ಮನಸ್ಸಿನಲ್ಲೇ ಉಳಿಯುತ್ತದೆ.",
    "en": "The lens captures only a single second. But the cold wind, the burning muscles, and the shared laughter stay in the heart forever."
  },
  "closingQuote": {
    "kn": "ಇನ್ನೂ ನಡೆಯಲು ಕಾಡುಗಳಿವೆ, ಏರಲು ಬೆಟ್ಟಗಳಿವೆ, ಹುಡುಕಲು ಜಲಪಾತಗಳಿವೆ...",
    "en": "There are still woods to wander, peaks to climb, and waterfalls left to discover..."
  },
  "closingSub": {
    "kn": "ಅಲೆಮಾರಿ ಪುಟಗಳು ಮುಂದುವರಿಯುತ್ತವೆ.",
    "en": "The pages of the wanderer continue onward."
  },
  "closingMeta": {
    "kn": "THE JOURNEY CONTINUES · SAHYADRI ARCHIVE",
    "en": "THE JOURNEY CONTINUES · SAHYADRI ARCHIVE"
  },
  "scrollCue": {
    "kn": "SCROLL TO EXPLORE",
    "en": "SCROLL TO EXPLORE"
  }
};

function setLanguage(lang) {
  if (lang !== 'kn' && lang !== 'en') return;
  currentLang = lang;

  // Update button text
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.textContent = lang === 'kn' ? 'EN' : 'ಕನ್ನಡ';
  }

  // Update document language
  document.documentElement.lang = lang;

  // Update Hero elements (Title, Tagline, Caption, Description)
  const heroTitle = document.querySelector('.hero-title') || document.querySelector('.hero-main-title');
  const heroTagline = document.querySelector('.hero-tagline');
  const heroCaption = document.getElementById('hero-caption');
  const heroDescription = document.getElementById('hero-description');

  if (heroTitle) heroTitle.textContent = uiStrings.brandTitle[currentLang];
  if (heroTagline) heroTagline.textContent = uiStrings.tagline[currentLang];
  if (heroCaption) {
    heroCaption.style.opacity = '0';
    setTimeout(() => {
      heroCaption.textContent = (hero.caption && hero.caption[currentLang]) || '';
      heroCaption.style.opacity = '1';
    }, 120);
  }
  if (heroDescription) {
    heroDescription.style.opacity = '0';
    setTimeout(() => {
      heroDescription.textContent = (hero.description && hero.description[currentLang]) || '';
      heroDescription.style.opacity = '1';
    }, 120);
  }

  // Update Curatorial Prologue Quote
  const prologueQuote = document.querySelector('.prologue-quote');
  if (prologueQuote) {
    prologueQuote.textContent = `"${uiStrings.prologueQuote[currentLang]}"`;
  }

  // Update Closing elements
  const closingQuote = document.querySelector('.closing-quote');
  const closingSubQuote = document.querySelector('.closing-sub-quote');
  const closingMeta = document.querySelector('.closing-meta');
  if (closingQuote) closingQuote.textContent = uiStrings.closingQuote[currentLang];
  if (closingSubQuote) closingSubQuote.textContent = uiStrings.closingSub[currentLang];
  if (closingMeta) closingMeta.textContent = uiStrings.closingMeta[currentLang];

  // Update all 27 captions and descriptions with gentle opacity transition
  journal.forEach((entry) => {
    const capEl = document.getElementById(`cap-${entry.id}`);
    const descEl = document.getElementById(`desc-${entry.id}`);

    if (capEl) {
      capEl.style.opacity = '0';
      setTimeout(() => {
        capEl.textContent = entry.caption[currentLang] || '';
        capEl.style.opacity = '1';
      }, 120);
    }

    if (descEl) {
      descEl.style.opacity = '0';
      setTimeout(() => {
        descEl.textContent = entry.description[currentLang] || '';
        descEl.style.opacity = '1';
      }, 120);
    }

    const noteEl = document.getElementById(`note-${entry.id}`);
    if (noteEl && entry.note) {
      noteEl.style.opacity = '0';
      setTimeout(() => {
        noteEl.textContent = entry.note[currentLang] || '';
        noteEl.style.opacity = '0.88';
      }, 120);
    }
  });
}

/* --------------------------------------------------------------------------
   02B. TOPOGRAPHIC CONTOUR & CINEMATIC BACKDROP SYSTEM
   Generates Western Ghats elevation contours, environmental textures,
   and blurred ambient backdrops derived directly from each photograph.
   -------------------------------------------------------------------------- */
function getTopographicSvg(type = 'mountain') {
  if (type === 'river') {
    return `
        <svg viewBox="0 0 1000 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M-50,140 C180,100 380,260 620,200 C820,160 940,300 1050,280" />
            <path d="M-50,210 C160,170 360,330 600,270 C800,230 920,370 1050,350" />
            <path d="M-50,290 C140,250 340,400 580,340 C780,300 900,440 1050,420" />
            <path d="M-50,370 C120,330 310,470 560,410 C760,370 880,510 1050,490" />
            <path d="M-50,450 C100,410 290,540 540,480 C740,440 860,580 1050,560" />
        </svg>
        `;
  }
  // Mountain Ridge Contours (Western Ghats Sahyadri Elevation Lines)
  return `
    <svg viewBox="0 0 1000 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M-50,110 C170,70 310,170 490,120 C670,70 810,150 1050,90" />
        <path d="M-50,180 C150,140 290,240 470,190 C650,140 790,220 1050,160" />
        <path d="M-50,260 C130,220 270,310 450,260 C630,210 770,290 1050,240" />
        <path d="M-50,350 C110,300 250,390 430,340 C610,290 750,370 1050,320" />
        <path d="M-50,440 C90,390 230,480 410,420 C590,370 730,450 1050,410" />
        <path d="M-50,530 C70,480 210,560 390,510 C570,460 710,540 1050,490" />
    </svg>
    `;
}

function renderSectionAtmosphere(f) {
  let html = `
    <!-- Layer 1A: Cinematic Ambient Image Backdrop (Blurred & Enlarged Extension of Photo) -->
    <div class="photo-ambient-backdrop" style="background-image: url('${f.image}');" aria-hidden="true"></div>
    `;

  // Layer 1B: Natural Environmental Texture
  if (f.texture && f.texture !== 'none') {
    html += `
        <div class="env-texture-layer env-texture-${f.texture}" aria-hidden="true"></div>
        `;
  }

  // Layer 1C: Topographic Mountain / River Elevation Contours
  if (f.hasContour) {
    html += `
        <div class="topographic-contour-lines" aria-hidden="true">
            ${getTopographicSvg(f.contourType || 'mountain')}
        </div>
        `;
  }

  return html;
}

/* --------------------------------------------------------------------------
   03. EDITORIAL JOURNAL RENDERER
   Builds the single continuous editorial canvas for all 27 photographs.
   Preserves original aspect ratios: width: 100%; height: auto; uncropped.
   Captions are the primary narrative text; descriptions remain visible.
   Hero is designed as a luxury cinematic photography book cover.
   -------------------------------------------------------------------------- */
function renderJournalCanvas() {
  const canvas = document.getElementById('journal-canvas');
  if (!canvas) return;

  let html = '';
  let i = 0;

  while (i < journal.length) {
    const f = journal[i];
    const themeClass = f.theme ? `theme-${f.theme}` : 'theme-paper';
    const envClass = f.atmosphere ? `env-${f.atmosphere}` : 'env-mist';
    const dominantStyle = `style="--photo-dominant-1: ${f.palette[0] || '#304848'}; --photo-dominant-2: ${f.palette[1] || f.palette[0] || '#90a8a8'}; --photo-halo-tint: ${f.haloTint || 'rgba(135,151,133,0.22)'};"`;
    const edgeClass = f.edgeTreatment ? ` edge-${f.edgeTreatment}` : '';
    const haloMarkup = `<div class="photo-mist-halo" aria-hidden="true"></div>`;
    const layout = f.layout;

    // 1. HERO COVER (Complete Uncropped Sharp Photograph + Atmospheric Fullscreen Viewport + Upper-Sky Title & Tagline + Below-Image Caption & Description)
    if (layout === 'hero-cover') {
      html += `
            <section class="journal-section section-hero-wrapper theme-deep-forest env-forest" id="hero-cover-section">
                <!-- 1. FULLSCREEN HERO VIEWPORT STAGE (94svh on Desktop / 88svh on Mobile) -->
                <div class="hero-viewport-stage">
                    <!-- LAYER 1: Ambient Same-Photo Atmospheric Extension Backdrop (Enlarged + Blurred + Subtle Low Opacity) -->
                    <div class="hero-atmospheric-bg" 
                         style="background-image: url('${hero.image}');" 
                         aria-hidden="true"></div>

                    <!-- LAYER 2: Actual Sharp Hero Photograph (Preserving Original Aspect Ratio, Uncropped, Centered) -->
                    <figure class="hero-photo-figure">
                        <img src="${hero.image}" 
                             alt="${uiStrings.brandTitle[currentLang]}" 
                             class="hero-sharp-photo" 
                             width="2800" 
                             height="1871" 
                             loading="eager" 
                             fetchpriority="high" 
                             decoding="async">

                        <!-- TITLE & TAGLINE DIRECTLY ON SHARP PHOTOGRAPH (In quiet upper sky zone) -->
                        <div class="hero-typography-overlay">
                            <h1 class="hero-title">${uiStrings.brandTitle[currentLang]}</h1>
                            <p class="hero-tagline">${uiStrings.tagline[currentLang]}</p>
                        </div>
                    </figure>

                    <!-- Subtle Scroll Cue at Viewport Bottom Edge -->
                    <div class="hero-scroll-cue" aria-hidden="true">
                        <div class="hero-scroll-cue-line"></div>
                        <span class="hero-scroll-cue-arrow">↓</span>
                    </div>
                </div>

                ${((hero.caption && (hero.caption.kn || hero.caption.en)) || (hero.description && (hero.description.kn || hero.description.en))) ? `
                <!-- 2. EDITORIAL CAPTION & DESCRIPTION IMMEDIATELY BELOW THE IMAGE (NOT ON THE PHOTO) -->
                <div class="hero-narrative-stage">
                    <div class="hero-narrative-container">
                        <h2 class="hero-caption" id="hero-caption">${hero.caption ? (hero.caption[currentLang] || '') : ''}</h2>
                        <p class="hero-description" id="hero-description">${hero.description ? (hero.description[currentLang] || '') : ''}</p>
                    </div>
                </div>` : ''}
            </section>
            `;
      i++;
      continue;
    }

    // CHAPTER WATERMARKS (Injected before key narrative chapters)
    let watermarkMarkup = '';
    if (f.id === 'frame-05') {
      watermarkMarkup = '<div class="section-bg-watermark" aria-hidden="true">CANOPY</div>';
    } else if (f.id === 'frame-14') {
      watermarkMarkup = '<div class="section-bg-watermark" aria-hidden="true">RIVERBED</div>';
    } else if (f.id === 'frame-20') {
      watermarkMarkup = '<div class="section-bg-watermark" aria-hidden="true">CASCADE</div>';
    } else if (f.id === 'frame-24') {
      watermarkMarkup = '<div class="section-bg-watermark" aria-hidden="true">HORIZON</div>';
    } else if (f.id === 'frame-27') {
      watermarkMarkup = '<div class="section-bg-watermark" aria-hidden="true">TWILIGHT</div>';
    }

    // 2. QUIET ENDING (Frame 27: Final Master Photograph & Book Back-Cover)
    if (layout === 'quiet-ending') {
      html += `
            <section class="journal-section section-final theme-charcoal ${envClass}" id="${f.id}-section" ${dominantStyle}>
                ${renderSectionAtmosphere(f)}
                <div class="final-container">
                    <figure class="journal-figure reveal-scale has-editorial-marks${edgeClass}">
                        ${haloMarkup}
                        <img src="${f.image}" alt="${f.caption.kn || f.caption.en}" class="journal-photo uncropped-img" loading="lazy" decoding="async">
                    </figure>
                    <div class="caption-block final-caption-block">
                        <span class="micro-tag">${f.label}</span>
                        <h2 class="cap-editorial" id="cap-${f.id}">${f.caption[currentLang]}</h2>
                        <p class="desc-editorial" id="desc-${f.id}">${f.description[currentLang]}</p>
                        ${f.note ? `<span class="editorial-hand-note" id="note-${f.id}">${f.note[currentLang]}</span>` : ''}
                    </div>
                    
                    <!-- Book Back-Cover Ending Stage -->
                    <div class="closing-book-stage">
                        <!-- Visual Pause: Subtle Divider -->
                        <div class="closing-divider-line" aria-hidden="true"></div>

                        <!-- Closing Statement -->
                        <div class="closing-statement-wrap">
                            <p class="closing-quote">${uiStrings.closingQuote[currentLang]}</p>
                            <p class="closing-sub-quote">${uiStrings.closingSub[currentLang]}</p>
                        </div>

                        <!-- Actual Logo Asset (Appears ONLY once in the closing footer area) -->
                        <div class="footer-logo-wrap">
                            <img src="logo.svg" 
                                 alt="ಅಲೆಮಾರಿ ಪುಟಗಳು ಲಾಂಛನ" 
                                 class="closing-logo-img" 
                                 width="1536" 
                                 height="607" 
                                 loading="lazy" 
                                 decoding="async">
                        </div>

                        <!-- Small Editorial Detail -->
                        <p class="closing-meta">${uiStrings.closingMeta[currentLang]}</p>
                    </div>
                </div>
            </section>
            `;
      i++;
      continue;
    }

    // QUIET VISUAL PAUSE (Frame 16: Solitary boulder rest — Minimal typography & Breathing space)
    if (layout === 'quiet-pause') {
      html += `
            <section class="journal-section section-quiet-pause ${themeClass} ${envClass}" id="${f.id}-section" ${dominantStyle}>
                ${watermarkMarkup}
                ${renderSectionAtmosphere(f)}
                <div class="quiet-pause-stage">
                    <figure class="journal-figure quiet-pause-figure reveal-fade${edgeClass}">
                        ${haloMarkup}
                        <img src="${f.image}" alt="${f.caption.kn || f.caption.en}" class="quiet-pause-photo uncropped-img" loading="lazy" decoding="async">
                    </figure>
                    <div class="caption-block quiet-pause-caption">
                        <span class="micro-tag">${f.label}</span>
                        <h2 class="cap-editorial" id="cap-${f.id}">${f.caption[currentLang]}</h2>
                        <p class="desc-editorial" id="desc-${f.id}">${f.description[currentLang]}</p>
                        ${f.note ? `<span class="editorial-hand-note" id="note-${f.id}">${f.note[currentLang]}</span>` : ''}
                    </div>
                </div>
            </section>
            `;
      i++;
      continue;
    }

    // HIGH-DENSITY MEMORY WALL (Frames 17 to 19: Clean 3-photo exhibition cluster without technical clutter)
    if (layout === 'memory-wall-item') {
      const w0 = journal[i];     // Frame 17: Calm river boulders (large anchor)
      const w1 = journal[i + 1]; // Frame 18: Ocean gaze coastal rocks (landscape gaze)
      const w2 = journal[i + 2]; // Frame 19: Beach chair solitude (intimate stillness)
      const wallTheme = f.theme || 'stone';

      html += `
            <section class="journal-section section-memory-wall theme-${wallTheme} env-rock" id="memory-wall-section" ${dominantStyle}>
                <div class="section-bg-watermark" aria-hidden="true">GRANITE</div>
                ${renderSectionAtmosphere(w0)}
                <div class="memory-wall-grid">
                    <!-- Column 1: Frame 17 (River Anchor) -->
                    <div class="memory-wall-col col-primary">
                        <div class="memory-item item-frame-17" id="${w0.id}-section">
                            <figure class="journal-figure reveal-fade${w0.edgeTreatment ? ' edge-' + w0.edgeTreatment : ''}">
                                ${haloMarkup}
                                <img src="${w0.image}" alt="${w0.caption.kn || w0.caption.en}" class="memory-photo uncropped-img" loading="lazy" decoding="async">
                            </figure>
                            <div class="caption-block">
                                <span class="micro-tag">${w0.label}</span>
                                <h2 class="cap-editorial" id="cap-${w0.id}">${w0.caption[currentLang]}</h2>
                                <p class="desc-editorial" id="desc-${w0.id}">${w0.description[currentLang]}</p>
                                ${w0.note ? `<span class="editorial-hand-note" id="note-${w0.id}">${w0.note[currentLang]}</span>` : ''}
                            </div>
                        </div>
                    </div>

                    <!-- Column 2: Frame 18 (Ocean Gaze) + Frame 19 (Beach Chair) -->
                    <div class="memory-wall-col col-secondary">
                        <div class="memory-item item-frame-18" id="${w1.id}-section">
                            <figure class="journal-figure reveal-fade${w1.edgeTreatment ? ' edge-' + w1.edgeTreatment : ''}">
                                ${haloMarkup}
                                <img src="${w1.image}" alt="${w1.caption.kn || w1.caption.en}" class="memory-photo uncropped-img" loading="lazy" decoding="async">
                            </figure>
                            <div class="caption-block">
                                <span class="micro-tag">${w1.label}</span>
                                <h2 class="cap-editorial" id="cap-${w1.id}">${w1.caption[currentLang]}</h2>
                                <p class="desc-editorial" id="desc-${w1.id}">${w1.description[currentLang]}</p>
                                ${w1.note ? `<span class="editorial-hand-note" id="note-${w1.id}">${w1.note[currentLang]}</span>` : ''}
                            </div>
                        </div>

                        <div class="memory-item item-frame-19" id="${w2.id}-section">
                            <figure class="journal-figure reveal-fade${w2.edgeTreatment ? ' edge-' + w2.edgeTreatment : ''}">
                                ${haloMarkup}
                                <img src="${w2.image}" alt="${w2.caption.kn || w2.caption.en}" class="memory-photo uncropped-img" loading="lazy" decoding="async">
                            </figure>
                            <div class="caption-block">
                                <span class="micro-tag">${w2.label}</span>
                                <h2 class="cap-editorial" id="cap-${w2.id}">${w2.caption[currentLang]}</h2>
                                <p class="desc-editorial" id="desc-${w2.id}">${w2.description[currentLang]}</p>
                                ${w2.note ? `<span class="editorial-hand-note" id="note-${w2.id}">${w2.note[currentLang]}</span>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            `;
      i += 3;
      continue;
    }

    // CINEMATIC MASTER MOMENT (Frame 20: Grand 16:9 Forest Cascade)
    if (layout === 'cinematic-master') {
      html += `
            <section class="journal-section section-cinematic-master ${themeClass} ${envClass}" id="${f.id}-section" ${dominantStyle}>
                ${watermarkMarkup}
                ${renderSectionAtmosphere(f)}
                <div class="cinematic-master-stage">
                    <figure class="journal-figure cinematic-master-figure has-editorial-marks reveal-scale${edgeClass}">
                        ${haloMarkup}
                        <img src="${f.image}" alt="${f.caption.kn || f.caption.en}" class="cinematic-master-photo uncropped-img" loading="lazy" decoding="async">
                    </figure>
                    <div class="caption-block cinematic-master-caption">
                        <span class="micro-tag">${f.label}</span>
                        <h2 class="cap-editorial master-cap" id="cap-${f.id}">${f.caption[currentLang]}</h2>
                        <p class="desc-editorial master-desc" id="desc-${f.id}">${f.description[currentLang]}</p>
                    </div>
                </div>
            </section>
            `;
      i++;
      continue;
    }

    // 3. ASYMMETRIC DUO (Two complementary frames, one larger, one smaller, staggered)
    if (layout === 'asymmetric-duo' && f.duoRole === 'primary' && (i + 1 < journal.length) && journal[i + 1].layout === 'asymmetric-duo') {
      const f2 = journal[i + 1];
      const duoTheme = f.theme || f2.theme || 'mist';
      const duoEnv = f.atmosphere || f2.atmosphere || 'mist';
      html += `
            <section class="journal-section section-asymmetric-duo theme-${duoTheme} env-${duoEnv}" id="${f.id}-section" ${dominantStyle}>
                ${watermarkMarkup}
                ${renderSectionAtmosphere(f)}
                <div class="duo-stage">
                    <div class="duo-col duo-primary-col">
                        <figure class="journal-figure reveal-fade${edgeClass}">
                            ${haloMarkup}
                            <img src="${f.image}" alt="${f.caption.kn || f.caption.en}" class="duo-photo uncropped-img" loading="lazy" decoding="async">
                        </figure>
                        <div class="caption-block duo-caption">
                            <span class="micro-tag">${f.label}</span>
                            <h2 class="cap-editorial" id="cap-${f.id}">${f.caption[currentLang]}</h2>
                            <p class="desc-editorial" id="desc-${f.id}">${f.description[currentLang]}</p>
                            ${f.note ? `<span class="editorial-hand-note" id="note-${f.id}">${f.note[currentLang]}</span>` : ''}
                        </div>
                    </div>
                    <div class="duo-col duo-secondary-col" id="${f2.id}-section">
                        <figure class="journal-figure reveal-fade${f2.edgeTreatment ? ' edge-' + f2.edgeTreatment : ''}">
                            <div class="photo-mist-halo" aria-hidden="true" style="--photo-halo-tint: ${f2.haloTint || 'rgba(135,151,133,0.22)'};"></div>
                            <img src="${f2.image}" alt="${f2.caption.kn || f2.caption.en}" class="duo-photo uncropped-img" loading="lazy" decoding="async">
                        </figure>
                        <div class="caption-block duo-caption">
                            <span class="micro-tag">${f2.label}</span>
                            <h2 class="cap-editorial" id="cap-${f2.id}">${f2.caption[currentLang]}</h2>
                            <p class="desc-editorial" id="desc-${f2.id}">${f2.description[currentLang]}</p>
                            ${f2.note ? `<span class="editorial-hand-note" id="note-${f2.id}">${f2.note[currentLang]}</span>` : ''}
                        </div>
                    </div>
                </div>
            </section>
            `;
      i += 2;
      continue;
    }

    // 4. SPLIT VISUAL (Side-by-side balanced frames)
    if (layout === 'split-visual' && f.splitRole === 'a' && (i + 1 < journal.length) && journal[i + 1].layout === 'split-visual') {
      const f2 = journal[i + 1];
      const splitTheme = f.theme || f2.theme || 'mist';
      const splitEnv = f.atmosphere || f2.atmosphere || 'mist';
      html += `
            <section class="journal-section section-split-visual theme-${splitTheme} env-${splitEnv}" id="${f.id}-section" ${dominantStyle}>
                ${watermarkMarkup}
                ${renderSectionAtmosphere(f)}
                <div class="split-visual-stage">
                    <div class="split-col split-col-a">
                        <figure class="journal-figure reveal-fade${edgeClass}">
                            ${haloMarkup}
                            <img src="${f.image}" alt="${f.caption.kn || f.caption.en}" class="split-photo uncropped-img" loading="lazy" decoding="async">
                        </figure>
                        <div class="caption-block split-caption">
                            <span class="micro-tag">${f.label}</span>
                            <h2 class="cap-editorial" id="cap-${f.id}">${f.caption[currentLang]}</h2>
                            <p class="desc-editorial" id="desc-${f.id}">${f.description[currentLang]}</p>
                            ${f.note ? `<span class="editorial-hand-note" id="note-${f.id}">${f.note[currentLang]}</span>` : ''}
                        </div>
                    </div>
                    <div class="split-col split-col-b" id="${f2.id}-section">
                        <figure class="journal-figure reveal-fade${f2.edgeTreatment ? ' edge-' + f2.edgeTreatment : ''}">
                            <div class="photo-mist-halo" aria-hidden="true" style="--photo-halo-tint: ${f2.haloTint || 'rgba(135,151,133,0.22)'};"></div>
                            <img src="${f2.image}" alt="${f2.caption.kn || f2.caption.en}" class="split-photo uncropped-img" loading="lazy" decoding="async">
                        </figure>
                        <div class="caption-block split-caption">
                            <span class="micro-tag">${f2.label}</span>
                            <h2 class="cap-editorial" id="cap-${f2.id}">${f2.caption[currentLang]}</h2>
                            <p class="desc-editorial" id="desc-${f2.id}">${f2.description[currentLang]}</p>
                            ${f2.note ? `<span class="editorial-hand-note" id="note-${f2.id}">${f2.note[currentLang]}</span>` : ''}
                        </div>
                    </div>
                </div>
            </section>
            `;
      i += 2;
      continue;
    }

    // 5. CINEMATIC FULL FRAME (16:9 or edge-to-edge landscape)
    if (layout === 'cinematic-full') {
      html += `
            <section class="journal-section section-cinematic-full ${themeClass} ${envClass}" id="${f.id}-section" ${dominantStyle}>
                ${watermarkMarkup}
                ${renderSectionAtmosphere(f)}
                <div class="cinematic-full-stage">
                    <figure class="journal-figure cinematic-full-figure has-editorial-marks reveal-scale${edgeClass}">
                        ${haloMarkup}
                        <img src="${f.image}" alt="${f.caption.kn || f.caption.en}" class="cinematic-full-photo uncropped-img" loading="lazy" decoding="async">
                    </figure>
                    <div class="caption-block cinematic-caption-wrap">
                        <span class="micro-tag">${f.label}</span>
                        <h2 class="cap-editorial" id="cap-${f.id}">${f.caption[currentLang]}</h2>
                        <p class="desc-editorial" id="desc-${f.id}">${f.description[currentLang]}</p>
                        ${f.note ? `<span class="editorial-hand-note" id="note-${f.id}">${f.note[currentLang]}</span>` : ''}
                    </div>
                </div>
            </section>
            `;
      i++;
      continue;
    }

    // 6. EDITORIAL OFFSET (Aligned left or right)
    if (layout === 'editorial-offset') {
      const align = f.align || 'right';
      html += `
            <section class="journal-section section-editorial-offset ${themeClass} ${envClass}" id="${f.id}-section" ${dominantStyle}>
                ${watermarkMarkup}
                ${renderSectionAtmosphere(f)}
                <div class="offset-container align-${align}">
                    <figure class="offset-figure reveal-fade${edgeClass}">
                        ${haloMarkup}
                        <img src="${f.image}" alt="${f.caption.kn || f.caption.en}" class="offset-photo uncropped-img" loading="lazy" decoding="async">
                    </figure>
                    <div class="caption-block offset-caption-block">
                        <span class="micro-tag">${f.label}</span>
                        <h2 class="cap-editorial" id="cap-${f.id}">${f.caption[currentLang]}</h2>
                        <p class="desc-editorial" id="desc-${f.id}">${f.description[currentLang]}</p>
                        ${f.note ? `<span class="editorial-hand-note" id="note-${f.id}">${f.note[currentLang]}</span>` : ''}
                    </div>
                </div>
            </section>
            `;
      i++;
      continue;
    }

    // 7. VERTICAL STORY (Portrait natural composition with text beside)
    if (layout === 'vertical-story') {
      const align = f.align || 'photo-left';
      html += `
            <section class="journal-section section-vertical-story ${themeClass} ${envClass}" id="${f.id}-section" ${dominantStyle}>
                ${watermarkMarkup}
                ${renderSectionAtmosphere(f)}
                <div class="vertical-story-stage ${align}">
                    <div class="vertical-photo-col">
                        <figure class="journal-figure reveal-fade${edgeClass}">
                            ${haloMarkup}
                            <img src="${f.image}" alt="${f.caption.kn || f.caption.en}" class="vertical-story-photo uncropped-img" loading="lazy" decoding="async">
                        </figure>
                    </div>
                    <div class="vertical-text-col">
                        <div class="caption-block">
                            <span class="micro-tag">${f.label}</span>
                            <h2 class="cap-editorial" id="cap-${f.id}">${f.caption[currentLang]}</h2>
                            <p class="desc-editorial" id="desc-${f.id}">${f.description[currentLang]}</p>
                            ${f.note ? `<span class="editorial-hand-note" id="note-${f.id}">${f.note[currentLang]}</span>` : ''}
                        </div>
                    </div>
                </div>
            </section>
            `;
      i++;
      continue;
    }

    // 8. PHOTO + TEXT COUNTERWEIGHT
    if (layout === 'counterweight') {
      const align = f.align || 'photo-left';
      html += `
            <section class="journal-section section-counterweight ${themeClass} ${envClass}" id="${f.id}-section" ${dominantStyle}>
                ${watermarkMarkup}
                ${renderSectionAtmosphere(f)}
                <div class="counterweight-stage ${align}">
                    <div class="cw-photo-col">
                        <figure class="journal-figure reveal-fade${edgeClass}">
                            ${haloMarkup}
                            <img src="${f.image}" alt="${f.caption.kn || f.caption.en}" class="cw-photo uncropped-img" loading="lazy" decoding="async">
                        </figure>
                    </div>
                    <div class="cw-text-col">
                        <div class="caption-block">
                            <span class="micro-tag">${f.label}</span>
                            <h2 class="cap-editorial" id="cap-${f.id}">${f.caption[currentLang]}</h2>
                            <p class="desc-editorial" id="desc-${f.id}">${f.description[currentLang]}</p>
                            ${f.note ? `<span class="editorial-hand-note" id="note-${f.id}">${f.note[currentLang]}</span>` : ''}
                        </div>
                    </div>
                </div>
            </section>
            `;
      i++;
      continue;
    }

    // 9. SMALL MEMORY (Intimate, centered)
    if (layout === 'small-memory') {
      html += `
            <section class="journal-section section-small-memory ${themeClass} ${envClass}" id="${f.id}-section" ${dominantStyle}>
                ${watermarkMarkup}
                ${renderSectionAtmosphere(f)}
                <div class="small-memory-stage">
                    <figure class="journal-figure reveal-fade${edgeClass}">
                        ${haloMarkup}
                        <img src="${f.image}" alt="${f.caption.kn || f.caption.en}" class="small-memory-photo uncropped-img" loading="lazy" decoding="async">
                    </figure>
                    <div class="caption-block small-memory-caption">
                        <span class="micro-tag">${f.label}</span>
                        <h2 class="cap-editorial" id="cap-${f.id}">${f.caption[currentLang]}</h2>
                        <p class="desc-editorial" id="desc-${f.id}">${f.description[currentLang]}</p>
                        ${f.note ? `<span class="editorial-hand-note" id="note-${f.id}">${f.note[currentLang]}</span>` : ''}
                    </div>
                </div>
            </section>
            `;
      i++;
      continue;
    }

    // 10. CINEMATIC FEATURE WIDE (Default for wide landscapes)
    const isMajorFeature = (f.id === 'frame-04' || f.id === 'frame-11' || f.id === 'frame-15' || f.id === 'frame-24');
    const marksMarkup = isMajorFeature ? '<div class="editorial-mark-tl" aria-hidden="true"></div><div class="editorial-mark-br" aria-hidden="true"></div>' : '';
    const marksClass = isMajorFeature ? ' has-editorial-marks' : '';

    html += `
        <section class="journal-section section-feature-wide ${themeClass} ${envClass}" id="${f.id}-section" ${dominantStyle}>
            ${watermarkMarkup}
            ${renderSectionAtmosphere(f)}
            <div class="feature-wide-stage">
                <figure class="journal-figure reveal-fade${marksClass}${edgeClass}">
                    ${haloMarkup}
                    <img src="${f.image}" alt="${f.caption.kn || f.caption.en}" class="feature-wide-photo uncropped-img" loading="lazy" decoding="async">
                </figure>
                <div class="caption-block">
                    <span class="micro-tag">${f.label}</span>
                    <h2 class="cap-editorial" id="cap-${f.id}">${f.caption[currentLang]}</h2>
                    <p class="desc-editorial" id="desc-${f.id}">${f.description[currentLang]}</p>
                    ${f.note ? `<span class="editorial-hand-note" id="note-${f.id}">${f.note[currentLang]}</span>` : ''}
                </div>
            </div>
        </section>
        `;
    i++;
  }

  canvas.innerHTML = html;
}

/* --------------------------------------------------------------------------
   04. SMOOTH SCROLL & CINEMATIC GSAP ANIMATIONS
   -------------------------------------------------------------------------- */
function initializeAnimations() {
  // Initialize Lenis smooth scroll
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }

  // Initialize ScrollTrigger animations
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Progress bar scrub
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#journal-canvas',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3
        }
      });
    }

    // Reveal animations for figures and captions
    const revealScaleElements = document.querySelectorAll('.reveal-scale');
    revealScaleElements.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.95, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 0.5
          }
        }
      );
    });

    const revealFadeElements = document.querySelectorAll('.reveal-fade');
    revealFadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }
}

/* --------------------------------------------------------------------------
   05. APPLICATION INITIALIZATION
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Render full continuous editorial canvas
  renderJournalCanvas();

  // Initialize Language toggle event listener
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'kn' ? 'en' : 'kn');
    });
  }

  // Initialize GSAP & Lenis interactions
  initializeAnimations();
});
