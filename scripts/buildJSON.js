const { resolve } = require("path");
const TJS = require("typescript-json-schema");
const fs = require('fs-extra');

const distDir = resolve(__dirname, '..', 'schemas');
fs.emptyDirSync(distDir);
const program = TJS.getProgramFromFiles(
  [resolve(__dirname, '..','src', "index.d.ts")],
);

const generator = TJS.buildGenerator(program);
[
  ['AppJSON', 'app.json'],
  ['PageJSON', 'page.json'],
  ['ComponentJSON', 'component.json'],
  ['MiniProjectJSON', 'mini.project.json'],
  ['SitemapJSON', 'sitemap.json'],
  ['RaxAppJSON', 'rax-app.json'],
].forEach(([symbol, p]) => {
  fs.writeJsonSync(resolve(distDir, p), generator.getSchemaForSymbol(symbol), {
    spaces: 2,
  });
})
