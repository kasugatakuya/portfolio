'use client'

import Modal from '@/app/component/Modal' // モーダルコンポーネントをインポート
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

export default function Contact() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
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
    <main>
      <div className="title flex h-screen flex-col items-center justify-center font-bold">
        <div className="text-5xl">CONTACT</div>
      </div>
      <div className="mx-5 text-center">
        「励ましのお言葉」から「お仕事のご相談」まで、ポジティブかつ幅広い声をお待ちしております。
      </div>
      <div className="mx-5 md:mx-20">
        <form onSubmit={handleSubmit}>
          <div className="mb-2 mt-10">NAME(お名前)</div>
          <input
            className="h-[60px] w-full rounded bg-gray-300 px-3"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="お名前"
            required
          />
          <div className="mb-2 mt-10">MAIL ADRESS(メールアドレス)</div>
          <input
            className="h-[60px] w-full rounded bg-gray-300 px-3"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="メールアドレス"
            required
          />
          <div className="mb-2 mt-10">MESSAGE(メッセージ)</div>
          <textarea
            className="h-[300px] w-full rounded bg-gray-300 p-3"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="メッセージ"
            required
          />
          <div className="flex justify-center">
            <button
              className="my-10 flex justify-center rounded bg-amber-700 px-10 py-3 text-white hover:bg-amber-800 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </div>
        </form>
      </div>
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        message={modalState.message}
        isError={modalState.isError}
      />
      <div
        className=" fixed bottom-10 right-10 size-8 bg-gray-400 pt-1 text-center "
        onClick={() => scrollTop()}
      >
        ⬆️
      </div>
    </main>
  )
}
