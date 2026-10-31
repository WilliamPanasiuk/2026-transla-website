import { languages, type Locale } from '@/i18n';
import pl from './blog/pl.json';
import en from './blog/en.json';
import de from './blog/de.json';
import fr from './blog/fr.json';
import es from './blog/es.json';
import it from './blog/it.json';
import nl from './blog/nl.json';
import pt from './blog/pt.json';
import uk from './blog/uk.json';
import ru from './blog/ru.json';
import cs from './blog/cs.json';
import sv from './blog/sv.json';

export interface BlogSource {
  label: string;
  url: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  quote?: string;
}

export interface BlogTranslation {
  slug: string;
  title: string;
  description: string;
  lead: string;
  dateLabel: string;
  readingTime: string;
  category: string;
  imageAlt: string;
  keywords: string[];
  sections: BlogSection[];
  sources: BlogSource[];
}

export interface BlogPost {
  id: string;
  date: string;
  image: string;
  translations: Record<Locale, BlogTranslation>;
}

export interface BlogUi {
  title: string;
  eyebrow: string;
  lead: string;
  description: string;
  read: string;
  allPosts: string;
  related: string;
  reading: string;
  sources: string;
  ctaTitle: string;
  ctaText: string;
  sidebarTitle: string;
  sidebarText: string;
  blogName: string;
  blogLabel: string;
}

interface BlogDictionary {
  ui: BlogUi;
  posts: Record<string, BlogTranslation & { date?: string; image?: string }>;
}

const dictionaries: Record<Locale, BlogDictionary> = { pl, en, de, fr, es, it, nl, pt, uk, ru, cs, sv };

const source = pl as BlogDictionary;

export const blogPosts: BlogPost[] = Object.entries(source.posts).map(([id, post]) => ({
  id,
  date: post.date ?? '',
  image: post.image ?? '',
  translations: Object.fromEntries(
    languages.map(({ code }) => [code, dictionaries[code].posts[id]]),
  ) as Record<Locale, BlogTranslation>,
}));

export const blogUi: Record<Locale, BlogUi> = Object.fromEntries(
  languages.map(({ code }) => [code, dictionaries[code].ui]),
) as Record<Locale, BlogUi>;

export function blogIndexPath(lang: Locale): string {
  return lang === 'pl' ? '/blog/' : `/${lang}/blog/`;
}

export function blogPostPath(lang: Locale, post: BlogPost): string {
  return `${blogIndexPath(lang)}${post.translations[lang].slug}/`;
}

export function getBlogPost(lang: Locale, slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.translations[lang].slug === slug);
}
