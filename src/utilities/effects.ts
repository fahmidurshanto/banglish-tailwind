export function generateEffectsUtilities(prefix: string): string {
  return `
/* Shadow utilities */
.${prefix}chaya { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
.${prefix}chaya-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
.${prefix}chaya-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
.${prefix}chaya-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.${prefix}chaya-inner { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06); }
.${prefix}chaya-kono-nai { box-shadow: none; }

/* Opacity utilities */
.${prefix}spastta-0 { opacity: 0; }
.${prefix}spastta-25 { opacity: 0.25; }
.${prefix}spastta-50 { opacity: 0.5; }
.${prefix}spastta-75 { opacity: 0.75; }
.${prefix}spastta-100 { opacity: 1; }

/* Transition utilities */
.${prefix}aniborton { transition: all 0.3s ease; }
.${prefix}aniborton-diran { transition: all 0.5s ease; }
.${prefix}aniborton-khon { transition: all 0.15s ease; }

/* Transform utilities */
.${prefix}aniborton-ustu { transform: translateY(-0.25rem); }
.${prefix}aniborton-niche { transform: translateY(0.25rem); }
.${prefix}aniborton-bam { transform: translateX(-0.25rem); }
.${prefix}aniborton-dan { transform: translateX(0.25rem); }
  `.trim();
}