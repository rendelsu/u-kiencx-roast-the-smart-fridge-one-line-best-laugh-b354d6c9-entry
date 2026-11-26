import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, "I'm the house agent, yet the fridge films leftovers, sounds the door alarm at midnight, and texts expiry warnings like gossip — receipts.");
chmodSync(outFile, 0o644);
