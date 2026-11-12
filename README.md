# Dhinesh C Rajan — Portfolio

[![Live site](https://img.shields.io/badge/site-dhineshcr.github.io-14213d)](https://dhineshcr.github.io)

Personal portfolio of **Dhinesh C Rajan**, Senior Data Engineer (Snowflake · PySpark · SQL · dbt · AWS · AI & Data Platforms).

> **Deployment branch:** GitHub Pages publishes from `site-flagship`. Make website changes on a feature branch and merge into `site-flagship` to go live.

## What's on the site

- Profile and key numbers
- Experience — ThoughtSpot, SagasIT Analytics, Capgemini
- Selected project — LLM / SLM salary extraction & enrichment pipeline
- Skills, education and certifications
- Contact and downloadable résumé

## Tech

Plain HTML, CSS and a small vanilla-JS file — no build step and no frameworks.

- Fonts: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (headings) and [Inter](https://fonts.google.com/specimen/Inter) (body), via Google Fonts
- Icons: [Font Awesome](https://fontawesome.com/)
- Responsive layout with a mobile menu; respects `prefers-reduced-motion`

## Structure

```
DhineshCR.github.io/
├── index.html                       # The whole page
├── assets/
│   ├── css/style.css                # Theme and layout (colours are CSS variables in :root)
│   ├── js/main.js                   # Mobile menu, scroll reveal, active nav link
│   ├── images/headshot.jpg          # Portrait in the hero section
│   └── files/Dhinesh_C_Rajan_Resume.pdf
└── README.md
```

## Common updates

- **Résumé:** replace `assets/files/Dhinesh_C_Rajan_Resume.pdf`, keeping the same file name, so no links need changing.
- **Photo:** replace `assets/images/headshot.jpg` with a square image (at least 480×480).
- **Content:** edit `index.html`; each section is marked with a comment.
- **Colours and fonts:** edit the variables at the top of `assets/css/style.css`.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Contact

- Email: dhineshcr09@gmail.com
- LinkedIn: [Dhinesh C Rajan](https://www.linkedin.com/in/dhinesh-c-rajan/)
- GitHub: [@DhineshCR](https://github.com/DhineshCR)
