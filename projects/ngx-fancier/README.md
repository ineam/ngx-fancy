# ngx-fancier

> Angular SVG wave section separators — standalone component, signal inputs, zero dependencies.

[![npm](https://img.shields.io/npm/v/ngx-fancier?color=blue)](https://www.npmjs.com/package/ngx-fancier)
[![Angular](https://img.shields.io/badge/Angular-22-blueviolet)](https://angular.dev)
[![license](https://img.shields.io/badge/license-EUPL--1.2-blue)](LICENSE)

---

## Installation

```bash
npm install ngx-fancier
```

---

## Usage

Import the standalone component directly into your component:

```ts
import { NgxFancierComponent } from 'ngx-fancier';

@Component({
  standalone: true,
  imports: [NgxFancierComponent],
  template: `
    <section class="hero">...</section>
    <ngx-fancier color="mediumpurple" />
    <section class="content">...</section>
  `
})
export class AppComponent {}
```

---

## API

| Input | Type | Default | Description |
|---|---|---|---|
| `color` | `string` | `'currentColor'` | Fill color of the wave. Accepts any valid CSS color value. |
| `height` | `string` | `'120px'` | Height of the SVG wave. |
| `flip` | `boolean` | `false` | Flips the wave vertically (useful for bottom separators). |

---

## Examples

### Default wave
```html
<ngx-fancier />
```

### Custom color and height
```html
<ngx-fancier color="steelblue" height="200px" />
```

### Flipped (bottom separator)
```html
<ngx-fancier color="coral" [flip]="true" />
```

### Using CSS custom properties
```html
<ngx-fancier color="var(--primary-color)" />
```

---

## Compatibility

| ngx-fancier | Angular |
|---|---|
| 1.x | >= 22 |
