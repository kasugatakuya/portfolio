import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: '必須フィールドが不足しています' },
        { status: 400 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `新しい問い合わせ: ${name}様より`,
      text: `名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
    })

    return NextResponse.json({ message: 'メールが送信されました' })
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json(
      { message: 'メール送信に失敗しました' },
      { status: 500 },
    )
  }
}
