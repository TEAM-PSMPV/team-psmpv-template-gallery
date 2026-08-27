# Contributing

Thank you for improving the TEAM-PSMPV Template Gallery. All changes are made through reviewed pull requests.

## Before starting

1. Search existing issues and pull requests.
2. Open an issue for a substantial feature, behavior change, dependency migration, or architectural change.
3. For small copy, preview-image, or bug fixes, a focused pull request is sufficient.
4. Never include credentials, private customer data, or unlicensed assets.

## Development workflow

```bash
git switch main
git pull --ff-only origin main
git switch -c feat/short-description
npm ci
npm run dev
```

Use `feat/`, `fix/`, `docs/`, `chore/`, or `security/` branch prefixes. Keep one logical change per branch.

Before opening a pull request:

```bash
npm run lint
npm test
git fetch origin
git rebase origin/main
```

Resolve conflicts locally, rerun checks, and update your own feature branch with:

```bash
git push --force-with-lease
```

Never force-push `main` or another developer's branch.

## Pull-request expectations

- Explain what changed, why it changed, and how it was tested.
- Link the related issue when one exists.
- Include screenshots for visible changes at desktop and mobile widths.
- Keep generated output out of the commit.
- Update documentation when commands, architecture, configuration, or contributor behavior changes.
- Wait for required checks and code-owner approval.
- Resolve every review conversation before merge.

Maintainers use squash merging. Pull-request titles should be clear enough to become the final commit message, for example `feat: add healthcare template filters`.

## Gallery data and images

Gallery records live in `app/template-data.ts`. Preview images live in `public/previews/`.

- Use descriptive lowercase filenames with hyphens.
- Optimize images before committing them.
- Do not reuse copyrighted screenshots without authorization.
- Verify every external URL and use HTTPS.
- Supply meaningful alternative text through the template name.

## Security-sensitive changes

Do not experiment with production credentials. Workflow, permission, deployment, and dependency changes require a maintainer who understands their security impact. Follow [SECURITY.md](SECURITY.md) for vulnerability reports.

By participating, you agree to [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
