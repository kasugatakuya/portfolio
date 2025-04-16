'use client'
import Image from 'next/image'

export default function UpButton() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  {
    /* 最上部に戻るボタン */
  }
  return (
    <div
      className="size-8text-center fixed bottom-10 right-10 z-10 cursor-pointer"
      onClick={() => scrollTop()}
    >
      <Image src="/up-icon.png" width={50} height={50} alt="上矢印" />
    </div>
  )
}
