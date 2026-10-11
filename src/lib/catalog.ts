import type { WorkRef } from '../data/types';
import { ALL_ZAR_WORKS, zarClassByNumber } from '../data/zarubizhna';
import { ALL_WORKS } from '../data/program';

export interface WorkGroup {
  /** Ключ групи вибору; `undefined` — звичайні твори без вибору */
  choice?: string;
  works: WorkRef[];
}

/**
 * Розбиває твори розділу на групи: кілька творів поспіль із однаковим `choice`
 * потрапляють в одну групу («вчитель обирає один із…»), решта — по одному.
 */
export function groupByChoice(works: WorkRef[]): WorkGroup[] {
  const groups: WorkGroup[] = [];
  for (const w of works) {
    const last = groups[groups.length - 1];
    if (w.choice && last?.choice === w.choice) last.works.push(w);
    else groups.push({ choice: w.choice, works: [w] });
  }
  return groups;
}

/** Адреса сторінки класу в каталозі предмета. Для зарубіжки без каталогу класу — на хаб. */
export function klasHref(subject: 'ukr' | 'zar', klas: number) {
  if (subject === 'ukr') return `/${klas}-klas/`;
  return zarClassByNumber(klas) ? `/zarubizhna/${klas}-klas/` : '/zarubizhna/';
}

/** Початок хлібних крихт для твору, героя чи есе: (Зарубіжна література →) клас. */
export function subjectCrumbs(subject: 'ukr' | 'zar', klas: number) {
  return [
    ...(subject === 'zar' ? [{ label: 'Зарубіжна література', href: '/zarubizhna/' }] : []),
    { label: `${klas} клас`, href: klasHref(subject, klas) },
  ];
}

const ukrAuthors = new Set(ALL_WORKS.map((w) => w.authorSlug).filter(Boolean));
const zarAuthors = new Set(ALL_ZAR_WORKS.map((w) => w.authorSlug).filter(Boolean));

/** Предмет письменника за каталогами: зарубіжний, якщо він є лише в каталозі зарубіжки. */
export function authorSubject(authorSlug: string): 'ukr' | 'zar' {
  return zarAuthors.has(authorSlug) && !ukrAuthors.has(authorSlug) ? 'zar' : 'ukr';
}
