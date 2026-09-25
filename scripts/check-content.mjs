/**
 * Механічні перевірки контенту — те, що очима не видно, а на сторінці помітно.
 *
 * Навіщо: розбори й есе пишуться довгими сесіями, і найдорожчі помилки тут
 * не змістові, а дисциплінарні — усі правильні відповіді під індексом 0,
 * «розгорнутий» варіант на 480 слів, есе, що посилається на неіснуючий твір,
 * канцелярит на кшталт «даний твір». Усе це ловиться скриптом.
 *
 * Що НЕ перевіряється тут: чи цитата дослівна. Для цього потрібен повний
 * текст твору, якого в репозиторії немає, — звіряти треба в тій самій сесії,
 * поки оригінал під рукою (див. критерії приймання в STATUS.md).
 *
 * Запуск: npm run check
 */
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const WORKS = 'src/content/works';
const ESSAYS = 'src/content/essays';
const HEROES = 'src/content/heroes';

/**
 * Обсяг варіантів есе — за домовленістю в CLAUDE.md, з невеликим запасом.
 * Для 5–6 класу планка нижча: там і сам шкільний твір коротший, тож
 * есе на 320 слів було б не зразком, а підробкою.
 */
const BANDS = {
  senior: [
    { name: 'базовий', min: 150, max: 260 },
    { name: 'розгорнутий', min: 270, max: 380 },
    { name: 'третій', min: 140, max: 330 },
  ],
  junior: [
    { name: 'базовий', min: 90, max: 200 },
    { name: 'розгорнутий', min: 160, max: 280 },
    { name: 'третій', min: 80, max: 220 },
  ],
};

/**
 * Латиниця всередині українського слова. Тексти творів качаються з відкритих
 * бібліотек, де в кирилицю подекуди затесані латинські «i», «o», «e», «a», «c»,
 * «p», «x». На око це не видно взагалі, а на сторінці лишається текст, який
 * учень вчить напам’ять і за яким шукає пошук.
 */
const LATIN_IN_CYRILLIC = /[\u0400-\u04FF][A-Za-z]|[A-Za-z][\u0400-\u04FF]/;

/** Канцелярит і штампи, які на цьому сайті домовилися не писати. */
const CLICHES = ['даний твір', 'дана поема', 'у наш час', 'важко переоцінити', 'в наш час'];

const errors = [];
const warnings = [];

/**
 * Ліміти схеми (src/content.config.ts), які Astro перевіряє лише на білді:
 * без цих перевірок `npm run check` чистий, а `npm run build` падає.
 */
const LIMITS = { description: 220, works: { title: 140 }, essays: { title: 160 }, heroes: { title: 140 } };

const read = (dir, file) => {
  const raw = fs.readFileSync(path.join(dir, file), 'utf8');
  const end = raw.indexOf('\n---', 3);
  const slug = file.replace(/\.md$/, '');
  if (end === -1) {
    // Без другого «---» Astro не бачить frontmatter взагалі, а YAML-парсер тут
    // мовчки з'їдає весь файл, тож помилка лишалася непоміченою до білда.
    errors.push(`${slug}: frontmatter не закрито — немає другого рядка «---»`);
    return { data: yaml.load(raw.slice(3)) ?? {}, body: '', raw };
  }
  const data = yaml.load(raw.slice(3, end));
  const kind = dir === WORKS ? 'works' : dir.startsWith(HEROES) ? 'heroes' : 'essays';
  if ((data.description ?? '').length > LIMITS.description) {
    errors.push(`${slug}: description — ${data.description.length} знаків, ліміт ${LIMITS.description}`);
  }
  if ((data.title ?? '').length > LIMITS[kind].title) {
    errors.push(`${slug}: title — ${data.title.length} знаків, ліміт ${LIMITS[kind].title}`);
  }
  return { data, body: raw.slice(end + 4), raw };
};

const words = (s) => s.trim().split(/\s+/).length;
const list = (dir) => fs.readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_'));

// ── Твори ────────────────────────────────────────────────────────────────
const workSlugs = new Set();
const workData = new Map();
for (const file of list(WORKS)) {
  const slug = file.replace(/\.md$/, '');
  workSlugs.add(slug);
  const { data, raw, body } = read(WORKS, file);
  // Режим «без цитування» (автори з чинними правами) — його мусять успадкувати й характеристики
  workData.set(slug, { data, noQuotes: body.includes('**Про цей розбір.**') });

  // Поезія без віршознавчого паспорта — половина сторінки просто порожня.
  if (data.kind === 'поезія' && !data.poem) {
    errors.push(`${slug}: kind «поезія», але немає блоку poem (розмір, римування, ліричний герой)`);
  }
  // Фольклорна пісня чи дума теж має віршознавчий паспорт (розмір, рима, строфа).
  if (data.poem && data.kind !== 'поезія' && data.kind !== 'фольклор') {
    warnings.push(`${slug}: є блок poem, але kind = «${data.kind}»`);
  }

  // Quiz.astro не перемішує варіанти, тож усі відповіді під 0 — це «завжди перша кнопка».
  const answers = (data.quiz ?? []).map((q) => q.answer);
  if (answers.length >= 4 && new Set(answers).size < 2) {
    errors.push(`${slug}: усі ${answers.length} правильних відповідей стоять під одним індексом`);
  }
  for (const [i, q] of (data.quiz ?? []).entries()) {
    if (q.answer >= q.options.length) {
      errors.push(`${slug}: питання ${i + 1} — answer ${q.answer} виходить за межі options`);
    }
  }

  // Текст вірша перевіряємо порядково: саме його читають і вчать напам’ять.
  for (const [i, line] of (data.poemText ?? '').split('\n').entries()) {
    if (LATIN_IN_CYRILLIC.test(line)) {
      errors.push(`${slug}: латиниця в кириличному слові, poemText рядок ${i + 1}: «${line.trim()}»`);
    }
  }

  for (const c of CLICHES) {
    if (raw.toLowerCase().includes(c)) warnings.push(`${slug}: штамп «${c}»`);
  }
}

// ── Есе ──────────────────────────────────────────────────────────────────
for (const file of list(ESSAYS)) {
  const slug = file.replace(/\.md$/, '');
  const { data, raw } = read(ESSAYS, file);

  if (!workSlugs.has(data.workSlug)) {
    errors.push(`${slug}: workSlug «${data.workSlug}» — такого розбору немає в ${WORKS}/`);
  }

  // 7 клас рахуємо старшим: там уже «Захар Беркут», який є і в програмі НМТ.
  const bands = Math.min(...data.classes) <= 6 ? BANDS.junior : BANDS.senior;
  data.variants.forEach((v, i) => {
    const n = words(v.text);
    const band = bands[i];
    if (band && (n < band.min || n > band.max)) {
      warnings.push(`${slug}: варіант ${i + 1} (${band.name}) — ${n} слів, поза межами ${band.min}–${band.max}`);
    }
    // hint із числом мусить збігатися з дійсністю: EssayVariants показує обсяг поруч.
    const claimed = v.hint?.match(/(\d{2,4})\s*слів/);
    if (claimed && Math.abs(Number(claimed[1]) - n) > 40) {
      errors.push(`${slug}: варіант ${i + 1} обіцяє ${claimed[1]} слів, а має ${n}`);
    }
  });

  if (data.variants.length < 2) {
    warnings.push(`${slug}: лише ${data.variants.length} варіант — домовлялися про три`);
  }

  for (const c of CLICHES) {
    if (raw.toLowerCase().includes(c)) warnings.push(`${slug}: штамп «${c}»`);
  }
}

// ── Характеристики героїв ────────────────────────────────────────────────
let heroCount = 0;
if (fs.existsSync(HEROES)) {
  for (const entry of fs.readdirSync(HEROES, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      if (entry.name.endsWith('.md')) errors.push(`heroes/${entry.name}: файл має лежати в теці твору — heroes/<work-slug>/<hero>.md`);
      continue;
    }
    const work = workData.get(entry.name);
    for (const file of list(path.join(HEROES, entry.name))) {
      heroCount++;
      const id = `heroes/${entry.name}/${file}`;
      if (!work) {
        errors.push(`${id}: теки «${entry.name}» немає серед розборів — сторінка не збереться`);
        continue;
      }
      const { data, raw, body } = read(path.join(HEROES, entry.name), file);
      // Ім’я — ключ посилання з блоку «Головні герої»; розбіжність = мовчки немає лінка
      const names = (work.data.characters ?? []).map((c) => c.name);
      if (!names.includes(data.name)) {
        errors.push(`${id}: name «${data.name}» не збігається з жодним characters[].name розбору (${names.join(', ') || 'героїв немає'})`);
      }
      if (work.noQuotes && (data.quotes ?? []).length) {
        errors.push(`${id}: розбір у режимі без цитування, а характеристика має ${data.quotes.length} цитат`);
      }
      if (LATIN_IN_CYRILLIC.test(raw)) {
        const line = raw.split('\n').find((l) => LATIN_IN_CYRILLIC.test(l));
        warnings.push(`${id}: латиниця в кириличному слові: «${line.trim().slice(0, 80)}»`);
      }
      const n = words(body);
      if (n < 350) warnings.push(`${id}: тіло лише ${n} слів — характеристика замала (орієнтир 500–900)`);
      if ((body.match(/^## /gm) ?? []).length < 3) warnings.push(`${id}: у тілі менше трьох розділів «##»`);
      for (const c of CLICHES) {
        if (raw.toLowerCase().includes(c)) warnings.push(`${id}: штамп «${c}»`);
      }
    }
  }
}

// ── Звіт ─────────────────────────────────────────────────────────────────
console.log(`Розборів: ${workSlugs.size} · есе: ${list(ESSAYS).length} · характеристик: ${heroCount}`);
for (const w of warnings) console.log(`  ⚠ ${w}`);
for (const e of errors) console.log(`  ✗ ${e}`);

if (errors.length) {
  console.error(`\n✗ Помилок: ${errors.length}`);
  process.exit(1);
}
console.log(warnings.length ? `✓ Помилок немає (попереджень: ${warnings.length})` : '✓ Контент чистий');
