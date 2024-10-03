import type { MiniChatProps } from "./MiniChat.types"
import css from './MiniChat.module.css'
import Avatar from "../UI/Avatar/Avatar"
import Field from "../UI/Field/Field"

// temp dummy messages
const messages = [ 
    {
      id: 1,
      userId: "user_001",
      text: "Hey! How's it going?",
      timestamp: "2024-10-01T10:15:30Z",
      read: true
    },
    {
      id: 2,
      userId: "user_002",
      text: "Not bad! Just working on a project. You?",
      timestamp: "2024-10-01T10:16:00Z",
      read: true
    },
    {
      id: 3,
      userId: "user_001",
      text: "Just finished my lunch. Thinking about what to do next.",
      timestamp: "2024-10-01T10:17:15Z",
      read: false
    },
    {
      id: 4,
      userId: "user_003",
      text: "Hey everyone! What are we chatting about?",
      timestamp: "2024-10-01T10:18:00Z",
      read: false
    },
    {
      id: 5,
      userId: "user_002",
      text: "Just catching up. Any plans for the weekend?",
      timestamp: "2024-10-01T10:18:30Z",
      read: false
    },
    {
      id: 6,
      userId: "user_001",
      text: "Thinking about going hiking! You guys interested?",
      timestamp: "2024-10-01T10:19:00Z",
      read: false
    },
    {
      id: 7,
      userId: "user_002",
      text: "Sounds fun! Count me in.",
      timestamp: "2024-10-01T10:19:30Z",
      read: false
    },
    {
      id: 8,
      userId: "user_003",
      text: "I might join too! Where are you planning to go?",
      timestamp: "2024-10-01T10:20:00Z",
      read: false
    }
]

const MiniChat = () => {
    // connection to chat
    // recveiving messages

    const isThereUnreadMessages = (id: number | string) => {
        const undreadSinceMsgId = messages.findIndex(msg => msg.read === false),
            currentMsg = messages.find(msg => msg.id === id)

        if (currentMsg) {
            return currentMsg.id === undreadSinceMsgId
                && <hr className={css.unread_splitter}/>
        }
    }

    return <section className={css.container}>
        <div className={css.chat}>
            {messages.map(({ id, userId, text, timestamp, read }) => {
                return (
                    <>
                        { isThereUnreadMessages(id) }
                        <div key={`message_${id}_by_${userId}`} className={css.message_container}>
                            {/* Get user data based on userId */}
                            <Avatar src=""/>
                            <div className={css.message_content}>
                                <span data-font-weight="bold">{userId}</span>
                                <p>{text}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
        <div className={css.controls}>
            <Field
                text="Message to #thisBranch"
                icon="chats"
            />
        </div>
    </section>
}

export default MiniChat