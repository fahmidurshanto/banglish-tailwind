# Banglish Tailwind Framework

A utility-first CSS framework with Banglish (Bengali-English) class names, designed specifically for Bangladeshi developers to create modern, responsive web applications with familiar terminology.

## Table of Contents
- [Installation](#installation)
- [Framework Integration](#framework-integration)
- [Configuration](#configuration)
- [Class Reference](#class-reference)
- [Responsive Design](#responsive-design)
- [Developer Guide](#developer-guide)

## Installation

### CDN
Include the framework directly in your HTML using the CDN:

```html
<link href="https://unpkg.com/banglish-tailwind@latest/dist/banglish.css" rel="stylesheet">
```

For minified version:
```html
<link href="https://unpkg.com/banglish-tailwind@latest/dist/banglish.min.css" rel="stylesheet">
```

### NPM Package
Install via npm:

```bash
npm install banglish-tailwind
```

Or via yarn:

```bash
yarn add banglish-tailwind
```

## Framework Integration

### React.js
1. Import the CSS in your main App.js or index.js file:
```javascript
import 'banglish-tailwind/dist/banglish.css';
```

2. Use Banglish classes in your components:
```jsx
function MyComponent() {
  return (
    <div className="bl-pichhon-nil bl-likha-shada bl-bhitor-4 bl-gol">
      হ্যালো বাংলা
    </div>
  );
}
```

### Next.js
1. Add the CSS to your `_app.js` file:
```javascript
import 'banglish-tailwind/dist/banglish.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

2. Use Banglish classes in your pages:
```jsx
export default function Home() {
  return (
    <div className="bl-flex bl-justify-majhe bl-items-majhe bl-pichhon-dhusor-100">
      <h1 className="bl-likha-nil bl-likha-bishal">বাংলা টেক্সট</h1>
    </div>
  );
}
```

### Vue.js
1. Import the CSS in your main.js file:
```javascript
import 'banglish-tailwind/dist/banglish.css';
```

2. Use Banglish classes in your components:
```vue
<template>
  <div class="bl-pichhon-sobuj bl-likha-kalo bl-bhitor-4 bl-gol">
    হ্যালো বাংলা
  </div>
</template>
```

### Other Frameworks
The framework works with any JavaScript framework that supports CSS. Simply import the CSS file and use the Banglish class names in your HTML elements.

## Configuration

### Custom Configuration
To customize the framework, create a `banglish.config.js` file in your project root:

```bash
npx banglish-tailwind init
```

This creates a default configuration file that you can modify according to your needs.

### Build Custom Framework
To build the framework with your custom configuration:

```bash
npx banglish-tailwind build
```

## Class Reference

### Spacing (Padding)
| English | Banglish | Banglish Class | Example |
|---------|----------|----------------|---------|
| p-0 | bhitor-0 (inside-0) | `bl-bhitor-0` | `<div class="bl-bhitor-0">` |
| p-1 | bhitor-1 (inside-1) | `bl-bhitor-1` | `<div class="bl-bhitor-1">` |
| p-2 | bhitor-2 (inside-2) | `bl-bhitor-2` | `<div class="bl-bhitor-2">` |
| p-3 | bhitor-3 (inside-3) | `bl-bhitor-3` | `<div class="bl-bhitor-3">` |
| p-4 | bhitor-4 (inside-4) | `bl-bhitor-4` | `<div class="bl-bhitor-4">` |
| p-5 | bhitor-5 (inside-5) | `bl-bhitor-5` | `<div class="bl-bhitor-5">` |
| p-6 | bhitor-6 (inside-6) | `bl-bhitor-6` | `<div class="bl-bhitor-6">` |
| p-8 | bhitor-8 (inside-8) | `bl-bhitor-8` | `<div class="bl-bhitor-8">` |
| p-10 | bhitor-10 (inside-10) | `bl-bhitor-10` | `<div class="bl-bhitor-10">` |
| p-12 | bhitor-12 (inside-12) | `bl-bhitor-12` | `<div class="bl-bhitor-12">` |
| p-16 | bhitor-16 (inside-16) | `bl-bhitor-16` | `<div class="bl-bhitor-16">` |
| p-20 | bhitor-20 (inside-20) | `bl-bhitor-20` | `<div class="bl-bhitor-20">` |
| p-24 | bhitor-24 (inside-24) | `bl-bhitor-24` | `<div class="bl-bhitor-24">` |
| p-32 | bhitor-32 (inside-32) | `bl-bhitor-32` | `<div class="bl-bhitor-32">` |
| pt-4 | bhitor-ustu-4 (inside-top-4) | `bl-bhitor-ustu-4` | `<div class="bl-bhitor-ustu-4">` |
| pb-4 | bhitor-niche-4 (inside-bottom-4) | `bl-bhitor-niche-4` | `<div class="bl-bhitor-niche-4">` |
| pl-4 | bhitor-bam-4 (inside-left-4) | `bl-bhitor-bam-4` | `<div class="bl-bhitor-bam-4">` |
| pr-4 | bhitor-dan-4 (inside-right-4) | `bl-bhitor-dan-4` | `<div class="bl-bhitor-dan-4">` |
| px-4 | bhitor-x-4 (inside-horizontal-4) | `bl-bhitor-x-4` | `<div class="bl-bhitor-x-4">` |
| py-4 | bhitor-y-4 (inside-vertical-4) | `bl-bhitor-y-4` | `<div class="bl-bhitor-y-4">` |

### Spacing (Margin)
| English | Banglish | Banglish Class | Example |
|---------|----------|----------------|---------|
| m-0 | bahire-0 (outside-0) | `bl-bahire-0` | `<div class="bl-bahire-0">` |
| m-1 | bahire-1 (outside-1) | `bl-bahire-1` | `<div class="bl-bahire-1">` |
| m-2 | bahire-2 (outside-2) | `bl-bahire-2` | `<div class="bl-bahire-2">` |
| m-3 | bahire-3 (outside-3) | `bl-bahire-3` | `<div class="bl-bahire-3">` |
| m-4 | bahire-4 (outside-4) | `bl-bahire-4` | `<div class="bl-bahire-4">` |
| m-5 | bahire-5 (outside-5) | `bl-bahire-5` | `<div class="bl-bahire-5">` |
| m-6 | bahire-6 (outside-6) | `bl-bahire-6` | `<div class="bl-bahire-6">` |
| m-8 | bahire-8 (outside-8) | `bl-bahire-8` | `<div class="bl-bahire-8">` |
| m-10 | bahire-10 (outside-10) | `bl-bahire-10` | `<div class="bl-bahire-10">` |
| m-12 | bahire-12 (outside-12) | `bl-bahire-12` | `<div class="bl-bahire-12">` |
| m-16 | bahire-16 (outside-16) | `bl-bahire-16` | `<div class="bl-bahire-16">` |
| m-20 | bahire-20 (outside-20) | `bl-bahire-20` | `<div class="bl-bahire-20">` |
| m-24 | bahire-24 (outside-24) | `bl-bahire-24` | `<div class="bl-bahire-24">` |
| m-32 | bahire-32 (outside-32) | `bl-bahire-32` | `<div class="bl-bahire-32">` |
| mt-4 | bahire-ustu-4 (outside-top-4) | `bl-bahire-ustu-4` | `<div class="bl-bahire-ustu-4">` |
| mb-4 | bahire-niche-4 (outside-bottom-4) | `bl-bahire-niche-4` | `<div class="bl-bahire-niche-4">` |
| ml-4 | bahire-bam-4 (outside-left-4) | `bl-bahire-bam-4` | `<div class="bl-bahire-bam-4">` |
| mr-4 | bahire-dan-4 (outside-right-4) | `bl-bahire-dan-4` | `<div class="bl-bahire-dan-4">` |

### Colors
| English | Banglish | Banglish Class | Example |
|---------|----------|----------------|---------|
| bg-red-500 | pichhon-lal-500 (background-red-500) | `bl-pichhon-lal-500` | `<div class="bl-pichhon-lal-500">` |
| bg-green-500 | pichhon-sobuj-500 (background-green-500) | `bl-pichhon-sobuj-500` | `<div class="bl-pichhon-sobuj-500">` |
| bg-blue-500 | pichhon-nil-500 (background-blue-500) | `bl-pichhon-nil-500` | `<div class="bl-pichhon-nil-500">` |
| bg-yellow-500 | pichhon-holud-500 (background-yellow-500) | `bl-pichhon-holud-500` | `<div class="bl-pichhon-holud-500">` |
| bg-purple-500 | pichhon-beguni-500 (background-purple-500) | `bl-pichhon-beguni-500` | `<div class="bl-pichhon-beguni-500">` |
| bg-white | pichhon-shada (background-white) | `bl-pichhon-shada` | `<div class="bl-pichhon-shada">` |
| bg-black | pichhon-kalo (background-black) | `bl-pichhon-kalo` | `<div class="bl-pichhon-kalo">` |
| bg-gray-50 | pichhon-dhusor-50 (background-gray-50) | `bl-pichhon-dhusor-50` | `<div class="bl-pichhon-dhusor-50">` |
| bg-gray-100 | pichhon-dhusor-100 (background-gray-100) | `bl-pichhon-dhusor-100` | `<div class="bl-pichhon-dhusor-100">` |
| bg-gray-200 | pichhon-dhusor-200 (background-gray-200) | `bl-pichhon-dhusor-200` | `<div class="bl-pichhon-dhusor-200">` |
| bg-gray-300 | pichhon-dhusor-300 (background-gray-300) | `bl-pichhon-dhusor-300` | `<div class="bl-pichhon-dhusor-300">` |
| bg-gray-400 | pichhon-dhusor-400 (background-gray-400) | `bl-pichhon-dhusor-400` | `<div class="bl-pichhon-dhusor-400">` |
| bg-gray-500 | pichhon-dhusor-500 (background-gray-500) | `bl-pichhon-dhusor-500` | `<div class="bl-pichhon-dhusor-500">` |
| bg-gray-600 | pichhon-dhusor-600 (background-gray-600) | `bl-pichhon-dhusor-600` | `<div class="bl-pichhon-dhusor-600">` |
| bg-gray-700 | pichhon-dhusor-700 (background-gray-700) | `bl-pichhon-dhusor-700` | `<div class="bl-pichhon-dhusor-700">` |
| bg-gray-800 | pichhon-dhusor-800 (background-gray-800) | `bl-pichhon-dhusor-800` | `<div class="bl-pichhon-dhusor-800">` |
| bg-gray-900 | pichhon-dhusor-900 (background-gray-900) | `bl-pichhon-dhusor-900` | `<div class="bl-pichhon-dhusor-900">` |
| text-red-500 | likha-lal-500 (text-red-500) | `bl-likha-lal-500` | `<p class="bl-likha-lal-500">` |
| text-green-500 | likha-sobuj-500 (text-green-500) | `bl-likha-sobuj-500` | `<p class="bl-likha-sobuj-500">` |
| text-blue-500 | likha-nil-500 (text-blue-500) | `bl-likha-nil-500` | `<p class="bl-likha-nil-500">` |
| text-white | likha-shada (text-white) | `bl-likha-shada` | `<p class="bl-likha-shada">` |
| text-black | likha-kalo (text-black) | `bl-likha-kalo` | `<p class="bl-likha-kalo">` |
| border-red-500 | simana-lal-500 (border-red-500) | `bl-simana-lal-500` | `<div class="bl-simana-lal-500">` |
| border-blue-500 | simana-nil-500 (border-blue-500) | `bl-simana-nil-500` | `<div class="bl-simana-nil-500">` |

### Layout
| English | Banglish | Banglish Class | Example |
|---------|----------|----------------|---------|
| block | dekha-block (show-block) | `bl-dekha-block` | `<div class="bl-dekha-block">` |
| hidden | dekha-none (show-none) | `bl-dekha-none` | `<div class="bl-dekha-none">` |
| flex | flex | `bl-flex` | `<div class="bl-flex">` |
| flex-col | flex-col (flex-column) | `bl-flex-col` | `<div class="bl-flex-col">` |
| grid | grid | `bl-grid` | `<div class="bl-grid">` |
| grid-cols-1 | grid-cols-1 (grid-columns-1) | `bl-grid-cols-1` | `<div class="bl-grid-cols-1">` |
| grid-cols-2 | grid-cols-2 (grid-columns-2) | `bl-grid-cols-2` | `<div class="bl-grid-cols-2">` |
| grid-cols-3 | grid-cols-3 (grid-columns-3) | `bl-grid-cols-3` | `<div class="bl-grid-cols-3">` |
| grid-cols-4 | grid-cols-4 (grid-columns-4) | `bl-grid-cols-4` | `<div class="bl-grid-cols-4">` |
| grid-cols-6 | grid-cols-6 (grid-columns-6) | `bl-grid-cols-6` | `<div class="bl-grid-cols-6">` |
| grid-cols-8 | grid-cols-8 (grid-columns-8) | `bl-grid-cols-8` | `<div class="bl-grid-cols-8">` |
| grid-cols-12 | grid-cols-12 (grid-columns-12) | `bl-grid-cols-12` | `<div class="bl-grid-cols-12">` |
| relative | relative | `bl-relative` | `<div class="bl-relative">` |
| absolute | absolute | `bl-absolute` | `<div class="bl-absolute">` |
| fixed | fixed | `bl-fixed` | `<div class="bl-fixed">` |
| w-full | poth-full (width-full) | `bl-poth-full` | `<div class="bl-poth-full">` |
| w-0 | poth-0 (width-0) | `bl-poth-0` | `<div class="bl-poth-0">` |
| h-full | uchchai-full (height-full) | `bl-uchchai-full` | `<div class="bl-uchchai-full">` |
| h-0 | uchchai-0 (height-0) | `bl-uchchai-0` | `<div class="bl-uchchai-0">` |
| max-w-full | max-poth-full (max-width-full) | `bl-max-poth-full` | `<div class="bl-max-poth-full">` |
| gap-0 | gap-0 | `bl-gap-0` | `<div class="bl-gap-0">` |
| gap-1 | gap-1 | `bl-gap-1` | `<div class="bl-gap-1">` |
| gap-2 | gap-2 | `bl-gap-2` | `<div class="bl-gap-2">` |
| gap-3 | gap-3 | `bl-gap-3` | `<div class="bl-gap-3">` |
| gap-4 | gap-4 | `bl-gap-4` | `<div class="bl-gap-4">` |
| gap-6 | gap-6 | `bl-gap-6` | `<div class="bl-gap-6">` |
| gap-8 | gap-8 | `bl-gap-8` | `<div class="bl-gap-8">` |

### Flexbox & Grid Alignment
| English | Banglish | Banglish Class | Example |
|---------|----------|----------------|---------|
| justify-start | justify-shuru (justify-start) | `bl-justify-shuru` | `<div class="bl-justify-shuru">` |
| justify-center | justify-majhe (justify-center) | `bl-justify-majhe` | `<div class="bl-justify-majhe">` |
| justify-end | justify-shesh (justify-end) | `bl-justify-shesh` | `<div class="bl-justify-shesh">` |
| items-start | items-shuru (items-start) | `bl-items-shuru` | `<div class="bl-items-shuru">` |
| items-center | items-majhe (items-center) | `bl-items-majhe` | `<div class="bl-items-majhe">` |
| items-end | items-shesh (items-end) | `bl-items-shesh` | `<div class="bl-items-shesh">` |

### Typography
| English | Banglish | Banglish Class | Example |
|---------|----------|----------------|---------|
| text-xs | likha-choto (text-small) | `bl-likha-choto` | `<p class="bl-likha-choto">` |
| text-sm | likha-majhari (text-medium-small) | `bl-likha-majhari` | `<p class="bl-likha-majhari">` |
| text-base | likha-majhari (text-base) | `bl-likha-majhari` | `<p class="bl-likha-majhari">` |
| text-lg | likha-boro (text-large) | `bl-likha-boro` | `<p class="bl-likha-boro">` |
| text-xl | likha-khub-boro (text-extra-large) | `bl-likha-khub-boro` | `<p class="bl-likha-khub-boro">` |
| text-2xl | likha-bishal (text-very-large) | `bl-likha-bishal` | `<p class="bl-likha-bishal">` |
| text-left | likha-bam (text-left) | `bl-likha-bam` | `<p class="bl-likha-bam">` |
| text-center | likha-majhe (text-center) | `bl-likha-majhe` | `<p class="bl-likha-majhe">` |
| text-right | likha-dan (text-right) | `bl-likha-dan` | `<p class="bl-likha-dan">` |

### Borders
| English | Banglish | Banglish Class | Example |
|---------|----------|----------------|---------|
| border | simana (border) | `bl-simana` | `<div class="bl-simana">` |
| border-t | simana-ustu (border-top) | `bl-simana-ustu` | `<div class="bl-simana-ustu">` |
| border-b | simana-niche (border-bottom) | `bl-simana-niche` | `<div class="bl-simana-niche">` |
| border-l | simana-bam (border-left) | `bl-simana-bam` | `<div class="bl-simana-bam">` |
| border-r | simana-dan (border-right) | `bl-simana-dan` | `<div class="bl-simana-dan">` |
| border-0 | simana-kono-nai (border-none) | `bl-simana-kono-nai` | `<div class="bl-simana-kono-nai">` |
| rounded | gol (round) | `bl-gol` | `<div class="bl-gol">` |
| rounded-full | gol-full (round-full) | `bl-gol-full` | `<div class="bl-gol-full">` |
| rounded-t | gol-ustu (round-top) | `bl-gol-ustu` | `<div class="bl-gol-ustu">` |
| rounded-b | gol-niche (round-bottom) | `bl-gol-niche` | `<div class="bl-gol-niche">` |
| rounded-l | gol-bam (round-left) | `bl-gol-bam` | `<div class="bl-gol-bam">` |
| rounded-r | gol-dan (round-right) | `bl-gol-dan` | `<div class="bl-gol-dan">` |

### Effects
| English | Banglish | Banglish Class | Example |
|---------|----------|----------------|---------|
| shadow | chaya (shadow) | `bl-chaya` | `<div class="bl-chaya">` |
| shadow-md | chaya-md (shadow-medium) | `bl-chaya-md` | `<div class="bl-chaya-md">` |
| shadow-lg | chaya-lg (shadow-large) | `bl-chaya-lg` | `<div class="bl-chaya-lg">` |
| shadow-xl | chaya-xl (shadow-extra-large) | `bl-chaya-xl` | `<div class="bl-chaya-xl">` |
| opacity-0 | spastta-0 (opacity-0) | `bl-spastta-0` | `<div class="bl-spastta-0">` |
| opacity-25 | spastta-25 (opacity-25) | `bl-spastta-25` | `<div class="bl-spastta-25">` |
| opacity-50 | spastta-50 (opacity-50) | `bl-spastta-50` | `<div class="bl-spastta-50">` |
| opacity-75 | spastta-75 (opacity-75) | `bl-spastta-75` | `<div class="bl-spastta-75">` |
| opacity-100 | spastta-100 (opacity-100) | `bl-spastta-100` | `<div class="bl-spastta-100">` |

## Responsive Design

The framework includes responsive breakpoints using Banglish terms:

- **choto** = Small (640px) - `choto:bl-bhitor-4`
- **majhari** = Medium (768px) - `majhari:bl-bhitor-4`
- **boro** = Large (1024px) - `boro:bl-bhitor-4`
- **khub-boro** = Extra large (1280px) - `khub-boro:bl-bhitor-4`

### Example:
```html
<div class="bl-bhitor-4 choto:bl-bhitor-2 majhari:bl-bhitor-6">
  Responsive padding
</div>
```

## Directional Terms
- **ustu** = Top
- **niche** = Bottom
- **bam** = Left
- **dan** = Right
- **majhe** = Center/Middle
- **shuru** = Start
- **shesh** = End

## Developer Guide

### Best Practices
1. Use Banglish class names consistently throughout your project
2. Combine multiple classes to achieve complex styling
3. Use responsive prefixes for different screen sizes
4. Leverage the utility-first approach for rapid development

### Example Usage
```html
<div class="bl-flex bl-justify-majhe bl-items-majhe bl-pichhon-nil bl-likha-shada bl-bhitor-4 bl-gol bl-chaya">
  <h1 class="bl-likha-bishal">বাংলা টেক্সট</h1>
</div>
```

This creates a blue container with white text, centered both horizontally and vertically, with padding, rounded corners, and shadow.

### Customization
To customize the framework, modify the `banglish.config.js` file after running the init command. You can change:
- Color palette
- Spacing scale
- Breakpoints
- Font sizes
- And other theme properties

### CLI Commands
The framework includes a CLI tool with the following commands:
- `npx banglish-tailwind build` - Generate CSS files
- `npx banglish-tailwind init` - Create configuration file
- `npx banglish-tailwind version` - Show version information

## Contributing

We welcome contributions from the Bangladeshi developer community. Please feel free to submit pull requests or create issues for improvements and bug fixes.