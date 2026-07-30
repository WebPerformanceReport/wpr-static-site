# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Build once
npx @11ty/eleventy

# Build and serve locally with live reload
npx @11ty/eleventy --serve

# Watch mode (build without serving)
npx @11ty/eleventy --watch

# Debug mode
DEBUG=* npx @11ty/eleventy
```

Built output goes to `_site/`. There are no tests or linters configured.

## Architecture

This is an **Eleventy (11ty)** static site. The config is `eleventy.config.js` at the root. It registers the passthrough copies (`style.css`, `assets`, `fonts`, `favicon.ico`, `apple-touch-icon.png`), two date filters used by blog templates (`readableDate`, `htmlDateString`), and the `videoFacade` shortcode used by post layouts. A `.eleventyignore` keeps root Markdown (`CLAUDE.md`, `README.md`) from being built as pages.

**Site metadata:** `_data/site.json` holds the canonical origin and branding (`url`, `name`, `logo`, `defaultImage`). `sitemap.njk` → `/sitemap.xml` and `robots.njk` → `/robots.txt` are generated from it; the sitemap has an `excluded` array at the top for pages that should stay out. `_includes/layouts/shared/schema-post.njk` emits `BlogPosting` + `BreadcrumbList` JSON-LD and is included from `blog/base.njk` when `pageClass == "page--post"`.

**Template system:** Pages are `.liquid` files (front matter + HTML); layouts are `.njk` (Nunjucks) files in `_includes/layouts/`. Liquid files declare their layout in front matter (`layout: layouts/home.njk`) and Nunjucks layouts use `{% block %}` / `{% include %}` for composition.

**Layout structure per section:**
- Each top-level section (home, plans, wave, httpo, about-us) has its own `base.njk` that contains the full HTML shell (head, header, nav, footer). These are intentionally duplicated per section rather than using a single shared base.
- Section-specific layouts live in `_includes/layouts/{section}/`.
- Shared partials (footer, testimonials, catalog, FAQ, subscribe form script) are in `_includes/layouts/shared/`.

**Nunjucks block slots** used across layouts:
- `pagemaincontent` — main section content
- `shared_content_testimonials`, `shared_content_catalog`, `shared_content_footer` — injected shared sections

**CSS:** Single `style.css` at root, loaded with a cache-busting query string (e.g. `?20260114`). Update this string when releasing CSS changes.

**Pricing amounts** on the plans page are rendered via CSS classes (`.ui-component-card--pricing-amount-0` through `-4`) rather than hardcoded in HTML — prices live in `style.css`.

**Subscription form** (`_includes/layouts/home-formular.njk`) posts to `https://webperformancereport.com/report/proxy/subscribe.php`. The honeypot field (`name="company"`) and hidden timestamp (`name="ts"`) are anti-spam measures — do not remove them.

**Sub-products** (`/wave/`, `/httpo/`) each have their own entry `.liquid`, layout chain, and thanks pages, following the same pattern as the main site.
