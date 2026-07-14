# Gilbert Garage Door Pro — client facts

The source of truth for every factual claim on this site (gilbertgaragedoorpro.com). The
`review-gate` agent reads this file before any push and blocks content that contradicts it
or invents claims it can't find here.

**How to read a status:**

- **CONFIRMED** — trustworthy. Beats the diff, beats the repo, beats a plausible-sounding
  rewrite. New copy may restate these; it may not contradict them.
- **UNCONFIRMED** — the site contradicts itself on this point. Two versions of the claim are
  live right now and **both cannot be true**. The gate must not treat either half as
  settled, and must not let new copy quietly pick a side. Ross resolves these.
- **SUPERSEDED &lt;date&gt;** — was true, now replaced. Kept, never deleted, so the history is
  auditable.

**How this file grows:** append-only. Never edit or delete an entry. When the review gate
blocks a push it asks Ross a question; his answer gets appended here, dated and sourced, and
the gate is smarter on the next run.

Entry format:

```
- **[CONFIRMED|UNCONFIRMED]** <the fact, stated plainly and checkably>
  - Source: <who said it and how> — <YYYY-MM-DD>
```

Scope of the 2026-07-14 seeding pass: all 14 built HTML pages (index, 7 service pages, 404,
privacy-policy, terms, disclaimer, thank-you) plus `brief.md`, `config.md`, `CLAUDE.md`, and
`ads_brief.md`. This site has no about page and no contact page.

---

## Confirmed

### Identity and contact

- **CONFIRMED** The business name is **Gilbert Garage Door Pro**. The live domain is
  **gilbertgaragedoorpro.com**.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** The phone number is **(623) 624-9207**, and it is the **only** phone number
  on the site. It appears on every page (99 `tel:+16236249207` links, 107 rendered
  instances). There is no second number, no separate emergency line, and no fax.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** The site publishes **no street address** and no physical office location. Do
  not add one.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** The site makes **no years-in-business or years-of-experience claim
  anywhere** — no "since 19xx", no "20 years of experience", no "family owned", no "locally
  owned". (The only "since 1993" on the site refers to the federal law requiring photo-eye
  safety sensors, not to the business.) Any future copy asserting a founding year or a
  tenure is inventing it.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** The site names **no customers, no testimonials, no case studies, and no
  third parties presented as clients**. The only outside organizations referenced are cited
  as standards/authority sources, not as clients: **DASMA** (Door & Access Systems
  Manufacturers Association), the **CPSC**, and the **Town of Gilbert**. Naming any
  organization as a customer would be a new claim.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Services

- **CONFIRMED** Services offered, one page each: **garage door repair, garage door opener
  repair, spring repair (torsion and extension), LiftMaster repair, garage door
  installation, emergency repair, garage door sensor repair**, plus a **cost guide** page.
  Component-level work named in copy: springs, openers, cables, rollers, tracks, hinges,
  panels, weatherseals, safety sensors.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** Brands serviced, as listed in the homepage FAQ: **LiftMaster, Chamberlain,
  Genie, Craftsman, Linear, Wayne Dalton, Clopay, and Amarr.** These are named as brands the
  business repairs — **not** as partners, dealers, authorized-servicer relationships, or
  clients. Do not upgrade a brand mention into an endorsement or an authorized-dealer claim.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Service area

- **CONFIRMED** Service area is **Gilbert, AZ and the East Valley**. Cities named:
  **Chandler, Mesa, Queen Creek, San Tan Valley, Tempe, Scottsdale, and Ahwatukee.** (The
  footer's short list omits Ahwatukee; the in-page "Areas We Serve" blocks include it. A
  shorter footer list is an abbreviation, not a competing claim.) Gilbert neighborhoods
  named: **Power Ranch, Val Vista, Cooley Station, Trilogy, Agritopia, San Tan, Gilbert
  Ranch, Seville.**
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Pricing

- **CONFIRMED** Published price ranges, consistent across the homepage FAQ, the cost guide,
  and each service page: overall repair **$75–$400**; **spring replacement $150–$350**
  (both springs as a pair **$200–$400**); **opener repair $100–$400**; **sensor repair
  $75–$200**; **full door installation $800–$2,500**; **new opener installed $250–$600**.
  Every page presents these as **estimates, not guaranteed quotes**.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** **Free estimates.** Every page carries a "Get a Free Estimate Now" CTA, and
  copy promises a free on-site quote with no obligation before work begins.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** **No after-hours surcharge and no trip fee.** Emergency page: "There are no
  extra charges for evenings, weekends, or holidays." Homepage: "There are no trip fees
  added after the fact, no bait-and-switch pricing." The cost guide's "$29 or $39 service
  call fee" passage describes what *other* companies do — it is not this site's pricing.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Speed of service

- **CONFIRMED** **Same-day service** is claimed on every service page.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** **Emergency arrival window is 1–2 hours**, stated consistently on both pages
  that make the claim. Homepage FAQ: "our technicians arrive within 1–2 hours of your call."
  Emergency page: "We respond within 1–2 hours, 24/7."
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** **Most repairs are completed in under an hour**; spring replacements
  specifically in **30–60 minutes**.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Schema

- **CONFIRMED** The LocalBusiness JSON-LD contains **no `aggregateRating` and no
  `reviewCount`** on any page. `priceRange` is `"$$"` sitewide (and `"$75-$200"` on the
  sensor page). Do not add a rating or a review count to schema — there is no review profile
  behind it.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

---

## Unconfirmed — self-contradictions

Each entry below is a claim where **the site disagrees with itself or with its build spec**.
These are the entries that exist to stop the gate from rubber-stamping either half. Ross must
pick one version and the loser must be removed from the site.

- **UNCONFIRMED** Whether Gilbert Garage Door Pro **performs the repair work itself** — has
  its own employed technicians and its own stocked service trucks — or is a **marketing /
  lead-generation brand** that hands the job to independent contractors.
  - Version A: "Our technicians are strategically positioned across the East Valley. For
    most Gilbert addresses, we arrive within one to two hours of your call." —
    `emergency-garage-door-repair.html`. Reinforced by "We carry the most common spring
    sizes on every truck" (`garage-door-spring-repair.html`), "our LiftMaster-stocked trucks
    are ready to respond same day" (`liftmaster-garage-door-repair.html`), and "Our trained
    professionals know garage door systems inside and out" (`index.html`).
  - Version B: "Gilbert Garage Door Pro is **not a garage door repair company**. We do not
    employ technicians, operate service vehicles, or hold contractor licenses for garage
    door repair or installation work." — `disclaimer.html`. Reinforced by "This website is
    operated as a marketing and lead generation service… The actual repair and installation
    work is performed by independent, licensed contractors" (`disclaimer.html`) and "All
    garage door repair, installation, and related work arranged through this Site is
    performed by licensed and insured professionals" (`terms.html`).
  - Why unconfirmed: the site contradicts itself; both cannot be true. Ross must pick one.
    This is the root contradiction — the three entries below are all downstream of it.
  - Source: extracted 2026-07-14

- **UNCONFIRMED** Whether **Gilbert Garage Door Pro itself is licensed and insured**.
  - Version A: "**Licensed & Insured**" — trust badge on all 8 content pages; footer on all
    14 pages: "Licensed, insured, and available 24/7 for emergencies."
  - Version B: "We do not employ technicians, operate service vehicles, or **hold contractor
    licenses** for garage door repair or installation work." — `disclaimer.html`.
  - Why unconfirmed: the site contradicts itself; both cannot be true. Ross must pick one.
    Note this is the highest-risk pair in the file — an Arizona ROC licensing claim is
    checkable by a regulator, and no license number is published anywhere on the site to
    back it up.
  - Source: extracted 2026-07-14

- **UNCONFIRMED** Whether the business offers a **workmanship guarantee**.
  - Version A: "**Workmanship Guarantee.** We stand behind every repair. If something we
    fixed fails or doesn't perform as expected, call us and we'll make it right." —
    `garage-door-repair.html` (near-identical wording on `garage-door-spring-repair.html`).
  - Version B: "we make **no warranty** as to the performance, quality, or outcome of any
    specific repair or installation. All workmanship warranties, **if any**, are provided by
    the service professional directly" — `terms.html`. And: "**No Guarantee of Results.** We
    do not guarantee any specific outcome, result, or timeline for garage door repairs or
    installations arranged through this website." — `disclaimer.html`.
  - Why unconfirmed: the site contradicts itself; both cannot be true. Ross must pick one.
  - Source: extracted 2026-07-14

- **UNCONFIRMED** Whether the business is **staffed 24/7/365** or keeps **business hours**.
  - Version A: "Available 24 hours a day, 7 days a week, **365 days a year**." —
    `emergency-garage-door-repair.html`; "No extra charge for nights or weekends"; the
    LocalBusiness schema on all 9 content pages declares `"opens": "00:00"` / `"closes":
    "23:59"` for all seven days.
  - Version B: "**Hours:** Mon-Fri 8am-6pm, Sat 9am-2pm" — `config.md`, the build spec the
    site was supposed to be built from. And on the site itself: "We've received your request
    and will get back to you shortly — usually within 30 minutes **during business hours**."
    — `thank-you.html`, which presupposes bounded business hours the rest of the site denies.
  - Why unconfirmed: the site contradicts its own brief *and* itself; both cannot be true.
    Ross must pick one.
  - Source: extracted 2026-07-14

- **UNCONFIRMED** Whether the business can claim a **"5-Star Rated"** status.
  - Version A: "**5-Star Rated**" — trust badge on all 8 content pages.
  - Version B: No rating and no review count is published **anywhere** on the site — there is
    no `aggregateRating` in schema, no review count, no testimonial, and no linked review
    profile. And per `disclaimer.html`, "Gilbert Garage Door Pro is not a garage door repair
    company" — a brand that performs no repairs has no repair service to be rated on.
  - Why unconfirmed: the site contradicts itself; both cannot be true. Ross must pick one.
    The gate must **not** let new copy attach a specific star rating or review count to this
    badge to "support" it — that would be fabricating the evidence for a claim that is
    currently unsupported.
  - Source: extracted 2026-07-14

---

## Open questions for Ross

Answer these and most of the section above collapses.

1. Is Gilbert Garage Door Pro a lead-gen brand (as the disclaimer and terms say) or an
   operating repair company (as all 8 content pages say)? Every other contradiction here is
   downstream of this one.
2. If lead-gen: the "Licensed & Insured", "certified technicians", "our trucks", and
   "Workmanship Guarantee" claims on the content pages all need to be re-attributed to the
   contractor who actually does the work, or removed.
3. Is the phone line genuinely staffed 24/7/365, or are `config.md`'s hours (Mon–Fri 8–6,
   Sat 9–2) the real ones? The schema currently tells Google 24/7.
4. What is the basis for "5-Star Rated"? If there's a real review profile, it needs a count
   and a link. If there isn't, the badge should come off.
