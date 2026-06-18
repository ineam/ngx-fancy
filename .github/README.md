# CI/CD Workflows

This project uses two GitHub Actions workflows.

---

## Workflows

### 1. `npmjs-publish.yml` — Quality & Publish

Triggered on every push to `main` and every pull request.

| Job | Trigger | What it does |
|---|---|---|
| `quality` | push + PR | Installs deps, runs tests on Node 22 |
| `publish` | push to `main` only | Builds the library, publishes to npm |

### 2. `bump-create-release.yml` — Bump Version & Release

Triggered manually via GitHub Actions UI (`workflow_dispatch`).

| Step | What it does |
|---|---|
| Choose `patch`, `minor`, or `major` | Runs `npm version` to bump `package.json` and create a git tag |
| Pushes the bump commit + tag to `main` | Uses an SSH deploy key (see below) instead of `GITHUB_TOKEN` so the push triggers the publish workflow |
| Creates a GitHub Release | Auto-generates release notes from commit messages |

> **Why SSH deploy key and not `GITHUB_TOKEN`?**
> GitHub intentionally prevents pushes made with `GITHUB_TOKEN` from triggering other workflows, to avoid infinite loops. Using an SSH deploy key bypasses this restriction, allowing the version bump push to trigger the `npmjs-publish` workflow.

---

## Required Secrets

Go to **Settings → Secrets and variables → Actions** in the repository to add these:

| Secret | Description | How to get it |
|---|---|---|
| `NPM_TOKEN` | npm access token for publishing | [npmjs.com](https://www.npmjs.com) → Account → Access Tokens → Generate `Automation` token |
| `DEPLOY_KEY` | SSH private key for pushing back to the repo | Generate with `ssh-keygen -t ed25519 -C "github-actions"`, add the **public key** as a Deploy Key (with write access) under Settings → Deploy keys, put the **private key** here |
| `GIT_USER_NAME` | Git username for the version bump commit | e.g. `ineam` |
| `GIT_USER_EMAIL` | Git email for the version bump commit | e.g. `indy@murena.io` |

---

## Local development

```bash
# Install dependencies
npm install

# Build the library
npm run build:lib

# Run tests
npm test

# Watch mode (rebuild on change)
npm run watch:lib
```
