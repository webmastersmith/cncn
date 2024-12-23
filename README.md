# cncn

- Tailwind-Merge and CLSX NPM shortcut.
- `npm i cncn`

```js
// cncn
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
/**
 * Tailwindcss 'cn' function.
 * CLSX: dynamic class names.
 * tailwind-merge: resolves class name clashes.
 * @param inputs array of class names and conditional object classes.
 * @returns string of class names.
 */
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // inputs must b
}

// Download
npm i cncn

// commonjs
const cn = require('cncn');
// esm
import cn from 'cncn';

// Examples
// class variables
const baseClasses = 'bg-blue-500 text-white';
const isActive = false;

// If classes clash, the last one wins.
cn('text-black', baseClasses, { 'bg-red-500': !isActive }); // 'cn2 text-white bg-red-500'
cn('text-black', baseClasses, !isActive && 'bg-red-500'); // 'cn2 text-white bg-red-500'
```
