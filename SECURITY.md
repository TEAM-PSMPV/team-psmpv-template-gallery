# Security Policy

## Supported version

Only the code on the `main` branch and the current production deployment are supported with security fixes.

## Report a vulnerability privately

Do not open a public issue, discussion, or pull request for a vulnerability. Use the TEAM-PSMPV [contact form](https://www.teampsmpv.com/contact-us) and clearly mark the message as a security report. If GitHub private vulnerability reporting is enabled, that is also an approved channel.

Include the affected page or component, reproduction steps, likely impact, and any safe proof of concept. Do not access data that does not belong to you, disrupt production, or perform destructive testing.

Maintainers should acknowledge a complete report within five business days, assess severity, prepare a fix privately, rotate exposed credentials immediately, and coordinate disclosure after remediation.

## Credentials

Cloudflare credentials belong only in the GitHub `production` environment or an authorized local secret store. They must never appear in source files, Git history, `.env` examples, logs, screenshots, issues, or discussions.

If a credential may have been exposed:

1. Revoke or rotate it in Cloudflare immediately.
2. Replace the corresponding GitHub environment secret.
3. Remove the value from Git history and workflow logs where possible.
4. Review Cloudflare and GitHub audit activity.
5. Treat a leaked token as compromised even if it was quickly deleted.

## Dependency and workflow security

GitHub Actions are pinned to immutable commit SHAs. Dependabot monitors npm and Actions dependencies. CodeQL scans JavaScript and TypeScript. Changes to `.github/workflows/`, dependency manifests, Worker configuration, or security documentation require maintainer review.
