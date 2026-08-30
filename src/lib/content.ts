import { getCollection, type CollectionEntry } from 'astro:content';

const isPublished = <T extends { data: { draft: boolean } }>(e: T) =>
  import.meta.env.DEV || !e.data.draft;

export async function getWorks() {
  return (await getCollection('works')).filter(isPublished);
}
export async function getEssays() {
  return (await getCollection('essays')).filter(isPublished);
}
export async function getAuthors() {
  return (await getCollection('authors')).filter(isPublished);
}

/** Множина slug-ів творів, до яких уже є сторінка (щоб каталог знав, що лінкувати). */
export async function readyWorkSlugs() {
  return new Set((await getWorks()).map((w) => w.id));
}

/** Множина slug-ів письменників, у яких уже є сторінка. */
export async function readyAuthorSlugs() {
  return new Set((await getAuthors()).map((a) => a.id));
}

/** Твори до конкретного класу — і з колекції, і з каталогу програми. */
export function worksForClass(works: CollectionEntry<'works'>[], klas: number) {
  return works.filter((w) => w.data.classes.includes(klas));
}

export function essaysForWork(essays: CollectionEntry<'essays'>[], workSlug: string) {
  return essays.filter((e) => e.data.workSlug === workSlug);
}

/** Слово «твір/твори/творів» у правильній формі. */
export function plural(n: number, forms: [string, string, string]) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
}
