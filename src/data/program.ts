/**
 * Каталог шкільної програми з української літератури, 5–11 клас.
 *
 * Це «скелет» сайту: сторінки класів будуються звідси, тож перелік повний
 * від першого дня, навіть якщо контент до твору ще не написано.
 * Якщо у `src/content/works/` є файл із таким `slug` — пункт стає посиланням,
 * інакше показується як «готуємо».
 *
 * ВАЖЛИВО про класи: у НУШ (5–9 клас) немає єдиної програми — школа обирає
 * одну з модельних (Архипова, Яценко, Чумарна, Калинич…), і той самий твір
 * може стояти в 6 або 7 класі. Тому клас — це тег, а не жорстка адреса:
 * сторінка твору живе за адресою /tvory/<slug>/ і може згадуватись у кількох класах.
 */

import type { ProgramClass } from './types';
export type { WorkKind, WorkRef, ProgramSection, ProgramClass } from './types';

export const PROGRAM: ProgramClass[] = [
  {
    klas: 5,
    tagline: 'Міфи, казки та перші повісті',
    intro:
      'П’ятий клас — це вхід у літературу через міф і казку. Тексти короткі, тож переказ тут майже завжди потрібен не «замість читання», а щоб швидко пригадати сюжет перед уроком. Список складено за модельною програмою Архипової, Січкар і Шило — за нею навчається більшість п’ятикласників; там, де вчитель обирає кілька творів із переліку, ми додали всі.',
    sections: [
      {
        title: 'Міфи та легенди українців',
        works: [
          { slug: 'pro-zoryanyj-viz', title: 'Про зоряний Віз', genre: 'міф', kind: 'фольклор' },
          { slug: 'berehynya', title: 'Берегиня', genre: 'міф', kind: 'фольклор' },
          { slug: 'chomu-pes-zhyve-kolo-lyudyny', title: 'Чому пес живе коло людини?', genre: 'легенда', kind: 'фольклор' },
          { slug: 'neopalyma-kupyna', title: 'Неопалима купина', genre: 'легенда', kind: 'фольклор' },
          { slug: 'sila-ridnoyi-zemli', title: 'Сила рідної землі', genre: 'легенда', kind: 'фольклор' },
          { slug: 'yak-vynykly-karpaty', title: 'Як виникли Карпати', genre: 'легенда', kind: 'фольклор' },
          { slug: 'dazhboh', title: 'Дажбог', genre: 'міф', kind: 'фольклор', note: 'немає в програмі Архипової — є в інших модельних програмах' },
        ],
      },
      {
        title: 'Народні перекази про запорожців',
        works: [
          { slug: 'pryjom-u-zaporozhtsiv', title: 'Прийом у запорожців', genre: 'народний переказ', kind: 'фольклор' },
          { slug: 'pro-zaporozhtsiv', title: 'Про запорожців', genre: 'народний переказ', kind: 'фольклор' },
          { slug: 'yak-sirko-peremih-tatar', title: 'Як Сірко переміг татар', genre: 'народний переказ', kind: 'фольклор' },
        ],
      },
      {
        title: 'Загадки, прислів’я, приказки',
        works: [
          { slug: 'zahadky-prysliv-ya-skoromovky', title: 'Загадки, прислів’я, приказки, скоромовки', genre: 'малі жанри фольклору', kind: 'фольклор' },
        ],
      },
      {
        title: 'Народні казки про тварин',
        choices: {
          zviri: 'Учитель обирає 2 казки з чотирьох',
        },
        works: [
          { slug: 'vovk-i-chaplya', title: 'Вовк і чапля', genre: 'казка про тварин', kind: 'фольклор', choice: 'zviri' },
          { slug: 'lysytsya-ta-rak', title: 'Лисиця та рак', genre: 'казка про тварин', kind: 'фольклор', choice: 'zviri' },
          { slug: 'tsar-lev', title: 'Цар лев', genre: 'казка про тварин', kind: 'фольклор', choice: 'zviri' },
          { slug: 'yak-yizhak-i-zayets-bihaly-navvyperedky', title: 'Як їжак і заєць бігали наввипередки', genre: 'казка про тварин', kind: 'фольклор', choice: 'zviri' },
        ],
      },
      {
        title: 'Побутові та фантастичні казки',
        choices: {
          kazky: 'Учитель обирає 4 казки із семи',
        },
        works: [
          { slug: 'mudra-divchyna', title: 'Мудра дівчина', genre: 'соціально-побутова казка', kind: 'фольклор', choice: 'kazky' },
          { slug: 'pro-pravdu-i-kryvdu', title: 'Про правду і кривду', genre: 'соціально-побутова казка', kind: 'фольклор', choice: 'kazky' },
          { slug: 'linyva-divchyna', title: 'Лінива дівчина', genre: 'соціально-побутова казка', kind: 'фольклор', choice: 'kazky' },
          { slug: 'pro-horu-shcho-verhom-syahala-neba', title: 'Про гору, що верхом сягала неба', genre: 'чарівна казка', kind: 'фольклор', choice: 'kazky' },
          { slug: 'oh', title: 'Ох', genre: 'чарівна казка', kind: 'фольклор', choice: 'kazky' },
          { slug: 'letyuchyj-korabel', title: 'Летючий корабель', genre: 'чарівна казка', kind: 'фольклор', choice: 'kazky' },
          { slug: 'yajtse-rajtse', title: 'Яйце-райце', genre: 'чарівна казка', kind: 'фольклор', choice: 'kazky' },
        ],
      },
      {
        title: 'Літературні казки',
        works: [
          { slug: 'farbovanyj-lys', title: 'Фарбований Лис', author: 'Іван Франко', authorSlug: 'ivan-franko', genre: 'казка-байка', kind: 'проза' },
          { slug: 'mavka-verbynka', title: 'Мавка-Вербинка', author: 'Василь Королів-Старий', authorSlug: 'vasyl-koroliv-staryj', genre: 'літературна казка', kind: 'проза' },
          { slug: 'huha-mohovynka', title: 'Хуха-Моховинка', author: 'Василь Королів-Старий', authorSlug: 'vasyl-koroliv-staryj', genre: 'літературна казка', kind: 'проза', note: 'у програмі Архипової — варіативний' },
          { slug: 'tsar-plaksij-ta-loskoton', title: 'Цар Плаксій та Лоскотон', author: 'Василь Симоненко', authorSlug: 'vasyl-symonenko', genre: 'віршована казка', kind: 'поезія' },
          { slug: 'mykyta-kozhumyaka', title: 'Микита Кожум’яка', author: 'Олександр Олесь', authorSlug: 'oleksandr-oles', genre: 'казка-п’єса', kind: 'драма' },
        ],
      },
      {
        title: 'Поезія: картини рідної природи',
        choices: {
          shev: 'Тарас Шевченко: учитель обирає 2 вірші з трьох',
          tych: 'Павло Тичина: 2 вірші з трьох',
          huts: 'Євген Гуцало: 2 вірші з трьох',
          ryls: 'Максим Рильський: 2 вірші з чотирьох',
          vinh: 'Микола Вінграновський: 2 вірші з п’яти',
        },
        works: [
          { slug: 'za-sontsem-hmaronka-plyve', title: 'За сонцем хмаронька пливе', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'пейзажна лірика', kind: 'поезія', choice: 'shev' },
          { slug: 'sadok-vyshnevyj-kolo-haty', title: 'Садок вишневий коло хати', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'пейзажна лірика', kind: 'поезія', byHeart: true, choice: 'shev' },
          { slug: 'nad-dniprovoyu-sahoyu', title: 'Над Дніпровою сагою', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'пейзажна лірика', kind: 'поезія', choice: 'shev' },
          { slug: 'tychyna-ne-buvav-ty-u-nashyh-krayah', title: 'Не бував ти у наших краях!', author: 'Павло Тичина', authorSlug: 'pavlo-tychyna', genre: 'пейзажна лірика', kind: 'поезія', choice: 'tych' },
          { slug: 'tychyna-hayi-shumlyat', title: 'Гаї шумлять', author: 'Павло Тичина', authorSlug: 'pavlo-tychyna', genre: 'пейзажна лірика', kind: 'поезія', byHeart: true, choice: 'tych' },
          { slug: 'tychyna-blakyt-moyu-dushu-obviyala', title: 'Блакить мою душу обвіяла…', author: 'Павло Тичина', authorSlug: 'pavlo-tychyna', genre: 'пейзажна лірика', kind: 'поезія', choice: 'tych' },
          { slug: 'hutsalo-zirka', title: 'Зірка', author: 'Євген Гуцало', authorSlug: 'yevhen-hutsalo', genre: 'лірика', kind: 'поезія', choice: 'huts' },
          { slug: 'hutsalo-charivnyky', title: 'Чарівники', author: 'Євген Гуцало', authorSlug: 'yevhen-hutsalo', genre: 'лірика', kind: 'поезія', choice: 'huts' },
          { slug: 'hutsalo-zhuravli-vysoki-prolitayut', title: 'Журавлі високі пролітають…', author: 'Євген Гуцало', authorSlug: 'yevhen-hutsalo', genre: 'пейзажна лірика', kind: 'поезія', choice: 'huts' },
          { slug: 'rylskyj-doshch', title: 'Дощ («Благодатний, довгожданий…»)', author: 'Максим Рильський', authorSlug: 'maksym-rylskyj', genre: 'пейзажна лірика', kind: 'поезія', choice: 'ryls' },
          { slug: 'rylskyj-pered-hrozoyu', title: 'Перед грозою', author: 'Максим Рильський', authorSlug: 'maksym-rylskyj', genre: 'пейзажна лірика', kind: 'поезія', choice: 'ryls' },
          { slug: 'rylskyj-osin-malyar', title: 'Осінь-маляр із палітрою пишною…', author: 'Максим Рильський', authorSlug: 'maksym-rylskyj', genre: 'пейзажна лірика', kind: 'поезія', choice: 'ryls' },
          { slug: 'rylskyj-lyuby-pryrodu', title: 'Люби природу не як символ…', author: 'Максим Рильський', authorSlug: 'maksym-rylskyj', genre: 'пейзажна лірика', kind: 'поезія', choice: 'ryls' },
          { slug: 'vinhranovskyj-babunyn-doshch', title: 'Бабунин дощ', author: 'Микола Вінграновський', authorSlug: 'mykola-vinhranovskyj', genre: 'лірика', kind: 'поезія', choice: 'vinh' },
          { slug: 'vinhranovskyj-sama-soboyu-richka-tsya-teche', title: 'Сама собою річка ця тече', author: 'Микола Вінграновський', authorSlug: 'mykola-vinhranovskyj', genre: 'пейзажна лірика', kind: 'поезія', choice: 'vinh' },
          { slug: 'vinhranovskyj-persha-kolyskova', title: 'Перша колискова', author: 'Микола Вінграновський', authorSlug: 'mykola-vinhranovskyj', genre: 'лірика', kind: 'поезія', choice: 'vinh' },
          { slug: 'vinhranovskyj-daleniye-vechir', title: 'Даленіє вечір в бабиному літі…', author: 'Микола Вінграновський', authorSlug: 'mykola-vinhranovskyj', genre: 'пейзажна лірика', kind: 'поезія', choice: 'vinh' },
          { slug: 'vinhranovskyj-dalekymy-svitamy', title: 'Далекими світами…', author: 'Микола Вінграновський', authorSlug: 'mykola-vinhranovskyj', genre: 'лірика', kind: 'поезія', choice: 'vinh' },
          { slug: 'kostenko-buvaye-chasom-slipnu-vid-krasy', title: 'Буває, часом сліпну від краси', author: 'Ліна Костенко', authorSlug: 'lina-kostenko', genre: 'філософська лірика', kind: 'поезія', note: 'немає в програмі Архипової — є в інших модельних програмах' },
          { slug: 'zhylenko-zhar-ptytsya', title: 'Жар-Птиця', author: 'Ірина Жиленко', authorSlug: 'iryna-zhylenko', genre: 'лірика', kind: 'поезія', note: 'немає в програмі Архипової — є в інших модельних програмах' },
        ],
      },
      {
        title: 'Літописні оповіді',
        choices: {
          lit: 'Учитель обирає 4 оповіді із семи',
        },
        works: [
          { slug: 'povist-mynulyh-lit', title: 'Повість минулих літ', genre: 'літопис', kind: 'проза', scope: 'загальне ознайомлення' },
          { slug: 'zasnuvannya-kyyeva', title: 'Про заснування Києва (Кий, Щек, Хорив і сестра Либідь)', genre: 'літописна оповідь', kind: 'фольклор', note: 'з «Повісті минулих літ»', choice: 'lit' },
          { slug: 'pro-knyazya-oleha', title: 'Про князя Олега', genre: 'літописна оповідь', kind: 'фольклор', note: 'з «Повісті минулих літ»', choice: 'lit' },
          { slug: 'pro-knyahynyu-olhu', title: 'Про княгиню Ольгу', genre: 'літописна оповідь', kind: 'фольклор', note: 'з «Повісті минулих літ»', choice: 'lit' },
          { slug: 'svyatoslav-ukladaye-myr-z-hrekamy', title: 'Святослав укладає мир з греками', genre: 'літописна оповідь', kind: 'фольклор', note: 'з «Повісті минулих літ»', choice: 'lit' },
          { slug: 'volodymyr-vybyraye-viru', title: 'Володимир вибирає віру', genre: 'літописна оповідь', kind: 'фольклор', note: 'з «Повісті минулих літ»', choice: 'lit' },
          { slug: 'pro-hreshchennya-rusi', title: 'Про хрещення Русі князем Володимиром', genre: 'літописна оповідь', kind: 'фольклор', note: 'з «Повісті минулих літ»', choice: 'lit' },
          { slug: 'yaroslav-pohvala-knyham', title: 'Розгром Ярославом печенігів. Похвала книгам', genre: 'літописна оповідь', kind: 'фольклор', note: 'з «Повісті минулих літ»', choice: 'lit' },
          { slug: 'pro-kyryla-kozhumyaku', title: 'Про Кирила Кожум’яку', genre: 'літописна оповідь', kind: 'фольклор', note: 'немає в програмі Архипової — є в інших модельних програмах' },
        ],
      },
      {
        title: 'Історичне минуле в художніх творах',
        works: [
          { slug: 'oles-zaspiv', title: 'Заспів', author: 'Олександр Олесь', authorSlug: 'oleksandr-oles', genre: 'вірш', kind: 'поезія', note: 'із книжки «Княжа Україна»' },
          { slug: 'oles-ukrayina-v-starovynu', title: 'Україна в старовину', author: 'Олександр Олесь', authorSlug: 'oleksandr-oles', genre: 'вірш', kind: 'поезія', note: 'із книжки «Княжа Україна»' },
          { slug: 'oles-pohid-na-tsarhorod', title: 'Похід на Царгород', author: 'Олександр Олесь', authorSlug: 'oleksandr-oles', genre: 'вірш', kind: 'поезія', note: 'із книжки «Княжа Україна»' },
          { slug: 'oles-yaroslav-mudryj', title: 'Ярослав Мудрий', author: 'Олександр Олесь', authorSlug: 'oleksandr-oles', genre: 'вірш', kind: 'поезія', note: 'із книжки «Княжа Україна»' },
          { slug: 'nechuj-zaporozhtsi', title: 'Запорожці', author: 'Іван Нечуй-Левицький', authorSlug: 'ivan-nechuj-levytskyj', genre: 'оповідання', kind: 'проза' },
          { slug: 'tayemnytsya-kozatskoyi-shabli', title: 'Таємниця козацької шаблі', author: 'Зірка Мензатюк', authorSlug: 'zirka-menzatyuk', genre: 'пригодницька повість', kind: 'проза', note: 'у програмі Архипової — варіативний' },
        ],
      },
      {
        title: 'Світ природи і людини в прозі',
        works: [
          { slug: 'hutsalo-los', title: 'Лось', author: 'Євген Гуцало', authorSlug: 'yevhen-hutsalo', genre: 'оповідання', kind: 'проза' },
          { slug: 'fedko-halamydnyk', title: 'Федько-халамидник', author: 'Володимир Винниченко', authorSlug: 'volodymyr-vynnychenko', genre: 'оповідання', kind: 'проза' },
          { slug: 'tyutyunnyk-dyvak', title: 'Дивак', author: 'Григір Тютюнник', authorSlug: 'hryhir-tyutyunnyk', genre: 'оповідання', kind: 'проза' },
          { slug: 'siromanets', title: 'Сіроманець', author: 'Микола Вінграновський', authorSlug: 'mykola-vinhranovskyj', genre: 'повість', kind: 'проза', note: 'у програмі Архипової — варіативний' },
        ],
      },
      {
        title: 'Пригоди і фантастика',
        works: [
          { slug: 'nezvychajni-pryhody-ali', title: 'Незвичайні пригоди Алі в країні Недоладії', author: 'Галина Малик', authorSlug: 'halyna-malyk', genre: 'повість-казка', kind: 'проза', scope: 'читають скорочено' },
          { slug: 'charivnyj-talisman', title: 'Чарівний талісман', author: 'Всеволод Нестайко', authorSlug: 'vsevolod-nestajko', genre: 'повість-казка', kind: 'проза', scope: 'читають скорочено' },
        ],
      },
    ],
  },
  {
    klas: 6,
    tagline: 'Пригоди, дружба та перші випробування',
    intro:
      'Шостий клас — найпригодницькіший рік програми. Тут з’являються перші великі повісті, які реально хочеться дочитати, і перші байки, де за смішним сюжетом ховається мораль.',
    sections: [
      {
        title: 'Пісні та усна народна творчість',
        works: [
          { slug: 'kalendarno-obryadovi-pisni', title: 'Календарно-обрядові пісні (колядки, щедрівки, веснянки, купальські, жниварські)', genre: 'народна пісня', kind: 'фольклор' },
          { slug: 'shche-ne-vmerla-ukrayiny', title: 'Ще не вмерла України…', author: 'Павло Чубинський', authorSlug: 'pavlo-chubynskyj', genre: 'гімн', kind: 'поезія', byHeart: true },
          { slug: 'molytva-konyskoho', title: 'Молитва («Боже великий, єдиний»)', author: 'Олександр Кониський', authorSlug: 'oleksandr-konyskyj', genre: 'духовний гімн', kind: 'поезія' },
        ],
      },
      {
        title: 'Історичне минуле',
        works: [
          { slug: 'yevshan-zillya', title: 'Євшан-зілля', author: 'Микола Вороний', authorSlug: 'mykola-voronyj', genre: 'поема', kind: 'поезія' },
          { slug: 'ivan-pidkova', title: 'Іван Підкова', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'історична поема', kind: 'поезія' },
          { slug: 'dumka-teche-voda-v-synye-more', title: 'Думка («Тече вода в синє море»)', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'лірика', kind: 'поезія', byHeart: true },
          { slug: 'dzhury-kozaka-shvajky', title: 'Джури козака Швайки', author: 'Володимир Рутківський', authorSlug: 'volodymyr-rutkivskyj', genre: 'історико-пригодницька повість', kind: 'проза' },
        ],
      },
      {
        title: 'Байки та співомовки',
        works: [
          { slug: 'hlibov-shchuka', title: 'Щука', author: 'Леонід Глібов', authorSlug: 'leonid-hlibov', genre: 'байка', kind: 'поезія' },
          { slug: 'hlibov-muha-i-bdzhola', title: 'Муха і Бджола', author: 'Леонід Глібов', authorSlug: 'leonid-hlibov', genre: 'байка', kind: 'поезія' },
          { slug: 'hlibov-zhaba-i-vil', title: 'Жаба і Віл', author: 'Леонід Глібов', authorSlug: 'leonid-hlibov', genre: 'байка', kind: 'поезія' },
          { slug: 'rudanskyj-dobre-torhuvalos', title: 'Добре торгувалось', author: 'Степан Руданський', authorSlug: 'stepan-rudanskyj', genre: 'співомовка', kind: 'поезія' },
          { slug: 'rudanskyj-zaporozhtsi-u-korolya', title: 'Запорожці у короля', author: 'Степан Руданський', authorSlug: 'stepan-rudanskyj', genre: 'співомовка', kind: 'поезія' },
        ],
      },
      {
        title: 'Однолітки: характер і вчинок',
        works: [
          { slug: 'fedko-halamydnyk', title: 'Федько-халамидник', author: 'Володимир Винниченко', authorSlug: 'volodymyr-vynnychenko', genre: 'оповідання', kind: 'проза' },
          { slug: 'malenkyj-horban', title: 'Маленький горбань', author: 'Спиридон Черкасенко', authorSlug: 'spyrydon-cherkasenko', genre: 'оповідання', kind: 'проза', note: 'часта помилка в назві: «горбар» замість «горбань»' },
          { slug: 'tyutyunnyk-dyvak', title: 'Дивак', author: 'Григір Тютюнник', authorSlug: 'hryhir-tyutyunnyk', genre: 'оповідання', kind: 'проза' },
        ],
      },
      {
        title: 'Пригоди та гумор',
        works: [
          { slug: 'toreadory-z-vasyukivky', title: 'Тореадори з Васюківки', author: 'Всеволод Нестайко', authorSlug: 'vsevolod-nestajko', genre: 'пригодницька повість', kind: 'проза' },
          { slug: 'mytkozavr-z-yurkivky', title: 'Митькозавр із Юрківки, або Химера лісового озера', author: 'Ярослав Стельмах', authorSlug: 'yaroslav-stelmah', genre: 'пригодницька повість', kind: 'проза' },
          { slug: 'tayemne-tovarystvo-boyahuziv', title: 'Таємне Товариство Боягузів, або Засіб від переляку № 9', author: 'Леся Воронина', authorSlug: 'lesya-voronyna', genre: 'пригодницька повість', kind: 'проза' },
        ],
      },
      {
        title: 'Літературні казки та притчі',
        works: [
          { slug: 'kazka-pro-yayan', title: 'Казка про яян', author: 'Емма Андієвська', authorSlug: 'emma-andiyevska', genre: 'казка-притча', kind: 'проза' },
          { slug: 'kazka-pro-hovoryuchu-rybu', title: 'Казка про Говорючу Рибу', author: 'Емма Андієвська', authorSlug: 'emma-andiyevska', genre: 'казка-притча', kind: 'проза' },
        ],
      },
      {
        title: 'Поезія',
        works: [
          { slug: 'pavlychko-hnizdo', title: 'Гніздо', author: 'Дмитро Павличко', authorSlug: 'dmytro-pavlychko', genre: 'лірика', kind: 'поезія' },
          { slug: 'holoborodko-nasha-mova', title: 'Наша мова', author: 'Василь Голобородько', authorSlug: 'vasyl-holoborodko', genre: 'верлібр', kind: 'поезія' },
        ],
      },
    ],
  },
  {
    klas: 7,
    tagline: 'Історія, характер і моральний вибір',
    intro:
      'Сьомий клас — рік про волю й самостійність: історичні пісні та думи, «Захар Беркут», «Климко». Тексти вже великі, і саме тут короткий зміст рятує найчастіше.',
    sections: [
      {
        title: 'Історичні пісні та думи',
        works: [
          { slug: 'zazhurylas-ukrayina', title: 'Зажурилась Україна', genre: 'історична пісня', kind: 'фольклор' },
          { slug: 'chy-ne-toj-to-hmil', title: 'Чи не той то Хміль', genre: 'історична пісня', kind: 'фольклор' },
          { slug: 'oj-moroze-morozenku', title: 'Ой Морозе, Морозенку', genre: 'історична пісня', kind: 'фольклор' },
          { slug: 'maksym-kozak-zaliznyak', title: 'Максим козак Залізняк', genre: 'історична пісня', kind: 'фольклор' },
          { slug: 'duma-marusya-bohuslavka', title: 'Маруся Богуславка', genre: 'дума', kind: 'фольклор' },
          { slug: 'duma-burya-na-chornomu-mori', title: 'Буря на Чорному морі', genre: 'дума', kind: 'фольклор' },
        ],
      },
      {
        title: 'Історичне минуле: повісті',
        works: [
          { slug: 'zahar-berkut', title: 'Захар Беркут', author: 'Іван Франко', authorSlug: 'ivan-franko', genre: 'історична повість', kind: 'проза' },
          { slug: 'za-sestroyu', title: 'За сестрою', author: 'Андрій Чайковський', authorSlug: 'andrij-chajkovskyj', genre: 'історична повість', kind: 'проза' },
          { slug: 'kozak-holota', title: 'Козак Голота', author: 'Марія Пригара', authorSlug: 'mariya-pryhara', genre: 'повість за мотивами дум', kind: 'проза' },
        ],
      },
      {
        title: 'Дорослішання, випробування, вибір',
        works: [
          { slug: 'husy-lebedi-letyat', title: 'Гуси-лебеді летять…', author: 'Михайло Стельмах', authorSlug: 'myhajlo-stelmah', genre: 'автобіографічна повість', kind: 'проза' },
          { slug: 'klymko', title: 'Климко', author: 'Григір Тютюнник', authorSlug: 'hryhir-tyutyunnyk', genre: 'повість', kind: 'проза' },
          { slug: 'skarb', title: 'Скарб', author: 'Олекса Стороженко', authorSlug: 'oleksa-storozhenko', genre: 'гумористичне оповідання', kind: 'проза' },
          { slug: 'lepkyj-myshka', title: 'Мишка (Казка для дітей, для малих і великих)', author: 'Богдан Лепкий', authorSlug: 'bohdan-lepkyj', genre: 'казка-притча', kind: 'проза' },
          { slug: 'her-peremozhenyj', title: 'Гер переможений', author: 'Любов Пономаренко', authorSlug: 'lyubov-ponomarenko', genre: 'новела', kind: 'проза' },
        ],
      },
      {
        title: 'Сучасні пригодницькі повісті',
        works: [
          { slug: 'rusalonka-iz-7-v', title: 'Русалонька із 7-В, або Прокляття роду Кулаківських', author: 'Марина Павленко', authorSlug: 'maryna-pavlenko', genre: 'пригодницька повість', kind: 'проза' },
          { slug: 'nejmovirni-pryhody-ivana-syly', title: 'Неймовірні пригоди Івана Сили', author: 'Олександр Гаврош', authorSlug: 'oleksandr-havrosh', genre: 'пригодницька повість', kind: 'проза' },
        ],
      },
      {
        title: 'Поезія',
        works: [
          { slug: 'pisnya-pro-rushnyk', title: 'Пісня про рушник', author: 'Андрій Малишко', authorSlug: 'andrij-malyshko', genre: 'пісня', kind: 'поезія', byHeart: true },
          { slug: 'lebedi-materynstva', title: 'Лебеді материнства', author: 'Василь Симоненко', authorSlug: 'vasyl-symonenko', genre: 'лірика', kind: 'поезія', byHeart: true },
          { slug: 'ty-znayesh-shcho-ty-lyudyna', title: 'Ти знаєш, що ти — людина?', author: 'Василь Симоненко', authorSlug: 'vasyl-symonenko', genre: 'громадянська лірика', kind: 'поезія', byHeart: true },
          { slug: 'antonych-rizdvo', title: 'Різдво', author: 'Богдан-Ігор Антонич', authorSlug: 'bohdan-ihor-antonych', genre: 'лірика', kind: 'поезія' },
          { slug: 'kostenko-kryla', title: 'Крила', author: 'Ліна Костенко', authorSlug: 'lina-kostenko', genre: 'філософська лірика', kind: 'поезія' },
        ],
      },
    ],
  },
  {
    klas: 8,
    tagline: 'Воля, відповідальність і влада грошей',
    intro:
      'У восьмому класі література стає «дорослою»: козацькі пісні й балади, «Дорогою ціною», «Сто тисяч». Головна тема року — ціна вибору.',
    sections: [
      {
        title: 'Пісні: історичні, родинно-побутові, балади',
        works: [
          { slug: 'za-svit-vstaly-kozachenky', title: 'Засвіт встали козаченьки', author: 'Маруся Чурай', authorSlug: 'marusya-churaj', genre: 'пісня', kind: 'фольклор', byHeart: true },
          { slug: 'viyut-vitry-viyut-bujni', title: 'Віють вітри, віють буйні', author: 'Маруся Чурай', authorSlug: 'marusya-churaj', genre: 'пісня', kind: 'фольклор' },
          { slug: 'oj-ne-hody-hrytsyu', title: 'Ой не ходи, Грицю, та й на вечорниці', author: 'Маруся Чурай', authorSlug: 'marusya-churaj', genre: 'балада-пісня', kind: 'фольклор' },
          { slug: 'oj-letila-strila', title: 'Ой летіла стріла', genre: 'балада', kind: 'фольклор' },
          { slug: 'oj-na-hori-vohon-horyt', title: 'Ой на горі вогонь горить', genre: 'історична пісня', kind: 'фольклор' },
        ],
      },
      {
        title: 'Поезія: Шевченко, Леся Українка, ХХ століття',
        works: [
          { slug: 'dumy-moyi-dumy-moyi', title: 'Думи мої, думи мої…', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'лірика', kind: 'поезія', byHeart: true },
          { slug: 'meni-odnakovo', title: 'Мені однаково, чи буду…', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'громадянська лірика', kind: 'поезія' },
          { slug: 'contra-spem-spero', title: 'Contra spem spero!', author: 'Леся Українка', authorSlug: 'lesya-ukrayinka', genre: 'громадянська лірика', kind: 'поезія', byHeart: true },
          { slug: 'davnya-vesna', title: 'Давня весна', author: 'Леся Українка', authorSlug: 'lesya-ukrayinka', genre: 'пейзажна лірика', kind: 'поезія' },
          { slug: 'hotila-b-ya-pisneyu-staty', title: 'Хотіла б я піснею стати', author: 'Леся Українка', authorSlug: 'lesya-ukrayinka', genre: 'лірика', kind: 'поезія', byHeart: true },
          { slug: 'lyubit-ukrayinu', title: 'Любіть Україну', author: 'Володимир Сосюра', authorSlug: 'volodymyr-sosyura', genre: 'громадянська лірика', kind: 'поезія', byHeart: true },
          { slug: 'sosyura-vasylky', title: 'Васильки', author: 'Володимир Сосюра', authorSlug: 'volodymyr-sosyura', genre: 'інтимна лірика', kind: 'поезія' },
          { slug: 'pidpalyj-tyha-elehiya', title: 'Тиха елегія', author: 'Володимир Підпалий', authorSlug: 'volodymyr-pidpalyj', genre: 'елегія', kind: 'поезія' },
        ],
      },
      {
        title: 'Боротьба за волю',
        works: [
          { slug: 'dorohoyu-tsinoyu', title: 'Дорогою ціною', author: 'Михайло Коцюбинський', authorSlug: 'myhajlo-kotsyubynskyj', genre: 'пригодницька повість', kind: 'проза' },
          { slug: 'nich-pered-boyem', title: 'Ніч перед боєм', author: 'Олександр Довженко', authorSlug: 'oleksandr-dovzhenko', genre: 'оповідання', kind: 'проза' },
        ],
      },
      {
        title: 'Дорослішання та моральний вибір',
        works: [
          { slug: 'shpaha-slavka-berkuty', title: 'Шпага Славка Беркути', author: 'Ніна Бічуя', authorSlug: 'nina-bichuya', genre: 'психологічна повість', kind: 'проза' },
          { slug: 'bilyj-kin-sheptalo', title: 'Білий кінь Шептало', author: 'Володимир Дрозд', authorSlug: 'volodymyr-drozd', genre: 'алегоричне оповідання', kind: 'проза' },
          { slug: 'mistse-dlya-drakona', title: 'Місце для дракона', author: 'Юрій Винничук', authorSlug: 'yurij-vynnychuk', genre: 'повість-казка', kind: 'проза' },
          { slug: 'vitka-plus-halya', title: 'Вітька + Галя, або Повість про перше кохання', author: 'Валентин Чемерис', authorSlug: 'valentyn-chemerys', genre: 'гумористична повість', kind: 'проза' },
        ],
      },
      {
        title: 'Драматургія',
        works: [
          { slug: 'sto-tysyach', title: 'Сто тисяч', author: 'Іван Карпенко-Карий', authorSlug: 'ivan-karpenko-karyj', genre: 'трагікомедія', kind: 'драма' },
        ],
      },
    ],
  },
  {
    klas: 9,
    tagline: 'Від «Слова» до Шевченка',
    intro:
      'Дев’ятий клас — фундамент усієї програми: давня література, бароко, Котляревський, Шевченко. Саме ці твори потім найчастіше трапляються в тестах НМТ.',
    sections: [
      {
        title: 'Давня українська література',
        works: [
          { slug: 'biblijni-prytchi', title: 'Біблійні легенди й притчі (Вавилонська вежа, Мойсей, притча про блудного сина)', genre: 'притча', kind: 'проза' },
          { slug: 'povist-mynulyh-lit', title: 'Повість минулих літ', genre: 'літопис', kind: 'проза' },
          { slug: 'slovo-pro-pohid-ihoriv', title: 'Слово про похід Ігорів', genre: 'героїчна поема', kind: 'поезія', byHeart: true, note: 'напам’ять — «Плач Ярославни»' },
        ],
      },
      {
        title: 'Бароко. Григорій Сковорода',
        works: [
          { slug: 'vsyakomu-mistu-zvychaj-i-prava', title: 'Всякому місту — звичай і права', author: 'Григорій Сковорода', authorSlug: 'hryhorij-skovoroda', genre: 'філософська лірика', kind: 'поезія', byHeart: true },
          { slug: 'de-libertate', title: 'De libertate', author: 'Григорій Сковорода', authorSlug: 'hryhorij-skovoroda', genre: 'філософська лірика', kind: 'поезія' },
          { slug: 'bdzhola-ta-shershen', title: 'Бджола та Шершень', author: 'Григорій Сковорода', authorSlug: 'hryhorij-skovoroda', genre: 'байка', kind: 'проза' },
          { slug: 'skovoroda-aforyzmy', title: 'Афоризми Григорія Сковороди', author: 'Григорій Сковорода', authorSlug: 'hryhorij-skovoroda', genre: 'афоризм', kind: 'проза' },
        ],
      },
      {
        title: 'Нова українська література',
        works: [
          { slug: 'eneyida', title: 'Енеїда', author: 'Іван Котляревський', authorSlug: 'ivan-kotlyarevskyj', genre: 'бурлескно-травестійна поема', kind: 'поезія' },
          { slug: 'natalka-poltavka', title: 'Наталка Полтавка', author: 'Іван Котляревський', authorSlug: 'ivan-kotlyarevskyj', genre: 'соціально-побутова драма', kind: 'драма' },
          { slug: 'marusya', title: 'Маруся', author: 'Григорій Квітка-Основ’яненко', authorSlug: 'hryhorij-kvitka-osnovyanenko', genre: 'сентиментально-реалістична повість', kind: 'проза' },
        ],
      },
      {
        title: 'Тарас Шевченко',
        works: [
          { slug: 'do-osnovyanenka', title: 'До Основ’яненка', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'послання', kind: 'поезія' },
          { slug: 'kateryna', title: 'Катерина', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'соціально-побутова поема', kind: 'поезія' },
          { slug: 'hajdamaky', title: 'Гайдамаки', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'історико-героїчна поема', kind: 'поезія' },
          { slug: 'son-u-vsyakoho-svoya-dolya', title: 'Сон («У всякого своя доля»)', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'сатирична поема-комедія', kind: 'поезія' },
          { slug: 'kavkaz', title: 'Кавказ', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'сатирична поема', kind: 'поезія' },
          { slug: 'i-mertvym-i-zhyvym', title: 'І мертвим, і живим, і ненарожденним…', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'послання', kind: 'поезія' },
          { slug: 'zapovit', title: 'Заповіт', author: 'Тарас Шевченко', authorSlug: 'taras-shevchenko', genre: 'громадянська лірика', kind: 'поезія', byHeart: true },
        ],
      },
      {
        title: 'Проза й роман',
        works: [
          { slug: 'chorna-rada', title: 'Чорна рада', author: 'Пантелеймон Куліш', authorSlug: 'pantelejmon-kulish', genre: 'історичний роман-хроніка', kind: 'проза' },
          { slug: 'instytutka', title: 'Інститутка', author: 'Марко Вовчок', authorSlug: 'marko-vovchok', genre: 'соціально-побутова повість', kind: 'проза' },
          { slug: 'taras-bulba', title: 'Тарас Бульба', author: 'Микола Гоголь', authorSlug: 'mykola-hohol', genre: 'історична повість', kind: 'проза', note: 'є не в усіх програмах — уточнити перед публікацією' },
        ],
      },
    ],
  },
  {
    klas: 10,
    tagline: 'Реалізм і модернізм',
    intro:
      'Десятий клас — найщільніший на «великі» тексти: «Кайдашева сім’я», «Хіба ревуть воли…», «Лісова пісня», «Тіні забутих предків». Тут переказ і аналіз потрібні майже до кожного твору.',
    sections: [
      {
        title: 'Проза другої половини ХІХ ст.',
        works: [
          { slug: 'kajdasheva-simya', title: 'Кайдашева сім’я', author: 'Іван Нечуй-Левицький', authorSlug: 'ivan-nechuj-levytskyj', genre: 'соціально-побутова повість', kind: 'проза' },
          { slug: 'hiba-revut-voly-yak-yasla-povni', title: 'Хіба ревуть воли, як ясла повні?', author: 'Панас Мирний', authorSlug: 'panas-myrnyj', genre: 'соціально-психологічний роман', kind: 'проза' },
        ],
      },
      {
        title: 'Театр корифеїв',
        works: [
          { slug: 'martyn-borulya', title: 'Мартин Боруля', author: 'Іван Карпенко-Карий', authorSlug: 'ivan-karpenko-karyj', genre: 'трагікомедія', kind: 'драма' },
        ],
      },
      {
        title: 'Іван Франко',
        works: [
          { slug: 'himn-vichnyj-revolyutsioner', title: 'Гімн («Вічний революціонер»)', author: 'Іван Франко', authorSlug: 'ivan-franko', genre: 'громадянська лірика', kind: 'поезія', byHeart: true },
          { slug: 'choho-yavlyayeshsya-meni-u-sni', title: 'Чого являєшся мені у сні?', author: 'Іван Франко', authorSlug: 'ivan-franko', genre: 'інтимна лірика', kind: 'поезія', byHeart: true },
          { slug: 'oj-ty-divchyno-z-goriha-zernya', title: 'Ой ти, дівчино, з горіха зерня', author: 'Іван Франко', authorSlug: 'ivan-franko', genre: 'інтимна лірика', kind: 'поезія' },
          { slug: 'mojsej', title: 'Мойсей', author: 'Іван Франко', authorSlug: 'ivan-franko', genre: 'філософська поема', kind: 'поезія', note: 'у школі вивчають пролог «Народе мій, замучений, розбитий»' },
          { slug: 'sojchyne-krylo', title: 'Сойчине крило', author: 'Іван Франко', authorSlug: 'ivan-franko', genre: 'новела', kind: 'проза' },
          { slug: 'perehresni-stezhky', title: 'Перехресні стежки', author: 'Іван Франко', authorSlug: 'ivan-franko', genre: 'соціально-психологічна повість', kind: 'проза' },
        ],
      },
      {
        title: 'Модернізм: проза',
        works: [
          { slug: 'intermezzo', title: 'Intermezzo', author: 'Михайло Коцюбинський', authorSlug: 'myhajlo-kotsyubynskyj', genre: 'психологічна новела', kind: 'проза' },
          { slug: 'tini-zabutyh-predkiv', title: 'Тіні забутих предків', author: 'Михайло Коцюбинський', authorSlug: 'myhajlo-kotsyubynskyj', genre: 'повість', kind: 'проза' },
          { slug: 'valse-melancolique', title: 'Valse mélancolique', author: 'Ольга Кобилянська', authorSlug: 'olha-kobylyanska', genre: 'новела', kind: 'проза' },
          { slug: 'zemlya', title: 'Земля', author: 'Ольга Кобилянська', authorSlug: 'olha-kobylyanska', genre: 'соціально-психологічна повість', kind: 'проза' },
          { slug: 'kaminnyj-hrest', title: 'Камінний хрест', author: 'Василь Стефаник', authorSlug: 'vasyl-stefanyk', genre: 'психологічна новела', kind: 'проза' },
          { slug: 'novyna', title: 'Новина', author: 'Василь Стефаник', authorSlug: 'vasyl-stefanyk', genre: 'новела', kind: 'проза' },
          { slug: 'moment', title: 'Момент', author: 'Володимир Винниченко', authorSlug: 'volodymyr-vynnychenko', genre: 'імпресіоністична новела', kind: 'проза' },
        ],
      },
      {
        title: 'Модерна драматургія та поезія',
        works: [
          { slug: 'lisova-pisnya', title: 'Лісова пісня', author: 'Леся Українка', authorSlug: 'lesya-ukrayinka', genre: 'драма-феєрія', kind: 'драма' },
          { slug: 'voronyj-blakytna-panna', title: 'Блакитна Панна', author: 'Микола Вороний', authorSlug: 'mykola-voronyj', genre: 'пейзажно-філософська лірика', kind: 'поезія' },
          { slug: 'chary-nochi', title: 'Чари ночі', author: 'Олександр Олесь', authorSlug: 'oleksandr-oles', genre: 'інтимна лірика', kind: 'поезія', byHeart: true },
          { slug: 'o-slovo-ridne-orle-skutyj', title: 'О слово рідне! Орле скутий!', author: 'Олександр Олесь', authorSlug: 'oleksandr-oles', genre: 'громадянська лірика', kind: 'поезія' },
        ],
      },
    ],
  },
  {
    klas: 11,
    tagline: 'Розстріляне відродження та сучасність',
    intro:
      'Одинадцятий клас — це і найтрагічніший, і найсучасніший рік програми. Плюс головний рік підготовки до НМТ: усе, що вивчали з 9 класу, повертається в тестах.',
    sections: [
      {
        title: 'Поезія 1920–1930-х',
        works: [
          { slug: 'o-panno-inno', title: 'О панно Інно…', author: 'Павло Тичина', authorSlug: 'pavlo-tychyna', genre: 'інтимна лірика', kind: 'поезія', byHeart: true },
          { slug: 'arfamy-arfamy', title: 'Арфами, арфами…', author: 'Павло Тичина', authorSlug: 'pavlo-tychyna', genre: 'пейзажна лірика', kind: 'поезія' },
          { slug: 'vy-znayete-yak-lypa-shelestyt', title: 'Ви знаєте, як липа шелестить', author: 'Павло Тичина', authorSlug: 'pavlo-tychyna', genre: 'інтимна лірика', kind: 'поезія', byHeart: true },
          { slug: 'pamyati-trydtsyaty', title: 'Пам’яті тридцяти', author: 'Павло Тичина', authorSlug: 'pavlo-tychyna', genre: 'громадянська лірика', kind: 'поезія' },
          { slug: 'u-tepli-dni-zbyrannya-vynohradu', title: 'У теплі дні збирання винограду', author: 'Максим Рильський', authorSlug: 'maksym-rylskyj', genre: 'сонет', kind: 'поезія' },
          { slug: 'vchys-u-pryrody-tvorchoho-spokoyu', title: 'Вчись у природи творчого спокою', author: 'Євген Плужник', authorSlug: 'yevhen-pluzhnyk', genre: 'філософська лірика', kind: 'поезія' },
          { slug: 'antonych-avtoportret', title: 'Автопортрет', author: 'Богдан-Ігор Антонич', authorSlug: 'bohdan-ihor-antonych', genre: 'лірика', kind: 'поезія' },
          { slug: 'malanyuk-stylet-chy-stylos', title: 'Стилет чи стилос?', author: 'Євген Маланюк', authorSlug: 'yevhen-malanyuk', genre: 'громадянська лірика', kind: 'поезія' },
          { slug: 'malanyuk-uryvok-z-poemy', title: 'Уривок з поеми', author: 'Євген Маланюк', authorSlug: 'yevhen-malanyuk', genre: 'громадянська лірика', kind: 'поезія', note: 'у програмі НМТ' },
        ],
      },
      {
        title: 'Розстріляне відродження: проза й драма',
        works: [
          { slug: 'ya-romantyka', title: 'Я (Романтика)', author: 'Микола Хвильовий', authorSlug: 'mykola-hvylovyj', genre: 'психологічна новела', kind: 'проза' },
          { slug: 'misto', title: 'Місто', author: 'Валер’ян Підмогильний', authorSlug: 'valeryan-pidmohylnyj', genre: 'урбаністичний роман', kind: 'проза' },
          { slug: 'vershnyky', title: 'Вершники («Подвійне коло», «Шаланда в морі»)', author: 'Юрій Яновський', authorSlug: 'yurij-yanovskyj', genre: 'роман у новелах', kind: 'проза' },
          { slug: 'majster-korablya', title: 'Майстер корабля', author: 'Юрій Яновський', authorSlug: 'yurij-yanovskyj', genre: 'роман', kind: 'проза', note: 'у програмі НМТ замість «Вершників»' },
          { slug: 'moya-avtobiohrafiya', title: 'Моя автобіографія', author: 'Остап Вишня', authorSlug: 'ostap-vyshnya', genre: 'гумористичне оповідання', kind: 'проза' },
          { slug: 'som', title: 'Сом', author: 'Остап Вишня', authorSlug: 'ostap-vyshnya', genre: 'усмішка', kind: 'проза' },
          { slug: 'myna-mazajlo', title: 'Мина Мазайло', author: 'Микола Куліш', authorSlug: 'mykola-kulish', genre: 'сатирична комедія', kind: 'драма' },
        ],
      },
      {
        title: 'Війна, голод, еміграція',
        works: [
          { slug: 'zacharovana-desna', title: 'Зачарована Десна', author: 'Олександр Довженко', authorSlug: 'oleksandr-dovzhenko', genre: 'кіноповість', kind: 'проза' },
          { slug: 'ukrayina-v-ohni', title: 'Україна в огні', author: 'Олександр Довженко', authorSlug: 'oleksandr-dovzhenko', genre: 'кіноповість', kind: 'проза' },
          { slug: 'tyhrolovy', title: 'Тигролови', author: 'Іван Багряний', authorSlug: 'ivan-bahryanyj', genre: 'пригодницький роман', kind: 'проза' },
          { slug: 'mariya', title: 'Марія', author: 'Улас Самчук', authorSlug: 'ulas-samchuk', genre: 'роман-хроніка', kind: 'проза' },
          { slug: 'zhovtyj-knyaz', title: 'Жовтий князь', author: 'Василь Барка', authorSlug: 'vasyl-barka', genre: 'роман', kind: 'проза' },
        ],
      },
      {
        title: 'Друга половина ХХ ст. Шістдесятники',
        works: [
          { slug: 'modry-kamen', title: 'Модри Камень', author: 'Олесь Гончар', authorSlug: 'oles-honchar', genre: 'новела', kind: 'проза' },
          { slug: 'try-zozuli-z-poklonom', title: 'Три зозулі з поклоном', author: 'Григір Тютюнник', authorSlug: 'hryhir-tyutyunnyk', genre: 'новела', kind: 'проза' },
          { slug: 'zadyvlyayus-u-tvoyi-zinytsi', title: 'Задивляюсь у твої зіниці', author: 'Василь Симоненко', authorSlug: 'vasyl-symonenko', genre: 'громадянська лірика', kind: 'поезія' },
          { slug: 'dva-kolory', title: 'Два кольори', author: 'Дмитро Павличко', authorSlug: 'dmytro-pavlychko', genre: 'пісня', kind: 'поезія' },
          { slug: 'balada-pro-sonyashnyk', title: 'Балада про соняшник', author: 'Іван Драч', authorSlug: 'ivan-drach', genre: 'балада', kind: 'поезія' },
          { slug: 'yak-dobre-te-shcho-smerti-ne-boyus-ya', title: 'Як добре те, що смерті не боюсь я', author: 'Василь Стус', authorSlug: 'vasyl-stus', genre: 'громадянська лірика', kind: 'поезія', byHeart: true },
          { slug: 'stus-hospody-hnivu-prechystoho', title: 'Господи, гніву пречистого', author: 'Василь Стус', authorSlug: 'vasyl-stus', genre: 'громадянська лірика', kind: 'поезія', note: 'саме цей вірш Стуса — у програмі НМТ' },
          { slug: 'strashni-slova-koly-vony-movchat', title: 'Страшні слова, коли вони мовчать', author: 'Ліна Костенко', authorSlug: 'lina-kostenko', genre: 'філософська лірика', kind: 'поезія', byHeart: true },
          { slug: 'ukrayinske-alfresko', title: 'Українське альфреско', author: 'Ліна Костенко', authorSlug: 'lina-kostenko', genre: 'лірика', kind: 'поезія' },
          { slug: 'marusya-churaj-roman', title: 'Маруся Чурай', author: 'Ліна Костенко', authorSlug: 'lina-kostenko', genre: 'історичний роман у віршах', kind: 'поезія' },
        ],
      },
      {
        title: 'Сучасний літературний процес',
        works: [
          { slug: 'kazka-pro-kalynovu-sopilku', title: 'Казка про калинову сопілку', author: 'Оксана Забужко', authorSlug: 'oksana-zabuzhko', genre: 'повість-притча', kind: 'проза' },
          { slug: 'andruhovych-eseyistyka', title: 'Есеїстика (з книги «Лексикон інтимних міст»)', author: 'Юрій Андрухович', authorSlug: 'yurij-andruhovych', genre: 'есе', kind: 'публіцистика' },
          { slug: 'voroshylovhrad', title: 'Ворошиловград', author: 'Сергій Жадан', authorSlug: 'serhij-zhadan', genre: 'роман', kind: 'проза' },
          { slug: 'internat', title: 'Інтернат', author: 'Сергій Жадан', authorSlug: 'serhij-zhadan', genre: 'роман', kind: 'проза' },
        ],
      },
    ],
  },
];

/** Плаский список усіх творів каталогу (з номером класу). */
export const ALL_WORKS = PROGRAM.flatMap((c) =>
  c.sections.flatMap((s) => s.works.map((w) => ({ ...w, klas: c.klas, section: s.title })))
);

/** Твори, які за програмою треба вивчити напам’ять. */
export const BY_HEART = ALL_WORKS.filter((w) => w.byHeart);

export function classByNumber(klas: number) {
  return PROGRAM.find((c) => c.klas === klas);
}
