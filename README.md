# FounderFunds

An interactive navigator for startup R&D tax credits, state incentives, and federal grants. Built for the super{set} hackathon, **Public Data APIs** track.

**Problem:** Most eligible startups never claim R&D credits. The rules are scattered across the IRS, 50 state rulebooks, and many grant agencies.

**What it does**
1. Estimator: state, vertical, headcount and spend produce an estimated federal credit, payroll-tax offset (up to $500K/yr for qualified small businesses), and state credit.
2. State map: color states by credit rate or SBIR/STTR dollars; click for rules.
3. Live funding feed: open federal opportunities by vertical from Grants.gov.

**Public data used**
- Grants.gov Search API (open/forecasted opportunities). Browsers are blocked by CORS, so the demo uses a dated snapshot fetched from the live API (UI labels it).
- USAspending.gov API (SBIR/STTR-related award dollars by state), fetched live in the browser with a cached fallback.
- Hand-curated state credit table (`states.js`): no public API exists.

**Limits (also in the app's "Data & limits")**: simplified eligibility math, 20 states, keyword-based SBIR proxy, rules change yearly. Not tax advice.

**Privacy:** everything runs in the browser; no accounts, cookies, analytics, or server.

**Run locally:** `python3 -m http.server 8000` then open http://localhost:8000
