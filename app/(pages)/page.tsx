'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    href: 'https://monkey-mauve-alpha.vercel.app/',
    image: '/monkey.png',
    alt: 'MONKEY',
    title: 'MONKEYのホームページ',
    description: 'パンクロックバンドMONKEYの公式ホームページ',
    details: 'MONKEYに関するニュース・ライブ情報・楽曲・バンドメンバー情報をご覧いただけます。',
    tech: 'Next.js / TypeScript',
    gradient: 'from-red-500 to-orange-500',
    glow: 'hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]',
  },
  {
    href: 'https://endroll.vercel.app/',
    image: '/endroll.png',
    alt: 'Endroll',
    title: 'Endrollのホームページ',
    description: 'ロックバンドEndrollの公式ホームページ',
    details: 'Endrollに関するニュース・ライブ情報・楽曲・バンドメンバー情報をご覧いただけます。',
    tech: 'Next.js / TypeScript',
    gradient: 'from-yellow-500 to-amber-500',
    glow: 'hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]',
  },
  {
    href: 'https://typing-game-rho-weld.vercel.app/',
    image: '/typing-indo.png',
    alt: 'プログラミング道場',
    title: '地理タイピングゲーム',
    description: 'タイピング練習を手軽にゲーム感覚で楽しめるサイト。',
    details: 'タイピングしながら,世界の国の国旗、世界遺産が学べる。さらに、都道府県、県庁所在地、県花、県鳥、県木が学べる。',
    tech: 'Next.js / TypeScript',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]',
  },
  {
    href: 'https://myblackjack.web.app/',
    image: '/blackjack.png',
    alt: 'BLACK JACK',
    title: 'BLACK JACK',
    description: 'トランプのブラックジャックゲーム。',
    details: '本格的なブラックジャックをブラウザで楽しめます。',
    tech: 'JavaScript',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

export default function Home() {
  return (
    <main className="mx-5 md:mx-20">
      {/* Hero Section */}
      <div className="relative flex h-screen flex-col justify-center font-bold md:items-center">
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <h1 className="oswald-font gradient-text pb-2 text-5xl font-extrabold tracking-tight md:text-8xl">
            TAKUYA KASUGA
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="h-[2px] bg-gradient-to-r from-accent-cyan to-accent-purple"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 mt-6 items-center space-y-2 md:flex md:space-x-6 md:space-y-0"
        >
          <div className="noto-sans-jp-font text-xl font-medium text-accent-cyan md:text-2xl">
            エンジニア
          </div>
          <div className="hidden h-6 w-px bg-white/30 md:block" />
          <div className="noto-sans-jp-font text-xl font-medium text-white/70 md:text-2xl">
            春日拓也のポートフォリオサイト
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-white/40"
          >
            <span className="noto-sans-jp-font mb-2 text-xs">Scroll</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="bebas-neue-font mb-12 text-4xl tracking-wider text-white md:text-5xl"
        >
          <span className="gradient-text">PROJECTS</span>
          <span className="noto-sans-jp-font ml-4 text-lg text-white/50">個人開発物</span>
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 md:flex md:items-center md:p-10 ${project.glow}`}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />

                  {/* Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl md:mb-0 md:mr-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={project.image}
                        width={400}
                        height={500}
                        style={{ width: 'auto', height: 'auto' }}
                        alt={project.alt}
                        className="rounded-xl"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 md:w-[32rem]">
                    <div className={`oswald-font mb-4 inline-block bg-gradient-to-r ${project.gradient} bg-clip-text text-2xl tracking-wide text-transparent`}>
                      {project.title}
                    </div>
                    <p className="noto-sans-jp-font mb-2 text-white/90">
                      {project.description}
                    </p>
                    <p className="noto-sans-jp-font mb-4 text-sm text-white/60">
                      {project.details}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-accent-cyan">
                        {project.tech}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/40 transition-colors group-hover:text-accent-cyan">
                        View Project
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* GitHub Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="my-20 text-center"
      >
        <Link
          href="https://github.com/kasugatakuya"
          className="group inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-6 py-3 text-accent-cyan transition-all hover:border-accent-cyan hover:bg-accent-cyan/20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span className="noto-sans-jp-font">GitHubで他のプロジェクトを見る</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </main>
  )
}
