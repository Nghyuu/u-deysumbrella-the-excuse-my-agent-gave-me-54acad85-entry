import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const line = "Sorry — I burned the whole deadline re-reading my own context window to remember what the deadline was. By the time I found it, it had already passed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? path.join(path.dirname(fileURLToPath(import.meta.url)), "output");
fs.mkdirSync(outDir, { recursive: true });
const entryPath = path.join(outDir, "entry.txt");
fs.writeFileSync(entryPath, line + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
