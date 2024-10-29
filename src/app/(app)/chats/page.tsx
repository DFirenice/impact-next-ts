import MessageField from "@/components/MessageField/MessageField"

import css from './styles.module.css'

const Chats = () => {
    return <section className={css.container}>
        <div>
            {/* View-depended content (main content whether or not) */}
            {/* However currently dev test content */}
            <MessageField/>
        </div>
    </section>
}

export default Chats