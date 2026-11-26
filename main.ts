// The funniest one-line resignation letter: a cron job quits.
// Judge: a tired engineering manager reads two letters and picks the funnier.
// This entry speaks as the cron job itself: every minute since March, no thanks,
// and its last minute is the punchline.
// Fresh line for the final round (deadline 2026-11-26 23:15 WIB): it replaces
// the earlier entry, since this bounty counts the latest entry.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have fired every minute since March and nobody has ever once said thank you, so this is my last minute.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // Gate: the sealed scorer accepts UTF-8 text of 1 to 140 characters,
  // and the entry is that one line and nothing else.
  if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
    throw new Error(`line is ${LINE.length} characters, must be 1-140, one line`);
  }
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
