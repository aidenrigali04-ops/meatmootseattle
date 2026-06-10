# Design: `retention-experience` skill

**Date:** 2026-06-10
**Status:** Approved (Approach A — lean single-file skill + chain edit)

## Purpose

A design-time psychology layer that fires before `ultimate-ui-builder` on any flow-shaped work. It applies retention psychology (activation, motivation, habit loops, churn defense) to decide WHAT gets built; the UI builder then decides HOW it looks. Tuned to Vantera (B2B outreach SaaS). No new MCPs or plugins are installed — the skill is knowledge plus routing over existing tools.

## Deliverables

1. New skill: `~/.claude/skills/retention-experience/SKILL.md` — single file, same density discipline as `ultimate-ui-builder`.
2. Edit to `~/.claude/skills/ultimate-ui-builder/SKILL.md` routing section (two lines): flow-shaped work invokes `retention-experience` first; its Retention Brief becomes the step-1 Brief.

## Trigger (frontmatter description)

Fires on:
- Flow-shaped UI work: onboarding, dashboards, empty states, pricing, settings, notifications, emails.
- Retention goal-language even when UI is never mentioned: "users aren't coming back", "improve activation", "reduce churn", "make it sticky", "show more value".

Does NOT fire for atomic components with no user-journey context (a button, a table style). In that case the skill states "no retention surface" and passes through to the UI builder.

## The Retention Brief — the handoff contract

The skill's only output artifact. Five lines, produced before any visual decision, consumed by `ultimate-ui-builder` step 1:

1. **User state** — new / activated / habitual / at-risk (lifecycle stage this surface serves)
2. **Motivation lever** — the one psychology principle applied, named explicitly
3. **One desired action** — the single behavior this surface must produce
4. **Value proof** — what the user sees that proves the product is working (real data, never placeholder)
5. **Churn risk addressed** — the specific drop-off this surface defuses

Rule: if a screen ships without a Brief, the psychology layer was skipped (analog of "tokens are the contract" in the UI builder).

## Framework catalog (decision-mapped)

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
- **Known churn cliffs:** empty dashboard before first campaign; silent waiting period after launch (show activity, not silence); single-seat accounts (Phase 3 team invites are a retention feature — surface them).

## Churn Check — mandatory before declaring flow work done

Any hit gets fixed before reporting done:

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
- **Trigger.dev MCP** — referenced for the off-screen lifecycle half (weekly ROI digest, reply alerts, re-engagement). The skill designs these; implementation routes to Trigger (already in the Vantera stack).
- **Stitch / Magic / frontend-design** — never called directly; all visual work goes through the `ultimate-ui-builder` chain.
- Clay, Apollo, Vibe Prospecting, Figma, Windsor.ai — out of the hot path. Windsor/Supabase analytics are reserved for a future measurement extension (Approach C: event taxonomy + churn dashboards), which appends to this skill without restructuring.

## Edge handling

- Trivial component, no journey context → state "no retention surface", pass through.
- Autonomous runs → produce the Brief anyway and state assumptions.

## Testing

Dry-run the chain on one real Vantera surface (campaign dashboard empty state): verify the skill triggers, produces a concrete Brief grounded in real schema, hands off to `ultimate-ui-builder`, and the Brief demonstrably changes what gets designed. Verify the pass-through path on an atomic component.
