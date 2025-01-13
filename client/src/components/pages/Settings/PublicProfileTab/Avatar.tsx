// App > Settings > Avatar (section)

'use client'

import authApiClient from '@root/lib/authApiClient'
import useFModal from '@/hooks/useFModal'
import { useRef, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import Dropbox from '@/components/UI/Dropbox/Dropbox'
import Btn from '@/components/UI/Btn/Btn'
import Image from 'next/image'

import type { TDropboxInput } from '@/components/UI/Dropbox/Dropbox.types'

import AvatarModalCSS from '@/app/(app)/settings/public/styles.module.css'
import css from '@/app/(app)/settings/styles.module.css'

const AvatarSection = () => {
    const { data: session, update: updateSession } = useSession()
    const user = session?.user
    
    const selectedAvatarRef = useRef<TDropboxInput>(null)
    const [ preview, setPreview ] = useState<string>('')

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
        if (preview) { handleOpenModal() }
        return () => {
            if (preview) { URL.revokeObjectURL(preview) }
            setPreview('')
        }
    }, [ preview ])

    // Avatar removal
    const handleRemoveAvatar = async () => {
        if (user?.avatarUrl) {
            await authApiClient.delete('/remove-avatar')
            updateSession({
                ...session,
                user: {
                    ...session?.user,
                    avatarUrl: undefined
                }
            })
        }
    }
    
    // Avatar upload
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
            updateSession({
                ...session,
                user: {
                    ...session?.user,
                    avatarUrl: res.data.publicUrl
                }
            })

        } catch (err) {
            console.log('Error uploading avatar: ', err)
            alert('Error uploading new avatar!') // Replace with toast
        } finally { closeFModals() }
    }

    // Avatar previewer
    const renderPreview = () => {
        if (preview) {
            return <div  className={AvatarModalCSS.avatar_preview}>
                <Image
                    alt='Avatar Preview'
                    src={preview}
                    fill={true}
                />
            </div>
        }

        return <Dropbox onFileSelect={changeSelectedAvatar} selection="single" />
    }

    // Adding AvatarModal to fModals
    const handleOpenModal = () => {
        const AvatarModal = () => {
            const [ isUploading, setUploading ] = useState(false)
            const handleClick = async () => {
                setUploading(true)
                await handleUpload().then(() => setUploading(false))
            }
            
            return (
                <div className={AvatarModalCSS.modal}>
                    { renderPreview() }
                    <div className={css.inline_container}>
                        <Btn func={closeFModals}>Cancel</Btn>
                        <Btn func={handleClick} classes={`btn-fill ${isUploading && 'btn-disabled'}`}>
                            { isUploading ? 'Uploading...' : 'Upload' }
                        </Btn>
                    </div>
                </div>
            )
        }

        addFModal(<AvatarModal />)
    }

    return <>
        { fModalPortal() }
        <div className={css.inline_category}>
            <div className={css.category_description}>
                <span>Avatar</span>
                <span>Change your profile picture</span>
            </div>
            <div className={css.inline_container}>
                <Btn classes="btn-dark btn-pretty" disabled={!session?.user.avatarUrl} func={handleRemoveAvatar}>Remove avatar</Btn>
                <Btn classes="btn-dark btn-pretty" func={handleOpenModal}>Change Avatar</Btn>
            </div>
        </div>
    </>
}

export default AvatarSection