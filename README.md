# Kishorkumar K — Portfolio

A fully responsive personal portfolio for a Full Stack Developer & Digital Marketing Freelancer, built with React, Vite, Tailwind CSS, and Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Folder structure

```
src/
 ├── components/   # Reusable UI: Navbar, Footer, GlassCard, SectionHeading, BackToTop, FloatingShapes
 ├── sections/      # Page sections: Hero, About, Services, Skills, Projects, MarketingResults,
 │                  #   Experience, Certifications, Testimonials, Contact
 ├── data/          # portfolioData.js — ALL site content lives here
 ├── hooks/         # useDarkMode, useCounter (animated stats)
 ├── utils/         # small helpers
 ├── App.jsx
 └── main.jsx
```

## Editing content

Almost everything you'd want to change — name, bio, services, skills, projects, experience,
certifications, achievements, testimonials, and contact links — lives in
`src/data/portfolioData.js`. Edit that one file to update the whole site.

## Contact form (EmailJS)

The contact form in `src/sections/Contact.jsx` uses [EmailJS](https://www.emailjs.com/) (free tier available):

1. Create an account at emailjs.com and set up an Email Service + Template.
2. Copy your Service ID, Template ID, and Public Key.
3. Paste them into the constants at the top of `src/sections/Contact.jsx`:

```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

Until you do this, submitting the form will show a friendly error message instead of failing silently.

## Resume download

The "Resume" button links to `/resume.pdf`. Add your actual resume PDF to the `public/` folder
with that filename so the download works.

## Dark / Light mode

Toggled from the navbar, persisted to `localStorage`, and respects the user's system preference
on first visit (`src/hooks/useDarkMode.js`).

## Design system

- **Palette**: blue → purple → pink gradient (`brand-blue`, `brand-purple`, `brand-pink`) defined in `tailwind.config.js`.
- **Typography**: Space Grotesk (display/headings) + Inter (body), loaded via Google Fonts in `index.html`.
- **Style**: glassmorphism cards (`.glass`, `.glass-card` utility classes in `src/index.css`), soft floating gradient shapes, animated gradient buttons.
- **Motion**: Framer Motion scroll-reveals, animated skill bars, animated stat counters (IntersectionObserver-based), rotating gradient ring in the hero.
- **Accessibility**: visible focus rings, `prefers-reduced-motion` respected, semantic headings.

## SEO

`index.html` includes meta description/keywords, Open Graph + Twitter card tags, a canonical link,
`robots.txt`, and JSON-LD `Person` structured data. Update the placeholder URLs (`kishorkumar.dev`)
to your real domain before deploying.

## Notes

- Placeholder images from the reference template were intentionally **not** included — the hero
  and project cards use gradient/glass panels with initials/text instead, so there's nothing to
  swap out later beyond updating copy in `portfolioData.js`.
- Replace social links (`github`, `linkedin`, `whatsapp`, `email`, `phone`) in `portfolioData.js`
  with your real ones before deploying.
