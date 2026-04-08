'use client'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  message: string
  isError: boolean
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message, isError }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="glass mx-4 w-full max-w-md rounded-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              {isError ? (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                  <svg className="h-8 w-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-cyan/20">
                  <svg className="h-8 w-8 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>

            {/* Title */}
            <h2
              className={`oswald-font mb-4 text-center text-3xl font-bold tracking-wide ${
                isError ? 'text-red-500' : 'gradient-text'
              }`}
            >
              {isError ? 'ERROR' : 'SUCCESS'}
            </h2>

            {/* Message */}
            <p className="noto-sans-jp-font mb-8 text-center text-white/80">{message}</p>

            {/* Button */}
            <button
              onClick={onClose}
              className={`noto-sans-jp-font w-full rounded-xl py-3 font-bold text-white transition-all ${
                isError
                  ? 'bg-red-500/20 hover:bg-red-500/30 border border-red-500/50'
                  : 'bg-gradient-to-r from-accent-cyan to-accent-purple hover:opacity-90'
              }`}
            >
              閉じる
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
