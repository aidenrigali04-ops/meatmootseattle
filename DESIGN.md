# Meat Moot Seattle — Design Direction

Source: the Framer build at individual-balance-288915.framer.app (based on "The Obscura" template), refined.

## Tone
Low-light, upscale smokehouse. Fire against black. Editorial serif headlines, quiet sans body, a single gold accent. Restraint everywhere except the food photography.

## Differentiator
Fire and smoke as atmosphere: the hero brisket drifts slowly out of a flame-lit black field with a faint ember glow; warm radial "ember" light leaks into the lunch and footer bands. Signature cuts swap like plates landing on the table.

## Tokens (exact)
| Token | Value |
| --- | --- |
| Ink (background) | `#0b0b0c` |
| Ink warm (bands) | `#120e0a` |
| Ink raised (surfaces) | `#151311` |
| Cream (text) | `#ece7df` |
| Cream soft (body) | `#c9c3b8` |
| Muted (labels) | `#8a857c` |
| Gold (accent) | `#b08d57` |
| Gold bright (hover/focus) | `#c9a46c` |
| Ember (glow, rgb) | `214 120 40` |
| Lines | `rgb(236 231 223 / 0.1)` |

- Display: **Cormorant** 300/400/500 + italic (self-hosted via Fontsource)
- Body: **DM Sans Variable** (self-hosted)
- Radius: `2px` (near-square, matches the Framer buttons)
- Buttons: transparent with 1px gold border, uppercase 0.2em tracking; gold fill rises from the bottom on hover.
- Eyebrows: uppercase, 0.2em tracking, muted or gold.

## Rules
- One accent (gold). Green appears only in the halal badge.
- Never use the Obscura template's bar/cocktail imagery — food and Seattle room only.
- Every animation has a `prefers-reduced-motion` fallback.
