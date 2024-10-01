'use client'

import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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
        alert('メッセージが送信されました')
        setFormData({ name: '', email: '', message: '' })
      } else {
        const errorData = await response.json()
        alert(`エラーが発生しました: ${errorData.message}`)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('エラーが発生しました。後でもう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <div className="title flex h-screen flex-col items-center justify-center font-bold">
        <div className="text-6xl">CONTACT</div>
        <div className="mt-5 text-xl">〜Under Construction〜</div>
      </div>
      <div className="mx-5 text-center">
        「励ましのお言葉」から「お仕事のご相談」まで、ポジティブかつ幅広い声をお待ちしております。
      </div>
      <div className="mx-5 md:mx-20">
        <form onSubmit={handleSubmit}>
          <div className="mt-10">NAME(お名前)</div>
          <input
            className="h-[80px] w-full bg-gray-300 px-2"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="お名前"
            required
          />
          <div className="mt-10">MAIL ADRESS(メールアドレス)</div>
          <input
            className="h-[80px] w-full bg-gray-300 px-2"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="メールアドレス"
            required
          />
          <div className="mt-10">MESSAGE(メッセージ)</div>
          <textarea
            className="h-[300px] w-full bg-gray-300 p-2"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="メッセージ"
            required
          />
          <div className="flex justify-center">
            <button
              className="my-10 flex justify-center bg-amber-700 px-10 py-3 text-white disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}