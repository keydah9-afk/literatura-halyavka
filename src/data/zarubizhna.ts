/**
 * Каталог шкільної програми із зарубіжної літератури.
 *
 * Орієнтир — одна модельна програма: О. Ніколенко, О. Ісаєва, Ж. Клименко та ін.
 * «Зарубіжна література. 5–9 класи» (наказ МОН № 795 від 12.07.2021, редакція 28.12.2023).
 * Програм зарубіжки в НУШ кілька; рішення власника — вести каталог лише за цією.
 *
 * Правила ті самі, що в `program.ts`: якщо у `src/content/works/` є файл із таким `slug`,
 * пункт стає посиланням, інакше показується як «готуємо». Предмет — тег, а не окреме дерево:
 * сторінка твору живе за загальною адресою /tvory/<slug>/.
 *
 * Твори «АБО» та «1 за вибором учителя» входять у каталог усі, з полем `choice`
 * (група вибору): різні вчителі обирають різне, а учень шукає свій твір.
 *
 * Заведено лише 5 клас. 6–11 класи сюди не додаємо, доки не розібрано програму цих класів:
 * сторінок-пустишок не потрібно, а хаб /zarubizhna/ покаже їх як «готуємо» без посилання.
 */

import type { ProgramClass } from './types';

export const ZAR_PROGRAM: ProgramClass[] = [
  {
    klas: 5,
    tagline: 'Казки світу, природа, пригоди й сила уяви',
    intro:
      'Зарубіжна література в п’ятому класі — це казки різних народів і найвідоміші дитячі книжки світу: від Андерсена й Кіплінга до Марка Твена. Список складено за модельною програмою Ніколенко й колег; частину творів учитель обирає сам (їх зібрано в рамки «один із…»), тож ми додали всі можливі варіанти.',
    sections: [
      {
        title: 'Скарбниця народних казок',
        note: 'Учитель обирає 2 казки цього розділу.',
        choices: {
          yap: 'Одна з двох японських казок',
          kyt: 'Одна з двох китайських казок',
        },
        works: [
          { slug: 'farbovanyj-shakal', title: 'Фарбований шакал', genre: 'індійська народна казка', kind: 'фольклор' },
          { slug: 'issumbosi', title: 'Іссумбосі, або Хлопчик-Мізинчик', genre: 'японська народна казка', kind: 'фольклор', choice: 'yap' },
          { slug: 'momotaro', title: 'Момотаро, або Хлопчик-Персик', genre: 'японська народна казка', kind: 'фольклор', choice: 'yap' },
          { slug: 'penzlyk-malyana', title: 'Пензлик Маляна', genre: 'китайська народна казка', kind: 'фольклор', choice: 'kyt' },
          { slug: 'chervonyj-lihtarik', title: 'Червоний ліхтарик', genre: 'китайська народна казка', kind: 'фольклор', choice: 'kyt' },
          { slug: 'syndbad-moreplavets', title: 'Синдбад-Мореплавець (перша подорож)', genre: 'арабська народна казка', kind: 'фольклор' },
          { slug: 'pani-metelytsya', title: 'Пані Метелиця', author: 'Брати Ґрімм', authorSlug: 'brati-grimm', genre: 'народна казка (у записі братів Ґрімм)', kind: 'фольклор' },
        ],
      },
      {
        title: 'Літературні казки світу',
        choices: {
          kazka: 'Один твір — за вибором учителя (Дал, Ліндґрен — «Пеппі» або один із «Калле»)',
        },
        works: [
          { slug: 'snihova-koroleva', title: 'Снігова королева', author: 'Ганс Крістіан Андерсен', authorSlug: 'hans-hrystian-andersen', genre: 'літературна казка', kind: 'проза' },
          { slug: 'hlopchyk-zirka', title: 'Хлопчик-Зірка', author: 'Оскар Уайльд', authorSlug: 'oskar-ujld', genre: 'літературна казка', kind: 'проза' },
          { slug: 'charli-i-shokoladna-fabryka', title: 'Чарлі і шоколадна фабрика', author: 'Роальд Дал', authorSlug: 'roald-dal', genre: 'повість-казка', kind: 'проза', choice: 'kazka' },
          { slug: 'peppi-dovhapanchoha', title: 'Пеппі Довгапанчоха', author: 'Астрід Ліндґрен', authorSlug: 'astrid-lindhren', genre: 'повість-казка', kind: 'проза', choice: 'kazka' },
          { slug: 'kalle-blyumkvist-hrayetsya', title: 'Калле Блюмквіст грається', author: 'Астрід Ліндґрен', authorSlug: 'astrid-lindhren', genre: 'повість з елементами детективу', kind: 'проза', choice: 'kazka' },
          { slug: 'kalle-blyumkvist-ryzykuye', title: 'Калле Блюмквіст ризикує', author: 'Астрід Ліндґрен', authorSlug: 'astrid-lindhren', genre: 'повість з елементами детективу', kind: 'проза', choice: 'kazka' },
          { slug: 'kalle-blyumkvist-i-rasmus', title: 'Калле Блюмквіст і Расмус', author: 'Астрід Ліндґрен', authorSlug: 'astrid-lindhren', genre: 'повість з елементами детективу', kind: 'проза', choice: 'kazka' },
        ],
      },
      {
        title: 'Слухаємо голоси природи',
        choices: {
          virsh: 'Один вірш — за вибором учителя',
        },
        works: [
          { slug: 'nichna-pisnya-podorozhnoho', title: 'Нічна пісня подорожнього', author: 'Йоганн Вольфґанґ Ґете', authorSlug: 'yohann-volfhanh-gete', genre: 'вірш', kind: 'поезія', choice: 'virsh' },
          { slug: 'zadzveny-iz-hlybyny', title: 'Задзвени із глибини…', author: 'Генріх Гейне', authorSlug: 'henrih-hejne', genre: 'вірш', kind: 'поезія', choice: 'virsh' },
          { slug: 'pro-konyka-ta-tsvirkuna', title: 'Про коника та цвіркуна', author: 'Джон Кітс', authorSlug: 'dzhon-kits', genre: 'вірш', kind: 'поезія', choice: 'virsh' },
          { slug: 'mauhli', title: 'Мауглі', author: 'Редьярд Кіплінг', authorSlug: 'redyard-kipling', genre: 'літературна казка', kind: 'проза', note: 'історії про Мауглі з «Книги джунглів»' },
          { slug: 'lobo', title: 'Лобо', author: 'Ернест Сетон-Томпсон', authorSlug: 'ernest-seton-tompson', genre: 'оповідання', kind: 'проза' },
        ],
      },
      {
        title: 'Сила творчої уяви',
        choices: {
          uyava: 'Один із двох творів — за вибором учителя',
        },
        works: [
          { slug: 'luskunchyk-i-myshachyj-korol', title: 'Лускунчик і Мишачий король', author: 'Ернст Теодор Амадей Гофман', authorSlug: 'ernst-teodor-amadej-hofman', genre: 'літературна казка', kind: 'проза', choice: 'uyava' },
          { slug: 'alisa-v-krayini-div', title: 'Аліса в Країні Див', author: 'Льюїс Керролл', authorSlug: 'lyujis-kerroll', genre: 'літературна казка', kind: 'проза', choice: 'uyava', scope: '2–3 розділи за вибором учителя' },
          { slug: 'pollianna', title: 'Полліанна', author: 'Елеанор Портер', authorSlug: 'eleanor-porter', genre: 'повість', kind: 'проза', scope: '3–4 розділи за вибором учителя' },
        ],
      },
      {
        title: 'У вирі захопливих пригод',
        choices: {
          pryhody: 'Один твір — за вибором учителя (Янсон або Маар)',
        },
        works: [
          { slug: 'pryhody-toma-soyera', title: 'Пригоди Тома Соєра', author: 'Марк Твен', authorSlug: 'mark-tven', genre: 'пригодницький роман', kind: 'проза', scope: '2–3 розділи за вибором учителя' },
          { slug: 'kometa-prylitaye', title: 'Комета прилітає', author: 'Туве Янсон', authorSlug: 'tuve-yanson', genre: 'повість-казка', kind: 'проза', choice: 'pryhody' },
          { slug: 'kapelyukh-charivnyka', title: 'Капелюх Чарівника', author: 'Туве Янсон', authorSlug: 'tuve-yanson', genre: 'повість-казка', kind: 'проза', choice: 'pryhody' },
          { slug: 'zyma-charivnytsya', title: 'Зима-чарівниця', author: 'Туве Янсон', authorSlug: 'tuve-yanson', genre: 'повість-казка', kind: 'проза', choice: 'pryhody' },
          { slug: 'mashyna-dlya-zdijsnennya-bazhan', title: 'Машина для здійснення бажань, або Суботик повертається в суботу', author: 'Пауль Маар', authorSlug: 'paul-maar', genre: 'повість-казка', kind: 'проза', choice: 'pryhody' },
        ],
      },
    ],
  },
];

/** Плаский список усіх творів каталогу зарубіжки (з номером класу). */
export const ALL_ZAR_WORKS = ZAR_PROGRAM.flatMap((c) =>
  c.sections.flatMap((s) => s.works.map((w) => ({ ...w, klas: c.klas, section: s.title }))),
);

/**
 * Зарубіжні твори, які за програмою треба вивчити напам’ять.
 * Зараз порожньо: у програмі Ніколенко для 5 класу такої вимоги немає
 * (є лише загальна «художня декламація»). Якщо вимога з’явиться — досить поставити `byHeart: true`.
 */
export const BY_HEART_ZAR = ALL_ZAR_WORKS.filter((w) => w.byHeart);

export function zarClassByNumber(klas: number) {
  return ZAR_PROGRAM.find((c) => c.klas === klas);
}
