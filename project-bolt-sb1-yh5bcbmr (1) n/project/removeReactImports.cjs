const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');

(async () => {
  const files = await fg(['src/**/*.tsx']);  // Tous les fichiers tsx sous src/
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    const originalContent = content;

    // Supprime uniquement les imports React non utilisés
    content = content.replace(/^import React.*from 'react';\n?/gm, '');

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`✅ Nettoyé : ${file}`);
    }
  }
})();
