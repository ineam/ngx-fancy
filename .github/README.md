# CI/CD Workflows

This project uses three GitHub Actions workflows. Both are documented here — refer to this file for setup, secrets and explanations.

---

## Workflows

### 1. `ci.yml` — Quality

Triggered on every push and every pull request.

| Job | Trigger | What it does |
|---|---|---|
| `quality` | push + PR | Installs deps, runs tests on Node 22 |

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
| Publish | Runs `npm publish --access public --provenance` via OIDC Trusted Publishing |

---

## Required Secrets

Go to **Settings → Secrets and variables → Actions** in the repository to add these:

| Secret | Description |
|---|---|
| `RELEASE_PLEASE_TOKEN` | GitHub token with `contents: write` and `pull-requests: write` scopes, used by release-please to push version bump commits and open PRs without being blocked by branch protection rules |

> **No `NPM_TOKEN` needed** — this project uses [npm Trusted Publishing](https://docs.npmjs.com/generating-provenance-statements) (OIDC). No long-lived token is stored anywhere.

---

## Setting up Trusted Publishing on npm

Trusted Publishing lets GitHub Actions authenticate to npm without any stored secret. It works via OpenID Connect (OIDC) — GitHub proves its identity to npm at publish time.

### Step 1 — First publish (one-time, manual)

Trusted Publishing requires the package to already exist on npm before you can configure it.
Run this once locally:

```bash
npm login                   # log in to your npmjs account
npm run build:lib           # build the library
cd dist/ngx-fancier
npm publish --access public
cd ../..
```

### Step 2 — Enable Trusted Publishing on npmjs.com

1. Go to [npmjs.com](https://www.npmjs.com) → login → click your avatar → **Packages**
2. Select the `ngx-fancier` package
3. Go to **Settings** → **Automated Publishing**
4. Click **Add a publisher** and fill in:
   - **Repository owner**: `ineam`
   - **Repository name**: `ngx-fancy`
   - **Workflow filename**: `publish.yml`
   - **Environment**: leave blank
   - **Allowed actions**: check **Publish** only — leave **Stage publish** unchecked
5. Save — no token needed on GitHub side

From this point on, every GitHub Release will publish automatically via OIDC.

The `--provenance` flag in the workflow also generates a signed attestation linking each npm release to the exact GitHub commit it was built from.

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
