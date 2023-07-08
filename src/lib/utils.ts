import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const mergeClasses = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
