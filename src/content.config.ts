import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Три колекції — три типи сторінок:
 *   works   → /tvory/<slug>/          (паспорт, переказ, герої, аналіз, цитати, тест)
 *   essays  → /tvir-na-temu/<slug>/   (готові шкільні твори, кілька варіантів)
 *   authors → /pysmennyky/<slug>/     (біографія + хронологія + факти)
 */

const quote = z.object({
  text: z.string(),
  /** Хто говорить / до чого це — показується під цитатою */
  note: z.string().optional(),
});

const works = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string().max(140),
    /** SEO-опис; якщо нема — збирається з veryShort */
    description: z.string().max(220).optional(),
    author: z.string().optional(),
    authorSlug: z.string().optional(),
    /** Класи, у яких твір трапляється (модельні програми НУШ різняться) */
    classes: z.array(z.number().int().min(5).max(11)).min(1),
    kind: z.enum(['проза', 'поезія', 'драма', 'фольклор', 'публіцистика']),

    /** «Паспорт твору» — інфобокс угорі сторінки, найкорисніший блок для уроку */
    passport: z.object({
      genre: z.string(),
      year: z.string().optional(),
      direction: z.string().optional(),
      theme: z.string(),
      idea: z.string(),
      composition: z.string().optional(),
      conflict: z.string().optional(),
      narrator: z.string().optional(),
      setting: z.string().optional(),
    }),

    /** Сюжет у трьох реченнях — блок «Якщо часу зовсім немає» */
    veryShort: z.string().max(600),

    characters: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
          traits: z.array(z.string()).default([]),
          summary: z.string(),
          quotes: z.array(z.string()).default([]),
        })
      )
      .default([]),

    quotes: z.array(quote).default([]),

    /** Художні засоби, символи, «що сказати на уроці» */
    devices: z.array(z.object({ term: z.string(), example: z.string() })).default([]),

    plan: z.array(z.string()).default([]),

    /** Тест самоперевірки: 5–10 питань */
    quiz: z
      .array(
        z.object({
          q: z.string(),
          options: z.array(z.string()).min(2),
          answer: z.number().int().min(0),
          explain: z.string().optional(),
        })
      )
      .default([]),

    /** Вивчають напам’ять — потрапляє в розділ /napamyat/ */
    byHeart: z.boolean().default(false),
    /** Повний текст вірша для розділу «напам’ять» */
    poemText: z.string().optional(),

    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/essays' }),
  schema: z.object({
    /** Тема твору — так, як її записують у зошит */
    title: z.string().max(160),
    description: z.string().max(220).optional(),
    /** slug твору з колекції works */
    workSlug: z.string(),
    workTitle: z.string(),
    author: z.string().optional(),
    classes: z.array(z.number().int().min(5).max(11)).min(1),
    /** Головна думка, яку доводимо */
    thesis: z.string(),
    /** План твору (вступ — основна частина — висновок) */
    plan: z.array(z.string()).default([]),
    /** Цитати, які варто вставити */
    quotes: z.array(quote).default([]),
    /**
     * Варіанти твору. Три — оптимум: різні за обсягом і кутом зору,
     * щоб у класі не збіглися. Текст — звичайні абзаци через порожній рядок.
     */
    variants: z
      .array(
        z.object({
          label: z.string(),
          /** Підказка: кому підходить («коротко, 9 клас», «розгорнуто, на 12 балів») */
          hint: z.string().optional(),
          text: z.string(),
        })
      )
      .min(1),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/authors' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(220).optional(),
    /** «1856–1916» */
    years: z.string(),
    /** Коротко: «письменник, поет, перекладач, громадський діяч» */
    role: z.string(),
    birthPlace: z.string().optional(),
    pseudonym: z.string().optional(),
    /** 5–10 фактів — саме те, що просять «розказати з біографії» */
    facts: z.array(z.string()).default([]),
    timeline: z.array(z.object({ year: z.string(), event: z.string() })).default([]),
    /** Крилаті вислови письменника */
    quotes: z.array(quote).default([]),
    classes: z.array(z.number().int().min(5).max(11)).default([]),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { works, essays, authors };
