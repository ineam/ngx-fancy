# Contributing to ngx-fancy ✨

Thanks for helping improve ngx-fancy 🎉

## Before you start 🚀

- Make sure you have a recent Node.js version installed.
- Install dependencies with `npm install`.

## Local development 🛠️

```bash
npm install
npm run build:lib
npm run watch:lib
npm test
```

To run the demo app, build the library first, then start the workspace app.

## Commit format 📝

This repo uses the format:

```text
type(scope): :emoji: short description
```

Examples:

- `feat(ngx-fancier): :sparkles: add new wave variant`
- `fix(publish): :bug: restore npm trusted publishing`
- `docs(repo): :memo: improve contributor guide`

### Common types

- `feat` — new feature
- `fix` — bug fix
- `docs` — documentation only
- `chore` — maintenance task
- `refactor` — code change without feature or fix
- `test` — test-only change
- `ci` — CI/CD change

## Pull requests 🔁

- Keep changes focused.
- Open PRs against `main`.
- Make sure tests pass before requesting review.

## Proposing a new feature 💡

- Search existing issues first to avoid duplicates.
- Open a GitHub Issue using the feature request template.
- Explain what you want to add, why it matters, and a rough API or usage idea.
- Wait for maintainer feedback before implementing it.
- Once a feature is accepted, open a PR that links the issue.

## For maintainers 🗂️

GitHub Issues are the single source of truth for feature proposals and bug reports.

### Labels

| Label | Meaning |
|---|---|
| `enhancement` | New feature request |
| `bug` | Confirmed bug |
| `question` | Needs clarification |
| `needs-discussion` | Interesting but not yet decided |
| `wontfix` | Out of scope |
| `accepted` | Approved and ready for a PR |

### Proposal flow

1. Contributor opens an issue.
2. Maintainer reviews, discusses, and labels it.
3. If accepted, the issue gets `accepted`.
4. Contributor opens a PR linked to the issue, for example with `Closes #123`.
5. Non-trivial PRs without a linked issue may be asked to open one first.

## Release flow 🚢

Releases are automated with release-please. Conventional commits help determine the changelog and version bumps.

## Code style 🎨

- Follow the existing project style.
- Respect `.editorconfig` and existing formatting.
