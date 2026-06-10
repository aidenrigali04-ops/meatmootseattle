---
name: ultimate-ui-builder
description: Use for any UI work — building, designing, or improving pages, screens, dashboards, landing pages, components, or whole product surfaces. Triggers on explicit asks ("build the dashboard", "design the onboarding", "/ui", "/21st", "use stitch", "use magic", mockups or variants before code) AND on goal-language ("make it look premium", "this looks cluttered", "make it pop", "clean and minimal") even if UI is never mentioned. Routes between Stitch mockups, 21st.dev components, and frontend-design craft.
---

# Ultimate UI Builder

One pipeline from three tools with non-overlapping strengths:

| Tool | Strength | Output |
|------|----------|--------|
| **Stitch MCP** | Visual exploration BEFORE code: design systems (tokens), screen mockups, divergent variants | Viewable designs in Stitch UI |
| **Magic MCP** | Production React components sourced from 21st.dev; component refinement; brand logos | Code snippets you integrate |
| **frontend-design skill** | Quality bar while writing final code: distinctive typography, motion, composition; anti-"AI slop" | Craft applied to your code |

**Core principles:**
- Stitch decides what it looks like. Magic supplies proven component bones. frontend-design makes the final code distinctive. Don't hand-code what Stitch should explore visually; don't let a snippet's generic styling survive into the product.
- **No AI slop ships — on ANY path.** Not just the full pipeline: a quick component, a refiner pass, a one-line tweak all end with the slop check below. Generic output is a defect, same as a broken build.
- **Distinctive ≠ busy.** frontend-design pushes bold; for product UI (dashboards, settings, tables) the bold choice is restraint — one characterful type pairing, one disciplined accent, generous space, and nothing that doesn't earn its place. Save maximalism for marketing pages.
- **Tokens are the contract.** Everything — Stitch mockups, Magic snippets, hand-written code — consumes one token layer. When screens drift apart visually, the token layer was skipped.

**Setup:** `mcp__stitch__*` and `mcp__magic__*` tools are deferred — load schemas first, e.g. `ToolSearch("select:mcp__stitch__create_project,mcp__stitch__generate_screen_from_text,mcp__magic__21st_magic_component_builder")`. Invoke the craft layer via Skill tool: `frontend-design:frontend-design`.

## Routing: which path, when

- **Flow-shaped work** (onboarding, dashboards, empty states, pricing, settings, notifications/lifecycle) → invoke the `retention-experience` skill FIRST; its 5-line Retention Brief becomes the step-1 Brief below. Skip only for atomic components with no journey context.
- **New page/app, direction not chosen** → full pipeline below.
- **Existing project with established styles** → SKIP Stitch design-system creation. Check for a `DESIGN.md` first (a prior session may have written one); otherwise extract tokens from the codebase (globals.css, tailwind.config, theme files). Treat them as the contract. Use Stitch only to mock new layouts, seeding its design system to match the existing brand.
- **Single component, direction known** → `21st_magic_component_builder` → restyle to tokens → frontend-design polish.
- **Improve an existing component** (molecule-sized, NOT a page) → `21st_magic_component_refiner`. Pages: refactor yourself with frontend-design.
- **"Make it look better / premium / less cluttered"** → diagnose first: usually too many competing elements, weak hierarchy, generic fonts. Remove before adding; then craft pass.
- **Brand/company logos** → `mcp__magic__logo_search` (TSX/JSX/SVG), never hand-drawn SVGs.
- **Browse patterns without generating** → `21st_magic_component_inspiration`.

## Full pipeline (new surface)

**1. Brief.** Before any tool: what is this screen *for*, who uses it, and what one action matters most? Then commit to a tone and one memorable differentiator (frontend-design's design-thinking step). Ground in real material — schema, routes, existing components — not guesses. 2–3 sentences, stated to the user.

**2. Direction in Stitch.**
- `create_project` → `create_design_system` → `update_design_system` to apply. Pick distinctive fonts from Stitch's enum (avoid Inter/Roboto defaults; pair characterful headline + refined body), one accent `customColor`, `roundness` matching tone.
- `generate_screen_from_text` for the key screen — always pass the `designSystem` asset id and `deviceType`. Model: `GEMINI_3_1_PRO` for the key screen, `GEMINI_3_FLASH` for fast iteration. If the response's `output_components` contains suggestions, surface them to the user.
- Direction uncertain? `generate_variants` (variantCount 3, `creativeRange: EXPLORE`; `REIMAGINE` for radical).
- Project has a DESIGN.md? `upload_design_md` (base64) → `create_design_system_from_design_md` instead.

**3. Approval gate.** Share the Stitch link; user picks before code is written. Running autonomously? Generate variants anyway, pick the strongest, state the choice and that alternatives exist in Stitch. Once a direction is approved, write it to `DESIGN.md` in the project root — exact font families, palette hex values, radius, tone, the differentiator. Future sessions inherit the direction instead of re-deriving it, and the file feeds `upload_design_md` the next time a screen is mocked.

**4. Tokens to code.** Translate the approved design system into CSS variables / Tailwind config FIRST: colors, exact font families, radius from `roundness`, spacing scale.

**5. Components via Magic.** Per major piece: `21st_magic_component_builder` with real absolute paths and a precise `standaloneRequestQuery`. It returns only a snippet — you integrate it, then **immediately restyle to the token layer**.

**6. Craft pass — frontend-design.** Invoke the skill on the assembled page: one orchestrated load reveal (staggered, not scattered), hover states, background atmosphere, spacing rhythm, the differentiator from the brief. Match intensity to surface type (principle 2).

**7. Verify visually, then refine.** Run the app, screenshot the built page, and compare it side-by-side against the approved Stitch screen — read both images and call out drift in fonts, spacing, and color rather than assuming "close enough." Component feedback → refiner. Direction feedback → `edit_screens` in Stitch, then re-sync code and re-compare.

## Slop check — mandatory before declaring ANY UI work done

Scan the output (yes, even a single button) for these tells; any hit gets fixed before you report done:

- Inter, Roboto, Arial, or system font stacks — swap for the project's chosen families.
- Purple/indigo gradients on white, or `blue-500`-style framework default colors — replace with the token palette.
- An icon on every row/card, an emoji in every heading — strip to the few that carry meaning.
- Evenly-weighted timid palettes, gray-on-gray-on-gray — one dominant surface tone, one sharp accent.
- Centered-hero + three-feature-cards + testimonial template layouts — restructure with real hierarchy.
- Placeholder voice ("Lorem", "Your Title Here", "Feature 1") — write real copy from the product context.
- Default shadows/radii from a snippet that don't match the design system — normalize to tokens.
- Low-contrast accent text, missing focus states, animation without a `prefers-reduced-motion` fallback — distinctive ≠ inaccessible.
- Colors "close enough" to the approved mockup — not close enough; copy exact hex from the design system.
- Page code written with no approved direction — back to steps 2–3.
- A panel/stat/gradient ADDED to fix a cluttered screen — remove instead.

Magic snippets and Stitch defaults are the two main slop sources: snippets arrive in 21st.dev house style, and a vague Stitch prompt makes Gemini reach for defaults. So Stitch prompts must name fonts, palette, and tone explicitly, and every snippet gets restyled on arrival — the check above is the backstop, not the only defense.

## Operational gotchas

- **Stitch generation takes minutes. NEVER retry** `generate_screen_from_text`/`edit_screens` on timeout — poll `get_screen` every 30s (up to 10×). Connection error ≠ failure; generation usually succeeded.
- Stitch ids: `projectId`/`screenId` carry no `projects/`/`screens/` prefix; `get_screen` wants the full resource name; `apply_design_system` needs screen **instance** ids from `get_project`, not source screen ids.
- Magic `searchQuery`: 2–4 words ("pricing table", "kanban board"). `standaloneRequestQuery` carries the real spec — be precise there.
- Stitch fonts are a fixed enum — confirm your code uses the exact same families (Google Fonts) or the mockup and product diverge.
