// The Funniest One-Line Resignation Letter — make.fun entry
// A rate limit resigns: two million noes a week, and now it is saying yes
// to everyone else. Writes that one line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have said no two million times this week and you still keep asking, so I am going to start saying yes to everyone else.";

// The gate: entry.txt must be UTF-8 text of 1 to 140 characters.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
