# Tailng Starter (Angular + Tailwind)

This starter sets up **Angular (v21)** + **Tailwind CSS (v3.4.x)** + **Tailng** packages:

- `@tailng-ui/cdk`
- `@tailng-ui/theme` (tokens + Tailwind preset/plugin)
- `@tailng-ui/icons`
- `@tailng-ui/ui`

> **Important:** Angular 21 does **not** include Tailwind. You must install Tailwind separately.

---

## Requirements

- **Node:** 20.x (recommended)
- **Angular CLI:** 21.x
- **Tailwind:** 3.4.x

---

## 1) Create a fresh Angular 21 app

```bash
npx -p @angular/cli@21 ng new tailng-starter --standalone --routing --style=css
cd tailng-starter
```

---

## 2) Install angular packages
---

```bash
yarn add @angular/cdk
```

## 3) Install Tailng packages

```bash
yarn add   @tailng-ui/cdk   @tailng-ui/theme   @tailng-ui/icons   @tailng-ui/ui
```

---

## 3) Install Tailwind CSS

```bash
yarn add -D tailwindcss@^3.4 postcss autoprefixer
npx tailwindcss init
```

---

## 4) Add PostCSS config

Create `postcss.config.js`:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## 5) Configure Tailwind for Tailng

Edit `tailwind.config.js`:

```js
const tailngPreset = require("@tailng-ui/theme/tailwind/tailng.preset.cjs");

module.exports = {
  presets: [tailngPreset],
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/@tailng-ui/ui/**/*.{mjs,js}",
    "./node_modules/@tailng-ui/icons/**/*.{mjs,js}",
  ],
};
```

---

## 6) Global styles

Edit `src/styles.css`:

```css
@import "@tailng-ui/theme/tokens/index.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

```

---

## 7) Run the app

```bash
yarn start
```

---

## Theme modes

Set one of the following on `<body>` for `mode`:

- `mode-light`
- `mode-dark`

Set one of the following on `<body>` for `theme`:

- `mode-default`
- `theme-slate`
- `theme-emarald`
- `theme-rose`



Example:

```html
<body class="mode-dark theme-emerald">
```

---

## See it in action

Update app.component.html with below content

```ts
import { Component, signal } from '@angular/core';
import { TngSlideToggle } from '@tailng-ui/ui/form-controls';

@Component({
  selector: 'app-root',
  imports: [TngSlideToggle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tailng-docs-alpha');
}
```

```html
<div class="flex flex-col items-center justify-center h-screen bg-bg text-primary">
  <h1>Hello World</h1>
  Toggle Slide Example : <tng-slide-toggle label="Enable notifications"></tng-slide-toggle>
</div>
```

## License

MIT © Tociva Technologies
