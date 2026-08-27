# Changelog

Notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and releases should use semantic versioning where practical.

## Unreleased

### Added

- GitHub Actions verification, CodeQL analysis, and protected Cloudflare deployment.
- Public repository security, governance, support, contribution, and beginner documentation.
- Dependabot configuration and structured issue, discussion, and pull-request templates.

### Changed

- Production artifact validation now checks the generated Worker, Wrangler configuration, and static assets.
- Cloudflare deployment is independent of OpenAI-specific project metadata.

### Removed

- Unused OpenAI hosting metadata and workspace authentication helper.
