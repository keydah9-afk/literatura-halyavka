/**
 * Типи каталогів програми — спільні для української (`program.ts`)
 * і зарубіжної (`zarubizhna.ts`) літератури.
 */

export type WorkKind = 'проза' | 'поезія' | 'драма' | 'фольклор' | 'публіцистика';

export interface WorkRef {
  /** slug сторінки твору: /tvory/<slug>/ */
  slug: string;
  title: string;
  /** Автор; для фольклору не вказуємо */
  author?: string;
  /** slug сторінки письменника: /pysmennyky/<authorSlug>/ */
  authorSlug?: string;
  genre: string;
  kind: WorkKind;
  /** Позначка «вивчити напам'ять» — окремий розділ сайту */
  byHeart?: boolean;
  /** Приміткa для куратора контенту (не показується учням) */
  note?: string;
  /** Обсяг читання за програмою — показується учневі на картці: «2–3 розділи за вибором учителя» */
  scope?: string;
  /**
   * Група вибору: твори розділу з однаковим `choice` — це «або-або»,
   * учитель обирає з них один. Підпис групи — у `ProgramSection.choices[choice]`.
   * Кілька творів поспіль із тим самим ключем малюються однією рамкою.
   */
  choice?: string;
}

export interface ProgramSection {
  title: string;
  /** Правило вибору для всього розділу: «2 казки — за вибором учителя» */
  note?: string;
  /** Підписи груп вибору: ключ = `WorkRef.choice` */
  choices?: Record<string, string>;
  works: WorkRef[];
}

export interface ProgramClass {
  klas: number;
  /** Підзаголовок сторінки класу */
  tagline: string;
  intro: string;
  sections: ProgramSection[];
}
