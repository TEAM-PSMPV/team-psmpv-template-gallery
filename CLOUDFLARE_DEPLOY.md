# Cloudflare Deployment Runbook

Production is deployed as the Cloudflare Worker `team-psmpv-template-gallery` and should resolve at:

<https://team-psmpv-template-gallery.teampsmpv.workers.dev/>

## Required GitHub configuration

Create a repository environment named `production` under **Settings → Environments**. Restrict it to the `main` branch and add an owner or release-manager as a required reviewer when that feature is available.

Add these environment secrets, preserving the exact names:

```text
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_API_TOKEN
```

Prefer environment secrets over repository secrets. Remove duplicate repository-level copies after confirming the environment deployment works.

The Cloudflare token must be dedicated to CI, limited to the intended account, and have only the permissions required to edit Workers. Add zone or DNS permissions only when the workflow is explicitly responsible for routes or DNS.

## Automated deployment

`.github/workflows/ci-deploy.yml` runs verification for pull requests and pushes. The deploy job runs only when the event is a push to `refs/heads/main`, after verification succeeds, and within the `production` environment.

The deploy command is:

```bash
npx --no-install wrangler deploy \
  --config dist/server/wrangler.json \
  --name team-psmpv-template-gallery
```

The account ID and API token are passed as process environment values. They are never stored in `wrangler.json`, source code, or build output.

## First deployment checklist

1. Confirm the destination GitHub environment contains both secrets.
2. Confirm the API token is limited to the correct Cloudflare account.
3. Confirm the `production` environment permits `main` deployments.
4. Merge through a reviewed pull request or push the approved initial import to `main`.
5. Open the Actions run and approve the environment if prompted.
6. Verify the Worker name and deployment URL in the deploy log.
7. Open the production URL and inspect the home page and an industry page.
8. Configure branch protections after the initial workflow has produced its required check names.

## Manual deployment for administrators

Ordinary developers should not deploy manually. An authorized administrator can perform a recovery deployment from a clean, reviewed `main` checkout:

```bash
npm ci
npm test
npx wrangler login
npm run deploy:cloudflare
```

Interactive `wrangler login` is for local administration only. GitHub Actions always uses environment secrets.

## Rollback

Use Cloudflare's Worker deployment/version history to roll back immediately when production is unhealthy. Then revert the offending Git commit through a pull request so source control and production converge. Do not repair production only in the dashboard and leave `main` inconsistent.

After rollback:

1. Verify the production URL.
2. Record the failed commit and symptoms in an issue.
3. Revoke the API token if credential compromise is suspected.
4. Prepare and verify a focused correction.

## Common failures

- **Missing secret:** verify both names in the `production` environment; GitHub does not reveal stored values.
- **Authentication error:** verify account scope and rotate the token if its state is uncertain.
- **Authorization error:** compare the operation with the token's least-privilege permissions.
- **Wrong Worker name:** keep `--name team-psmpv-template-gallery` in the workflow.
- **Build artifact missing:** run `npm run build`; deployment requires `dist/server/index.js`, `dist/server/wrangler.json`, and `dist/client`.
- **Environment waiting:** an authorized reviewer must approve the pending deployment.
- **URL not found after success:** confirm the account's Workers subdomain and the Worker name in Cloudflare.
