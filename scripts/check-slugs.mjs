/**
 * Звіряє slug-и між каталогом шкільної програми і переліком НМТ.
 *
 * Навіщо: якщо той самий твір записаний різними slug-ами у двох файлах,
 * посилання «розбір готовий» ніколи не загориться, а сторінка твору
 * не зв'яжеться з розділом НМТ. Помилку легко зробити й важко помітити очима.
 *
 * Зарубіжка (`zarubizhna.ts`) живе на тих самих адресах /tvory/<slug>/, тож її slug-и
 * мусять бути унікальними і щодо української програми, і всередині себе: збіг означав би,
 * що одна сторінка відповідає двом різним творам.
 *
 * Запуск: npm run check
 */
import fs from 'node:fs';

const parse = (file) =>
  [...fs.readFileSync(file, 'utf8').matchAll(/slug: '([^']+)', title: '([^']+)'/g)].map((m) => ({
    slug: m[1],
    title: m[2],
  }));

const program = parse('src/data/program.ts');
const nmt = parse('src/data/nmt.ts');
const zar = parse('src/data/zarubizhna.ts');
const IGNORE = new Set(['suchasnyj-literaturnyj-protses']); // оглядова тема, не твір

const programSlugs = new Set(program.map((w) => w.slug));
const missing = nmt.filter((w) => !programSlugs.has(w.slug) && !IGNORE.has(w.slug));

// Той самий slug із різними назвами — теж помилка
const titleBySlug = new Map(program.map((w) => [w.slug, w.title]));
const conflicts = nmt.filter(
  (w) => titleBySlug.has(w.slug) && titleBySlug.get(w.slug) !== w.title && !IGNORE.has(w.slug)
);

// Зарубіжка: slug унікальний у своєму каталозі й не збігається з українським
const zarSeen = new Set();
const zarDuplicates = zar.filter((w) => (zarSeen.has(w.slug) ? true : (zarSeen.add(w.slug), false)));
const zarOverlap = zar.filter((w) => programSlugs.has(w.slug));

console.log(`Каталог програми: ${program.length} творів · зарубіжка: ${zar.length} · НМТ: ${nmt.length}`);

if (missing.length) {
  console.error('\n✗ Є в НМТ, немає в каталозі програми (посилання не працюватимуть):');
  missing.forEach((w) => console.error(`   ${w.slug} — ${w.title}`));
}
if (conflicts.length) {
  console.error('\n✗ Однаковий slug, різні назви:');
  conflicts.forEach((w) => console.error(`   ${w.slug}: «${titleBySlug.get(w.slug)}» ≠ «${w.title}»`));
}

if (zarDuplicates.length) {
  console.error('\n✗ Повторений slug у zarubizhna.ts:');
  zarDuplicates.forEach((w) => console.error(`   ${w.slug} — ${w.title}`));
}
if (zarOverlap.length) {
  console.error('\n✗ Slug є і в program.ts, і в zarubizhna.ts (одна адреса на два твори):');
  zarOverlap.forEach((w) => console.error(`   ${w.slug} — ${w.title}`));
}

if (missing.length || conflicts.length || zarDuplicates.length || zarOverlap.length) process.exit(1);
console.log('✓ Slug-и узгоджені');
