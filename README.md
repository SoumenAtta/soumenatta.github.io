# soumenatta.com

Source for [www.soumenatta.com](https://www.soumenatta.com/) — a Jekyll site, built to replace the previous Google Sites version while preserving every existing published URL (see "URL preservation" below).

## Running locally

This machine's Ruby (3.0.2) doesn't have the `ruby-dev` headers needed to build native gem extensions. One-time setup:

```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
```

Then, from this folder:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. Jekyll auto-rebuilds on file changes.

## Structure

- `_config.yml` — site title, nav menu, plugins.
- `_data/*.yml` — publications (journals/conferences), research & teaching experience, courses, and the data sets index. **Add new entries here**, not by hand-editing HTML.
- `_layouts/`, `_includes/` — page templates and header/footer/nav partials.
- `assets/css/style.scss` — the entire design system (colors, type, components) in one file.
- `academics/`, `publications/`, `experiences/`, `datasets/`, `blogs/`, `contact/` — content pages, one folder per URL path.
- `datasets/<name>/` — full copies of the standalone `soumenatta/<name>` GitHub repos (TIP, MOUFLPCP, MApHLP, SApHLP, MOMCLPCP, FCMCLP, CFLPSDO, ERBOMCLP, TIP-HLNSLS), so each keeps working at its exact original URL. If you update a dataset, update it both here and in its original standalone repo (or retire the standalone repo once this site is live).

## Adding a publication

Open `_data/journals.yml` or `_data/conferences.yml` and add an entry at the **top** (most recent first) following the existing format. No HTML editing needed.

## Adding a course (once teaching resumes as faculty)

Add an entry at the top of `_data/courses.yml`. It automatically appears in the table at `/experiences/teaching_experiences/courses`.

## URL preservation

Every URL that was live on the old site resolves to the same path here (e.g. `/academics`, `/publications/journals`, `/datasets/tip`, `/experiences/teaching_experiences/courses`). The `datasets/*` pages are byte-for-byte copies of the existing `soumenatta.github.io/<name>` supplementary pages, so citations pointing at `www.soumenatta.com/datasets/...` keep resolving to the same content.

## Still needed before going live

- **Profile photo**: drop a square headshot at `assets/img/profile.jpg` (displayed on the homepage; a placeholder monogram shows until then).
- Review all content for accuracy — this was migrated from the previous site's text plus the standalone dataset repos.

## Deploying

This repo is set up for GitHub Pages with a custom domain (`CNAME` file already points to `www.soumenatta.com`). Nothing has been pushed to GitHub yet — this is a local-only build. When ready: create the GitHub repo, push, enable Pages in the repo settings, and confirm the Squarespace DNS records for `www.soumenatta.com` point at GitHub Pages.
