# Changelog

All notable changes to this project will be documented in this file.
Releases from v1.0.0 onwards are also available as [GitHub Releases](https://github.com/ineam/ngx-fancy/releases) with auto-generated notes.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.2.0](https://github.com/ineam/ngx-fancy/compare/v1.1.12...v1.2.0) (2026-06-24)


### Features

* **ngx-fancier:** :sparkles: add wave separator component with standalone API, signal inputs, and full release automation ([131bc79](https://github.com/ineam/ngx-fancy/commit/131bc79dd12fbd77229f2449dc226688483c161b))

## [1.1.12](https://github.com/ineam/ngx-fancy/compare/v1.1.11...v1.1.12) (2026-06-22)


### Bug Fixes

* **publish:** :lock: use node 24 for oidc publishing ([43e0d77](https://github.com/ineam/ngx-fancy/commit/43e0d77aae680b94ee6538788f63c5f6df4d69ae))

## [1.1.11](https://github.com/ineam/ngx-fancy/compare/v1.1.10...v1.1.11) (2026-06-22)


### Bug Fixes

* **publish:** :bug: normalize repository url for oidc validation ([ee8357a](https://github.com/ineam/ngx-fancy/commit/ee8357a0c391ed1bc987eed5a6c7463368c63336))

## [1.1.10](https://github.com/ineam/ngx-fancy/compare/v1.1.9...v1.1.10) (2026-06-22)


### Bug Fixes

* **publish:** :lock: restore oidc trusted publishing ([67f2a3c](https://github.com/ineam/ngx-fancy/commit/67f2a3c1909a6f6e789008f267d898ca4943be97))

## [1.1.9](https://github.com/ineam/ngx-fancy/compare/v1.1.8...v1.1.9) (2026-06-22)


### Bug Fixes

* **publish:** :mag: log oidc token claims for trusted publishing ([d458ded](https://github.com/ineam/ngx-fancy/commit/d458dedd6cc44b34c7ad5adb6854a30ec8c07602))

## [1.1.8](https://github.com/ineam/ngx-fancy/compare/v1.1.7...v1.1.8) (2026-06-22)


### Bug Fixes

* **publish:** :mag: log oidc token claims for trusted publishing ([28241a6](https://github.com/ineam/ngx-fancy/commit/28241a6b2ec74df6185e21652e26b6618f45ff8b))

## [1.1.7](https://github.com/ineam/ngx-fancy/compare/v1.1.6...v1.1.7) (2026-06-22)


### Bug Fixes

* **publish:** :construction: test publish with classic npm token ([4b51f79](https://github.com/ineam/ngx-fancy/commit/4b51f793a978025c71df135eb4ef701bae37adf5))

## [1.1.6](https://github.com/ineam/ngx-fancy/compare/v1.1.5...v1.1.6) (2026-06-22)


### Bug Fixes

* **publish:** :wastebasket: remove temporary npm debug log artifact ([ad6c7d6](https://github.com/ineam/ngx-fancy/commit/ad6c7d6a9586d46c6af7ce918aa8bc47e4f132c2))

## [1.1.5](https://github.com/ineam/ngx-fancy/compare/v1.1.4...v1.1.5) (2026-06-21)


### Bug Fixes

* **publish:** :bug: add repository field to library package.json for provenance ([3dda743](https://github.com/ineam/ngx-fancy/commit/3dda743758cde05fcfb499e9fc0aecdeee4d1c1e))

## [1.1.4](https://github.com/ineam/ngx-fancy/compare/v1.1.3...v1.1.4) (2026-06-21)


### Bug Fixes

* **publish:** :bug: use files allowlist to control npm tarball content ([234f9ec](https://github.com/ineam/ngx-fancy/commit/234f9ec0cfab2536a717fd9ff9c9f53e9cba2b91))

## [1.1.3](https://github.com/ineam/ngx-fancy/compare/v1.1.2...v1.1.3) (2026-06-20)


### Bug Fixes

* **release:** :label: remove component prefix from release tags ([2171dab](https://github.com/ineam/ngx-fancy/commit/2171dab80cf1c417f07d9b4a1669209c3b734d74))

## [1.1.2](https://github.com/ineam/ngx-fancy/compare/ngx-fancy-v1.1.1...ngx-fancy-v1.1.2) (2026-06-19)


### Bug Fixes

* **release:** :bug: fix extra-files json path for library version sync ([188aef5](https://github.com/ineam/ngx-fancy/commit/188aef5ee079bc226d997e4985770eca1f07843f))

## [1.1.1](https://github.com/ineam/ngx-fancy/compare/ngx-fancy-v1.1.0...ngx-fancy-v1.1.1) (2026-06-19)


### Bug Fixes

* **workflows:** :lock: switch release-please to fine-grained PAT token ([0ec5c73](https://github.com/ineam/ngx-fancy/commit/0ec5c73136134b37a9cd11ed5e38b5ddcc6dafd0))

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
