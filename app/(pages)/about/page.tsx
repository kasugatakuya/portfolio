'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const careerHistory = [
  { year: '1992年04月', event: '長野県伊那市に誕生' },
  { year: '2017年03月', event: '横浜薬科大学を卒業' },
  { year: '2017年04月', event: 'アポロメディカルホールディングス株式会社に就職し調剤薬局の薬剤師として勤務' },
  { year: '2019年10月', event: 'TECH CAMP(プログラミングスクール)に入学' },
  { year: '2020年02月', event: '株式会社エアケントに就職' },
  { year: '2020年12月', event: '株式会社くすりの窓口に就職' },
  { year: '2023年03月', event: 'フリーランスエンジニアとしてテックビズに所属' },
  { year: '2023年03月', event: '株式会社ビーネックスソリューションズと業務委託契約' },
  { year: '2024年04月', event: '株式会社コナミデジタルエンタテインメントと業務委託契約中' },
]

const otherExperience = [
  { year: '2023年05月', event: '株式会社バトネクストと業務委託契約中' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
}

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative flex h-screen flex-col justify-center px-5 font-bold md:px-20">
        <div className="absolute inset-0 grid-bg opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="noto-sans-jp-font mb-2 text-2xl font-medium text-accent md:text-3xl">
            春日 拓也
          </div>
          <h1 className="oswald-font gradient-text pb-2 text-5xl font-extrabold tracking-tight md:text-7xl">
            TAKUYA KASUGA
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="h-[3px] max-w-2xl bg-gradient-to-r from-accent to-accent-light"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative z-10 mt-10 max-w-2xl"
        >
          <p className="noto-sans-jp-font mb-4 text-lg text-content md:text-xl">
            1992年4月3日生まれ。長野県伊那市出身。
          </p>
          <div className="noto-sans-jp-font space-y-3 leading-relaxed text-content-secondary">
            <p>
              新卒でアポロメディカル株式会社に入社し、薬剤師として調剤薬局に3年間勤務。
            </p>
            <p>
              その後、エンジニアに転職し株式会社くすりの窓口でお薬手帳WEBのフロントエンドのテックリーダーなどを経験。
            </p>
            <p>
              現在はフリーランスエンジニアとして様々な企業のフロントエンド開発案件に携わっています。
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-content-muted"
          >
            <span className="noto-sans-jp-font mb-2 text-xs">Scroll</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Career Section */}
      <div className="relative overflow-hidden">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/specialdetail.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/95 via-base/90 to-base/95" />

        <div className="relative z-10 px-5 py-16 md:px-20">
          {/* Career History */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="bebas-neue-font mb-8 text-4xl tracking-wider"
            >
              <span className="gradient-text">CAREER</span>
              <span className="noto-sans-jp-font ml-4 text-base text-content-muted">経歴</span>
            </motion.h2>

            <div className="space-y-3">
              {careerHistory.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card group flex items-start gap-4 rounded-xl p-4 transition-all duration-200 hover:shadow-card-hover"
                >
                  <div className="relative mt-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                    {index !== careerHistory.length - 1 && (
                      <div className="absolute left-1/2 top-3 h-full w-px -translate-x-1/2 bg-accent-lighter" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="oswald-font text-sm font-medium text-accent">{item.year}</span>
                    <p className="noto-sans-jp-font mt-1 text-content">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="mt-12"
          >
            <motion.h2
              variants={itemVariants}
              className="bebas-neue-font mb-8 text-4xl tracking-wider"
            >
              <span className="text-accent-light">OTHER EXPERIENCE</span>
              <span className="noto-sans-jp-font ml-4 text-base text-content-muted">その他の経験</span>
            </motion.h2>

            <div className="space-y-3">
              {otherExperience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card group flex items-start gap-4 rounded-xl p-4 transition-all duration-200 hover:shadow-card-hover"
                >
                  <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-accent-light" />
                  <div className="flex-1">
                    <span className="oswald-font text-sm font-medium text-accent-light">{item.year}</span>
                    <p className="noto-sans-jp-font mt-1 text-content">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wantedly Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <Link
          href="https://www.wantedly.com/id/takuya_kasuga"
          className="group inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-lighter px-6 py-3 text-accent-dark transition-all hover:border-accent hover:bg-accent hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="noto-sans-jp-font font-bold">詳しい経歴はこちら</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </main>
  )
}
