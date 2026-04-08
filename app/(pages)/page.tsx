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
    details:
      'MONKEYに関するニュース・ライブ情報・楽曲・バンドメンバー情報をご覧いただけます。',
    tech: 'Next.js / TypeScript',
    cardClass: 'project-card project-card-red',
    color: {
      bg: 'bg-gradient-to-br from-red-50 to-orange-50',
      bgHover: 'hover:from-red-100 hover:to-orange-100',
      border: 'border-red-200',
      borderHover: 'hover:border-red-400',
      accent: 'text-red-500',
      tag: 'bg-red-100 text-red-600',
    },
  },
  {
    href: 'https://endroll.vercel.app/',
    image: '/endroll.png',
    alt: 'Endroll',
    title: 'Endrollのホームページ',
    description: 'ロックバンドEndrollの公式ホームページ',
    details:
      'Endrollに関するニュース・ライブ情報・楽曲・バンドメンバー情報をご覧いただけます。',
    tech: 'Next.js / TypeScript',
    cardClass: 'project-card project-card-amber',
    color: {
      bg: 'bg-gradient-to-br from-amber-50 to-yellow-50',
      bgHover: 'hover:from-amber-100 hover:to-yellow-100',
      border: 'border-amber-200',
      borderHover: 'hover:border-amber-400',
      accent: 'text-amber-600',
      tag: 'bg-amber-100 text-amber-700',
    },
  },
  {
    href: 'https://typing-game-rho-weld.vercel.app/',
    image: '/typing-indo.png',
    alt: 'プログラミング道場',
    title: '地理タイピングゲーム',
    description: 'タイピング練習を手軽にゲーム感覚で楽しめるサイト。',
    details:
      'タイピングしながら,世界の国の国旗、世界遺産が学べる。さらに、都道府県、県庁所在地、県花、県鳥、県木が学べる。',
    tech: 'Next.js / TypeScript',
    cardClass: 'project-card project-card-emerald',
    color: {
      bg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      bgHover: 'hover:from-emerald-100 hover:to-teal-100',
      border: 'border-emerald-200',
      borderHover: 'hover:border-emerald-400',
      accent: 'text-emerald-600',
      tag: 'bg-emerald-100 text-emerald-700',
    },
  },
  {
    href: 'https://myblackjack.web.app/',
    image: '/black-jack.png',
    alt: 'BLACK JACK',
    title: 'BLACK JACK',
    description: 'トランプのブラックジャックゲーム。',
    details: '本格的なブラックジャックをブラウザで楽しめます。',
    tech: 'JavaScript',
    cardClass: 'project-card project-card-violet',
    color: {
      bg: 'bg-gradient-to-br from-violet-50 to-purple-50',
      bgHover: 'hover:from-violet-100 hover:to-purple-100',
      border: 'border-violet-200',
      borderHover: 'hover:border-violet-400',
      accent: 'text-violet-600',
      tag: 'bg-violet-100 text-violet-700',
    },
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

export default function Home() {
  return (
    <main className="mx-5 md:mx-20">
      {/* Hero Section */}
      <div className="relative flex h-screen flex-col justify-center font-bold md:items-center">
        <div className="absolute inset-0 grid-bg opacity-60" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10"
        >
          <h1 className="oswald-font gradient-text pb-2 text-5xl font-extrabold tracking-tight md:text-8xl">
            TAKUYA KASUGA
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="h-[3px] bg-gradient-to-r from-accent to-accent-light"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 mt-6 items-center space-y-2 md:flex md:space-x-6 md:space-y-0"
        >
          <div className="noto-sans-jp-font text-xl font-medium text-accent md:text-2xl">
            エンジニア
          </div>
          <div className="hidden h-6 w-px bg-accent-light md:block" />
          <div className="noto-sans-jp-font text-xl font-medium text-content-secondary md:text-2xl">
            春日拓也のポートフォリオサイト
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-content-muted"
          >
            <span className="noto-sans-jp-font mb-2 text-xs">Scroll</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="bebas-neue-font mb-10 text-4xl tracking-wider text-content md:text-5xl"
        >
          <span className="gradient-text">PROJECTS</span>
          <span className="noto-sans-jp-font ml-4 text-base text-content-muted">
            個人開発物
          </span>
        </motion.h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeOut' as const }}
                  className={`${project.cardClass} group overflow-hidden rounded-2xl border-2 p-6 md:flex md:items-center md:p-8 ${project.color.bg} ${project.color.bgHover} ${project.color.border} ${project.color.borderHover}`}
                >
                  {/* Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl md:mb-0 md:mr-8">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.image}
                        width={360}
                        height={450}
                        style={{ width: 'auto', height: 'auto' }}
                        alt={project.alt}
                        className="rounded-xl"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 md:w-[28rem]">
                    <div
                      className={`oswald-font mb-3 text-2xl tracking-wide ${project.color.accent}`}
                    >
                      {project.title}
                    </div>
                    <p className="noto-sans-jp-font mb-2 text-content">
                      {project.description}
                    </p>
                    <p className="noto-sans-jp-font mb-4 text-sm text-content-secondary">
                      {project.details}
                    </p>
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${project.color.tag}`}
                      >
                        {project.tech}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-content-muted transition-colors">
                        View Project
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
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
        className="my-16 text-center"
      >
        <Link
          href="https://github.com/kasugatakuya"
          className="group inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-lighter px-6 py-3 text-accent-dark transition-all hover:border-accent hover:bg-accent hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="noto-sans-jp-font font-medium">
            GitHubで他のプロジェクトを見る
          </span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </motion.div>
    </main>
  )
}
