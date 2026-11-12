# Transla

Statyczna strona **transla.website** (Astro, 12 wersji językowych). To repozytorium zawiera wyłącznie kod strony. Backend zleceń i edge proxy działają na VPS w osobnym stacku `2026-abc`.

## Stack

- Astro 7, `output: static`, sitemap, treści w `src/i18n/*.json`, blog w `src/data/blog/*.json`.
- Obraz Docker: build na Node 22, potem Caddy 2 serwujący `/srv` na porcie 80.
- Formularz: przeglądarka wysyła POST na `/api/public/order-form` i `/api/public/visit`. Edge proxy kieruje te ścieżki do `laravel:8000` w sieci `2026-abc_app`. W tym repo nie ma backendu.

## Lokalny podgląd

```sh
npm ci
npm run dev
```

Adres: `http://localhost:4323`. Strona działa bez backendu; wysyłka formularza wymaga lokalnego API. `PUBLIC_RECAPTCHA_SITE_KEY` opisuje `.env.example`.

## Build i weryfikacja

```sh
npm ci
npm run build
npm run verify
```

`verify` sprawdza wygenerowane linki, domenę, formularz, 12 kompletnych słowników, 300 stron i wzajemność hreflang.

## Deployment

- GitHub Actions (`.github/workflows/deploy.yml`) buduje obraz i wypycha `ghcr.io/williampanasiuk/transla-website:latest`.
- Następnie łączy się po SSH z VPS i uruchamia `docker compose` w `/home/deployer/transla-website` (`pull` + `up -d`).
- Sekrety repo: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, opcjonalnie `VPS_PORT`, `PUBLIC_TRANSLA_RECAPTCHA_SITE_KEY`.

Kontener nie publikuje portów. Wchodzi do zewnętrznej sieci `2026-abc_app` z aliasem `www-transla`. Edge proxy (Caddy w stacku `2026-abc`) terminuje TLS, kieruje `transla.website` na `www-transla:80` i przekazuje `/api/public/*` do `laravel:8000`.

Bootstrap VPS (jednorazowo):

```sh
mkdir -p /home/deployer/transla-website
# skopiuj compose.yaml z tego repo
cd /home/deployer/transla-website
docker login ghcr.io
docker compose up -d
```

## Wyodrębnienie z 2026-abc

Kod powstał w repo `2026-abc` w katalogu `www-transla`; historia została przeniesiona przez `git subtree split`. Na VPS kontener `2026-abc-www-transla-1` zastąpiono kontenerem z tego repo, a proxy w `2026-abc` nadal obsługuje domenę.

## Zasady

- Żadnych sekretów w repo; `.env*` poza `.env.example` jest ignorowane.
- Żadnych wymyślonych danych rejestrowych, adresów, opinii ani statystyk na stronie.
- Po zmianie treści: `npm run build && npm run verify`.
