const fs = require("fs");
const path = require("path");

function removeReactImportFromFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const cleaned = content.replace(/^\s*import\s+React\s+from\s+['"]react['"];\s*\n?/gm, "");
  if (cleaned !== content) {
    fs.writeFileSync(filePath, cleaned, "utf8");
    console.log(`🧹 Cleaned: ${filePath}`);
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !["node_modules", ".git", "dist", "build", ".vercel"].includes(entry.name)) {
      walkDir(fullPath);
    } else if (entry.isFile() && fullPath.endsWith(".tsx")) {
      removeReactImportFromFile(fullPath);
    }
  }
}

walkDir(process.cwd());
console.log("✅ Done cleaning unused React imports.");
