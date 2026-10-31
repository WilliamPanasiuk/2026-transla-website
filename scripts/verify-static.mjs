import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve('dist');
const locales = ['pl','en','de','fr','es','it','nl','pt','uk','ru','cs','sv'];
async function walk(dir) {
  const result = [];
  for (const name of await readdir(dir)) {
    const file = path.join(dir, name);
    if ((await stat(file)).isDirectory()) result.push(...await walk(file));
    else result.push(file);
  }
  return result;
}
const files = await walk(root);
const texts = new Map(await Promise.all(files.filter(file => /\.(html|js|css|xml|txt|svg)$/.test(file)).map(async file => [file, await readFile(file, 'utf8')])));
const forbidden = /abctlumaczenia|ABC T[łl]umaczenia|wp-json|wp-content|Białostocka|537[ -]?048[ -]?879|777[ -]?60[ -]?31/i;
const pages = new Map();
const counts = Object.fromEntries(locales.map(locale => [locale, 0]));
for (const [file, content] of texts) {
  assert(!forbidden.test(content), 'Old brand or CMS reference: ' + file);
  if (!file.endsWith('.html')) continue;
  const canonical = content.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert(canonical?.startsWith('https://transla.website/'), 'Missing canonical domain: ' + file);
  const lang = content.match(/<html[^>]*lang="([^"]+)"/)?.[1];
  assert(locales.includes(lang), 'Invalid document language: ' + file);
  const isBlog = canonical.includes('/blog/');
  if (!file.endsWith('/404.html')) {
    if (!isBlog) counts[lang]++;
    pages.set(canonical, { content, lang, file });
    if (lang !== 'pl') assert(!content.includes('Sprawdź cenę') && !content.includes('Wyślij zapytanie'), 'Untranslated Polish UI: ' + file);
  }
  for (const match of content.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const target = path.join(root, decodeURI(match[1]));
    const candidates = match[1].endsWith('/') ? [path.join(target, 'index.html')] : [target, path.join(target, 'index.html')];
    assert((await Promise.all(candidates.map(candidate => stat(candidate).then(value => value.isFile()).catch(() => false)))).some(Boolean), 'Broken link: ' + match[1] + ' in ' + file);
  }
}
for (const [locale, count] of Object.entries(counts)) assert.equal(count, 19, 'Missing pages for ' + locale);
for (const [canonical, page] of pages) {
  if (canonical.includes('/blog/')) continue;
  const alternates = [...page.content.matchAll(/rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
  assert.equal(alternates.length, 13, 'Missing alternate languages: ' + canonical);
  assert.equal(new Set(alternates.map(match => match[1])).size, 13);
  for (const [, locale, url] of alternates) {
    const target = pages.get(url);
    assert(target, 'Missing language counterpart: ' + url);
    assert.equal(target.lang, locale === 'x-default' ? 'pl' : locale);
    assert(target.content.includes('hreflang="' + page.lang + '" href="' + canonical + '"'), 'Non-reciprocal alternate: ' + url);
  }
  if (page.content.includes('class="quote-form"')) {
    assert(page.content.includes('action="/api/public/order-form"'), 'Missing API action');
    assert(page.content.includes('name="attachments"'), 'Missing attachment support');
    assert(page.content.includes('data-messages='), 'Missing localized form messages');
  }
}
function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, shape(item)]));
  assert.equal(typeof value, 'string'); assert(value.trim().length > 0);
  return 'string';
}
const base = shape(JSON.parse(await readFile('src/i18n/pl.json', 'utf8')));
for (const locale of locales) assert.deepEqual(shape(JSON.parse(await readFile('src/i18n/' + locale + '.json', 'utf8'))), base, 'Incomplete dictionary: ' + locale);
const blogCount = [...pages.keys()].filter(canonical => canonical.includes('/blog/')).length;
const localizedCount = Object.values(counts).reduce((sum, count) => sum + count, 0);
console.log(`Verified ${localizedCount} localized pages, ${blogCount} blog pages, 12 complete dictionaries, reciprocal hreflang, internal links and LingoStack forms.`);
