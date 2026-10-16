/**
 * 公開 URL（末尾スラッシュなし）。サイトマップ・robots.txt・canonical・OGP に使う。
 * 優先順位: NEXT_PUBLIC_SITE_URL → Vercel の本番ドメイン → 既定の URL
 */
const DEFAULT_URL = 'https://portfolio-rose-tau-96.vercel.app'

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercel) return `https://${vercel}`
  return DEFAULT_URL
}

export const SITE_URL = resolveSiteUrl().replace(/\/+$/, '')

/** サイトマップに載せるページ */
export const PAGES: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
]
