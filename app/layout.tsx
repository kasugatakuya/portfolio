import UpButton from '@/app/components/UpButton'
import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Noto_Sans_JP, Oswald } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
})
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})
const oswald = Oswald({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: '春日拓也のポートフォリオサイト | フリーランスエンジニア',
  description:
    'フリーランスエンジニア春日拓也のポートフォリオサイトです。Web開発、アプリ開発、SEO対策,ホームページなどの制作実績をご覧いただけます。',
  keywords:
    'フリーランス, エンジニア, ポートフォリオ, Web開発, アプリ開発, SEO対策, 春日拓也, kasuga takuya, カスガタクヤ, 人気, たくや, かすが,依頼, ホームページ',

  // metadataBaseを追加
  metadataBase: new URL('https://portfolio-rose-tau-96.vercel.app'),

  openGraph: {
    title: '春日拓也のポートフォリオサイト | フリーランスエンジニア',
    description:
      'フリーランスエンジニア春日拓也のポートフォリオサイトです。Web開発、アプリ開発、SEO対策などの制作実績をご覧いただけます。',
    type: 'website',
    url: 'https://portfolio-rose-tau-96.vercel.app',
    siteName: '春日拓也のポートフォリオサイト', // サイト名を追加
    locale: 'ja_JP', // 日本語ロケールを追加
  },

  // canonicalを追加
  alternates: {
    canonical: 'https://portfolio-rose-tau-96.vercel.app',
  },

  // robotsを追加
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Twitter Cardsを追加
  twitter: {
    card: 'summary_large_image',
    title: '春日拓也のポートフォリオサイト | フリーランスエンジニア',
    description:
      'フリーランスエンジニア春日拓也のポートフォリオサイトです。Web開発、アプリ開発、SEO対策などの制作実績をご覧いただけます。',
  },

  // verification を追加（Google Search Consoleを使用している場合）
  // Google Search Console の設定→所有権の確認→HTMLタグのコードのcontent属性の値を指定
  verification: {
    google: 'r4vs5K6kyRpFbT2eQ3xlFxlQbUmRrk_8z6irkNv4HmM',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${bebasNeue.variable} ${notoSansJP.variable} ${oswald.variable} animated-gradient min-h-screen`}>
        <header className="fixed top-0 z-50 w-full">
          <nav
            className="glass flex items-center justify-end px-6 py-3 lg:px-20 lg:py-4"
            aria-label="Global"
          >
            <div className="flex gap-2 lg:gap-8">
              <Link href="/" className="bebas-neue-font group font-bold transition-all duration-300 hover:text-accent-cyan">
                <div className="tracking-wider lg:text-xl link-underline">WORKS</div>
                <div className="noto-sans-jp-font text-xs text-white/60 group-hover:text-accent-cyan/80">仕事内容</div>
              </Link>
              <Link href="/about" className="bebas-neue-font group px-4 font-bold transition-all duration-300 hover:text-accent-purple lg:px-8">
                <div className="tracking-wider lg:text-xl link-underline">ABOUT</div>
                <div className="noto-sans-jp-font text-xs text-white/60 group-hover:text-accent-purple/80">経歴</div>
              </Link>
              <Link href="/contact" className="bebas-neue-font group font-bold transition-all duration-300 hover:text-accent-pink">
                <div className="tracking-wider lg:text-xl link-underline">CONTACT</div>
                <div className="noto-sans-jp-font text-xs text-white/60 group-hover:text-accent-pink/80">お問い合わせ</div>
              </Link>
            </div>
          </nav>
        </header>

        {children}

        <UpButton />

        <footer className="border-t border-white/10 py-12 text-center">
          <p className="bebas-neue-font text-lg tracking-wider text-white/60">
            © TAKUYA KASUGA 2020-{new Date().getFullYear()}
          </p>
          <p className="noto-sans-jp-font mt-2 text-xs text-white/40">
            Built with Next.js & Tailwind CSS
          </p>
        </footer>
      </body>
    </html>
  )
}
