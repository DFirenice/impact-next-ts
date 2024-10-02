'use client'

import { useState } from "react"

import StatusTag from "@/components/UI/StatusTag/StatusTag"
import Heading from "@/components/Heading"
import Icon from "@/components/UI/Icon"
import TypeTag from "@/components/UI/TypeTag/TypeTag"
import Btn from "@/components/UI/Btn/Btn"
import useContextModal from "@/hooks/useContextModal"

import type TaskCardProps from "./TaskCard.types"
import css from './TaskCard.module.css'

const TaskCard = ({ data }: { data: TaskCardProps }) => {
    const { priority, tags, heading, body, time, associates } = data
    const [ isModalOpen, setModalOpen ] = useState(false)
    
    // This sucks, i know
    const markerColor = priority === 'low' ? 'hsl(109 82% 40%)' :
                           priority === 'medium' ? 'hsl(36 92% 60%)' :
                           priority === 'high' ? 'hsl(0 82% 41%)' :
                           'hsl(0 0% 85%)'

    function handleBtnClick (e?: React.MouseEvent<HTMLButtonElement>) {
        e?.stopPropagation()
        setModalOpen(prev => !prev)
    }
    
    return <div className={css.card}>
        <div
            className={`${css.priority} inline_heading`}
            style={{ '--_priority-clr': markerColor } as React.CSSProperties}
        >
            <StatusTag status={priority}/>
            <div>
                <Btn func={handleBtnClick}>
                    <Icon id="options" styles={{transform: 'rotate(90deg)'}}/>
                </Btn>
                { useContextModal(['Open', 'Comment', 'Decline'], isModalOpen, setModalOpen) }
            </div>
        </div>
        <div className={css.wrapper}>
            <div>
                <div className={css.time_range} data-global-accent="medium">
                    <Icon id="clock"/>
                    <span>{`${time.starts} - ${time.ends}`}</span>
                </div>
                <div className={css.task}>
                    <Heading size="large">{heading}</Heading>
                    <span data-font-accent="medium">{body}</span>
                </div>
            </div>
            <div className={css.tags}>
                {tags.map(
                    tag => <TypeTag key={`typeTag_${tag}`} status={tag}/>
                )}
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
                    <span>
                        { associates.length === 1 && associates[0] === 'userId'
                            ? 'Only You' : associates.length }
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default TaskCard