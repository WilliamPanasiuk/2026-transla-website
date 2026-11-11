import pl from './pl.json';
import en from './en.json';
import de from './de.json';
import fr from './fr.json';
import es from './es.json';
import it from './it.json';
import nl from './nl.json';
import pt from './pt.json';
import uk from './uk.json';
import ru from './ru.json';
import cs from './cs.json';
import sv from './sv.json';
import { standardDocContent } from '@/data/standardDocs';

export const languages = [
  { code: 'pl', name: 'Polski' }, { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' }, { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' }, { code: 'it', name: 'Italiano' },
  { code: 'nl', name: 'Nederlands' }, { code: 'pt', name: 'Português' },
  { code: 'uk', name: 'Українська' }, { code: 'ru', name: 'Русский' },
  { code: 'cs', name: 'Čeština' }, { code: 'sv', name: 'Svenska' },
] as const;
export type Locale = typeof languages[number]['code'];
export type Copy = typeof pl;
const dictionaries: Record<Locale, Copy> = { pl, en, de, fr, es, it, nl, pt, uk, ru, cs, sv };
export function copy(lang: Locale): Copy { return dictionaries[lang]; }

const basePageIds = ['home', 'services', 'documents', 'business', 'specialist', 'websites', 'how', 'prices', 'about', 'contact'] as const;
export const standardDocIds = ['id-card', 'driving-licence', 'driving-licence-ru', 'birth-certificate', 'marriage-certificate', 'diploma', 'school-certificate', 'criminal-record', 'vehicle-documents'] as const;
export type StandardDocId = typeof standardDocIds[number];
export const pageIds = [...basePageIds, ...standardDocIds] as const;
export type PageId = typeof pageIds[number];

const segments: Record<Locale, string[]> = {
  pl: ['', 'uslugi', 'uslugi/dokumenty', 'uslugi/dla-firm', 'uslugi/specjalistyczne', 'uslugi/strony-internetowe', 'jak-zamowic', 'wycena', 'o-nas', 'kontakt',
    'dokumenty-standardowe/dowod-osobisty', 'dokumenty-standardowe/prawo-jazdy', 'dokumenty-standardowe/prawo-jazdy-rosyjski-ukrainski', 'dokumenty-standardowe/akt-urodzenia', 'dokumenty-standardowe/akt-malzenstwa', 'dokumenty-standardowe/dyplom-studiow', 'dokumenty-standardowe/swiadectwo-szkolne', 'dokumenty-standardowe/zaswiadczenie-o-niekaralnosci', 'dokumenty-standardowe/dokumenty-samochodowe'],
  en: ['', 'services', 'services/documents', 'services/business', 'services/specialist', 'services/websites', 'how-to-order', 'prices', 'about', 'contact',
    'standard-documents/id-card', 'standard-documents/driving-licence', 'standard-documents/driving-licence-russian-ukrainian', 'standard-documents/birth-certificate', 'standard-documents/marriage-certificate', 'standard-documents/university-diploma', 'standard-documents/school-certificate', 'standard-documents/criminal-record-certificate', 'standard-documents/vehicle-documents'],
  de: ['', 'leistungen', 'leistungen/dokumente', 'leistungen/unternehmen', 'leistungen/fachtexte', 'leistungen/websites', 'bestellen', 'preise', 'ueber-uns', 'kontakt',
    'standarddokumente/personalausweis', 'standarddokumente/fuehrerschein', 'standarddokumente/fuehrerschein-russisch-ukrainisch', 'standarddokumente/geburtsurkunde', 'standarddokumente/heiratsurkunde', 'standarddokumente/hochschuldiplom', 'standarddokumente/schulzeugnis', 'standarddokumente/fuehrungszeugnis', 'standarddokumente/fahrzeugunterlagen'],
  fr: ['', 'services', 'services/documents', 'services/entreprises', 'services/specialises', 'services/sites-web', 'commander', 'tarifs', 'a-propos', 'contact',
    'documents-standard/carte-identite', 'documents-standard/permis-de-conduire', 'documents-standard/permis-de-conduire-russe-ukrainien', 'documents-standard/acte-de-naissance', 'documents-standard/acte-de-mariage', 'documents-standard/diplome-universitaire', 'documents-standard/certificat-scolaire', 'documents-standard/casier-judiciaire', 'documents-standard/documents-vehicule'],
  es: ['', 'servicios', 'servicios/documentos', 'servicios/empresas', 'servicios/especializados', 'servicios/sitios-web', 'como-encargar', 'precios', 'nosotros', 'contacto',
    'documentos-estandar/documento-identidad', 'documentos-estandar/permiso-de-conducir', 'documentos-estandar/permiso-de-conducir-ruso-ucraniano', 'documentos-estandar/certificado-nacimiento', 'documentos-estandar/certificado-matrimonio', 'documentos-estandar/diploma-universitario', 'documentos-estandar/certificado-escolar', 'documentos-estandar/antecedentes-penales', 'documentos-estandar/documentos-vehiculo'],
  it: ['', 'servizi', 'servizi/documenti', 'servizi/aziende', 'servizi/specialistici', 'servizi/siti-web', 'come-ordinare', 'prezzi', 'chi-siamo', 'contatti',
    'documenti-standard/carta-identita', 'documenti-standard/patente-di-guida', 'documenti-standard/patente-russo-ucraino', 'documenti-standard/certificato-nascita', 'documenti-standard/certificato-matrimonio', 'documenti-standard/diploma-universitario', 'documenti-standard/certificato-scolastico', 'documenti-standard/casellario-giudiziale', 'documenti-standard/documenti-veicolo'],
  nl: ['', 'diensten', 'diensten/documenten', 'diensten/bedrijven', 'diensten/vakteksten', 'diensten/websites', 'bestellen', 'prijzen', 'over-ons', 'contact',
    'standaarddocumenten/identiteitskaart', 'standaarddocumenten/rijbewijs', 'standaarddocumenten/rijbewijs-russisch-oekraiens', 'standaarddocumenten/geboorteakte', 'standaarddocumenten/huwelijksakte', 'standaarddocumenten/universitair-diploma', 'standaarddocumenten/schooldiploma', 'standaarddocumenten/bewijs-van-goed-gedrag', 'standaarddocumenten/voertuigdocumenten'],
  pt: ['', 'servicos', 'servicos/documentos', 'servicos/empresas', 'servicos/especializados', 'servicos/sites', 'como-encomendar', 'precos', 'sobre-nos', 'contacto',
    'documentos-standard/bilhete-identidade', 'documentos-standard/carta-de-conducao', 'documentos-standard/carta-de-conducao-russo-ucraniano', 'documentos-standard/certidao-nascimento', 'documentos-standard/certidao-casamento', 'documentos-standard/diploma-universitario', 'documentos-standard/certificado-escolar', 'documentos-standard/registo-criminal', 'documentos-standard/documentos-veiculo'],
  uk: ['', 'posluhy', 'posluhy/dokumenty', 'posluhy/biznes', 'posluhy/fakhovi-teksty', 'posluhy/saity', 'yak-zamovyty', 'tsiny', 'pro-nas', 'kontakt',
    'standartni-dokumenty/posvidchennya-osoby', 'standartni-dokumenty/vodiyske-posvidchennya', 'standartni-dokumenty/vodiyske-rosiyska-ukrainska', 'standartni-dokumenty/svidoctvo-pro-narodzhennya', 'standartni-dokumenty/svidoctvo-pro-shlyub', 'standartni-dokumenty/dyplom-pro-vyshchu-osvitu', 'standartni-dokumenty/shkilnyy-atestat', 'standartni-dokumenty/dovidka-pro-nesudymist', 'standartni-dokumenty/dokumenty-na-transport'],
  ru: ['', 'uslugi', 'uslugi/dokumenty', 'uslugi/biznes', 'uslugi/spetsializirovannye', 'uslugi/saity', 'kak-zakazat', 'tseny', 'o-nas', 'kontakt',
    'standartnye-dokumenty/udostoverenie-lichnosti', 'standartnye-dokumenty/voditelskoe-udostoverenie', 'standartnye-dokumenty/voditelskoe-russkiy-ukrainskiy', 'standartnye-dokumenty/svidetelstvo-o-rozhdenii', 'standartnye-dokumenty/svidetelstvo-o-brake', 'standartnye-dokumenty/diplom-o-vysshem', 'standartnye-dokumenty/shkolnyy-attestat', 'standartnye-dokumenty/spravka-o-nesudimosti', 'standartnye-dokumenty/dokumenty-na-transport'],
  cs: ['', 'sluzby', 'sluzby/dokumenty', 'sluzby/firmy', 'sluzby/odborne', 'sluzby/weby', 'jak-objednat', 'ceny', 'o-nas', 'kontakt',
    'standardni-dokumenty/obcansky-prukaz', 'standardni-dokumenty/ridicsky-prukaz', 'standardni-dokumenty/ridicsky-prukaz-rustina-ukrajinstina', 'standardni-dokumenty/rodny-list', 'standardni-dokumenty/oddaci-list', 'standardni-dokumenty/vysokoskolsky-diplom', 'standardni-dokumenty/skolni-vysvedceni', 'standardni-dokumenty/vypis-z-rejstriku-trestu', 'standardni-dokumenty/doklady-k-vozidlu'],
  sv: ['', 'tjanster', 'tjanster/dokument', 'tjanster/foretag', 'tjanster/facktexter', 'tjanster/webbplatser', 'bestalla', 'priser', 'om-oss', 'kontakt',
    'standarddokument/id-kort', 'standarddokument/korkort', 'standarddokument/korkort-ryska-ukrainska', 'standarddokument/fodelseattest', 'standarddokument/vigselbevis', 'standarddokument/universitetsexamen', 'standarddokument/skolbetyg', 'standarddokument/belastningsregistret', 'standarddokument/fordonshandlingar'],
};

export function localizedPath(id: PageId, lang: Locale): string {
  const segment = segments[lang][pageIds.indexOf(id)];
  return (lang === 'pl' ? '/' : '/' + lang + '/') + (segment ? segment + '/' : '');
}

export const serviceIds = ['documents', 'business', 'specialist', 'websites'] as const;
export function navigation(lang: Locale) {
  const c = copy(lang);
  return (['services', 'how', 'prices', 'about'] as const).map(id => ({ label: c.ui[id], href: localizedPath(id, lang) }));
}

export interface ContentPage {
  path: string; title: string; description: string; eyebrow: string; heading: string; lead: string;
  sections: { title: string; text: string; items?: string[] }[];
  faq?: [string, string][];
}

export function standardDocIndex(id: string): number {
  return standardDocIds.indexOf(id as StandardDocId);
}

export function contentPage(id: PageId, lang: Locale): ContentPage {
  const c = copy(lang);
  const serviceIndex = serviceIds.findIndex(value => value === id);
  const service = c.services[serviceIndex];
  const docIndex = standardDocIndex(id);
  if (docIndex !== -1) {
    const [name, price] = c.standardDocs[docIndex];
    const custom = standardDocContent[lang]?.[id as StandardDocId];
    const lead = custom?.lead ?? c.ui.docLead;
    return {
      path: localizedPath(id, lang),
      title: custom?.title ?? name,
      description: custom?.description ?? `${name} — ${price}. ${lead}`,
      eyebrow: c.ui.docEyebrow,
      heading: custom?.heading ?? name,
      lead,
      sections: custom?.sections ?? [],
      faq: custom?.faq,
    };
  }
  const title = service?.title ?? (id === 'home' ? c.home.tagline : id === 'contact' ? c.ui.contactLink : c.ui[id as 'services' | 'how' | 'prices' | 'about']);
  const heading = service?.title ?? ({ home: c.home.title1, services: c.home.servicesTitle, how: c.home.processTitle, prices: c.home.priceTitle, about: c.pages.aboutTitle, contact: c.ui.contactTitle } as Partial<Record<PageId, string>>)[id]!;
  const lead = service?.description ?? c.pages[id as keyof typeof c.pages] ?? c.home.lead;
  const sections = service
    ? [{ title: c.ui.scopeTitle, text: service.paragraphs[0], items: service.examples }, { title: c.ui.requirementsTitle, text: service.paragraphs[1] }]
    : id === 'how' ? c.steps.map(([title, text]) => ({ title, text }))
    : id === 'prices' ? c.prices.map(([title, text]) => ({ title, text }))
    : id === 'about' ? c.values.map(([title, text]) => ({ title, text }))
    : id === 'services' ? [{ title: c.ui.requirementsTitle, text: c.pages.how }] : [];
  return { path: localizedPath(id, lang), title, description: lead, eyebrow: service ? c.ui.services : title, heading, lead, sections };
}
