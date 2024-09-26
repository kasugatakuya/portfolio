import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '春日拓也のポートフォリオサイト',
  description: 'フリーランスエンジニアの春日拓也のポートフォリオサイトです。',
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
            className="flex items-center justify-between px-6 py-2 lg:px-20 lg:py-6"
            aria-label="Global"
          >
            <div>
              <a href="/" className="-m-1.5 p-1.5">
                <img className="h-5 w-auto" src="vercel.svg" alt="" />
              </a>
            </div>
            <div className="lg:text-xl">
              <Link href="/" className="font-bold">
                WORKS
              </Link>
              <Link href="/about" className="px-4 font-bold lg:px-12">
                ABOUT
              </Link>
              <Link href="/contact" className="font-bold">
                CONTACT
              </Link>
            </div>
          </nav>
        </header>

        {children}

        <footer className="text-md py-20 text-center">
          © TAKUYA KASUGA 2020-2024
        </footer>
      </body>
    </html>
  )
}
