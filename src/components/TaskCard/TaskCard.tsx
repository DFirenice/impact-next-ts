import StatusTag from "@/components/UI/StatusTag/StatusTag"
import Heading from "@/components/Heading"
import Icon from "@/components/UI/Icon"

import type TaskCardProps from "./TaskCard.types"
import css from './TaskCard.module.css'
import { CSSProperties } from "react"
import Tag from "../UI/Tag/Tag"

const TaskCard = ({ priority }: TaskCardProps) => {
    // This sucks, i know
    const markerColor = priority === 'low' ? 'hsl(109 82% 40%)' :
                           priority === 'medium' ? 'hsl(36 92% 60%)' :
                           'hsl(0 82% 41%)'

    return <div className={css.card}>
        <div
            className={css.priority}
            style={{ '--_priority-clr': markerColor } as CSSProperties}
        >
            <StatusTag status={priority}/>
        </div>
        <div className={css.wrapper}>
            <div>
                <div className={css.time_range} data-global-accent="medium">
                    <Icon id="clock"/>
                    <span>Time range</span>
                </div>
                <div className={css.task}>
                    <Heading size="large">task's heading</Heading>
                    <span data-font-accent="medium">task's body</span>
                </div>
            </div>
            
            <div>
                {/* So far, tags should be different ( see @/components/TypeTag ) */}
                <Tag>Bug</Tag>
                <Tag>UI</Tag>
            </div>

            <div className={css.extra_info} data-global-accent="medium">
                <div>
                    <Icon id="chats"/>
                    <span>0</span>
                </div>
                <div>
                    <Icon id="nodes"/>
                    <span>0 / 2</span>
                </div>
                <div>
                    <Icon id="user"/>
                    <span>Only You</span>
                </div>
            </div>
        </div>
    </div>
}

export default TaskCard