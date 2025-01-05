'use client'

import authApiClient from '@root/lib/authApiClient'
import useFModal from '@/hooks/useFModal'
import { useRef, useState, useEffect } from 'react'

import Heading from '@/components/Heading'
import Dropbox from '@/components/UI/Dropbox/Dropbox'
import Btn from '@/components/UI/Btn/Btn'

import type { TDropboxInput } from '@/components/UI/Dropbox/Dropbox.types'
import AvatarModalCSS from './styles.module.css'
import css from '../styles.module.css'

const PublicProfileTab = () => {
    const selectedAvatarRef = useRef<TDropboxInput>(null)
    const [preview, setPreview] = useState<string>()

    const cleanupCallback = () => { selectedAvatarRef.current = null }
    const { addFModal, closeFModals, fModalPortal } = useFModal({ cleanupCallback })

    // Avatar store & upload
    const changeSelectedAvatar = (newAvatar: TDropboxInput) => {
        selectedAvatarRef.current = newAvatar
        if (newAvatar) {
            const objectUrl = URL.createObjectURL(newAvatar as File)
            setPreview(objectUrl)
        }
    }

    // Cleaning up memo from unmounted / replaced URL
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview)
        }
    }, [preview])

    // Avatar
    const handleUpload = async () => {
        const selectedAvatar = selectedAvatarRef.current
        if (!selectedAvatar) {
            return alert('No file selected!')
        }

        const formData = new FormData()
        formData.append('avatar', selectedAvatar as File)

        try {
            const res = await authApiClient.post(
                '/upload-avatar',
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            )
            console.log(res.data)
        } catch (err) {
            console.log('Error uploading avatar: ', err)
            alert('Error uploading new avatar!') // Replace with toast
        }
    }

    // Avatar
    const handleOpenModal = () => {
        const AvatarModal = () => (
            <div className={AvatarModalCSS.modal}>
                <Dropbox onFileSelect={changeSelectedAvatar} selection="single" />
                <div className={css.inline_container}>
                    <Btn func={closeFModals}>Cancel</Btn>
                    <Btn func={handleUpload} classes="btn-fill">Upload</Btn>
                </div>
            </div>
        )

        addFModal(<AvatarModal />)
    }

    return (
        <>
            { fModalPortal() }
            <div className={css.settings}>
                {/* Intro */}
                <div>
                    <Heading size="large">Your Public Profile</Heading>
                    <p data-font-accent="medium">Manage your public data which is visible to all who can see your profile</p>
                </div>
                {/* Avatar */}
                <div className={css.inline_category}>
                    <div className={css.category_description}>
                        <span>Avatar</span>
                        <span>Change your profile picture</span>
                    </div>
                    <div className={css.inline_container}>
                        <Btn classes="btn-none btn-pretty">Remove avatar</Btn>
                        <Btn classes="btn-dark btn-pretty" func={handleOpenModal}>Change Avatar</Btn>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PublicProfileTab