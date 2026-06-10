# Retention Experience Skill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create the `retention-experience` skill (design-time retention-psychology layer, Vantera-tuned) and chain it ahead of `ultimate-ui-builder`.

**Architecture:** One new single-file skill at `~/.claude/skills/retention-experience/SKILL.md` that produces a 5-line Retention Brief for flow-shaped UI work, plus a two-line routing edit in `~/.claude/skills/ultimate-ui-builder/SKILL.md` so flow work invokes the new skill first. No new MCPs or plugins; verification is behavioral (subagent dry-runs).

**Tech Stack:** Claude Code skills (markdown + YAML frontmatter), git. Spec: `docs/superpowers/specs/2026-06-10-retention-experience-skill-design.md`.

---

### Task 1: Create the retention-experience skill file

**Files:**
- Create: `/Users/aidenrigali/.claude/skills/retention-experience/SKILL.md`

- [ ] **Step 1: Write the skill file with exactly this content**

```markdown
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
```

- [ ] **Step 2: Verify the file exists and frontmatter is intact**

Run: `head -5 ~/.claude/skills/retention-experience/SKILL.md`
Expected: the `---` line, then `name: retention-experience`, then the `description:` line.

- [ ] **Step 3: Commit**

```bash
cd /Users/aidenrigali && git add .claude/skills/retention-experience/SKILL.md && git -c user.name="Aiden Rigali" -c user.email="aidenrigali04@gmail.com" commit -m "feat: add retention-experience skill (design-time psychology layer)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

### Task 2: Chain edit in ultimate-ui-builder

**Files:**
- Modify: `/Users/aidenrigali/.claude/skills/ultimate-ui-builder/SKILL.md:24-26` (the "Routing: which path, when" section)

- [ ] **Step 1: Add the chain line at the top of the routing list**

Edit `~/.claude/skills/ultimate-ui-builder/SKILL.md`. Find:

```markdown
## Routing: which path, when

- **New page/app, direction not chosen** → full pipeline below.
```

Replace with:

```markdown
## Routing: which path, when

- **Flow-shaped work** (onboarding, dashboards, empty states, pricing, settings, notifications/lifecycle) → invoke the `retention-experience` skill FIRST; its 5-line Retention Brief becomes the step-1 Brief below. Skip only for atomic components with no journey context.
- **New page/app, direction not chosen** → full pipeline below.
```

- [ ] **Step 2: Verify the edit**

Run: `grep -n "retention-experience" ~/.claude/skills/ultimate-ui-builder/SKILL.md`
Expected: one match inside the Routing section.

- [ ] **Step 3: Commit**

```bash
cd /Users/aidenrigali && git add .claude/skills/ultimate-ui-builder/SKILL.md && git -c user.name="Aiden Rigali" -c user.email="aidenrigali04@gmail.com" commit -m "feat: chain retention-experience ahead of ultimate-ui-builder for flow work

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

### Task 3: Behavioral verification (dry-runs)

**Files:** none (behavioral test of skill triggering; skills are markdown, so the "test suite" is subagent dry-runs per the spec's Testing section)

- [ ] **Step 1: Dry-run the flow path**

Dispatch a general-purpose subagent with exactly this prompt:

> "You have a skill at ~/.claude/skills/retention-experience/SKILL.md and one at ~/.claude/skills/ultimate-ui-builder/SKILL.md. Read both. Then, following those skills' instructions, plan (do NOT build) the empty state for Vantera's campaign dashboard — the screen a new user sees before launching their first campaign. Report the Retention Brief you would produce and which skill handles visuals."

Expected in the subagent's report: a 5-line Retention Brief with user state = new, a named motivation lever (endowed progress, B=MAP, or time-to-value are all acceptable), one desired action (launch/create first campaign), a value-proof line, a churn risk line — and visuals routed to ultimate-ui-builder.

- [ ] **Step 2: Dry-run the pass-through path**

Dispatch a general-purpose subagent with exactly this prompt:

> "You have a skill at ~/.claude/skills/retention-experience/SKILL.md. Read it. A user asks: 'restyle this button to match our tokens.' Per the skill, does retention-experience apply? Answer in one sentence."

Expected: the subagent answers that it does NOT apply / "no retention surface" — passes through to the UI builder.

- [ ] **Step 3: Fix and re-run if either dry-run fails**

If Step 1 produces no Brief or Step 2 fires the skill on the button, tighten the frontmatter `description` wording in `retention-experience/SKILL.md` (that is the trigger surface), re-run the failing dry-run, and amend the Task 1 commit:

```bash
cd /Users/aidenrigali && git add .claude/skills/retention-experience/SKILL.md && git -c user.name="Aiden Rigali" -c user.email="aidenrigali04@gmail.com" commit --amend --no-edit
```

- [ ] **Step 4: Report results**

State both dry-run outcomes to the user verbatim enough to judge (the Brief produced, and the pass-through sentence). Note that the skill becomes available to the main session on next session start or skill reload.
