import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Final pick (see candidates.md): concrete image + one exact word
// ("exactly") carrying the turn, in a single breath.
const entry = "My umbrella works great — it keeps exactly one shoulder dry.";

if ([...entry].length < 1 || [...entry].length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${[...entry].length}`);
}

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, entry, "utf8");
