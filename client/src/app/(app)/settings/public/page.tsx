'use client'

import useFModal from '@/hooks/useFModal'

import Heading from '@/components/Heading'
import Dropbox from '@/components/UI/Dropbox/Dropbox'
import Btn from '@/components/UI/Btn/Btn'

import AvatarModalCSS from './styles.module.css'
import css from '../styles.module.css'

const PublicProfileTab = () => {
    const { addFModal } = useFModal()

    const handleOpenModel = () => {
        
        const AvatarModal = () => {
            return <div className={AvatarModalCSS.modal}>
                <Heading size="large">Select an image</Heading>
                <Dropbox/>
            </div>
        }
        
        addFModal(<AvatarModal/>)
    }

    return <div className={css.settings}>
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
                <Btn classes="btn-none">Remove avatar</Btn>
                <Btn classes="btn-dark btn-pretty" func={handleOpenModel}>Change Avatar</Btn>
            </div>
        </div>
    </div>
}

export default PublicProfileTab