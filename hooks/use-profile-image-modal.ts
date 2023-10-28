import { create } from "zustand"

type ProfileImageModalStore = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useProfileImageModal = create<ProfileImageModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))