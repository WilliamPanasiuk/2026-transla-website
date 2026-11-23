import type { contentPage } from '@/i18n';

export const krsPage: ReturnType<typeof contentPage> = {
  path: '/uslugi/dla-firm/tlumaczenie-krs/',
  title: 'Tłumaczenie odpisu KRS online | Transla',
  heading: 'Tłumaczenie odpisu KRS i dokumentów spółki',
  eyebrow: 'Tłumaczenia dla firm',
  description: 'Zamów online tłumaczenie aktualnego lub pełnego odpisu KRS. Prześlij PDF i podaj język, aby otrzymać wycenę i termin realizacji.',
  lead: 'Prześlij odpis KRS i podaj język tłumaczenia. Sprawdzimy dokument i podamy cenę oraz termin przed zamówieniem.',
  sections: [
    {
      title: 'Aktualny lub pełny odpis KRS',
      text: 'Tłumaczymy aktualne i pełne odpisy z Krajowego Rejestru Sądowego. Jeśli odbiorca prosi o komplet dokumentów spółki, dołącz do wyceny także umowę spółki, uchwałę lub pełnomocnictwo.',
    },
    {
      title: 'Co wysłać do wyceny',
      text: 'Dołącz PDF odpisu, podaj język docelowy, kraj i nazwę instytucji, do której trafi przekład. Jeśli odbiorca wymaga poświadczenia lub określonej formy doręczenia, dopisz to w formularzu.',
    },
  ],
  faq: [
    ['Ile kosztuje tłumaczenie odpisu KRS?', 'Cena zależy od języka, objętości dokumentu i tego, czy tłumaczenie ma być przysięgłe. Podajemy ją po obejrzeniu pliku.'],
    ['Czy mogę przesłać PDF pobrany z e-KRS?', 'Tak, PDF wystarczy do wyceny. Prześlij cały dokument, a jeśli dołączasz inne dokumenty spółki, wyślij je razem z odpisem.'],
    ['Czy odpis KRS trzeba tłumaczyć przysięgle?', 'O wymaganej formie decyduje odbiorca. Przed zamówieniem zapytaj bank, urząd lub kontrahenta, czy przyjmie tłumaczenie zwykłe, czy wymaga poświadczonego.'],
    ['Ile trwa tłumaczenie KRS?', 'Termin podajemy z wyceną po sprawdzeniu języka i liczby stron. Jeśli masz termin złożenia dokumentów, podaj go w zgłoszeniu.'],
    ['Czy mogę zamówić tłumaczenie całego kompletu dokumentów spółki?', 'Tak. Do wyceny dołącz odpis KRS i pozostałe dokumenty, na przykład umowę spółki lub pełnomocnictwo. Zaznacz, które mają być tłumaczone przysięgle.'],
    ['W jakiej formie otrzymam tłumaczenie?', 'Przy zamówieniu ustalimy formę papierową lub elektroniczną. Jeśli odbiorca wymaga podpisu elektronicznego, podaj tę informację przy wycenie.'],
  ],
};
