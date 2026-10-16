import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '自己紹介 | 春日拓也のポートフォリオサイト',
  description:
    'フリーランスエンジニア春日拓也の経歴とスキル。薬剤師からエンジニアに転身し、Web開発・アプリ開発を手がけています。',
  alternates: { canonical: '/about' },
  openGraph: {
    title: '自己紹介 | 春日拓也のポートフォリオサイト',
    url: '/about',
  },
}

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
