import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getWorks, getEssays } from '../lib/content';
import { SITE } from '../data/site';

export async function GET(context: APIContext) {
  const works = await getWorks();
  const essays = await getEssays();
  const items = [
    ...works.map((w) => ({
      title: `${w.data.title} — короткий зміст і аналіз`,
      description: w.data.veryShort,
      pubDate: w.data.date,
      link: `/tvory/${w.id}/`,
    })),
    ...essays.map((e) => ({
      title: `Твір: ${e.data.title}`,
      description: e.data.thesis,
      pubDate: e.data.date,
      link: `/tvir-na-temu/${e.id}/`,
    })),
  ].sort((a, b) => +b.pubDate - +a.pubDate);

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items,
    customData: `<language>uk</language>`,
  });
}
