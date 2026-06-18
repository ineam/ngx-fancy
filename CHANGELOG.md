# Changelog

All notable changes to this project will be documented in this file.
Releases from v1.0.0 onwards are also available as [GitHub Releases](https://github.com/ineam/ngx-fancy/releases) with auto-generated notes.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.0] - 2026-06-18

### Added
- Standalone `NgxFancierComponent` with signal inputs (`color`, `height`, `flip`)
- EUPL-1.2 license
- Angular 22 support with `@angular/build:ng-packagr`
- Vitest for unit testing (replaces Karma/Jasmine)
- GitHub Actions CI with npm Trusted Publishing via OIDC
- Library and workspace READMEs
- CI/CD documentation in `.github/README.md`

### Removed
- `NgxFancierModule` and `NgxFancierService` (replaced by standalone component)
- Karma, Jasmine and related config files
- `polyfills.ts`, `environments/`, `app.module.ts` (Angular 22 standalone bootstrap)
