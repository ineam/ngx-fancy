# ngx-fancy

Angular workspace for the [**ngx-fancier**](projects/ngx-fancier) library — SVG wave section separators for Angular applications.

---

## Packages

| Package | Version | Description |
|---|---|---|
| [`ngx-fancier`](projects/ngx-fancier/README.md) | 1.0.0 | Standalone Angular component for SVG wave separators |

---

## Workspace structure

```
ngx-fancy/
├── projects/
│   ├── ngx-fancier/   # Library (published to npm)
│   └── ngx-fancy/     # Demo application
└── dist/
    └── ngx-fancier/   # Build output (generated)
```

---

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build:lib

# Watch mode (rebuild on change)
npm run watch:lib

# Run tests
npm test

# Serve the demo app (requires building the lib first)
npm run build:lib && npm start
```

---

## CI/CD

This workspace uses two GitHub Actions workflows for quality checks, versioning and publishing.
See [`.github/README.md`](.github/README.md) for the full workflow documentation, required secrets and setup instructions.

---

## Contributing 🤝

Contributions are welcome — bug fixes, new wave variants, and documentation improvements all help.
Check out [CONTRIBUTING.md](CONTRIBUTING.md) to get started.
