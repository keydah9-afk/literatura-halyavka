// Worker сайту literatura.halyavka.net (Cloudflare Workers, static assets; конфіг — wrangler.jsonc).
//
// Код отримує всі адреси, крім /_astro/* (run_worker_first):
//   - http:// → 301 на https:// (у зоні halyavka.net увімкнено Always Use HTTPS, це — запасний варіант);
//   - /tvory і /tvory/index.html → 301 на /tvory/ (статика відповіла б 307), параметри зберігаються;
//   - /TVORY/ → 301 на /tvory/ (Netlify віддавав такі адреси як ту саму сторінку);
//   - окремий файл .html (google…html, 404.html) → 200 як є, без переадресації на адресу без .html;
//   - немає такого файлу → 404 зі сторінкою dist/404.html (not_found_handling: "404-page");
//   - решта — файл як є.
// На *.workers.dev (перевірка й попередні перегляди гілок) у відповідей — X-Robots-Tag: noindex.

interface Env {
  ASSETS: { fetch(input: Request | string, init?: RequestInit): Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    let res: Response;
    try {
      res = await route(request, env, url);
    } catch (e) {
      console.error('worker', url.pathname, String((e as Error)?.stack ?? e));
      res = new Response('Помилка сервера', { status: 500, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
    if (url.hostname.endsWith('.workers.dev')) {
      res = new Response(res.body, res);
      res.headers.set('X-Robots-Tag', 'noindex');
    }
    return res;
  },
};

async function route(request: Request, env: Env, url: URL): Promise<Response> {
  if (url.protocol === 'http:' && url.hostname !== 'localhost' && url.hostname !== '127.0.0.1') {
    const target = new URL(url);
    target.protocol = 'https:';
    return new Response(null, { status: 301, headers: { Location: target.toString() } });
  }
  const res = await env.ASSETS.fetch(request);

  // Окремий файл .html (google…html — підтвердження Search Console, 404.html) статика переадресувала б
  // на адресу без .html. Netlify віддавав його як є — віддаємо вміст за тією адресою, куди вела переадресація.
  if (isRedirect(res) && url.pathname.endsWith('.html') && !url.pathname.endsWith('/index.html')) {
    const loc = res.headers.get('Location');
    if (loc) {
      const target = new URL(loc, url);
      if (target.pathname === url.pathname.slice(0, -'.html'.length)) {
        const file = await env.ASSETS.fetch(new Request(target.toString(), request));
        if (file.ok) return file;
      }
    }
  }

  const redirect = permanent(res, url);
  if (redirect) return redirect;
  if (res.status !== 404) return res;

  // Шлях із великими літерами: якщо в нижньому регістрі така сторінка є — 301 одразу на неї (зі слешем).
  const lower = url.pathname.toLowerCase();
  if (lower !== url.pathname) {
    const lowerUrl = new URL(url);
    lowerUrl.pathname = lower;
    const res2 = await env.ASSETS.fetch(new Request(lowerUrl.toString(), { method: 'HEAD', redirect: 'manual' }));
    if (res2.ok) return moved(lowerUrl, url);
    const redirect2 = permanent(res2, lowerUrl);
    if (redirect2) return redirect2;
  }

  return res;
}

/** Статика переадресовує /x і /x/index.html на /x/ кодом 307 — віддаємо постійний 301 з тими самими параметрами. */
function isRedirect(res: Response): boolean {
  return res.status === 307 || res.status === 308;
}

function permanent(res: Response, url: URL): Response | null {
  if (!isRedirect(res)) return null;
  const loc = res.headers.get('Location');
  return loc ? moved(new URL(loc, url), url) : null;
}

function moved(target: URL, from: URL): Response {
  target.search = from.search;
  return new Response(null, { status: 301, headers: { Location: target.toString() } });
}
