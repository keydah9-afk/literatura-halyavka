/** Глобальні налаштування сайту — єдине місце, де вони змінюються. */
export const SITE = {
  url: 'https://literatura.halyavka.net',
  name: 'Література Халявка',
  title: 'Українська література 5–11 клас — короткі перекази, аналіз, твори',
  description:
    'Короткий зміст, аналіз, характеристики героїв, цитати та готові шкільні твори з української літератури для 5–11 класів. Без реклами й зайвого — тільки те, що треба для уроку.',
  lang: 'uk',
  locale: 'uk_UA',
  contactEmail: 'keydah9@gmail.com',
  mainSite: { name: 'Халявка — ГДЗ 1–11 клас', url: 'https://halyavka.net' },
  /** Скільки варіантів твору пишемо на одну тему (див. CLAUDE.md) */
  essayVariants: 3,
} as const;

export const CLASSES = [5, 6, 7, 8, 9, 10, 11] as const;
export type Klas = (typeof CLASSES)[number];
