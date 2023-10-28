"use client"

import ProfileImageModal from "@/app/(routes)/candidate/(routes)/profile/_components/modals/profile-image-modal"
import ProfileModal from "@/app/(routes)/candidate/(routes)/profile/_components/modals/profile-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <ProfileModal />
            <ProfileImageModal />
        </>
    )
}