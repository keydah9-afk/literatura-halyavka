// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';

const SITE = 'https://literatura.halyavka.net';

// lastmod для сторінок контенту: updatedDate ?? date з frontmatter.
// Для решти сторінок дати не ставимо — неточний lastmod Google ігнорує взагалі.
const COLLECTION_URL = { works: 'tvory', essays: 'tvir-na-temu', authors: 'pysmennyky' };
const lastmod = new Map();
for (const [dir, prefix] of Object.entries(COLLECTION_URL)) {
  for (const file of readdirSync(`src/content/${dir}`)) {
    if (!file.endsWith('.md')) continue;
    const fm = readFileSync(`src/content/${dir}/${file}`, 'utf8').split(/^---$/m)[1] ?? '';
    const date = fm.match(/^updatedDate:\s*(\S+)/m)?.[1] ?? fm.match(/^date:\s*(\S+)/m)?.[1];
    if (date) lastmod.set(`${SITE}/${prefix}/${file.slice(0, -3)}/`, new Date(date).toISOString());
  }
}

// Сторінки з noindex не повинні потрапляти в sitemap — інакше суперечливі сигнали для пошуковика.
const NOINDEX = [`${SITE}/poshuk/`];

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.includes(page),
      serialize: (item) => {
        const date = lastmod.get(item.url);
        return date ? { ...item, lastmod: date } : item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
