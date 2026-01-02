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
.${prefix}grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.${prefix}grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.${prefix}grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.${prefix}grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr)); }
.${prefix}grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

/* Position utilities */
.${prefix}relative { position: relative; }
.${prefix}absolute { position: absolute; }
.${prefix}fixed { position: fixed; }

/* Width utilities */
.${prefix}poth-0 { width: 0; }
.${prefix}poth-full { width: 100%; }
.${prefix}poth-screen { width: 100vw; }

/* Height utilities */
.${prefix}uchchai-0 { height: 0; }
.${prefix}uchchai-full { height: 100%; }
.${prefix}uchchai-screen { height: 100vh; }

/* Max-width utilities */
.${prefix}max-poth-full { max-width: 100%; }
.${prefix}max-poth-screen { max-width: 100vw; }

/* Max-height utilities */
.${prefix}max-uchchai-full { max-height: 100%; }
.${prefix}max-uchchai-screen { max-height: 100vh; }

/* Gap utilities */
.${prefix}gap-0 { gap: 0; }
.${prefix}gap-1 { gap: 0.25rem; }
.${prefix}gap-2 { gap: 0.5rem; }
.${prefix}gap-3 { gap: 0.75rem; }
.${prefix}gap-4 { gap: 1rem; }
.${prefix}gap-6 { gap: 1.5rem; }
.${prefix}gap-8 { gap: 2rem; }
  `.trim();
}