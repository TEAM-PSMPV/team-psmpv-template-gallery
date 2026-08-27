# TEAM-PSMPV Template Gallery

[![Production](https://img.shields.io/badge/production-Cloudflare-F38020?logo=cloudflare&logoColor=white)](https://team-psmpv-template-gallery.teampsmpv.workers.dev/)
[![CI](https://github.com/TEAM-PSMPV/team-psmpv-template-gallery/actions/workflows/ci-deploy.yml/badge.svg)](https://github.com/TEAM-PSMPV/team-psmpv-template-gallery/actions/workflows/ci-deploy.yml)
[![CodeQL](https://github.com/TEAM-PSMPV/team-psmpv-template-gallery/actions/workflows/codeql.yml/badge.svg)](https://github.com/TEAM-PSMPV/team-psmpv-template-gallery/actions/workflows/codeql.yml)

The public directory of TEAM-PSMPV website design templates, organized by industry and deployed as a Cloudflare Worker.

Production: <https://team-psmpv-template-gallery.teampsmpv.workers.dev/>

## Technology

- Node.js 22.13 or newer
- Next.js App Router rendered by [Vinext](https://github.com/cloudflare/vinext)
- React and TypeScript
- Vite and the Cloudflare Vite plugin
- Cloudflare Workers and Wrangler
- GitHub Actions for verification, security analysis, and production deployment

## Start locally

```bash
git clone https://github.com/TEAM-PSMPV/team-psmpv-template-gallery.git
cd team-psmpv-template-gallery
npm ci
npm run dev
```

Open the local URL printed by Vite. No Cloudflare credential is needed for ordinary development.

For a complete beginner-friendly walkthrough, read [INSTRUCTIONS.md](INSTRUCTIONS.md). Contributors should also read [CONTRIBUTING.md](CONTRIBUTING.md).

## Common commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install exactly the dependencies in `package-lock.json` |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run the repository lint checks |
| `npm test` | Build, validate the Worker artifact, and run tests |
| `npm run build` | Generate and validate `dist/server` and `dist/client` |
| `npm run preview:cloudflare` | Build and run the Worker locally through Wrangler |
| `npm run deploy:cloudflare` | Manually deploy with locally configured Cloudflare credentials |

The bounded CI helper scripts use Linux utilities including `flock` and GNU `timeout`. Use Linux, WSL, or the GitHub-hosted Ubuntu runner for the exact CI path.

## Update gallery content

Edit [app/template-data.ts](app/template-data.ts) to add or update industries and templates. Put optimized preview images in `public/previews/` and reference them using paths such as `/previews/example.jpg`.

Keep pull requests small. A content-only pull request should not change deployment workflows or package dependencies unless that change is necessary.

## Deployment

Merging a verified pull request into `main` starts the production deployment. The workflow:

1. Installs locked dependencies on Ubuntu.
2. Runs lint, build validation, and tests.
3. Waits for any configured `production` environment approval.
4. Uses the environment secrets `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN`.
5. Deploys the Worker as `team-psmpv-template-gallery`.

Pull-request workflows never receive the Cloudflare credentials. Detailed setup and recovery instructions are in [CLOUDFLARE_DEPLOY.md](CLOUDFLARE_DEPLOY.md).

## Repository safety

- Never commit `.env*`, `.dev.vars*`, API tokens, account credentials, private keys, `.wrangler/`, `.sites-runtime/`, `dist/`, or `node_modules/`.
- Do not paste secrets into issues, discussions, pull requests, screenshots, or workflow logs.
- Do not push directly to `main`; use a feature branch and pull request.
- Report vulnerabilities privately according to [SECURITY.md](SECURITY.md).

## Project documentation

- [INSTRUCTIONS.md](INSTRUCTIONS.md) — beginner setup and day-to-day workflow
- [CONTRIBUTING.md](CONTRIBUTING.md) — contribution and pull-request requirements
- [ARCHITECTURE.md](ARCHITECTURE.md) — application and deployment design
- [CLOUDFLARE_DEPLOY.md](CLOUDFLARE_DEPLOY.md) — deployment administration
- [SECURITY.md](SECURITY.md) — security policy and vulnerability reporting
- [SUPPORT.md](SUPPORT.md) — where to ask for help
- [GOVERNANCE.md](GOVERNANCE.md) — roles and decision process
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — community behavior
- [CHANGELOG.md](CHANGELOG.md) — notable project changes

## Copyright and licensing

Copyright © 2026 TEAM-PSMPV. No open-source license has been granted yet. Public visibility permits viewing and forking through GitHub, but it does not grant permission to commercially reuse TEAM-PSMPV branding, template artwork, or preview assets. Organization owners should add an explicit license before offering broader reuse rights.
