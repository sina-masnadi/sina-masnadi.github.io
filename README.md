# Sina Masnadi's personal website

Static portfolio hosted by GitHub Pages at [masnadi.me](https://masnadi.me/).

## Editing and previewing

- `index.html` contains the introduction, experience, skills, publications, and education.
- `css/profile.css` adds responsive and accessibility refinements to the existing theme.
- `css/liquid-glass.css` styles the glass navigation, cards, and responsive layout.
- `css/resume.css` and `vendor/` contain the original Bootstrap resume theme and bundled dependencies.
- `CNAME` configures the custom domain.

Preview locally from the repository root:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`. HTML and `profile.css` changes do not require a build or npm installation.

The legacy Gulp tooling is only needed to rebuild the original theme's Sass or minified assets.

Keep publication links matched to their titles and venues. Use general descriptions for confidential industrial research; do not publish internal project names, unreleased device details, or private performance figures.

The previous Resume button referenced a missing `resume.pdf`. Restore a download link when a current, public-ready PDF is available.
