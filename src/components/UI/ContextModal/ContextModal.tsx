// EXPERIMENTAL MODAL FEATURE
// REQUIRES REWORK AND FIXES

'use client'

import Btn from '@/components/UI/Btn/Btn'

import type { ContextModalProps } from './ContextModal.types'
import css from './ContextModal.module.css'

const ContextModal = ({ items, isOpen }: ContextModalProps) => {
    return isOpen ?
        <div className={css.container}>
            <div className={css.content}>
                { items.map((content, idx) => {
                    return <Btn key={`context_modal_item_${idx}`}>
                        {content}
                    </Btn>
                }) }
            </div>
        </div> : null
}

export default ContextModal