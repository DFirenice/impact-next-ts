'use client'

import Field from "@/components/UI/Field/Field"

import css from './MessageField.module.css'

const MessageField = () => {
    const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const trimmedValue = e.target.value.trim()
        trimmedValue !== '' && console.log(trimmedValue)
        // Post request
        // ...
    }

    return <div className={css.container}>
        <Field
            text="Message #ChannelName"
            keyDownFunc={sendMessage}
            focused={true}
        />
    </div>
}

export default MessageField