const fs = require("fs");
const path = require("path");

function removeReactImport(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const newCode = code.replace(/^import\s+React\s+from\s+['"]react['"];\n?/gm, "");
  if (newCode !== code) {
    fs.writeFileSync(filePath, newCode, "utf8");
    console.log(`✅ Nettoyé : ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith(".tsx")) {
      removeReactImport(fullPath);
    }
  });
}

walkDir(path.join(__dirname, "src"));
