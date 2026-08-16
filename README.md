# Norton CDU Protocols

A password-gated reference site listing Norton Hospital CDU (Clinical Decision Unit)
condition-specific protocols. Click any diagnosis to expand its inclusion/exclusion
criteria, interventions, discharge/admission parameters, and order set.

## Viewing it on your own computer

Because the page loads its data as separate files, opening `index.html` by double-clicking
it won't run correctly in all browsers. Easiest fix: install the free
[VS Code](https://code.visualstudio.com/) editor's **Live Server** extension, open this
folder, right-click `index.html`, and choose "Open with Live Server." (Or ask Claude to
start a local preview for you again.)

## Changing the password

Open `js/app.js` and edit this line near the top:

```js
const GATE_PASSWORD = "cdu2026";
```

Change `"cdu2026"` to whatever you want. Remember: this is a **casual gate only** — anyone
who views the page source can read this file and see (or bypass) the password. Don't put
anything here that needs real security.

## Editing protocol content

All the protocol text lives in `data/protocols.js` as a structured list. Each protocol has:

- `criteria` — Inclusion Criteria, Exclusion Criteria, Potential CDU Interventions,
  Discharge Parameters, Admission Parameters
- `orderSet` — the checklist (Activity, Diet, IVF, Medications, Labs, Imaging, Nursing
  Orders, Consults)

Edit the text in quotes to update content; the site re-renders automatically from this file.

## Known gaps (carried over from the source manual)

A few protocols were missing a piece in the original document and are shown that way here
rather than invented:
- **Appendicitis** — order set only, no criteria list
- **Heart Failure (CHF)** — criteria only, no order set
- **Vaginal Bleeding** — criteria only, no order set
- **Vertigo** — criteria only, no order set

The manual's flowchart diagrams are included as "Protocol Algorithm" thumbnails inside each
matching protocol card — click one to view it full-size. Four protocols have no flowchart
because the source manual's Appendix A didn't include one for them: **Appendicitis,
Heart Failure (CHF), Vaginal Bleeding, and Vertigo.**

Abdominal Pain/Colitis's flowchart (`images/abdominal-pain-colitis-algorithm.png`) is a custom
diagram built to match the manual's Norton-style visual layout (navy/orange/light-blue palette,
no diamond decision shapes), covering surgical consult, non-operative management orders, and
discharge/admission outcomes for this protocol.

## Publishing it online (GitHub Pages)

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Create a new repository (e.g. `cdu-protocols`), keep it **private** if you don't want it
   publicly indexed (note: GitHub Pages on a free plan only serves *public* repos as a live
   site — a private repo needs GitHub Pro/Team, or a different host).
3. From this folder, run:
   ```
   git remote add origin https://github.com/YOUR-USERNAME/cdu-protocols.git
   git push -u origin main
   ```
4. In the repo on GitHub: Settings → Pages → Source → select the `main` branch → Save.
5. GitHub will give you a URL like `https://YOUR-USERNAME.github.io/cdu-protocols/`.

Ask Claude for help with any of these steps when you're ready.
