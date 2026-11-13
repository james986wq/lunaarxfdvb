// Copies everything in extra/ into dist/ AFTER the Interstellar build, so the build's
// class/id renaming and HTML verification never touch it (the chat has its own markup).
import { cp, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const extra = path.join(root, "extra");
const dist = path.join(root, "dist");

try { await access(dist); } catch { console.error("dist/ not found. Run the main build first."); process.exit(1); }
await cp(extra, dist, { recursive: true });
console.log("Copied extra/ -> dist/ (chat)");
