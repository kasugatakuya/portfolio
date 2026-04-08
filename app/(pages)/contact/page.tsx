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

  return (
    <main className="mx-5 md:mx-20">
      {/* Hero Section */}
      <div className="relative flex h-screen flex-col justify-center font-bold md:items-center">
        <div className="absolute inset-0 grid-bg opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <h1 className="bebas-neue-font gradient-text pb-2 text-5xl font-extrabold tracking-tight md:text-8xl">
            CONTACT
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="h-[3px] bg-gradient-to-r from-accent to-accent-light"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mt-6"
        >
          <div className="noto-sans-jp-font text-xl font-medium text-accent md:text-2xl">
            お問い合わせ
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

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl pb-16"
      >
        <p className="noto-sans-jp-font mb-10 text-center text-content-secondary">
          「励ましのお言葉」から「お仕事のご相談」まで、ポジティブかつ幅広い声をお待ちしております。
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <label className="oswald-font mb-2 block text-lg tracking-wide text-content">
              NAME <span className="noto-sans-jp-font text-sm text-content-muted">(お名前)</span>
            </label>
            <input
              className="input-field noto-sans-jp-font h-14 w-full rounded-xl px-4"
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
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <label className="oswald-font mb-2 block text-lg tracking-wide text-content">
              MAIL ADDRESS <span className="noto-sans-jp-font text-sm text-content-muted">(メールアドレス)</span>
            </label>
            <input
              className="input-field noto-sans-jp-font h-14 w-full rounded-xl px-4"
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
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <label className="oswald-font mb-2 block text-lg tracking-wide text-content">
              MESSAGE <span className="noto-sans-jp-font text-sm text-content-muted">(メッセージ)</span>
            </label>
            <textarea
              className="input-field noto-sans-jp-font h-40 w-full resize-none rounded-xl p-4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="メッセージを入力してください"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex justify-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary oswald-font group rounded-xl px-10 py-4 text-lg font-bold tracking-wider disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isSubmitting}
            >
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
