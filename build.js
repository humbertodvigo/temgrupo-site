/**
 * build.js — Gera blog/posts.json a partir dos arquivos .md em blog/posts/
 * Rodado pelo Netlify antes de cada deploy.
 */
const fs   = require('fs');
const path = require('path');

const postsDir  = path.join(__dirname, 'blog', 'posts');
const outputFile = path.join(__dirname, 'blog', 'posts.json');

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const meta = {};
  match[1].split('\n').forEach(line => {
    const i = line.indexOf(':');
    if (i < 0) return;
    const key = line.slice(0, i).trim();
    // junta linhas multi-linha do YAML (ex: summary quebrado)
    const val = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
    meta[key] = val;
  });
  return meta;
}

const files = fs.readdirSync(postsDir)
  .filter(f => f.endsWith('.md'))
  .sort()
  .reverse(); // mais recentes primeiro

const posts = files.map(file => {
  const raw  = fs.readFileSync(path.join(postsDir, file), 'utf8');
  const meta = parseFrontmatter(raw);
  const slug = file.replace(/\.md$/, '');
  return {
    slug,
    title:   meta.title   || slug,
    date:    meta.date    || '',
    summary: meta.summary || '',
    image:   meta.image   || '',
  };
}).filter(p => p.title);

fs.writeFileSync(outputFile, JSON.stringify({ posts }, null, 2) + '\n');
console.log(`✔ posts.json gerado com ${posts.length} post(s)`);
