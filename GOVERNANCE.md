# Governance

## Roles

- **Contributors** propose changes through issues, discussions, and pull requests.
- **Reviewers** assess correctness, clarity, accessibility, and maintainability.
- **Maintainers** merge pull requests, triage work, manage releases, and protect repository standards.
- **Release managers** approve production deployments and verify production health.
- **Organization owners** manage membership, security policy, credentials, and emergency access.

Access follows least privilege. Public contributors should normally work through forks. Write, maintain, and admin roles are granted only when the responsibilities require them.

## Decisions

Routine fixes and content changes are decided through pull-request review. Significant architectural, security, governance, licensing, or deployment changes begin with an issue or discussion and require explicit maintainer approval.

No contributor approves their own security-sensitive change. Unresolved objections about security, legal rights, production risk, or destructive migration block a merge until an organization owner or delegated maintainer resolves them.

## Releases

`main` represents the releasable state. Required checks and reviews must pass before merge. Production deployment is automated through the protected `production` environment. Release managers verify the deployment URL and coordinate rollback when necessary.

## Emergency changes

For an active incident, maintainers may use an expedited pull request with focused scope and documented verification. Branch protections, auditability, and credential safety remain in force. A follow-up issue records the cause and longer-term remediation.
