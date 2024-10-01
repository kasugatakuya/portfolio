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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2
          className={`text-2xl font-bold mb-4 ${isError ? 'text-red-600' : 'text-green-600'}`}
        >
          {isError ? 'エラー' : '成功'}
        </h2>
        <p className="mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-amber-700 hover:bg-amber-800 rounded text-white font-bold px-4 py-2"
        >
          閉じる
        </button>
      </div>
    </div>
  )
}

export default Modal
