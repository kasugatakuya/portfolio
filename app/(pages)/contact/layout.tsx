import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ | 春日拓也のポートフォリオサイト',
  description:
    'Web開発・アプリ開発・ホームページ制作のご相談、お仕事のご依頼はこちらから。フリーランスエンジニア春日拓也へのお問い合わせフォームです。',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'お問い合わせ | 春日拓也のポートフォリオサイト',
    url: '/contact',
  },
}

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
