export function generateDisplayUtilities(prefix: string): string {
  return `
/* Display utilities */
.${prefix}dekha-none { display: none; }
.${prefix}dekha-block { display: block; }
.${prefix}dekha-flex { display: flex; }
.${prefix}dekha-grid { display: grid; }
.${prefix}dekha-inline { display: inline; }
.${prefix}dekha-inline-block { display: inline-block; }
.${prefix}dekha-inline-flex { display: inline-flex; }
.${prefix}dekha-inline-grid { display: inline-grid; }
.${prefix}dekha-hidden { display: none; }
  `.trim();
}