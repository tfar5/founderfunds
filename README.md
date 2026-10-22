# FounderFunds

An interactive navigator for startup R&D tax credits, state incentives, and federal grants. Built for the super{set} hackathon, **Public Data APIs** track.

**Problem:** Most eligible startups never claim R&D credits. The rules are scattered across the IRS, 50 state rulebooks, and many grant agencies.

**What it does**
1. Estimator: state, vertical, headcount and spend produce an estimated federal credit, payroll-tax offset (up to $500K/yr for qualified small businesses), and state credit.
2. State explorer: map states by an Opportunity index (our labeled model), credit rate, SBIR/STTR dollars, or university NSF+NIH dollars; click for rules and ranks.
3. Who claims: IRS SOI 2014 Form 6765 data by sector (claimants, dollars, average credit).
4. Top 10 hurdles to making a claim, each with a practical fix.
5. Universities and blind spots: top institutions and states by NSF+NIH awards, plus commonly missed rules.
6. The startup gap: IRS claims by company size (firms under $5M receipts are 45% of claimants but get 4.6% of credit dollars), plus an adjustable claim-rate model.
7. R&D heatmap: county-level federal R&D dollars (d3 + us-atlas) and state correlations between university R&D and tech activity.
8. Audit trail builder: log projects against the IRS refund-claim requirements; saved locally, exported for your CPA.
9. Live funding feed: open federal opportunities by vertical from Grants.gov.

**Public data used**
- Grants.gov Search API (open/forecasted opportunities). Browsers are blocked by CORS, so the demo uses a dated snapshot fetched from the live API (UI labels it).
- USAspending.gov API (SBIR/STTR-related award dollars by state), fetched live in the browser with a cached fallback.
- IRS Statistics of Income, Form 6765 sector table (tax year 2014).
- USAspending.gov NSF + NIH awards to higher-education institutions (cached snapshot).
- IRS SOI Figures B and C (claims by size, 2013).
- Census County Business Patterns 2022 (R&D-intensive establishments by state).
- Hand-curated state credit table (`states.js`): no public API exists.

**Limits (also in the app's "Data & limits")**: simplified eligibility math, 21 states, keyword-based SBIR proxy, rules change yearly. Not tax advice.

**Privacy:** everything runs in the browser; no accounts, cookies, analytics, or server.

**Run locally:** `python3 -m http.server 8000` then open http://localhost:8000
