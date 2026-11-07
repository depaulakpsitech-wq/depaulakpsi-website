# Alpha Kappa Psi · Tau Chi Chapter — depaulakpsi.org

Plain HTML, CSS and JavaScript. No build tools, no installs.

## How the site is hosted
- **Website files:** this GitHub repository (account: depaulakpsi.tech@gmail.com). GitHub Pages publishes it for free, with no limit on updates.
- **Domain (depaulakpsi.org):** registered and DNS-managed at **Netlify** (same Gmail). It auto-renews each year on the card saved in Netlify → Usage & billing. Keep that card current, or the domain lapses.
- The Netlify "project" is no longer used for hosting. Don't delete the Netlify team, because it owns the domain and DNS.

## How to update the live site
1. On GitHub, open the file you want to change (for example `data/site-data.js`) and click the ✏️ pencil icon.
2. Make the edit, then click **Commit changes**.
3. The live site updates in about a minute.

To add photos: open the right folder (for example `images/gallery`), click **Add file → Upload files**, drag the photos in, and commit. Then list the new file names in `data/site-data.js`.

## Everyday updates — `data/site-data.js`
| What | Where in `site-data.js` |
|---|---|
| Instagram, LinkedIn, email, Linktree | `instagram`, `linkedin`, `email`, `linktree` |
| Recruitment term label | `rushSemester` |
| Rush events | `rushEvents` (empty list = "dates coming soon") |
| Interest form | `interestFormUrl` |
| Exec board | `execBoard` (headshots in `images/headshots/`) |
| Brothers roster | `brothers` + `pledgeClassOrder` (don't list e-board members) |
| Brotherhood photo strip | `gallery` (photos in `images/gallery/`) |
| Companies strip | `placements` (`featured: true` = big top row; company names only) |
| Events page | `events` (photos in `images/events/`) |

The stats on the home page (brothers, pledge classes, companies) are counted automatically from these lists.

## Photos
- Headshots: square, about 800×800. The file name must match `photo` exactly.
- Compress every image at https://squoosh.app before uploading. Big photos slow the site down.

## Text on the pages
- Home page copy → `index.html`. FAQ → `index.html` and `recruitment.html`.
- Colors and fonts → top of `css/style.css` (`--navy`, `--gold`).

Check Alpha Kappa Psi's national brand guidelines before using the crest or logo.

## Handoff
Everything (GitHub, Netlify for the domain, Google Search Console) is under depaulakpsi.tech@gmail.com. Pass that login to the next officer.
