import type { PageId, contentPage } from '@/i18n';

type PolishServicePage = ReturnType<typeof contentPage> & { parent: PageId };

export const polishServicePages: PolishServicePage[] = [{
  parent: 'business',
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
}, {
  parent: 'vehicle-documents',
  path: '/dokumenty-standardowe/dowod-rejestracyjny/',
  title: 'Tłumaczenie dowodu rejestracyjnego online | Transla',
  heading: 'Tłumaczenie przysięgłe dowodu rejestracyjnego',
  eyebrow: 'Dokumenty samochodowe',
  description: 'Zamów online tłumaczenie dowodu rejestracyjnego. Prześlij skan niemieckiego briefu, francuskiej carte grise lub dowodu z innego kraju.',
  lead: 'Prześlij czytelne zdjęcia lub skany dowodu rejestracyjnego. Podamy cenę i termin przed zamówieniem.',
  sections: [
    { title: 'Niemiecki brief i francuska carte grise', text: 'Prześlij obie strony dokumentu i wszystkie części, które masz. W przypadku niemieckiego dowodu pokaż część I i część II, jeśli masz oba dokumenty. Przy francuskiej carte grise dołącz strony z adnotacjami.' },
    { title: 'Wycena całego kompletu', text: 'Jeśli potrzebujesz też przekładu umowy kupna albo faktury za auto, dołącz ją do zgłoszenia. Podaj kraj wydania dokumentów i termin, w którym chcesz je złożyć.' },
  ],
  faq: [
    ['Ile kosztuje tłumaczenie dowodu rejestracyjnego?', 'Cena zależy od języka, liczby dokumentów i adnotacji. Podamy ją po sprawdzeniu skanów.'],
    ['Czy wystarczą zdjęcia dowodu?', 'Tak, do wyceny. Zrób czytelne zdjęcia wszystkich stron i dopisków. Jeśli odbiorca wymaga przekładu z oryginału, zaznacz to w zgłoszeniu.'],
    ['Czy trzeba przetłumaczyć mały i duży brief?', 'Prześlij obie posiadane części do sprawdzenia zakresu. Jeśli rejestrujesz pojazd, potwierdź w wydziale komunikacji, której części oraz jakich dodatkowych dokumentów wymaga.'],
    ['Czy mogę zamówić przekład umowy kupna lub faktury razem z dowodem?', 'Tak. Dołącz dokumenty do jednego zapytania, żeby otrzymać wycenę kompletu.'],
    ['Ile trwa tłumaczenie dowodu rejestracyjnego?', 'Termin potwierdzamy przy wycenie. Podaj datę wizyty w urzędzie, jeśli zależy Ci na konkretnym dniu.'],
  ],
}, {
  parent: 'documents',
  path: '/dokumenty-standardowe/akt-zgonu/',
  title: 'Tłumaczenie aktu zgonu online | Transla',
  heading: 'Tłumaczenie przysięgłe aktu zgonu',
  eyebrow: 'Dokumenty urzędowe',
  description: 'Zamów online tłumaczenie przysięgłe polskiego lub zagranicznego aktu zgonu. Prześlij skan do wyceny i ustalenia terminu.',
  lead: 'Prześlij skan aktu zgonu, podaj język docelowy i napisz, gdzie trafi przekład. Cenę i termin podamy przed zamówieniem.',
  sections: [
    { title: 'Polski lub zagraniczny akt zgonu', text: 'Przekład aktu zgonu bywa potrzebny w sprawach spadkowych, ubezpieczeniowych i urzędowych. Przed zamówieniem potwierdź u odbiorcy wymagany format dokumentu.' },
    { title: 'Co przesłać do wyceny', text: 'Dołącz wszystkie strony odpisu, również te z pieczęciami i dopiskami. Jeśli odbiorca wymaga przekładu dodatkowych dokumentów, prześlij je razem z aktem.' },
  ],
  faq: [
    ['Ile kosztuje tłumaczenie aktu zgonu?', 'Wycena zależy od języka, liczby stron i adnotacji. Cenę potwierdzimy po sprawdzeniu skanu.'],
    ['Czy mogę zamówić tłumaczenie zagranicznego aktu zgonu na polski?', 'Tak. Podaj kraj i język dokumentu oraz nazwę instytucji, do której trafi tłumaczenie.'],
    ['Czy wystarczy skan aktu zgonu?', 'Do wyceny wystarczy czytelny skan wszystkich stron. Jeśli odbiorca wymaga tłumaczenia sporządzonego z oryginału, podaj to w zgłoszeniu.'],
    ['Czy tłumaczenie może objąć też apostille?', 'Jeśli akt ma dołączone apostille, prześlij je do wyceny razem z aktem i zaznacz, czy potrzebujesz tłumaczenia obu dokumentów.'],
    ['Jak szybko otrzymam tłumaczenie aktu zgonu?', 'Termin podajemy z wyceną. Jeśli potrzebujesz papierowego przekładu, uwzględnij czas dostawy.'],
  ],
}];
