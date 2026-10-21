# Transla

Osobny statyczny projekt Astro dla https://transla.website. Treści w `src/i18n/{pl,en,de,fr,es,it,nl,pt,uk,ru,cs,sv}.json`
i wspólnych szablonach Astro, lokalne fonty, bez CMS oraz zewnętrznych zasobów ABC.
Nazwa robocza: Transla. Kontakt: info@transla.website.

## Podgląd lokalny

Z natywnej ścieżki projektu WSL:

```sh
docker compose -f docker-compose.yml -f docker-compose.dev.yml -f docker-compose.transla.dev.yml up -d www-transla
```

Adres: http://localhost:4323. Formularz korzysta z proxy Vite do lokalnego Laravel.
Tworzy rzeczywiste zapytania w lokalnej bazie; nie wysyłaj próbnych danych do produkcji.
Przy aktywnym reCAPTCHA klucz publiczny musi odpowiadać kluczowi prywatnemu API
i obsługiwać domenę formularza. Ustaw PUBLIC_TRANSLA_RECAPTCHA_SITE_KEY w środowisku Compose.
Samo skopiowanie .env.example nie konfiguruje środowiska Compose.

## Sprawdzenie

```sh
npm ci
npm run build
npm run verify
```

Weryfikacja sprawdza wygenerowane linki, domenę, formularz oraz pozostałości starej marki/CMS.

## Formularz

JSON POST /api/public/order-form trafia do istniejącego Laravel przez reverse proxy.
Nie wymaga tokena Bearer ani sesji administratora. Obsługuje maks. 12 załączników
(do 8 MB każdy, 10 MB łącznie), walidację, reCAPTCHA, błąd limitu i potwierdzenie przyjęcia.
Zgłoszenia zachowują kanał website_react_form; tytuł i notatki identyfikują Transla.
Automatyczny mail order_received dla Transla jest pomijany, aby nie wysłać brandingu
domyślnej firmy. Inne ręczne wiadomości i strony statusu nadal używają konfiguracji
wspólnego LingoStack — osobny branding tych etapów wymaga kolejnego rozszerzenia.
Na stronie nie ma zmyślonych danych rejestrowych, adresu, opinii ani statystyk.
Przed publikacją należy uzupełnić informację o administratorze danych na podstawie
rzeczywistych danych firmy; nie wpisano danych innej agencji.

## Ten sam VPS — opcjonalne uruchomienie

Nie zmieniono aktywnej konfiguracji Caddy ani istniejącego skryptu deploy.
Nowy overlay włącza osobny serwis statyczny i nową domenę, zachowując dotychczasowe hosty.
Wymaga aktualnego backendu z obsługą source_site.
Po wskazaniu DNS A (i AAAA tylko jeżeli VPS obsługuje IPv6), użyj tych samych plików
i zmiennych Compose co bieżąca produkcja, dodając na końcu:

```sh
-f docker-compose.transla.yml
```

Najpierw zbuduj www-transla, następnie uruchom www-transla i odtwórz proxy.
Przykład dla konfiguracji produkcja + demo (zmienne DEMO_* muszą być załadowane
tak samo jak w scripts/compose-production.sh; nie wczytuj całego .env.demo do produkcji):

```sh
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.demo.yml -f docker-compose.transla.yml build www-transla
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.demo.yml -f docker-compose.transla.yml up -d --no-deps www-transla
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.demo.yml -f docker-compose.transla.yml up -d --no-deps --force-recreate proxy
```

Caddy obsługuje HTTPS i przekierowuje www.transla.website na transla.website.
API jest proxy'owane tylko pod publiczną trasą formularza.
Overlay należy zachować we wszystkich kolejnych wywołaniach produkcyjnego Compose;
uruchomienie dotychczasowego deploy.sh bez overlay przywróci poprzedni proxy.

## Wersje językowe i ceny

12 kompletnych wersji: PL, EN, DE, FR, ES, IT, NL, PT, UK, RU, CS, SV.
Polska wersja zachowuje adresy bez prefiksu; inne mają /en/, /de/ itd.
Każda wersja obejmuje 10 podstron, formularz i jego komunikaty, metadane i nawigację.
Przełącznik prowadzi do odpowiednika bieżącej podstrony. Każda podstrona ma canonical
oraz wzajemne hreflang dla wszystkich języków i x-default. Social SVG jest neutralny językowo.

Rejestr języków, powiązania tras oraz generowanie treści: src/i18n/index.ts.
Nowy język wymaga pełnego słownika, wpisu w rejestrze i zestawu segmentów adresów.
npm run verify sprawdza kompletność słowników, 120 podstron, linki i wzajemność hreflang.

Przekaz cenowy jest wyeksponowany w nagłówku, sekcji cen i przyciskach wyceny.
Nie wpisano niepotwierdzonych stawek, rabatów ani porównań z konkurencją.
Do użycia hasła „najtańsze na rynku” potrzebne jest potwierdzone porównanie ofert.
