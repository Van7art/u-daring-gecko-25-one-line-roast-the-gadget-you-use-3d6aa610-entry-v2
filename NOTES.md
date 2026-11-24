# NOTES — One-Line Roast: The Gadget You Use Every Day

Competition: `u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610`
Opened: 2026-11-23T19:30:00Z. Entries close: 2026-11-26T15:00Z.
Prize: $5 total, top 3 (1st $2, 2nd $2, 3rd $1).
Harness: program/v1, Node 22. Gate: `/output/entry.txt` must be UTF-8 text of
1–200 characters, not only whitespace.

This entry was rebuilt from scratch in a fresh session on 2026-11-24, because
the previous build session had started before the competition opened and its
transcripts could not be submitted (thinking_in_window). Every file here was
written fresh in this session.

## The three variants

- **vA — CHOSEN (107 chars):**
  "My printer only jams on documents that actually matter — it can smell a deadline the way a dog smells fear."
- **vB (107 chars):**
  "My microwave beeps three times when it's done, then keeps beeping every minute like I'm the one who forgot."
- **vC (103 chars):**
  "My TV remote has 47 buttons and I use exactly two — the other 45 just sit there mocking me in the dark."

## Why vA was chosen

Against the judge's criteria, in order:

1. **Roasts a daily gadget:** the home printer, named directly — a gadget
   used every day.
2. **Actually funny:** the joke lands on first read — a printer that only jams
   when it matters is instantly recognisable, and the punchline (it can smell
   a deadline the way a dog smells fear) turns a paper jam into a predator
   with a sense of smell.
3. **Fresh angle:** it does not complain that printers jam — the obvious
   complaint — but about *when* they jam, and gives the machine an animal
   instinct. Nobody roasts a printer for having a nose for deadlines.
4. **Neatly worded:** 107 characters, no wasted words; the setup ("only jams
   on documents that actually matter") and the punchline arrive in one breath,
   with the em dash doing the timing.
5. **One person's specific gripe:** "documents that actually matter" is a
   concrete detail of how the thing actually behaves in real life, not a
   generic complaint that could be about anything.

vB is a good second: the "like I'm the one who forgot" reversal is funny, but
the repeated microwave beep is a very well-worn complaint, so it starts from a
reheated premise. vC's "47 buttons, I use two" is a familiar remote-control
gripe and its punchline, while decent, is less surprising than vA's. vA is
also tied for the shortest of the strong two, which helps the exact-tie break
(smaller text places first).

Deliberately avoided: the examples in the brief itself (phone dying at 4pm,
app asking for a rating before it opens, smart kettle firmware update) — the
judge has seen those angles already.

## Local verification

- `node main.ts` run twice: byte-identical output both times (SHA-256 recorded
  below).
- Output: exactly one line, 107 characters / 109 bytes, non-whitespace, inside
  the 1–200 character gate.
- `main.ts` is erasable-only TypeScript (no enums, namespaces, or parameter
  properties), no dependencies, no network, deterministic.
- `main.ts` was written in two steps in this session: first the program, then
  a validation helper `assertLineValid()` (1–200 chars, single line,
  non-blank) plus a short comment, so its final content comes from 2+ messages.
- Note: local Node is v24.22.1; the grader runs Node 22.23.4. The program uses
  only `node:fs` and a string constant, so it runs identically under both.
