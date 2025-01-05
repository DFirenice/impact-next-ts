import Heading from '@/components/Heading'
import AvatarSection from '@/components/pages/Settings/PublicProfileTab/Avatar'

import css from '../styles.module.css'

const PublicProfileTab = () => {
    return (
        <>
            <div className={css.settings}>
                {/* Intro */}
                <div>
                    <Heading size="large">Your Public Profile</Heading>
                    <p data-font-accent="medium">Manage your public data which is visible to all who can see your profile</p>
                </div>
                <AvatarSection />
            </div>
        </>
    )
}

export default PublicProfileTab