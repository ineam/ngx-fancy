# Changelog

All notable changes to this project will be documented in this file.
Releases from v1.0.0 onwards are also available as [GitHub Releases](https://github.com/ineam/ngx-fancy/releases) with auto-generated notes.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.1.0](https://github.com/ineam/ngx-fancy/compare/ngx-fancy-v1.0.0...ngx-fancy-v1.1.0) (2026-06-18)


### Features

* **global:** :sparkles: add wave separator component with CI setup ([7f83821](https://github.com/ineam/ngx-fancy/commit/7f8382102af2656d77f8e24a21ba0ffff813fb71))
* **lib:** :sparkles: standalone component with signal inputs, drop module and service ([2745cf5](https://github.com/ineam/ngx-fancy/commit/2745cf50ea4aebcd44feb5dd64d9fd2ea0226119))

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
