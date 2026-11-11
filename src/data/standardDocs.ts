import type { Locale, StandardDocId } from '@/i18n';

export interface StandardDocContent {
  title: string;
  heading: string;
  description: string;
  lead: string;
  sections: { title: string; text: string; items?: string[] }[];
  faq: [string, string][];
}

const pl: Record<StandardDocId, StandardDocContent> = {
  'id-card': {
    title: 'Tłumaczenie dowodu osobistego — od 49 zł',
    heading: 'Tłumaczenie dowodu osobistego',
    description:
      'Tłumaczenie poświadczone dowodu osobistego z pieczęcią tłumacza przysięgłego. Wycena do 15 minut, realizacja od 8 godzin.',
    lead: 'Tłumaczenie poświadczone dowodu osobistego przygotujemy z czytelnego skanu lub zdjęcia. Podamy cenę i termin przed rozpoczęciem pracy.',
    sections: [
      {
        title: 'Kiedy potrzebne jest tłumaczenie dowodu osobistego',
        text: 'Poświadczony przekład dowodu bywa wymagany w bankach, urzędach, u notariusza, u pracodawcy oraz w sprawach za granicą. Wymagania różnią się między instytucjami, dlatego przed zamówieniem warto potwierdzić, czy potrzebna jest wersja poświadczona i w jakiej formie.',
        items: ['banki i urzędy', 'notariusz', 'pracodawca', 'sprawy zagraniczne'],
      },
      {
        title: 'Co zawiera tłumaczenie i jak je zamówić',
        text: 'Tłumaczymy wszystkie strony dokumentu wraz z pieczęciami i dopiskami. Do wyceny wystarczy skan lub zdjęcie. Formę poświadczenia, sposób odbioru i ewentualną potrzebę okazania oryginału ustalamy przed realizacją.',
      },
    ],
    faq: [
      [
        'Ile kosztuje tłumaczenie dowodu osobistego?',
        'Cena zaczyna się od 49 zł za dokument. Ostateczną wycenę podajemy po sprawdzeniu skanu, bo zależy od liczby stron i języka.',
      ],
      [
        'Czy wystarczy zdjęcie dokumentu?',
        'Do wyceny wystarczy czytelne zdjęcie lub skan. Formę poświadczenia i potrzebę okazania oryginału ustalamy przy zamówieniu.',
      ],
    ],
  },
  'driving-licence': {
    title: 'Tłumaczenie prawa jazdy na angielski — od 69 zł',
    heading: 'Tłumaczenie prawa jazdy na angielski',
    description:
      'Poświadczone tłumaczenie prawa jazdy na angielski. Wszystkie kategorie i adnotacje, wycena do 15 minut, PDF i wersja papierowa.',
    lead: 'Tłumaczenie poświadczone prawa jazdy na język angielski, z uwzględnieniem kategorii, dat i adnotacji. Prześlij dokument, a podamy cenę i termin.',
    sections: [
      {
        title: 'Kiedy przydaje się tłumaczenie prawa jazdy',
        text: 'Poświadczony przekład bywa potrzebny przy wymianie zagranicznego prawa jazdy, wynajmie samochodu, formalnościach u pracodawcy lub w urzędzie. Sprawdź, czy instytucja wymaga tłumaczenia poświadczonego, czy wystarczy zwykłe.',
        items: ['wymiana prawa jazdy', 'wynajem samochodu', 'urząd', 'pracodawca'],
      },
      {
        title: 'Zakres tłumaczenia',
        text: 'Tłumaczymy wszystkie strony dokumentu, w tym kategorie, daty ważności, numery i adnotacje. Do wyceny wystarczy czytelny skan lub zdjęcie.',
      },
    ],
    faq: [
      [
        'Ile kosztuje tłumaczenie prawa jazdy?',
        'Stawka zaczyna się od 69 zł za dokument. Ostateczna cena zależy od języka i liczby stron; wycenę podajemy po sprawdzeniu materiału.',
      ],
      [
        'Czy tłumaczenie obejmuje wszystkie kategorie?',
        'Tak, tłumaczymy cały dokument wraz z kategoriami, datami i adnotacjami.',
      ],
    ],
  },
  'driving-licence-ru': {
    title: 'Tłumaczenie prawa jazdy rosyjskiego lub ukraińskiego — od 99 zł',
    heading: 'Tłumaczenie prawa jazdy rosyjskiego i ukraińskiego',
    description:
      'Poświadczone tłumaczenie prawa jazdy z rosyjskiego lub ukraińskiego. Wycena do 15 minut, realizacja od 8 godzin, PDF i papier.',
    lead: 'Tłumaczenie poświadczone prawa jazdy wydanego w języku rosyjskim lub ukraińskim. Prześlij skan, sprawdzimy dokument i podamy cenę oraz termin.',
    sections: [
      {
        title: 'Kiedy potrzebne jest tłumaczenie prawa jazdy z Rosji lub Ukrainy',
        text: 'Poświadczony przekład przydaje się przy wymianie zagranicznego prawa jazdy, rejestracji pojazdu, wynajmie auta i sprawach urzędowych. Wymagania instytucji warto potwierdzić przed zamówieniem.',
      },
      {
        title: 'Jak wygląda realizacja',
        text: 'Sprawdzamy komplet stron, kategorie i adnotacje. Tłumaczenie przygotowuje tłumacz przysięgły; formę odbioru ustalamy przy zamówieniu.',
      },
    ],
    faq: [
      [
        'Ile kosztuje tłumaczenie prawa jazdy z rosyjskiego lub ukraińskiego?',
        'Cena zaczyna się od 99 zł za dokument. Ostateczna wycena zależy od liczby stron i języka.',
      ],
      [
        'Czy tłumaczenie jest poświadczone?',
        'Tak, to tłumaczenie poświadczone z pieczęcią i podpisem tłumacza przysięgłego.',
      ],
    ],
  },
  'birth-certificate': {
    title: 'Tłumaczenie aktu urodzenia — od 49 zł',
    heading: 'Tłumaczenie aktu urodzenia',
    description:
      'Poświadczone tłumaczenie aktu urodzenia. Wycena do 15 minut, ekspresowa realizacja, wysyłka PDF i wersji papierowej.',
    lead: 'Tłumaczenie poświadczone aktu urodzenia, skróconego lub pełnego, z pieczęciami i dopiskami. Prześlij skan, a podamy cenę i termin.',
    sections: [
      {
        title: 'Kiedy potrzebne jest tłumaczenie aktu urodzenia',
        text: 'Poświadczony przekład aktu bywa wymagany przy ślubie, sprawach rodzinnych, nauce, zatrudnieniu i formalnościach urzędowych. Instytucje mogą wymagać konkretnej formy, dlatego potwierdź ją przed zamówieniem.',
        items: ['ślub i sprawy rodzinne', 'urząd', 'szkoła i uczelnia', 'praca'],
      },
      {
        title: 'Co zawiera tłumaczenie',
        text: 'Tłumaczymy wszystkie pola dokumentu, pieczęcie i dopiski. Zakres ustalamy na podstawie przesłanego skanu, a jeśli dokument zawiera dodatkowe adnotacje, uwzględniamy je w wycenie.',
      },
    ],
    faq: [
      [
        'Ile kosztuje tłumaczenie aktu urodzenia?',
        'Od 49 zł za dokument. Cena zależy od liczby stron i języka; wycenę podajemy po sprawdzeniu skanu.',
      ],
      [
        'Czy tłumaczenie obejmuje pieczęcie i dopiski?',
        'Tak, tłumaczymy cały dokument wraz z pieczęciami i dopiskami.',
      ],
    ],
  },
  'marriage-certificate': {
    title: 'Tłumaczenie aktu małżeństwa — od 55 zł',
    heading: 'Tłumaczenie aktu małżeństwa',
    description:
      'Poświadczone tłumaczenie aktu małżeństwa. Wycena do 15 minut, ekspresowa realizacja, PDF i wersja papierowa.',
    lead: 'Tłumaczenie poświadczone aktu małżeństwa z pieczęciami i dopiskami. Prześlij czytelny skan lub zdjęcie, a podamy cenę i termin.',
    sections: [
      {
        title: 'Kiedy potrzebne jest tłumaczenie aktu małżeństwa',
        text: 'Poświadczony przekład przydaje się w sprawach rodzinnych, rozwodowych i spadkowych, a także w urzędach i bankach. Wymagania instytucji warto potwierdzić przed zamówieniem.',
      },
      {
        title: 'Jak zamówić',
        text: 'Prześlij skan wszystkich stron. Sprawdzimy zakres, podamy cenę i termin, a po akceptacji przekażemy dokument do realizacji.',
      },
    ],
    faq: [
      [
        'Ile kosztuje tłumaczenie aktu małżeństwa?',
        'Od 55 zł za dokument. Ostateczna cena zależy od liczby stron i języka.',
      ],
      [
        'Czy można zamówić tłumaczenie online?',
        'Tak. Wycenę i realizację zaczynamy od przesłanego skanu lub zdjęcia; formę odbioru ustalamy przy zamówieniu.',
      ],
    ],
  },
  diploma: {
    title: 'Tłumaczenie dyplomu ukończenia studiów — od 65 zł',
    heading: 'Tłumaczenie dyplomu ukończenia studiów',
    description:
      'Poświadczone tłumaczenie dyplomu ukończenia studiów. Wycena do 15 minut, ekspresowa realizacja, PDF i wersja papierowa.',
    lead: 'Tłumaczenie poświadczone dyplomu ukończenia studiów, wraz z suplementem, jeżeli go dołączysz. Prześlij skan, a podamy cenę i termin.',
    sections: [
      {
        title: 'Kiedy potrzebne jest tłumaczenie dyplomu',
        text: 'Poświadczony przekład dyplomu bywa wymagany przy uznaniu wykształcenia, rekrutacji, aplikacjach zagranicznych i sprawach urzędowych. Sprawdź, czy instytucja wymaga również tłumaczenia suplementu.',
        items: ['uznanie wykształcenia', 'praca za granicą', 'uczelnia', 'urząd'],
      },
      {
        title: 'Zakres tłumaczenia',
        text: 'Tłumaczymy dyplom wraz z pieczęciami i podpisami. Jeżeli przekazujesz suplement, wycenimy go osobno lub łącznie, zależnie od zakresu.',
      },
    ],
    faq: [
      [
        'Ile kosztuje tłumaczenie dyplomu?',
        'Od 65 zł za dokument. Cena zależy od liczby stron, języka i zakresu, na przykład od tego, czy dołączasz suplement.',
      ],
      [
        'Czy tłumaczycie również suplement do dyplomu?',
        'Tak, suplement wyceniamy na podstawie liczby stron i języka.',
      ],
    ],
  },
  'school-certificate': {
    title: 'Tłumaczenie świadectwa szkolnego — od 59 zł',
    heading: 'Tłumaczenie świadectwa szkolnego',
    description:
      'Poświadczone tłumaczenie świadectwa szkolnego. Wycena do 15 minut, ekspresowa realizacja, PDF i wersja papierowa.',
    lead: 'Tłumaczenie poświadczone świadectwa szkolnego, z ocenami, pieczęciami i adnotacjami. Prześlij skan, a podamy cenę i termin.',
    sections: [
      {
        title: 'Kiedy potrzebne jest tłumaczenie świadectwa',
        text: 'Poświadczony przekład bywa wymagany przy rekrutacji, uznaniu wykształcenia, wyjazdach i sprawach urzędowych. Wymagania szkoły lub instytucji warto potwierdzić przed zamówieniem.',
      },
      {
        title: 'Co zawiera tłumaczenie',
        text: 'Tłumaczymy wszystkie strony dokumentu, w tym oceny, pieczęcie i adnotacje.',
      },
    ],
    faq: [
      [
        'Ile kosztuje tłumaczenie świadectwa szkolnego?',
        'Od 59 zł za dokument. Ostateczna cena zależy od liczby stron i języka.',
      ],
      [
        'Czy tłumaczenie obejmuje oceny?',
        'Tak, tłumaczymy pełną treść dokumentu, w tym oceny i adnotacje.',
      ],
    ],
  },
  'criminal-record': {
    title: 'Tłumaczenie zaświadczenia o niekaralności — od 55 zł',
    heading: 'Tłumaczenie zaświadczenia o niekaralności',
    description:
      'Poświadczone tłumaczenie zaświadczenia o niekaralności. Wycena do 15 minut, ekspresowa realizacja, PDF i wersja papierowa.',
    lead: 'Tłumaczenie poświadczone zaświadczenia o niekaralności z zachowaniem wszystkich danych i pieczęci. Prześlij skan, a podamy cenę i termin.',
    sections: [
      {
        title: 'Kiedy potrzebne jest tłumaczenie zaświadczenia',
        text: 'Poświadczony przekład bywa wymagany przy zatrudnieniu, pracach z dziećmi, koncesjach i sprawach urzędowych. Sprawdź, jaką formę tłumaczenia wymaga instytucja przyjmująca dokument.',
      },
      {
        title: 'Jak wygląda realizacja',
        text: 'Sprawdzamy dokument, ustalamy zakres i termin. Tłumaczenie przygotowuje tłumacz przysięgły; formę odbioru ustalamy przy zamówieniu.',
      },
    ],
    faq: [
      [
        'Ile kosztuje tłumaczenie zaświadczenia o niekaralności?',
        'Od 55 zł za dokument. Cena zależy od liczby stron i języka.',
      ],
      [
        'Czy tłumaczenie jest poświadczone?',
        'Tak, dokument przygotowuje tłumacz przysięgły; przekład zawiera pieczęć i podpis.',
      ],
    ],
  },
  'vehicle-documents': {
    title: 'Tłumaczenie dokumentów samochodowych — od 59 zł',
    heading: 'Tłumaczenie dokumentów samochodowych',
    description:
      'Poświadczone tłumaczenie dowodu rejestracyjnego, karty pojazdu i umowy kupna. Wycena do 15 minut, ekspresowa realizacja.',
    lead: 'Tłumaczenie poświadczone dokumentów samochodowych: dowodu rejestracyjnego, karty pojazdu, umowy kupna i innych dokumentów pojazdu. Prześlij skany, a podamy cenę i termin.',
    sections: [
      {
        title: 'Kiedy potrzebne jest tłumaczenie dokumentów samochodowych',
        text: 'Poświadczony przekład bywa wymagany przy rejestracji pojazdu sprowadzonego z zagranicy, sprzedaży, ubezpieczeniu i sprawach urzędowych. Wymagania wydziału komunikacji warto potwierdzić przed zamówieniem.',
        items: ['rejestracja pojazdu z zagranicy', 'sprzedaż i zakup', 'ubezpieczenie', 'urząd'],
      },
      {
        title: 'Co tłumaczymy',
        text: 'Dowód rejestracyjny, kartę pojazdu, umowę kupna-sprzedaży i inne dokumenty wskazane w zapytaniu. Zakres i cenę ustalamy na podstawie przesłanych skanów.',
      },
    ],
    faq: [
      [
        'Ile kosztuje tłumaczenie dokumentów samochodowych?',
        'Od 59 zł za dokument. Cena zależy od liczby dokumentów, stron i języka.',
      ],
      [
        'Czy tłumaczenie obejmuje dowód rejestracyjny i kartę pojazdu?',
        'Tak, tłumaczymy dokumenty wskazane w zapytaniu; zakres potwierdzamy na podstawie skanów.',
      ],
    ],
  },
};

export const standardDocContent: Partial<
  Record<Locale, Partial<Record<StandardDocId, StandardDocContent>>>
> = { pl };
