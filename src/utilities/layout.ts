export function generateLayoutUtilities(prefix: string): string {
  return `
/* Display utilities */
.${prefix}dekha-none { display: none; }
.${prefix}dekha-block { display: block; }
.${prefix}dekha-flex { display: flex; }
.${prefix}dekha-grid { display: grid; }

/* Flex utilities */
.${prefix}flex { display: flex; }
.${prefix}flex-col { flex-direction: column; }
.${prefix}justify-majhe { justify-content: center; }
.${prefix}justify-shesh { justify-content: flex-end; }
.${prefix}justify-shuru { justify-content: flex-start; }
.${prefix}items-majhe { align-items: center; }
.${prefix}items-shesh { align-items: flex-end; }

/* Grid utilities */
.${prefix}grid { display: grid; }
.${prefix}grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.${prefix}grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }

/* Position utilities */
.${prefix}relative { position: relative; }
.${prefix}absolute { position: absolute; }
.${prefix}fixed { position: fixed; }
  `.trim();
}