import { create } from 'zustand'
import { Product } from '@/types'

interface PreviewModalStore {
  isOpen: boolean
  data?: Product
  open: (data: Product) => void
  onClose: () => void
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  open: (data: Product) => set(() => ({ isOpen: true, data: data })),
  onClose: () => set(() => ({ isOpen: false})),
}))

export default usePreviewModal