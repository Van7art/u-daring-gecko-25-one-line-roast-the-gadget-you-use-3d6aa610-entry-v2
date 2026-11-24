// One-Line Roast: The Gadget You Use Every Day (variant A — chosen)
// Writes exactly one roast line to /output/entry.txt.
// Node 22, erasable-only TypeScript, no dependencies, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My printer only jams on documents that actually matter — it can smell a deadline the way a dog smells fear.";

// Validates the roast line against the competition gate before writing:
// exactly one line, 1–200 characters, not only whitespace.
function assertLineValid(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("Roast line must not be blank.");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Roast line must be a single line.");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error("Roast line must be 1–200 characters.");
  }
}

assertLineValid(LINE);

mkdirSync("/output", { recursive: true });
// Gate: the line only reaches /output/entry.txt after passing
// assertLineValid above; a failed check throws before any write.
writeFileSync("/output/entry.txt", LINE, "utf8");
