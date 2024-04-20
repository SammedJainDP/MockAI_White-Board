// Import the ClassValue type and clsx function from the clsx library
import { type ClassValue, clsx } from "clsx"

// Import the twMerge function from the tailwind-merge library
import { twMerge } from "tailwind-merge"

// Define the cn function
export function cn(...inputs: ClassValue[]) {
  // Use the clsx function to combine the class names from the inputs
  // Then use the twMerge function to merge the resulting class names
  // This allows for combining and merging class names in a single step
  return twMerge(clsx(inputs))
}