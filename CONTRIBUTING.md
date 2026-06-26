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

## Release flow 🚢

Releases are automated with release-please. Conventional commits help determine the changelog and version bumps.

## Code style 🎨

- Follow the existing project style.
- Respect `.editorconfig` and existing formatting.
