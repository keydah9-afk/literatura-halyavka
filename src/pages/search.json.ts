import type { APIRoute } from 'astro';
import { getWorks, getEssays, getAuthors } from '../lib/content';
import { ALL_WORKS } from '../data/program';
import { NMT_HEROES } from '../data/nmt';

/** Індекс для миттєвого пошуку на клієнті — без зовнішніх бібліотек. */
export const GET: APIRoute = async () => {
  const works = await getWorks();
  const essays = await getEssays();
  const authors = await getAuthors();
  const ready = new Set(works.map((w) => w.id));

  const items = [
    ...works.map((w) => ({
      t: w.data.title,
      s: w.data.author ?? '',
      u: `/tvory/${w.id}/`,
      k: 'Твір',
      c: w.data.classes,
    })),
    ...essays.map((e) => ({
      t: e.data.title,
      s: `Твір за «${e.data.workTitle}»`,
      u: `/tvir-na-temu/${e.id}/`,
      k: 'Шкільний твір',
      c: e.data.classes,
    })),
    ...authors.map((a) => ({
      t: a.data.title,
      s: a.data.years,
      u: `/pysmennyky/${a.id}/`,
      k: 'Письменник',
      c: a.data.classes,
    })),
    // Герої: пошук за іменем персонажа має приводити до твору
    ...NMT_HEROES.map((h) => ({
      t: h.hero,
      s: `${h.title}${h.author ? ` · ${h.author}` : ''}`,
      u: ready.has(h.slug) ? `/tvory/${h.slug}/` : '/nmt/heroyi/',
      k: 'Герой',
      c: [] as number[],
    })),
    // Твори з каталогу програми, до яких сторінки ще нема — щоб пошук показував,
    // що твір у програмі є, і вів на сторінку класу
    ...ALL_WORKS.filter((w) => !ready.has(w.slug)).map((w) => ({
      t: w.title,
      s: w.author ?? w.genre,
      u: `/${w.klas}-klas/`,
      k: 'У програмі',
      c: [w.klas],
    })),
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
