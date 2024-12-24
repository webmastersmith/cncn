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

export type CN = typeof cn;
export type CV = ClassValue;
