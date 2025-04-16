import UpButton from '@/app/components/UpButton'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <header className="fixed top-0 w-full">
          <nav
            className="flex items-center justify-end px-6 py-2 lg:px-20 lg:py-6"
            aria-label="Global"
          >
            <div className="flex">
              <Link href="/" className="font-bold">
                <div className="lg:text-xl"> WORKS</div>
                <div className="text-xs">仕事内容</div>
              </Link>
              <Link href="/about" className="px-4 font-bold lg:px-12">
                {' '}
                <div className="lg:text-xl"> ABOUT</div>
                <div className="text-xs">経歴</div>
              </Link>
              <Link href="/contact" className="font-bold">
                {' '}
                <div className="lg:text-xl"> CONTACT</div>
                <div className="text-xs">お問い合わせ</div>
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
