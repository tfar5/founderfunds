# Devpost submission text

**Project name:** FounderFunds

**Track:** Public Data APIs

**Links:** Live demo https://tfar5.github.io/founderfunds/ · Deck https://tfar5.github.io/founderfunds/deck.html · Code https://github.com/tfar5/founderfunds

## Inspiration
The federal R&D credit is turning into a software credit. IRS data shows C-corps claiming it rose from 19,701 in 2015 to 34,414 in 2022, and claimed dollars roughly tripled to $42.6B. Information-sector claimants tripled. Startups with under $5M in revenue can even use up to $500K a year against payroll tax with no profit. Still, most seed founders skip it. They think it's for big companies, fear the paperwork, and don't know where to look.

## What it does
FounderFunds helps tech founders who just raised turn engineering payroll into R&D-credit cash, with a claim that holds up:
- **Home:** the need (about $7,400 back per engineer a year for a seed team), why it's urgent (payroll-election deadline, 5-year window, Section G in 2026, expiring years) and a four-step path.
- **GitHub evidence:** with explicit consent, reads a public repo's commit history through the GitHub REST API, flags R&D signals, suggests projects and each person's R&D share, and adds dated, linked evidence to the audit trail.
- **File & claim:** a 7-step walkthrough from eligibility to Form 6765, the payroll election and quarterly Form 8974. It ends with a CPA packet download or a partner intro where you tick exactly what to share.
- **Data sources:** one tab listing every public API and dataset, what it powers, its freshness and limits, and what leaves your browser.
- **Estimate:** pick a sample company or enter 8 numbers. It shows the cash you could get now (payroll-tax offset plus refundable state credits) separately from credits banked for future tax bills, and translates the cash into runway.
- **Cash timeline:** shows when the money arrives (the quarter after you file, through Form 8974) and how many quarters it takes at your payroll.
- **Audit trail:** a project log built around the IRS four-part test and the 2026 Form 6765 Section G fields, with a Markdown export for your CPA.
- **Explore:** who claims (IRS), where federal R&D money flows by county (USAspending), state credit rules for 21 states, and open federal grants (Grants.gov).

## How we built it
A static site on GitHub Pages in vanilla JavaScript. D3 and topojson load only when the county map opens. USAspending and Grants.gov are called live from the browser with a timeout, and fall back to dated snapshots. Every figure carries a live, snapshot or modeled badge. The estimator implements the alternative simplified credit (6%, or 14% above half the 3-year base), the optional Section 280C election, the $250K Social Security plus $250K Medicare payroll-offset caps with the 2026 wage base, and state rules updated for 2025–26 (California SB 711, Texas SB 2206, Michigan's new refundable credit).

## Public data and its limits
- **IRS SOI** Publication 16 Table 14 (2015, 2022) and size-of-receipts tables (2013). C-corps only, and no size breakdown since 2013.
- **Census County Business Patterns 2022.** Establishments are not firms, and industry is not eligibility.
- **GitHub REST API.** Public commits only, on request, after consent; falls back to a sample snapshot if rate-limited.
- **USAspending.gov API.** SBIR/STTR is a keyword proxy, not official SBIR.gov totals.
- **Grants.gov Search API.** The browser is blocked by CORS, so we show a dated snapshot.
- **NSF NCSES / HERD.** Correlations are not causation.
- **State credit table.** Hand-compiled because no public API exists.

The "Data & limits" panel lists all of this in the app.

## Privacy and consent
There is no backend. Calculator inputs never leave the browser. The audit log stays in localStorage, is exported only when you click Export, and "Delete my data" wipes it. The only network calls are public-data reads, and they carry none of your inputs. No accounts, cookies or analytics.

## Challenges
The best public IRS breakdowns are years old, the rules changed in 2025–26 (the OBBBA tax law, Form 6765 Section G, SBIR reauthorization), and state credits vary widely in whether they pay out cash. The hardest part was being honest about which numbers are measured and which are modeled, and separating paper credits from real cash.

## What's next
- GitHub sign-in for private repos, Linear and Jira tickets, and AI-drafted four-part-test and Section G text.
- SBIR plus credit stacking.
- A lookback finder for amended prior-year returns.
- Official SBIR.gov data.
- A partner model: documentation software, CPA filing, and credit advances, distributed through VCs and payroll providers.

*Not tax advice.*
