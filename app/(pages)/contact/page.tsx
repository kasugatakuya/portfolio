'use client'

import Modal from '@/app/components/Modal'
import { motion } from 'framer-motion'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    message: string
    isError: boolean
  }>({
    isOpen: false,
    message: '',
    isError: false,
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setModalState({
          isOpen: true,
          message:
            'メッセージは正常に送信されました。 内容を確認の上、追ってご連絡させていただきます。',
          isError: false,
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        const errorData = await response.json()
        setModalState({
          isOpen: true,
          message: `メッセージの送信中にエラーが発生しました。: ${errorData.message}`,
          isError: true,
        })
      }
    } catch (error) {
      console.error('Error:', error)
      setModalState({
        isOpen: true,
        message:
          'メッセージの送信中にエラーが発生しました。後でもう一度お試しください。',
        isError: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false })
  }

  const inputVariants = {
    focus: { scale: 1.01, borderColor: 'rgba(6, 182, 212, 0.5)' },
  }

  return (
    <main className="mx-5 md:mx-20">
      {/* Hero Section */}
      <div className="relative flex h-screen flex-col justify-center font-bold md:items-center">
        <div className="absolute inset-0 grid-bg opacity-30" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="bebas-neue-font gradient-text pb-2 text-5xl font-extrabold tracking-tight md:text-8xl">
            CONTACT
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="h-[2px] bg-gradient-to-r from-accent-cyan to-accent-purple"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 mt-6"
        >
          <div className="noto-sans-jp-font text-xl font-medium text-accent-pink md:text-2xl">
            お問い合わせ
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

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl pb-20"
      >
        <p className="noto-sans-jp-font mb-12 text-center text-white/70">
          「励ましのお言葉」から「お仕事のご相談」まで、ポジティブかつ幅広い声をお待ちしております。
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <label className="oswald-font mb-3 block text-lg tracking-wide text-white">
              NAME <span className="noto-sans-jp-font text-sm text-white/50">(お名前)</span>
            </label>
            <motion.input
              whileFocus="focus"
              variants={inputVariants}
              className="noto-sans-jp-font glass h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder-white/30 outline-none transition-all focus:border-accent-cyan/50 focus:bg-white/10"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="お名前を入力してください"
              required
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <label className="oswald-font mb-3 block text-lg tracking-wide text-white">
              MAIL ADDRESS <span className="noto-sans-jp-font text-sm text-white/50">(メールアドレス)</span>
            </label>
            <motion.input
              whileFocus="focus"
              variants={inputVariants}
              className="noto-sans-jp-font glass h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder-white/30 outline-none transition-all focus:border-accent-cyan/50 focus:bg-white/10"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="メールアドレスを入力してください"
              required
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <label className="oswald-font mb-3 block text-lg tracking-wide text-white">
              MESSAGE <span className="noto-sans-jp-font text-sm text-white/50">(メッセージ)</span>
            </label>
            <motion.textarea
              whileFocus="focus"
              variants={inputVariants}
              className="noto-sans-jp-font glass h-48 w-full resize-none rounded-xl border border-white/10 bg-white/5 p-4 text-white placeholder-white/30 outline-none transition-all focus:border-accent-cyan/50 focus:bg-white/10"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="メッセージを入力してください"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="oswald-font group relative overflow-hidden rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple px-12 py-4 text-lg font-bold tracking-wider text-white transition-all disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isSubmitting}
            >
              <span className="relative z-10">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    SENDING...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    SEND MESSAGE
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          </motion.div>
        </form>
      </motion.div>

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        message={modalState.message}
        isError={modalState.isError}
      />
    </main>
  )
}
