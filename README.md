# Little Lemon Restaurant — Front-End Capstone

A responsive React web application built as the capstone project for the **Meta Front-End Developer Professional Certificate** on Coursera.

---

## Key Features

- **Table Reservation** — multi-field form with client-side validation, available time slots generated dynamically from a seeded API, and a confirmation screen after booking
- **Interactive Menu** — tabbed navigation across Starters, Mains, Desserts, and Drinks categories
- **Order Online** — add items to a basket, view a running total, and place an order
- **Responsive Design** — mobile-first CSS with Grid and Flexbox, tested across 320 px – 1440 px
- **Accessible Markup** — semantic HTML5 elements (`<main>`, `<section>`, `<header>`, `<nav>`, `<aside>`), ARIA labels on all interactive controls, keyboard-navigable focus styles
- **Client-side Routing** — React Router v6 with `NavLink` for active-link highlighting and no full-page reloads
- **Unit Tests** — 14 passing tests covering routes, API utilities, form rendering, and form interactions

---

## Pages

| Route | Component | Description |
|---|---|---|
| `/` | Home | Hero, weekly specials gallery, testimonials, about snippet |
| `/about` | About | Restaurant story, values, team photos |
| `/menu` | Menu | Tabbed menu with category filtering |
| `/reservation` | Reservation | Date/time/guests/occasion booking form |
| `/confirmation` | ConfirmReservation | Post-booking confirmation screen |
| `/order-online` | OrderOnline | Add-to-basket ordering UI |
| `/login` | Login | Email/password sign-in form with validation |
| `*` | NotFound | 404 fallback page |

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | React 18.2 |
| Language | JavaScript ES6+ |
| Routing | React Router DOM 6 |
| Styling | Plain CSS with custom properties (design tokens), CSS Grid, Flexbox |
| Icons | React Icons 5 |
| Testing | Jest + React Testing Library |
| Build tool | Create React App (react-scripts 5) |

---

## Project Structure

```
src/
├── assets/
│   ├── food/          # Food item images
│   ├── restaurant/    # Location & ambience photos
│   ├── avatars/       # User profile pictures
│   └── Logo.svg
├── components/
│   ├── header/        # Header, NavDesktop, NavMobile, Routes
│   ├── footer/        # Footer
│   └── ui/
│       ├── button/    # Reusable Button component
│       ├── card/      # Card & CardGallery
│       └── formField/ # Accessible form field wrapper
├── pages/
│   ├── homepage/      # Home, Hero, Highlights, Testimonials, About-snippet
│   ├── about/         # Full About page
│   ├── menu/          # Menu with tab navigation
│   ├── reservation/   # Reservation form + provider + confirmation
│   ├── order-online/  # Online ordering with basket
│   ├── login/         # Login form
│   └── not-found/     # 404 page
├── utils/
│   └── fakeAPI.js     # Seeded random time-slot generator & submit stub
└── __tests__/
    ├── App.test.js
    └── pages/
        └── Reservation.test.js
```

> **Note on `public/` vs `src/assets/`:**
> `public/` contains static files served as-is by the web server (`index.html`, `manifest.json`, `robots.txt`, favicon). They are referenced by absolute URL and are not processed by webpack.
> `src/assets/` contains images imported directly into React components. webpack processes them, enabling content-hash fingerprinting and optimised bundling.

---

## Getting Started

### Prerequisites

- Node.js >= 16
- npm >= 8

### Installation

```bash
git clone https://github.com/mustafacangoktas/meta-little-lemon.git
cd meta-little-lemon
npm install
```

### Development server

```bash
npm start
# Opens http://localhost:3000
```

### Run tests

```bash
npm test
# Runs all 14 unit tests in watch-off mode
```

### Production build

```bash
npm run build
```

---

## Accessibility

- All images include descriptive `alt` text
- Form fields use `<label>` elements with matching `htmlFor`/`id` pairs
- Interactive elements have visible `:focus-visible` outlines
- Navigation uses `<nav>` landmark; mobile menu exposes `aria-label` and `role="dialog"`
- Colour contrast for primary green (`#495E57`) on white passes WCAG AA at normal text sizes

---

## Grading Rubric Checklist (Meta Capstone)

- [x] Reservation form with date, time, guests, and occasion fields
- [x] Available times update based on selected date
- [x] Form validates input before submission
- [x] Confirmation page displays after booking
- [x] Unit tests for time generation, form rendering, and form submission
- [x] Semantic HTML throughout
- [x] Responsive layout works on mobile and desktop

---

## Screenshots

### Home Page
![Home page with hero banner, weekly specials gallery, and testimonials](https://i.imgur.com/jl8YH8h.png)

### About Page
![About page featuring restaurant story, team values, and location photos](https://i.imgur.com/K48Pavw.png)

### Menu Page
![Menu page with tabbed category navigation and food items](https://i.imgur.com/Yc0IrF8.png)

### Reservation Page
![Reservation form with date, time, guests, and occasion fields](https://i.imgur.com/aQw8rAJ.png)

### Order Online Page
![Order online interface with menu items, basket, and checkout](https://i.imgur.com/8KXcaGI.png)

### Login Page
![Login form with email, password, and validation](https://i.imgur.com/4pFm2Wh.png)

---

## Inspiration & Attribution

This project was developed as part of the Meta Front-End Developer Capstone and is inspired by the original **Little Lemon** reference project by [Melissa Kipp](https://github.com/melissakipp/little-lemon-app).

We built upon the design concept and extended it with:
- Full-featured order online system with shopping basket
- Enhanced accessibility and semantic HTML
- Comprehensive unit tests (14 passing tests)
- Modern routing with React Router v6
- Organized asset structure

---

## Acknowledgements

Built as part of the [Meta Front-End Developer Capstone](https://www.coursera.org/learn/meta-front-end-developer-capstone) course.
Project repository: https://github.com/mustafacangoktas/meta-little-lemon
