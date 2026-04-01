/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        surface: 'var(--color-surface)',
        'border-custom': 'var(--color-border)',
        'text-primary': 'var(--color-text)',
        'text-muted': 'var(--color-muted)',
        canvas: 'var(--color-bg)',
        footer: 'var(--color-footer-bg)',
        'cta-on-accent': 'var(--color-cta-on-accent)',
      },
      fontSize: {
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        display: ['clamp(2.5rem,5vw+1rem,3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
      },
      boxShadow: {
        float: 'var(--shadow-float)',
        glow: 'var(--shadow-glow-accent)',
        'inner-soft': 'inset 0 1px 0 color-mix(in srgb, var(--color-accent) 12%, transparent)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
