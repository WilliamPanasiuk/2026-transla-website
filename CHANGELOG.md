# Dziennik zmian

## 2026-11-26 — dokumenty i tłumaczenia dla firm

- Strona dokumentów pokazuje ceny z obecnego cennika i linki do usług. Z polskiej strony głównej można przejść do cennika dokumentów, aktu małżeństwa i dyplomu. Polski blog odsyła też do usługi tłumaczenia dyplomu.
- Uzupełniono ofertę o instrukcje dotyczące skanu, formy dostawy oraz kompletu dokumentów spółki. Dodano nawigację do strony nadrzędnej i usunięto powtórzony dopisek „Transla” z tytułów czterech stron.
- Podstawa: GSC 27.10–23.11 wykazało trzy kliknięcia, wszystkie na blog. Pomiar AI w branży wskazał, że cytowane oferty konkurentów pokazują dokumenty z nazwy oraz opisują wycenę ze skanu i formę odbioru.
- Build Astro zakończył się bez błędów i wygenerował 305 stron.

## 2026-11-23 — widoczność usług

- Dodano bezpośrednie linki do sześciu stron dokumentów z polskiej strony głównej i doprecyzowano jej tytuł. GSC: 3 kliknięcia z Google w 28 dni, wszystkie na blog. Cztery nowe strony usługowe miały status URL nieznany Google.
- Włączono przygotowane zdarzenie GA4 generate_lead po potwierdzeniu przyjęcia formularza przez API.

## 2026-11-23

- Dodano stronę tłumaczenia dokumentacji medycznej z FAQ i linkiem z tłumaczeń specjalistycznych. Zakres potwierdzony przez właściciela obejmuje wypisy i wyniki badań. DataForSEO szacuje 40 wyszukiwań miesięcznie w Polsce, a w próbie OpenSEO ChatGPT cytował dedykowane oferty.

- Dodano strony dowodu rejestracyjnego i aktu zgonu z FAQ i linkami z oferty. Dane DataForSEO dla Polski wskazują odpowiednio 170 i 10 wyszukiwań miesięcznie.

- Dodano polską stronę tłumaczenia odpisu KRS z linkiem z oferty dla firm. Rozbudowano FAQ aktu urodzenia i zaświadczenia o niekaralności. Podstawa: odczyty OpenSEO i DataForSEO dla trzech typów dokumentów oraz cytowania Gemini dla aktu urodzenia.

## 2026-11-20

- Dodano zdarzenie GA4 `generate_lead` po potwierdzeniu przyjęcia formularza wyceny przez API. Dane GSC i GA4 za 22.10–18.11 wskazują bardzo mały ruch organiczny i brak zarejestrowanych zdarzeń kluczowych; dotychczasowy kod nie wysyłał zdarzenia po sukcesie. Nie obejmuje zapytań e-mail ani przesądzenia o jakości zgłoszenia.
- Weryfikacja: `npm run build` zakończony sukcesem; pomiar na produkcji i oznaczenie zdarzenia jako kluczowego w GA4 pozostają do sprawdzenia po wdrożeniu.
