# cncn

- Tailwind-Merge and CLSX NPM shortcut.
- [NPM CNCN](https://www.npmjs.com/package/cncn)

```js
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
cn('text-black', baseClasses, { 'bg-red-500': !isActive }); // 'text-white bg-red-500'
cn('text-black', baseClasses, !isActive && 'bg-red-500'); // 'text-white bg-red-500'

// Exported types
import { type CV, type CN } from 'cncn';
// CV shorthand for clsx type ClassValue. 'string | number | bigint | boolean | ClassArray | ClassDictionary | null | undefined'
// CN shorthand for type cn function. (...inputs: ClassValue[]) => string
```
