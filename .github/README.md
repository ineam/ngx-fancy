# CI/CD Workflows

This project uses two GitHub Actions workflows. Both are documented here — refer to this file for setup, secrets and explanations.

---

## Workflows

### 1. `npmjs-publish.yml` — Quality & Publish

Triggered on every push to `main` and every pull request.

| Job | Trigger | What it does |
|---|---|---|
| `quality` | push + PR | Installs deps, runs tests on Node 22 |
| `publish` | push to `main` only | Builds the library, publishes to npm via Trusted Publishing |

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

| Secret | Description |
|---|---|
| `DEPLOY_KEY` | SSH private key for pushing back to the repo (see setup below) |
| `GIT_USER_NAME` | Git username for the version bump commit |
| `GIT_USER_EMAIL` | Git email for the version bump commit |

> **No `NPM_TOKEN` needed** — this project uses [npm Trusted Publishing](https://docs.npmjs.com/generating-provenance-statements) (OIDC). No long-lived token is stored anywhere.

<details>
<summary>Setting up the DEPLOY_KEY (one-time)</summary>

**Step 1 — Generate an SSH key pair locally** (do not use an existing key):

```bash
ssh-keygen -t ed25519 -C "github-actions-ngx-fancy" -f ./deploy_key -N ""
```

This creates two files:
- `deploy_key` — the **private key** (goes into GitHub secret)
- `deploy_key.pub` — the **public key** (goes into GitHub repo Deploy keys)

**Step 2 — Add the public key as a Deploy Key on GitHub:**

1. Go to the repo → **Settings** → **Deploy keys**
2. Click **Add deploy key**
3. Title: `github-actions`
4. Key: paste the contents of `deploy_key.pub`
5. Check **Allow write access** ✅
6. Click **Add key**

**Step 3 — Add the private key as a Secret on GitHub:**

1. Go to the repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `DEPLOY_KEY`
4. Value: paste the contents of `deploy_key` (the private key, starts with `-----BEGIN OPENSSH PRIVATE KEY-----`)
5. Click **Add secret**

**Step 4 — Delete the key files locally:**

```bash
rm deploy_key deploy_key.pub
```

> Never commit the key files. They are not needed locally after setup.

</details>

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
   - **Workflow filename**: `npmjs-publish.yml`
   - **Environment**: leave blank
   - **Allowed actions**: check **Publish** only — leave **Stage publish** unchecked
5. Save — no token needed on GitHub side

From this point on, every push to `main` will publish automatically via OIDC.

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
