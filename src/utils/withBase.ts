/**
 * Public asset URL under Astro `base` (e.g. GitHub Pages project site).
 * `configure-pages` may set base without a trailing slash; we always join safely.
 */
export function withBase(path: string): string {
  const raw = import.meta.env.BASE_URL || '/';
  const base = raw.endsWith('/') ? raw : `${raw}/`;
  const p = path.replace(/^\//, '');
  return `${base}${p}`;
}
