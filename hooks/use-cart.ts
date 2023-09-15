import { create } from 'zustand'
import { Product } from '@/types'
import { persist, createJSONStorage } from 'zustand/middleware'
import toast from 'react-hot-toast'

interface CartStore {
  items: Product[]
  addItem: (data: Product) => void
  removeItem: (data: Product) => void
  removeAll: () => void
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items
      const isItemExist = currentItems.find((item) => item.id === data.id)
      if(isItemExist) {
        return toast("Item already exist in cart")
      }

      set({ items: [...get().items, data] })
      toast.success("Item added to cart")
    },
    removeItem: (data: Product) => {
      set({ items: [...get().items.filter((item) => item.id !== data.id)] })
      toast.success("Item removed from cart")
    },
    removeAll: () => set( {items: []}),
  }), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
  })
)



export default useCart