import { create } from "zustand"

type ProfileModalStore = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useProfileModal = create<ProfileModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))