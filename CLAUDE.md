# Rank & Rent Project: Garage Door Repair in Gilbert, AZ

## What This Is

This is a rank & rent SEO project. The goal is to build a static website that ranks
for garage door repair-related keywords in Gilbert, AZ, then lease the site (and its leads)
to a local business.

## Project Files

- `brief.md` — Market overview, keyword data, recommended site structure (READ FIRST)
- `keywords.csv` — Full keyword data (50 keywords with volume, CPC, difficulty, intent)
- `competitors.csv` — Current SERP competitors and their rankings
- `ads_brief.md` — Google Search Ads copy and campaign setup guide
- `market_data.json` — Raw structured data for reference
- `config.md` — Phone number, form embed code, business info (USER FILLS IN)
- `images/` — User-supplied images (see `images/README.md` for naming convention)

## Site Build Instructions

1. Read `brief.md` for the market overview and recommended page structure
2. Read `config.md` for phone number, form embed code, and business details — use these on every page
3. Build a static site (HTML/CSS/JS) optimized for the keywords in `keywords.csv`
4. Use images from `images/` folder — optimize them during build (resize to max 1600px width, compress, convert to WebP, add srcset for responsive loading, add lazy loading)
5. Every page needs: meta title/description targeting keywords, schema markup (LocalBusiness), the phone number and form from config.md, fast load times
5. Push to GitHub and deploy to Netlify
6. The site should look professional, modern, and trustworthy — this represents a real local business

## SEO Priorities

- Target commercial and transactional intent keywords (see intent column in keywords.csv)
- Include city name and surrounding area references naturally in content
- Add LocalBusiness schema markup with the target city
- Internal linking between service pages
- Mobile-first responsive design
- Core Web Vitals: aim for all green in Lighthouse

## What NOT to Do

- Do not use stock photos — only images from the `images/` folder
- Do not keyword stuff — write naturally for humans
- Do not create thin pages — each page should have substantial, useful content
- Do not use frameworks (React, etc.) — keep it static HTML for speed
