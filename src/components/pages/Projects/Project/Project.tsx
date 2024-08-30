'use client'

import { useEffect, useRef } from 'react'
import Btn from '@/components/UI/Btn/Btn'
import Icon from '@/components/UI/Icon'
import ContextModal from '@/components/UI/ContextModal/ContextModal'

import type { ProjectProps } from '@app-types/Project.types'
import css from './Project.module.css'

const Project = (
    { status,
        name,
        version,
        members,
        isContextOpen,
        toggleContextModal
    }: ProjectProps & {
            isContextOpen: boolean,
            toggleContextModal: (projectId: string) => void
        }) => {
    const modalRef = useRef<HTMLDivElement>(null)

    // // Outside clicks handler
    useEffect(() => {
        function handleClickOutside (e: MouseEvent) {
            if (isContextOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
                toggleContextModal(name)
            }
        }
        
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [isContextOpen, name, toggleContextModal])

    function handleBtnClick (e?: React.MouseEvent<HTMLButtonElement>) {
        e?.stopPropagation()
        toggleContextModal(name)
    }
        
    return <div className={css.container}>
        <div className={css.info}>
            <div className={css.info_name}>
                <span>{name}</span>
            </div>
            <div>
                <span>{version[0]}</span>
                <span data-font-accent="medium">
                    { version.length > 0 ? version[1] : 'No-version' }
                </span>
            </div>
            <div>
                <span data-font-accent="medium">
                    {members === 1 ? 'Only You' : `${members} Members`}
                </span>
            </div>
        </div>
        {/* Open Context Btn */}
        <Btn style={{ position: 'relative' }} func={handleBtnClick}>
            <Icon id="options" styles={{ rotate: '90deg' }}/>
            {
                isContextOpen &&
                    <div ref={modalRef} style={{ position: 'absolute' }}>
                        <ContextModal
                            items={['Manage', 'Archivate', 'Delete', 'Change Status']}
                            isOpen={isContextOpen}
                        />
                    </div>
            }
        </Btn>
    </div>
}

export default Project