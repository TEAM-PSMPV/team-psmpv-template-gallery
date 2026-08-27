# Architecture

## Overview

The gallery is a server-rendered React application that uses the Next.js App Router API through Vinext and runs as a Cloudflare Worker.

```text
Browser
  → Cloudflare Worker
    → Vinext application router
      → app/page.tsx or app/industry/[slug]/page.tsx
        → app/template-data.ts
      → Cloudflare static assets from dist/client
```

## Source layout

- `app/` contains routes, layout metadata, styles, and gallery data.
- `public/` contains static icons, brand assets, and template previews.
- `worker/index.ts` adapts the Vinext handler to Cloudflare and handles image optimization.
- `vite.config.ts` configures Vinext and the Cloudflare Vite plugin.
- `db/`, `drizzle/`, and `examples/d1/` contain optional D1 scaffolding; production does not currently bind or use D1.
- `scripts/` provides bounded installation, build, and artifact validation for Linux CI.
- `tests/` validates the generated Worker response.

## Build artifact

`vinext build` generates:

```text
dist/
  client/                  static assets
  server/index.js          Worker entry module
  server/wrangler.json     generated Wrangler configuration
```

The validator requires an ESM default export with a `fetch` function and verifies the expected Worker and asset paths. Generated files are never committed.

## Deployment trust boundary

Pull requests run without Cloudflare secrets. Only a successful `main` workflow can enter the GitHub `production` environment. That environment supplies the account ID and narrowly scoped API token after its configured protection rules pass.

Changes to workflow files can change how secrets are used, so `.github/workflows/` is code-owner protected and should receive the same review as production application code.

## Optional storage

D1 is not required by the current gallery. If it is introduced, create a production database, bind it as `DB`, add appropriate migrations, update the generated deployment configuration strategy, and document backup and rollback procedures before merging.
