# kpktrinex-website

The website of **KPK Trinex Technologies** - https://kpktrinextechnologies.in - built with [Astro](https://astro.build)
as plain static pages and published by GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

## Run it

```bash
npm ci
npm run dev        # http://localhost:4321, changes show as you save
npm run build      # the site in dist/
npm run preview    # serve dist/ to check the build
```

## Where things are

| What | Where |
|---|---|
| Company name, Udyam number, address, phone, email, menu | `src/data/company.ts` - word for word as on the Udyam certificate |
| A product (its own page + link out) | `src/content/products/<name>.md`, screenshots in `public/products/<name>/` |
| A client project (Work) | `src/content/projects/<name>.md`, screenshot in `public/work/` - see `src/content/projects/HOW-TO-ADD-A-PROJECT.txt` |
| Pages | `src/pages/` (home, products, work, about, contact, privacy-policy, terms, 404, llms.txt) |
| Look | `src/styles/global.css` (the logo's navy / blue / teal; Fraunces + Work Sans served from `public/fonts`) |
| Domain | `public/CNAME` |

A new product or project is one Markdown file: the home page, the lists, the sitemap and `llms.txt` pick it up.

## Rules for what the site says

- Only what is true today: no invented clients, testimonials, numbers or certifications; no prices.
- A client's work is shown only with the client's agreement.
- The legal name, address and Udyam number stay exactly as registered - Meta and Google compare them.
- No third-party scripts, fonts, analytics or cookies (the privacy policy says so).

## Search engines and sharing

Every page has its own title (under ~60 characters) and description (120-160), a canonical address, a share card
(`public/og-card.jpg`, 1200 x 630; a product can name its own), breadcrumbs, and structured data: the company
(Organization) on every page, the website on the home page, the page itself with its breadcrumb trail, products as
SoftwareApplication. Screenshots live in `src/assets` and are built into AVIF / WebP copies per screen size. Links that
leave the site use `components/ExternalLink.astro` (a new tab, said to screen readers); the 404 page is `noindex`.
`sitemap-index.xml`, `robots.txt` and `llms.txt` are built with the site.

## Working on it

Branch from `main` (`feature/<kebab>`), open a PR, merge: the merge deploys. Check pages at 375 / 768 / 1366 px before
merging.

## Domain (GoDaddy DNS)

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
| CNAME | www | prakashdhayal.github.io |
| TXT | _github-pages-challenge-prakashdhayal | (from GitHub › Settings › Pages › Verified domains) |

Email (MX, SPF, DKIM, DMARC), Meta's and Google's verification records are added beside these.
