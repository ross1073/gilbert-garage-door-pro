# Garage Door Repair — Gilbert, AZ
## Rank & Rent Project Playbook

Generated on April 06, 2026 at 03:53 PM

---

### Step 1: Review the Data

- Open `brief.md` for market overview and keyword analysis
- Check `keywords.csv` for the full keyword list with volumes, CPC, and difficulty
- Review `competitors.csv` to see who currently ranks

### Step 2: Fill In Config & Add Images

- Open `config.md` and fill in your phone number, form embed code, and business details
- Open `images/README.md` for the naming convention
- Drop your photos into `images/` using the page slug naming format
- Any size is fine — Claude will optimize them during the build

### Step 3: Build the Site

Open Claude Code in this folder and paste:

```
Read the CLAUDE.md and brief.md files, then build a static site targeting
these keywords. Use images from the images/ folder. Push to GitHub and
deploy to Netlify.
```

### Step 4: Set Up Google Search Ads

Open Claude and paste:

```
Read ads_brief.md in this folder and walk me through setting up my
Google Search campaign step by step in Google Ads Manager.
```

### Step 5: Monitor & Iterate (30 days later)

Re-run the SEO report to check progress:

```
python3 ~/projects/3sm_code/reports/seo_report.py "Gilbert, AZ" "garage door repair"
```

Then ask Claude to adjust ad copy based on performance data.

---

**Project Viability:** Excellent (11/12)
**Estimated Monthly Revenue (organic):** $26,008.15
**Recommended Ad Budget:** ~$7147.50/month
