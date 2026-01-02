export function generateBorderUtilities(prefix: string): string {
  return `
/* Border utilities */
.${prefix}simana { border: 1px solid; }
.${prefix}simana-ustu { border-top: 1px solid; }
.${prefix}simana-niche { border-bottom: 1px solid; }
.${prefix}simana-bam { border-left: 1px solid; }
.${prefix}simana-dan { border-right: 1px solid; }
.${prefix}simana-kono-nai { border: none; }
.${prefix}simana-ustu-kono-nai { border-top: none; }
.${prefix}simana-niche-kono-nai { border-bottom: none; }
.${prefix}simana-bam-kono-nai { border-left: none; }
.${prefix}simana-dan-kono-nai { border-right: none; }

/* Border width utilities */
.${prefix}simana-0 { border-width: 0; }
.${prefix}simana-2 { border-width: 2px; }
.${prefix}simana-4 { border-width: 4px; }
.${prefix}simana-8 { border-width: 8px; }

/* Border radius utilities */
.${prefix}gol { border-radius: 0.25rem; }
.${prefix}gol-full { border-radius: 9999px; }
.${prefix}gol-ustu { border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem; }
.${prefix}gol-niche { border-bottom-left-radius: 0.25rem; border-bottom-right-radius: 0.25rem; }
.${prefix}gol-bam { border-top-left-radius: 0.25rem; border-bottom-left-radius: 0.25rem; }
.${prefix}gol-dan { border-top-right-radius: 0.25rem; border-bottom-right-radius: 0.25rem; }
  `.trim();
}