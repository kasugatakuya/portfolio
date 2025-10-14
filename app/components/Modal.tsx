import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  message: string
  isError: boolean
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message, isError }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2
          className={`mb-4 text-2xl font-bold ${isError ? 'text-red-600' : 'text-green-600'} oswald-font tracking-wide`}
        >
          {isError ? 'ERROR' : 'SUCCESS'}
        </h2>
        <p className="noto-sans-jp-font mb-6">{message}</p>
        <button
          onClick={onClose}
          className="noto-sans-jp-font rounded bg-amber-700 px-4 py-2 font-bold text-white hover:bg-amber-800"
        >
          閉じる
        </button>
      </div>
    </div>
  )
}

export default Modal
