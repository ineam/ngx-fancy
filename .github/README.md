# CI/CD Workflows

This project uses three GitHub Actions workflows. Both are documented here — refer to this file for setup, secrets and explanations.

---

## Workflows

### 1. `ci.yml` — Quality

Triggered on every push and every pull request.

| Job | Trigger | What it does |
|---|---|---|
| `quality` | push + PR | Installs deps, runs tests on Node 24 |

### 2. `release-please.yml` — Bump Version & Release

Triggered on every push to `main`. Uses [release-please](https://github.com/googleapis/release-please) to automate version bumps and changelog generation.

| Step | What it does |
|---|---|
| Detects conventional commits on `main` | Opens or updates a release PR with version bump and changelog |
| Merging the release PR | Creates a GitHub Release and tag automatically |

### 3. `publish.yml` — Publish to npm

Triggered when a GitHub Release is published (i.e. after merging a release-please PR).

| Step | What it does |
|---|---|
| Checkout at the release tag | Ensures the exact release commit is built |
| Build | Runs `npm run build:lib` to produce `dist/ngx-fancier/` |
| Publish | Runs `npm publish --access public` via OIDC Trusted Publishing |

---

## Required Secrets

Go to **Settings → Secrets and variables → Actions** in the repository to add these:

| Secret | Description |
|---|---|
| `RELEASE_PLEASE_TOKEN` | GitHub token with `contents: write` and `pull-requests: write` scopes, used by release-please to push version bump commits and open PRs without being blocked by branch protection rules |

> **No `NPM_TOKEN` needed** — this project uses [npm Trusted Publishing](https://docs.npmjs.com/generating-provenance-statements) (OIDC). No long-lived token is stored anywhere.

---

## Setting up Trusted Publishing on npm

Publishing uses npm Trusted Publishing (OIDC), so no long-lived npm token is needed in GitHub Actions.

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
