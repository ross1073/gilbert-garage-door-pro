# Gilbert Garage Door Pro — Site Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an 8-page static HTML rank & rent site for garage door repair in Gilbert, AZ that outranks all current competitors on page 1.

**Architecture:** Static HTML/CSS/JS site with no frameworks. One shared stylesheet, one shared JS file for interactivity (mobile menu, FAQ accordions, sticky header). Each HTML page follows the same section pattern (header → hero → trust bar → content → service area → FAQ → CTA band → footer) but with unique content. AI-generated images processed to WebP. Schema markup (LocalBusiness, Service, FAQPage, BreadcrumbList) embedded as JSON-LD. Deploy to Netlify via GitHub.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Netlify hosting

**Spec:** `docs/superpowers/specs/2026-04-06-site-build-design.md`

---

## Phase 1: Foundation

### Task 1: Project scaffolding and directory structure

**Files:**
- Create: `css/style.css`
- Create: `js/main.js`
- Create: `robots.txt`

- [ ] **Step 1: Create directory structure**

```bash
cd /Users/rosswalker/projects/rank-and-rent/projects/gilbert_az_garage_door_repair
mkdir -p css js images/webp
```

- [ ] **Step 2: Create robots.txt**

Create `robots.txt` with the following content:

```
User-agent: *
Allow: /

Sitemap: https://gilbertgaragedoorpro.com/sitemap.xml
```

- [ ] **Step 3: Commit scaffolding**

```bash
git add robots.txt
git commit -m "chore: add project scaffolding and robots.txt"
```

---

### Task 2: CSS — complete stylesheet

**Files:**
- Create: `css/style.css`

Build the entire stylesheet in one file. Mobile-first, with breakpoints at 768px and 1024px. Must cover every section in the page layout pattern: sticky header, hero, trust bar, content body, services grid, service area, FAQ accordion, CTA band, footer, mobile fixed CTA, and contact form.

- [ ] **Step 1: Write the complete stylesheet**

Create `css/style.css`. The CSS must implement:

**CSS Custom Properties (top of file):**
```css
:root {
  --charcoal: #1a1a2e;
  --navy: #16213e;
  --orange: #e94560;
  --orange-hover: #d63851;
  --white: #ffffff;
  --body-text: #333333;
  --light-gray: #f5f5f5;
  --green: #22c55e;
  --font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
```

**Reset & Base:** Box-sizing border-box, zero margin/padding on body, smooth scroll, font-stack applied, body text color #333, line-height 1.6, font-size 16px.

**Container:** Max-width 1200px, centered, padding 0 20px.

**Sticky Header:**
- Position sticky top 0, z-index 1000, background var(--charcoal)
- Flex layout: logo left, nav center (desktop), phone + CTA button right
- Logo text: white, 20px, bold — "Gilbert Garage Door Pro"
- Phone number: white, visible on desktop, hidden on mobile
- CTA button: orange background, white text, 14px uppercase bold, rounded 6px, padding 10px 20px
- Mobile: hamburger icon replaces nav, phone hidden, CTA stays

**Mobile Nav:**
- Hidden by default, full-width dropdown below header
- Background var(--navy), links stacked, padding 16px
- Toggled by `.nav-open` class on body

**Hero Section:**
- Min-height 500px (mobile 400px), position relative
- Background image with `background-size: cover; background-position: center`
- Dark overlay via `::before` pseudo-element — background rgba(26,26,46,0.6)
- Content centered vertically with flexbox
- H1: white, 36px mobile / 48px desktop, font-weight 800, max-width 700px
- Subheadline: white, 18px, opacity 0.9, max-width 600px, margin-top 16px
- CTA button: orange, 18px, padding 16px 32px, uppercase, bold, rounded 8px, margin-top 24px
- CTA hover: var(--orange-hover), slight translateY(-2px) transform

**Trust Bar:**
- Background white, border-top and border-bottom 1px solid #e5e5e5
- 4 items in a row (flex, wrap on mobile to 2x2 grid)
- Each item: icon (inline SVG or emoji), label text, 14px, center-aligned
- Padding 20px 0

**Content Body:**
- Background white, padding 60px 0
- H2: 28px mobile / 32px desktop, font-weight 700, color var(--charcoal), margin-bottom 16px
- H3: 20px mobile / 24px desktop, font-weight 600, color var(--navy), margin-bottom 12px
- Paragraphs: 16px / 18px desktop, line-height 1.6, margin-bottom 16px, color var(--body-text)
- Lists: left-padded 20px, disc style, 16px, line-height 1.8
- `.content-grid`: 2-column grid on desktop, single column mobile, gap 40px

**Services Grid (homepage):**
- CSS grid: 2 columns mobile, 3 columns tablet, 4 columns desktop
- Each card: background white, border 1px solid #e5e5e5, rounded 12px, padding 24px, text-center
- Card hover: shadow 0 4px 20px rgba(0,0,0,0.1), border-color var(--orange)
- Card icon: 48px, margin-bottom 12px
- Card title: 18px bold, margin-bottom 8px
- Card description: 14px, color #666
- Card link: styled as block link (entire card clickable)

**Service Area Section:**
- Background var(--light-gray), padding 60px 0
- H2 centered
- Two subsections: "Gilbert Neighborhoods" and "East Valley Cities We Serve"
- Tags/pills layout: inline-block items, background white, rounded 20px, padding 8px 16px, margin 4px, font-size 14px, border 1px solid #ddd

**FAQ Section:**
- Background white, padding 60px 0
- Each FAQ item: border-bottom 1px solid #e5e5e5
- Question (button): full width, text-left, padding 20px 0, font-size 18px, font-weight 600, color var(--charcoal), cursor pointer, flex with chevron icon right
- Answer: max-height 0, overflow hidden, transition max-height 0.3s ease, padding 0 0
- `.faq-item.active .faq-answer`: max-height 500px, padding-bottom 20px
- Chevron rotates 180deg on active

**CTA Band:**
- Background var(--charcoal), padding 60px 0, text-center
- Headline: white, 28px / 32px desktop, bold
- Phone number: white, 32px / 40px desktop, bold, margin-top 16px, tel: link
- CTA button: orange, centered, margin-top 24px

**Contact Form:**
- Max-width 600px, centered
- Labels: 14px bold, margin-bottom 4px, display block
- Inputs/textarea: width 100%, padding 12px 16px, border 1px solid #ddd, rounded 8px, font-size 16px, margin-bottom 16px
- Select: same styling as inputs
- Submit button: orange, full width, padding 16px, uppercase bold, rounded 8px
- Focus states: border-color var(--orange), outline none, box-shadow 0 0 0 3px rgba(233,69,96,0.2)

**Footer:**
- Background var(--navy), color white, padding 60px 0 20px
- Grid: 3 columns desktop (Company, Services, Service Area), single column mobile
- Links: white, opacity 0.8, hover opacity 1 and color var(--orange)
- Bottom bar: border-top 1px solid rgba(255,255,255,0.1), padding-top 20px, margin-top 40px
- Copyright text: 14px, opacity 0.6

**Mobile Fixed CTA:**
- Position fixed, bottom 0, left 0, right 0, z-index 999
- Background var(--orange), padding 12px
- Click-to-call link: white text, center-aligned, 18px bold, "Call Now — (480) 555-0199"
- Hidden on desktop (display none above 768px)

**Price Table (cost guide page):**
- `.price-table`: width 100%, border-collapse collapse
- Headers: background var(--charcoal), color white, padding 12px 16px, text-left
- Cells: padding 12px 16px, border-bottom 1px solid #e5e5e5
- Alternating rows: nth-child even background var(--light-gray)

**Breadcrumb:**
- Font-size 14px, color #666, padding 12px 0
- Links: color var(--orange), no underline
- Separator: " > " in ::after pseudo-element

**Utility classes:**
- `.text-center`, `.text-white`, `.mb-0` through `.mb-4` (0, 8px, 16px, 24px, 32px)
- `.visually-hidden` for screen-reader-only content

- [ ] **Step 2: Commit CSS**

```bash
git add css/style.css
git commit -m "feat: add complete stylesheet with mobile-first responsive design"
```

---

### Task 3: JavaScript — mobile menu, FAQ accordions, sticky header

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Write main.js**

Create `js/main.js` with three features:

**1. Mobile menu toggle:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  var menuBtn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-menu');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      var expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('nav-open');
      document.body.classList.toggle('nav-open');
    });
  }
```

**2. FAQ accordion:**
```javascript
  // FAQ accordion
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        var wasActive = item.classList.contains('active');
        // Close all
        faqItems.forEach(function(other) { other.classList.remove('active'); });
        // Open clicked if it wasn't already open
        if (!wasActive) { item.classList.add('active'); }
      });
    }
  });
```

**3. Sticky header shadow on scroll:**
```javascript
  // Sticky header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
});
```

The CSS for `.site-header.scrolled` should add `box-shadow: 0 2px 20px rgba(0,0,0,0.3)` — add this to `style.css` if not already present.

- [ ] **Step 2: Commit JS**

```bash
git add js/main.js
git commit -m "feat: add mobile menu, FAQ accordion, and sticky header JS"
```

---

## Phase 2: AI Image Generation

### Task 4: Generate all hero images (8 images)

**Files:**
- Create: 8 hero images in `images/` directory

Generate each hero image one at a time using the `mcp__mcp-image__generate_image` tool. Use `quality: "quality"`, `aspectRatio: "16:9"`, `imageSize: "2K"`. Each prompt must specify Arizona aesthetic (stucco homes, desert landscaping, bright sunlight, tan/terracotta tones) and professional technician appearance.

- [ ] **Step 1: Generate homepage hero**

Prompt: "Professional garage door repair technician in a dark blue polo shirt working on a white residential garage door on an Arizona stucco home in Gilbert. Bright sunny day, desert landscaping with gravel and cacti in front yard. Tan stucco walls, terracotta roof tiles. Technician has tool belt and is adjusting the garage door mechanism. Professional, realistic photo style."
fileName: `home_hero`
aspectRatio: 16:9, quality: quality, imageSize: 2K

- [ ] **Step 2: Generate opener repair hero**

Prompt: "Professional technician on a step ladder repairing a garage door opener motor unit mounted on the ceiling of a residential garage. Well-lit garage interior, tools visible. Technician wearing dark blue work polo, focused on the motor housing. Realistic photo style, clean and professional."
fileName: `opener_hero`
aspectRatio: 16:9, quality: quality, imageSize: 2K

- [ ] **Step 3: Generate spring repair hero**

Prompt: "Close-up of a professional garage door technician replacing a torsion spring on a residential garage door. Wearing safety glasses and gloves. The spring mechanism, winding bars, and torsion tube are visible. Well-lit, detailed, professional photo style. Emphasis on safety equipment and expertise."
fileName: `spring_hero`
aspectRatio: 16:9, quality: quality, imageSize: 2K

- [ ] **Step 4: Generate LiftMaster repair hero**

Prompt: "Professional garage door technician installing a LiftMaster garage door opener on the ceiling of a clean residential garage. The opener unit is visible with its rail and motor housing. Technician on a ladder, connecting wiring. Clean, modern garage with a white garage door. Professional photo style."
fileName: `liftmaster_hero`
aspectRatio: 16:9, quality: quality, imageSize: 2K

- [ ] **Step 5: Generate installation hero**

Prompt: "Two professional garage door installers working together to install a new modern insulated garage door on an Arizona stucco home. One technician is guiding a door panel onto the track while the other supports it. Bright Arizona sun, tan stucco exterior, desert landscaping. Professional photo style."
fileName: `installation_hero`
aspectRatio: 16:9, quality: quality, imageSize: 2K

- [ ] **Step 6: Generate emergency repair hero**

Prompt: "Dramatic scene of a garage door repair service truck arriving at a residential home at dusk. The garage door is stuck partially open. The service truck has its headlights on, arriving in the driveway. Arizona stucco home, evening sky with warm colors. Conveys urgency and fast response. Professional photo style."
fileName: `emergency_hero`
aspectRatio: 16:9, quality: quality, imageSize: 2K

- [ ] **Step 7: Generate sensor repair hero**

Prompt: "Professional garage door technician kneeling at the base of a garage door track, carefully aligning a safety sensor. Close-up showing the small infrared sensor unit mounted on a metal bracket near the floor. Technician wearing dark blue polo and using a small tool. Clean residential garage interior. Professional photo style."
fileName: `sensor_hero`
aspectRatio: 16:9, quality: quality, imageSize: 2K

- [ ] **Step 8: Generate cost guide hero**

Prompt: "A homeowner and a professional garage door technician standing together in front of an open garage, reviewing a written estimate on a clipboard. Both are visible from the waist up. The technician wears a dark blue work polo. The homeowner looks satisfied. Arizona stucco home in the background. Bright day. Professional photo style."
fileName: `cost_hero`
aspectRatio: 16:9, quality: quality, imageSize: 2K

- [ ] **Step 9: Commit hero images**

```bash
git add images/
git commit -m "feat: add AI-generated hero images for all 8 pages"
```

---

### Task 5: Generate all supporting images (22 images)

**Files:**
- Create: 22 supporting images in `images/` directory

Generate each image using `mcp__mcp-image__generate_image` tool. Use `quality: "quality"`, `aspectRatio: "3:2"`, `imageSize: "2K"`. Group by page for organization.

- [ ] **Step 1: Homepage supporting images (3)**

1. `home_springs` — "Close-up of a garage door torsion spring mechanism mounted on a steel torsion tube above a garage door. Clean, well-lit, showing the coiled spring and bearing plates. Professional product photo style."
2. `home_modern_door` — "Beautiful modern garage door on a Gilbert Arizona stucco home with desert landscaping. Two-car garage with a contemporary flush panel door in warm gray. Gravel yard, small cacti, blue sky. Residential exterior photo."
3. `home_truck` — "Professional garage door service truck parked in the driveway of an Arizona suburban home. The truck is a white work van with tool compartments. A technician in a dark blue polo walks toward the house with a tool bag. Bright sunny day."

- [ ] **Step 2: Opener repair supporting images (3)**

1. `opener_unit` — "Close-up of a LiftMaster garage door opener unit mounted on the ceiling of a garage. Belt-drive rail visible, motor housing with the LiftMaster-style design. Clean, well-lit garage ceiling. Product photo style."
2. `opener_remote` — "Garage door wall-mounted control panel and wireless remote control. The wall panel has buttons and an LCD display. The remote is handheld. Clean white garage wall background. Product photo style."
3. `opener_gears` — "Close-up of the internal gear mechanism of a garage door opener, showing the drive gear and worm gear assembly. Clean macro photo, well-lit, showing mechanical detail. Repair/maintenance context."

- [ ] **Step 3: Spring repair supporting images (3)**

1. `spring_comparison` — "Side by side comparison of a broken garage door torsion spring next to a new replacement spring. The broken spring shows a clear gap/separation. The new spring is shiny and intact. Clean white background. Product comparison photo."
2. `spring_technician` — "Garage door technician wearing safety glasses and heavy gloves, using winding bars to tension a torsion spring on a residential garage door. Focus on the hands, winding bars, and spring. Professional action photo."
3. `spring_hardware` — "Garage door spring hardware laid out on a clean workbench: torsion springs, bearing plates, winding cones, cables, and drums. Organized parts display. Professional product photo style."

- [ ] **Step 4: LiftMaster supporting images (3)**

1. `liftmaster_myq` — "LiftMaster myQ smart garage door control panel mounted on a wall next to a garage door entry. The panel has a modern design with LED indicators. Clean, modern home interior. Product in-context photo."
2. `liftmaster_belt` — "Close-up of a belt-drive garage door opener mechanism showing the reinforced belt and trolley on a steel rail. Clean, well-lit. Mechanical detail photo."
3. `liftmaster_programming` — "Technician's hands programming a LiftMaster garage door remote control while standing near the opener unit in a garage. The remote and the opener's learn button are both visible. Professional photo."

- [ ] **Step 5: Installation supporting images (3)**

1. `install_panels` — "Stack of new insulated garage door panels leaning against a garage wall, ready for installation. The panels show the insulated cross-section with steel exterior and foam core. Bright garage interior."
2. `install_before_after` — "Split image showing a before and after garage door replacement on an Arizona stucco home. Left side: old, weathered, dented single-panel door. Right side: new modern insulated sectional door in a warm gray color. Same house, dramatic improvement."
3. `install_progress` — "Two technicians installing a garage door panel onto the track system of a residential garage. One guides the panel while the other secures the hinges. Action shot, professional workmanship. Well-lit garage interior."

- [ ] **Step 6: Emergency supporting images (2)**

1. `emergency_cable` — "Close-up of a broken garage door lift cable hanging loose from the drum at the top of a garage door track. The frayed cable end is visible. The door is partially open and stuck. Showing the problem clearly."
2. `emergency_offtrack` — "A residential garage door that has come off its track, sitting crooked and partially open. One side of the door has slipped out of the vertical track. The bent track and displaced rollers are visible. Problem documentation photo."

- [ ] **Step 7: Sensor repair supporting images (3)**

1. `sensor_leds` — "Close-up of two garage door safety sensors at the bottom of garage door tracks, one showing a green LED light and the other showing a red/amber LED light. The sensors are small black units mounted on metal brackets. Detail photo."
2. `sensor_bracket` — "A garage door safety sensor unit mounted on its metal bracket at the base of a garage door track. The small infrared sensor, its wiring, and the wing nut adjustment are clearly visible. Clean detail photo."
3. `sensor_testing` — "Technician using a small level tool to check the alignment of a garage door safety sensor at the bottom of a door track. Hands visible, precise work. Professional maintenance photo."

- [ ] **Step 8: Cost guide supporting images (2)**

1. `cost_door_styles` — "Three different garage door styles displayed side by side on Arizona stucco homes: a traditional raised-panel door, a carriage house style door, and a modern flush panel door. Showing variety and style options. Architectural photo."
2. `cost_parts` — "Assorted garage door repair parts laid out on a clean workbench: torsion springs, extension springs, rollers, hinges, cables, a garage door opener motor, and safety sensors. Organized display. Shows the range of components that might need repair."

- [ ] **Step 9: Commit all supporting images**

```bash
git add images/
git commit -m "feat: add AI-generated supporting images for all pages"
```

---

## Phase 3: HTML Pages

Each page follows the same section pattern but with unique content. Build them in priority order.

### Task 6: Homepage (index.html)

**Files:**
- Create: `index.html`

- [ ] **Step 1: Build the complete homepage**

Create `index.html` with the full page structure. This is the template that all other pages follow, so build it carefully.

**Document head must include:**
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<title>Garage Door Repair Gilbert AZ | Gilbert Garage Door Pro</title>`
- `<meta name="description" content="Fast, reliable garage door repair in Gilbert, AZ. 24/7 emergency service. Springs, openers, sensors, installation. Licensed & insured. Call now for same-day service.">`
- `<link rel="canonical" href="https://gilbertgaragedoorpro.com/">`
- Open Graph tags: og:title, og:description, og:type (website), og:url, og:image (home hero)
- `<link rel="stylesheet" href="css/style.css">`

**Body sections (in order):**

1. **Header** — sticky, logo "Gilbert Garage Door Pro", nav links to all 7 service pages, phone "(480) 555-0199", orange "Call Now" button with `tel:` link, hamburger menu button for mobile

2. **Hero** — background image `images/home_hero.jpg`, dark overlay, H1: "Garage Door Repair in Gilbert, AZ", subheadline: "Fast, reliable service from Gilbert's trusted garage door experts. Available 24/7 for emergencies.", orange CTA button "Call Now for Same-Day Service" with `tel:` link

3. **Trust bar** — 4 items with SVG icons: shield icon "Licensed & Insured", clock icon "24/7 Emergency", star icon "5-Star Rated", checkmark icon "Same Day Service"

4. **Breadcrumb** — Home (no link, current page). Wrap in `<nav aria-label="Breadcrumb">`

5. **"Why Choose Gilbert Garage Door Pro"** — H2, 4 differentiators in a 2x2 grid:
   - "Expert Technicians" — trained professionals who know garage door systems inside and out
   - "Same-Day Service" — we arrive the same day you call, most repairs done in under an hour
   - "Upfront Pricing" — no surprise fees, you know the cost before we start
   - "All Brands Serviced" — LiftMaster, Chamberlain, Genie, Craftsman, and more

6. **Services Grid** — H2 "Our Garage Door Services", grid of cards linking to each service page:
   - Opener Repair → garage-door-opener-repair.html
   - Spring Repair → garage-door-spring-repair.html
   - LiftMaster Repair → liftmaster-garage-door-repair.html
   - Installation → garage-door-installation.html
   - Emergency Repair → emergency-garage-door-repair.html
   - Sensor Repair → garage-door-sensor-repair.html
   Each card: icon, title, 2-sentence description, "Learn More →" link

7. **Gilbert Content Block** — H2 "Garage Door Repair Experts Serving Gilbert, AZ". Write 400-500 words covering:
   - Gilbert's rapid growth and housing stock (median built 2001, 25-year-old springs/openers at end of life)
   - 76% homeownership rate meaning direct emergency searches
   - Arizona heat impact — 115°F summers accelerate spring fatigue, dry out lubricant, burn out opener motors
   - Position as the local expert who understands these Gilbert-specific challenges
   - Include image: `home_modern_door`
   - Outbound link: Town of Gilbert official site (natural context about the city)

8. **Service Area Section** — H2 "Areas We Serve", light gray background.
   - "Gilbert Neighborhoods": Power Ranch, Val Vista, Cooley Station, Trilogy, Agritopia, San Tan, Gilbert Ranch, Seville — display as tag/pill list
   - "East Valley Cities": Chandler, Mesa, Queen Creek, San Tan Valley, Tempe, Scottsdale, Ahwatukee — display as tag/pill list
   - Include image: `home_truck`
   - Brief paragraph: "Gilbert Garage Door Pro serves homeowners and businesses across Gilbert and the East Valley. Whether you're in Power Ranch or Queen Creek, our technicians are nearby and ready to help."

9. **FAQ Section** — H2 "Frequently Asked Questions About Garage Door Repair". 5 FAQs:
   - "How much does garage door repair cost in Gilbert?" — answer with ranges, link to cost guide page
   - "How quickly can you get to my home?" — same-day, usually within 1-2 hours
   - "Do you repair all garage door brands?" — yes, list brands
   - "Is it safe to repair a garage door spring myself?" — no, explain danger, link to spring repair page
   - "Do you offer emergency garage door repair?" — yes, 24/7, link to emergency page
   Each FAQ uses `<button>` for the question (accessibility) and `<div>` for the answer.

10. **Contact Form Section** — H2 "Request a Free Estimate". Form fields: Name (text), Phone (tel), Email (email), Service Needed (select: Garage Door Repair, Opener Repair, Spring Repair, Installation, Emergency, Sensor Repair, Other), Message (textarea). Submit button. `action="#"` placeholder.

11. **CTA Band** — dark background. "Need Garage Door Repair in Gilbert?" + phone number as tel: link + orange CTA button

12. **Footer** — 3-column grid:
    - Column 1 "Gilbert Garage Door Pro": brief company description, phone number
    - Column 2 "Services": links to all service pages
    - Column 3 "Service Area": list of Gilbert neighborhoods and East Valley cities
    - Bottom bar: copyright "© 2026 Gilbert Garage Door Pro. All rights reserved." and "Serving Gilbert, AZ and the East Valley"

13. **Mobile Fixed CTA** — fixed bottom bar, click-to-call, hidden on desktop

14. **Schema markup** (before closing `</body>`) — three `<script type="application/ld+json">` blocks:

**LocalBusiness:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gilbert Garage Door Pro",
  "description": "Professional garage door repair and installation in Gilbert, AZ. 24/7 emergency service.",
  "url": "https://gilbertgaragedoorpro.com",
  "telephone": "(480) 555-0199",
  "priceRange": "$$",
  "areaServed": [
    {"@type": "City", "name": "Gilbert", "sameAs": "https://en.wikipedia.org/wiki/Gilbert,_Arizona"},
    {"@type": "City", "name": "Chandler"},
    {"@type": "City", "name": "Mesa"},
    {"@type": "City", "name": "Queen Creek"},
    {"@type": "City", "name": "San Tan Valley"},
    {"@type": "City", "name": "Tempe"}
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "serviceType": ["Garage Door Repair", "Garage Door Installation", "Garage Door Opener Repair", "Garage Door Spring Repair"]
}
```

**FAQPage:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does garage door repair cost in Gilbert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Garage door repair in Gilbert typically costs between $75 and $400 depending on the issue. Spring repair runs $150-$350, opener repair $100-$400, and sensor repair $75-$200. Visit our cost guide for detailed pricing."
      }
    }
  ]
}
```
(Include all 5 FAQs in the mainEntity array)

**BreadcrumbList:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://gilbertgaragedoorpro.com/"}
  ]
}
```

15. **Scripts** — `<script src="js/main.js" defer></script>` before closing body

**Content must include:**
- 2,000+ words of unique body content
- Outbound links: DASMA (https://www.dasma.com/) and Town of Gilbert (https://www.gilbertaz.gov/) — both `target="_blank" rel="noopener"`
- Internal links to all service pages (in services grid and contextually in body text)
- All images with descriptive alt text, loading="lazy" (except hero), width/height attributes
- All phone numbers as `<a href="tel:+14805550199">` links

- [ ] **Step 2: Preview and verify in browser**

```bash
open index.html
```

Check: header sticks on scroll, mobile menu works, FAQ accordions work, all links work, images load, responsive at all breakpoints.

- [ ] **Step 3: Commit homepage**

```bash
git add index.html
git commit -m "feat: add homepage with full content, schema, and SEO optimization"
```

---

### Task 7: Opener Repair page

**Files:**
- Create: `garage-door-opener-repair.html`

- [ ] **Step 1: Build the opener repair page**

Same structure as homepage (header, hero, trust bar, content, service area, FAQ, CTA, footer) but with unique content per the spec section 4.2.

**Key differences from homepage:**
- Title: `Garage Door Opener Repair Gilbert AZ | Same Day Service`
- Meta description: per spec
- H1: `Garage Door Opener Repair in Gilbert, AZ`
- Hero image: `opener_hero`
- Breadcrumb: Home > Garage Door Opener Repair
- Content: 1,500+ words covering common opener problems, brands serviced, Arizona heat angle, repair vs replace
- Supporting images: `opener_unit`, `opener_remote`, `opener_gears` — placed contextually in content
- Internal links: to LiftMaster page, installation page, emergency page, cost guide
- Outbound links: LiftMaster official support (https://www.liftmaster.com/support), IDA (https://www.doors.org/)
- FAQ: 5 opener-specific questions
- Schema: Service (type "Garage Door Opener Repair") + FAQPage + BreadcrumbList

**Service schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Garage Door Opener Repair",
  "description": "Professional garage door opener repair in Gilbert, AZ. All brands serviced including LiftMaster, Chamberlain, Genie, and Craftsman.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Gilbert Garage Door Pro",
    "telephone": "(480) 555-0199"
  },
  "areaServed": {"@type": "City", "name": "Gilbert", "sameAs": "https://en.wikipedia.org/wiki/Gilbert,_Arizona"},
  "serviceType": "Garage Door Opener Repair"
}
```

- [ ] **Step 2: Commit**

```bash
git add garage-door-opener-repair.html
git commit -m "feat: add garage door opener repair page"
```

---

### Task 8: Spring Repair page

**Files:**
- Create: `garage-door-spring-repair.html`

- [ ] **Step 1: Build the spring repair page**

Same structure. Unique content per spec section 4.3.

**Key specifics:**
- Title: `Garage Door Spring Repair Gilbert AZ | Fast & Safe`
- H1: `Garage Door Spring Repair in Gilbert, AZ`
- Hero image: `spring_hero`
- Content: 1,500+ words — torsion vs extension springs, failure signs, safety warning (do NOT DIY), spring lifespan in Arizona heat, Gilbert housing stock age
- Supporting images: `spring_comparison`, `spring_technician`, `spring_hardware`
- Internal links: emergency page (springs breaking is the #1 emergency), opener repair, cost guide
- Outbound links: DASMA safety guidelines (https://www.dasma.com/consumer-resources/safety/), CPSC garage door safety (https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Garage-Doors)
- FAQ: 5 spring-specific questions (cost, how long does repair take, can I DIY, how long do springs last, torsion vs extension)
- Schema: Service + FAQPage + BreadcrumbList

- [ ] **Step 2: Commit**

```bash
git add garage-door-spring-repair.html
git commit -m "feat: add garage door spring repair page"
```

---

### Task 9: LiftMaster Repair page

**Files:**
- Create: `liftmaster-garage-door-repair.html`

- [ ] **Step 1: Build the LiftMaster repair page**

Same structure. Unique content per spec section 4.4.

**Key specifics:**
- Title: `LiftMaster Garage Door Repair Gilbert AZ | Certified Service`
- H1: `LiftMaster Garage Door Repair in Gilbert, AZ`
- Hero image: `liftmaster_hero`
- Content: 1,500+ words — model-specific content (belt drive 8500W, chain drive 8365, wall mount 8500, myQ series), common issues, why LiftMaster is popular in Gilbert new construction, repair vs replace
- Supporting images: `liftmaster_myq`, `liftmaster_belt`, `liftmaster_programming`
- Internal links: opener repair page, installation page, emergency page
- Outbound links: LiftMaster official product pages (https://www.liftmaster.com/garage-door-openers), LiftMaster support (https://www.liftmaster.com/support)
- FAQ: 5 LiftMaster-specific questions
- Schema: Service + FAQPage + BreadcrumbList
- **SEO note:** This is the easiest high-value win (diff 8, $50.56 CPC). Content should be the most technically detailed page on the site.

- [ ] **Step 2: Commit**

```bash
git add liftmaster-garage-door-repair.html
git commit -m "feat: add LiftMaster garage door repair page"
```

---

### Task 10: Installation page

**Files:**
- Create: `garage-door-installation.html`

- [ ] **Step 1: Build the installation page**

Same structure. Unique content per spec section 4.5.

**Key specifics:**
- Title: `Garage Door Installation Gilbert AZ | New Doors & Openers`
- H1: `Garage Door Installation in Gilbert, AZ`
- Hero image: `installation_hero`
- Content: 1,500+ words — door types, materials, insulation (critical in AZ), opener installation, smart upgrades, Gilbert construction boom
- Supporting images: `install_panels`, `install_before_after`, `install_progress`
- Internal links: cost guide (pricing), opener repair, LiftMaster page (smart openers)
- Outbound links: Energy.gov garage door insulation (https://www.energy.gov/energysaver/weatherstripping), DASMA door selection (https://www.dasma.com/consumer-resources/)
- FAQ: 5 installation questions (cost, how long, what type of door, insulation, smart openers)
- Schema: Service + FAQPage + BreadcrumbList

- [ ] **Step 2: Commit**

```bash
git add garage-door-installation.html
git commit -m "feat: add garage door installation page"
```

---

### Task 11: Emergency Repair page

**Files:**
- Create: `emergency-garage-door-repair.html`

- [ ] **Step 1: Build the emergency repair page**

Same structure. Unique content per spec section 4.6.

**Key specifics:**
- Title: `Emergency Garage Door Repair Gilbert AZ | 24/7 Service`
- H1: `Emergency Garage Door Repair in Gilbert, AZ`
- Hero image: `emergency_hero`
- Content: 1,500+ words — what constitutes an emergency, response time, common scenarios, safety tips while waiting, 24/7 messaging. More urgency-driven tone than other pages.
- Supporting images: `emergency_cable`, `emergency_offtrack`
- Internal links: spring repair (most common emergency), opener repair, sensor repair
- Outbound links: CPSC garage door safety (https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Garage-Doors), Town of Gilbert (https://www.gilbertaz.gov/)
- FAQ: 5 emergency questions (what is an emergency, how fast response, cost, what to do while waiting, hours)
- Schema: Service + FAQPage + BreadcrumbList
- **Design note:** Consider making the CTA buttons slightly larger/more prominent on this page. Phone number should be extra visible.

- [ ] **Step 2: Commit**

```bash
git add emergency-garage-door-repair.html
git commit -m "feat: add emergency garage door repair page"
```

---

### Task 12: Sensor Repair page

**Files:**
- Create: `garage-door-sensor-repair.html`

- [ ] **Step 1: Build the sensor repair page**

Same structure. Unique content per spec section 4.7.

**Key specifics:**
- Title: `Garage Door Sensor Repair Gilbert AZ | Safety Sensor Fix`
- H1: `Garage Door Sensor Repair in Gilbert, AZ`
- Hero image: `sensor_hero`
- Content: 1,500+ words — how sensors work, common problems, Arizona-specific issues (sun glare on west-facing garages, dust buildup), troubleshooting guide, when to call a pro
- Supporting images: `sensor_leds`, `sensor_bracket`, `sensor_testing`
- Internal links: opener repair, emergency page, cost guide
- Outbound links: CPSC federal sensor requirement (https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Garage-Doors), UL safety standards (https://www.ul.com/)
- FAQ: 5 sensor questions (why is light blinking, can I fix myself, cost, how sensors work, sun interference)
- Schema: Service + FAQPage + BreadcrumbList

- [ ] **Step 2: Commit**

```bash
git add garage-door-sensor-repair.html
git commit -m "feat: add garage door sensor repair page"
```

---

### Task 13: Cost Guide page

**Files:**
- Create: `garage-door-repair-cost.html`

- [ ] **Step 1: Build the cost guide page**

Same structure. Unique content per spec section 4.8.

**Key specifics:**
- Title: `Garage Door Repair Cost in Gilbert AZ | 2026 Price Guide`
- H1: `Garage Door Repair Cost in Gilbert, AZ`
- Hero image: `cost_hero`
- Content: 1,800+ words — price ranges table (use `.price-table` CSS class), factors affecting cost, Gilbert market context, how to get a fair estimate, pricing red flags
- **Price table:**

| Service | Typical Cost Range |
|---------|-------------------|
| Spring Repair | $150 - $350 |
| Opener Repair | $100 - $400 |
| Sensor Repair | $75 - $200 |
| Panel Replacement | $200 - $800 |
| Cable Repair | $100 - $250 |
| Full Door Installation | $800 - $2,500 |
| Opener Installation | $300 - $600 |

- Supporting images: `cost_door_styles`, `cost_parts`
- Internal links: every service page (from the corresponding row in the price table)
- Outbound links: DASMA maintenance (https://www.dasma.com/consumer-resources/), national cost comparison source
- FAQ: 5 cost questions (how much for spring, why prices vary, do you charge a service call fee, financing available, free estimates)
- Schema: FAQPage + BreadcrumbList (no Service schema — this is informational)
- **SEO note:** SEO difficulty 7. Easiest page to rank. Target "how much does garage door repair cost" and "garage door repair cost" long-tail queries.

- [ ] **Step 2: Commit**

```bash
git add garage-door-repair-cost.html
git commit -m "feat: add garage door repair cost guide page"
```

---

## Phase 4: Technical SEO & Final Files

### Task 14: XML Sitemap

**Files:**
- Create: `sitemap.xml`

- [ ] **Step 1: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/2000/01/sitemaps/sitemap0.9">
  <url>
    <loc>https://gilbertgaragedoorpro.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://gilbertgaragedoorpro.com/garage-door-opener-repair.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://gilbertgaragedoorpro.com/garage-door-spring-repair.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://gilbertgaragedoorpro.com/liftmaster-garage-door-repair.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://gilbertgaragedoorpro.com/garage-door-installation.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://gilbertgaragedoorpro.com/emergency-garage-door-repair.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://gilbertgaragedoorpro.com/garage-door-sensor-repair.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://gilbertgaragedoorpro.com/garage-door-repair-cost.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

- [ ] **Step 2: Commit**

```bash
git add sitemap.xml
git commit -m "feat: add XML sitemap"
```

---

### Task 15: 404 page

**Files:**
- Create: `404.html`

- [ ] **Step 1: Create 404 page**

Simple page using the same header/footer as the rest of the site. Content:
- H1: "Page Not Found"
- Brief message: "Sorry, the page you're looking for doesn't exist. Let us help you find what you need."
- Link back to homepage
- Links to main service pages
- Phone number CTA
- Same schema: just BreadcrumbList

- [ ] **Step 2: Create Netlify config for custom 404**

Create `_redirects` file (Netlify reads this for custom 404):

```
/* /404.html 404
```

- [ ] **Step 3: Commit**

```bash
git add 404.html _redirects
git commit -m "feat: add 404 page and Netlify redirect config"
```

---

### Task 16: Final review and quality check

- [ ] **Step 1: Validate all HTML pages**

Open each page in a browser and check:
- H1 count is exactly 1 per page
- All internal links work (no broken links)
- All images load
- Mobile menu works
- FAQ accordions work
- Phone numbers are all `tel:` links
- Schema markup is valid (paste into https://validator.schema.org/)
- Alt text on all images
- No console errors

- [ ] **Step 2: Check SEO fundamentals**

For each page verify:
- Title tag present and under 60 characters
- Meta description present and under 160 characters
- Canonical URL present and correct
- OG tags present
- One H1 only
- H2/H3 hierarchy is clean (no skipped levels)
- Schema JSON-LD is valid JSON
- Internal links to 2-3 related pages exist in body content
- Outbound links present with `target="_blank" rel="noopener"`
- Breadcrumb present and correct

- [ ] **Step 3: Mobile responsiveness check**

Resize browser to 375px width and check each page:
- Mobile fixed CTA bar visible at bottom
- Hamburger menu works
- Hero text is readable
- Content doesn't overflow horizontally
- FAQ tap targets are at least 44px
- Images scale properly

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final review and cleanup"
```

---

## Summary

| Phase | Tasks | Pages/Files |
|-------|-------|-------------|
| Phase 1: Foundation | Tasks 1-3 | CSS, JS, robots.txt |
| Phase 2: Images | Tasks 4-5 | 30 AI-generated images |
| Phase 3: HTML Pages | Tasks 6-13 | 8 HTML pages |
| Phase 4: Technical | Tasks 14-16 | sitemap.xml, 404.html, QA |

**Total: 16 tasks, 8 pages, ~30 images, ~14,000+ words of unique content.**
