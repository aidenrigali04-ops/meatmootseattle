---
name: retention-experience
description: Use BEFORE any flow-shaped UI work — onboarding, dashboards, empty states, pricing, settings, notifications, lifecycle emails — AND on retention goal-language ("users aren't coming back", "improve activation", "reduce churn", "make it sticky", "show more value") even if UI is never mentioned. Produces a 5-line Retention Brief that feeds ultimate-ui-builder's Brief step. NOT for atomic components with no journey context (a button, a table style) — state "no retention surface" and pass through.
---

# Retention Experience

Design-time psychology layer, tuned for Vantera (B2B outreach SaaS). This skill decides WHAT a surface must do to retain users; `ultimate-ui-builder` decides HOW it looks. Never skip to visuals on flow-shaped work.

**The Brief is the contract.** Every flow-shaped surface gets a 5-line Retention Brief before any visual decision. A screen shipped without one means the psychology layer was skipped — same defect class as skipping the token layer in the UI builder.

## Retention Brief (the only output artifact)

State these five lines to the user, then hand them to `ultimate-ui-builder` step 1 as its Brief:

1. **User state** — new / activated / habitual / at-risk (which lifecycle stage this surface serves)
2. **Motivation lever** — the ONE principle applied, named from the catalog below
3. **One desired action** — the single behavior this surface must produce
4. **Value proof** — what the user sees that proves the product is working. Ground it in real data: read the Supabase schema or codebase first; never placeholder numbers.
5. **Churn risk addressed** — the specific drop-off this surface defuses

## Framework catalog — when to reach for what

| Principle | Reach for it when | Vantera example |
|---|---|---|
| Fogg B=MAP | User isn't acting despite wanting to | Cut steps between signup and first campaign |
| Time-to-value | Designing anything pre-activation | Everything before first positive reply is overhead — compress it |
| Endowed progress | Onboarding/setup flows | Checklist starts at 2/7 done (account created, email verified) |
| Goal-gradient | Progress displays | Pipeline progress toward the MRR goal set at onboarding |
| Hook model | Recurring-use surfaces | Reply notification → open → respond → invest in next campaign |
| Variable reward | Notification/feed design | Replies arrive unpredictably — make checking rewarding, not anxious |
| Loss aversion | At-risk/renewal surfaces | "12 warm leads going cold" beats "re-engage your leads" |
| Peak-end rule | Success moments | Booked meeting = celebration moment, never a silent table-row update |
| Commitment/consistency | Goal-setting flows | Onboarding MRR goal is a commitment device — reference it everywhere |
| Social proof / defaults | Choice-heavy screens | Pre-built campaign templates as defaults, not blank editors |

## Vantera playbook

- **Aha moment:** first positive reply (fast) / first booked meeting (deep). Onboarding is measured against time-to-first-reply.
- **Activation path:** connect LinkedIn via Unipile → define ICP → launch first campaign → first reply. Each step's friction gets the B=MAP treatment.
- **Habit loop:** weekly campaign-review ritual — the dashboard is the Monday-morning destination.
- **Value proof:** meetings booked + pipeline value vs. the MRR goal, always visible.
- **Known churn cliffs:** empty dashboard before first campaign; silent waiting period after launch (show activity, not silence); single-seat accounts (team invites are a retention feature — surface them).

## Churn Check — mandatory before declaring ANY flow work done

Scan the designed/built surface; any hit gets fixed before reporting done:

- Empty state with no next action (dead end)
- Progress shown with no goal to progress toward
- Value delivered but never displayed to the user
- A success moment that renders as a silent data update
- Friction (form fields, steps, choices) placed before the aha moment that could come after it
- Motivational copy with placeholder numbers instead of the user's real data
- An at-risk signal (usage cliff) with no designed response
- Notification that demands attention but delivers no reward

## Tool routing — no new installs

- **Supabase MCP / codebase reads** — grounding only: real schema and counts so value-proof copy uses actual data.
- **Trigger.dev MCP** — the off-screen lifecycle half (weekly ROI digest, reply alerts, re-engagement). This skill designs those touchpoints as part of the flow; implementation routes to Trigger (already in the Vantera stack).
- **Stitch / Magic / frontend-design** — never called from here; all visual work goes through `ultimate-ui-builder`.
- Clay, Apollo, Vibe Prospecting, Figma, Windsor.ai — out of the hot path. Windsor/Supabase analytics are a future measurement extension, not part of this skill.

## Edge handling

- Atomic component, no journey context → state "no retention surface", pass straight to `ultimate-ui-builder`.
- Running autonomously → produce the Brief anyway and state the assumptions made.
