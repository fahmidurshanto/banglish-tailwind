export function generateAlignmentUtilities(prefix: string): string {
  return `
/* Alignment utilities */
.${prefix}mijhe-rakho { align-self: center; }
.${prefix}mijhe-sompotti { place-self: center; }
.${prefix}mijhe-shuru { align-self: flex-start; }
.${prefix}mijhe-shesh { align-self: flex-end; }
.${prefix}udho-mijhe { align-self: center; }
.${prefix}dhoro-mijhe { justify-self: center; }
.${prefix}udho-shuru { align-self: flex-start; }
.${prefix}udho-shesh { align-self: flex-end; }
.${prefix}dhoro-shuru { justify-self: flex-start; }
.${prefix}dhoro-shesh { justify-self: flex-end; }
  `.trim();
}