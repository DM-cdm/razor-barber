# RAZOR Barber Shop — Strona WWW

Gotowy projekt strony internetowej dla barbershopu, stworzony w React + Vite + Tailwind CSS.

## Jak uruchomić lokalnie

```bash
npm install
npm run dev
```

## Jak zbudować wersję produkcyjną

```bash
npm run build
```

Wynik znajdziesz w folderze `dist/`.

## Konfiguracja formularza rezerwacji

1. Wejdź na https://formspree.io i załóż darmowe konto.
2. Stwórz nowy formularz, skopiuj swój endpoint.
3. W pliku `src/components/razor/Booking.jsx` zamień `YOUR_FORM_ID` na prawdziwy kod.

## Struktura projektu

```
razor-barber-shop/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── pages/
    │   └── Home.jsx
    └── components/razor/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── Reviews.jsx
        ├── Booking.jsx
        ├── Gallery.jsx
        ├── About.jsx
        └── Footer.jsx
```

## Technologie

- React 18
- Vite
- Tailwind CSS
- Lucide React (ikony)

## Licencja

Projekt stworzony do celów komercyjnych.
