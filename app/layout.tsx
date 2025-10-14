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
      <body className={`${inter.className} ${bebasNeue.variable} ${notoSansJP.variable} ${oswald.variable}`}>
        <header className="fixed top-0 w-full">
          <nav
            className="flex items-center justify-end px-6 py-2 lg:px-20 lg:py-6"
            aria-label="Global"
          >
            <div className="flex">
              <Link href="/" className="bebas-neue-font font-bold">
                <div className="tracking-wider lg:text-xl"> WORKS</div>
                <div className="noto-sans-jp-font text-xs">仕事内容</div>
              </Link>
              <Link href="/about" className="bebas-neue-font px-4 font-bold lg:px-12">
                {' '}
                <div className="tracking-wider lg:text-xl"> ABOUT</div>
                <div className="noto-sans-jp-font text-xs">経歴</div>
              </Link>
              <Link href="/contact" className="bebas-neue-font font-bold">
                {' '}
                <div className="tracking-wider lg:text-xl"> CONTACT</div>
                <div className="noto-sans-jp-font text-xs">お問い合わせ</div>
              </Link>
            </div>
          </nav>
        </header>

        {children}

        <UpButton />

        <footer className="text-md py-20 text-center">
          <p>© TAKUYA KASUGA 2020-{new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  )
}
