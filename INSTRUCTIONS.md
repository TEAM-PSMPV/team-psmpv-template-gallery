# Beginner Developer Instructions

This guide starts with no assumed Git or Cloudflare experience. Follow it in order the first time you contribute.

## 1. Install the tools

Install Git, Node.js 22.13 or newer, npm, and a code editor. Use Linux or WSL when you need to run the exact CI scripts.

```bash
git --version
node --version
npm --version
```

Ask a maintainer to add you to the appropriate TEAM-PSMPV GitHub team. Enable two-factor authentication on your GitHub account.

## 2. Get the project

If you have organization write access:

```bash
git clone https://github.com/TEAM-PSMPV/team-psmpv-template-gallery.git
cd team-psmpv-template-gallery
```

If you do not have write access, click **Fork** on GitHub, clone your fork, and add the organization repository as `upstream`:

```bash
git clone https://github.com/YOUR-USERNAME/team-psmpv-template-gallery.git
cd team-psmpv-template-gallery
git remote add upstream https://github.com/TEAM-PSMPV/team-psmpv-template-gallery.git
```

Confirm the remotes with `git remote -v`.

## 3. Install dependencies

```bash
npm ci
```

Use `npm ci`, not `npm install`, for an unchanged dependency set. It follows `package-lock.json` exactly and avoids accidental lockfile edits.

## 4. Start the site

```bash
npm run dev
```

Open the URL shown in the terminal. Stop the server with `Ctrl+C`. You do not need Cloudflare credentials for ordinary development. Never ask another developer to send credentials through chat.

## 5. Start a task safely

```bash
git switch main
git pull --ff-only origin main
git switch -c feat/describe-your-change
```

Fork contributors should update from the organization with:

```bash
git fetch upstream
git merge --ff-only upstream/main
```

Never develop directly on `main`.

## 6. Add or update a template

1. Copy an authorized, optimized image into `public/previews/`.
2. Open `app/template-data.ts`.
3. Find the correct industry.
4. Add or update one object with `name`, `url`, `note`, and `preview`.
5. Use an HTTPS deployment URL.
6. Preview the home page and industry page.
7. Check that the image loads and the card opens the correct website.

```ts
{
  name: "Example Hotel",
  url: "https://example-hotel.example.workers.dev/",
  note: "Hospitality website direction",
  preview: "/previews/example-hotel.jpg",
}
```

## 7. Check your work

```bash
npm run lint
npm test
git status
git diff
```

Fix errors before pushing. Make sure `.env`, `.dev.vars`, `dist`, `node_modules`, `.wrangler`, and `.sites-runtime` are not staged.

## 8. Commit and push

```bash
git add app/template-data.ts public/previews/example-hotel.jpg
git commit -m "feat: add Example Hotel template"
git push -u origin feat/describe-your-change
```

Stage explicit files when possible. Do not blindly commit every local file.

## 9. Open a pull request

Open a pull request into `TEAM-PSMPV/team-psmpv-template-gallery:main`. Complete the pull-request template, add screenshots for visible changes, request the listed code owners, and wait for CI. Pull requests do not receive Cloudflare production credentials and do not deploy production.

## 10. Update a branch and resolve conflicts

```bash
git fetch origin
git rebase origin/main
```

Open each conflicted file, remove the conflict markers, and preserve the intended combined result. Then run:

```bash
git add path/to/resolved-file
git rebase --continue
npm run lint
npm test
git push --force-with-lease
```

Ask a maintainer before choosing between two conflicting business decisions. Never discard another developer's work merely to remove a conflict.

## 11. After merge

The protected `main` branch runs verification again. Production deployment may wait for an environment reviewer. After success, verify <https://team-psmpv-template-gallery.teampsmpv.workers.dev/> and delete the merged feature branch.

## Troubleshooting

- **`node` is not found:** install a supported Node.js version and restart the terminal.
- **Install changed `package-lock.json`:** restore it unless the task intentionally changes dependencies.
- **Linux utility is missing:** use WSL/Linux for the exact CI scripts.
- **Build fails after adding an image:** verify the filename, case, extension, and `/previews/` path.
- **Push is rejected:** update and rebase your branch; never force-push `main`.
- **CI passes but deploy waits:** a production environment reviewer must approve it.
- **Cloudflare authentication fails:** an administrator should verify or rotate the GitHub environment secrets; never post credentials publicly.
