'use client'

import { useEffect, useRef,useState } from 'react'
import Btn from '@/components/UI/Btn/Btn'
import Icon from '@/components/UI/Icon'
import ContextModal from '@/components/UI/ContextModal/ContextModal'
import Indicator from '@/components/UI/Indicator/Indicator'

import type { ProjectProps } from '@app-types/Project.types'
import css from './Project.module.css'

const Project = (
    {   status,
        name,
        version,
        tags,
        members,
        isContextOpen = false,
        toggleContextModal
    }: ProjectProps & {
            isContextOpen?: boolean,
            toggleContextModal?: (projectId: string) => void
        }) => {
    const [ hasContext ] = useState(!!toggleContextModal)
    const modalRef = useRef<HTMLDivElement>(null)

    // Outside click handler
    useEffect(() => {
        function handleClickOutside (e: MouseEvent) {
            if (toggleContextModal) {
                if (isContextOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
                    toggleContextModal(name)
                }
            }
        }
        
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [isContextOpen, name, toggleContextModal])

    // Context Modal switcher
    function handleBtnClick (e?: React.MouseEvent<HTMLButtonElement>) {
        e?.stopPropagation()
        toggleContextModal && toggleContextModal(name)
    }
        
    return <div className={css.container} data-project-tags={tags}>
        <div className={css.info}>
            <div className={css.info_name}>
                <Indicator status={status}/>
                <span data-font-accent="high" >{name}</span>
            </div>
            <div>
                <span>{version[0]}</span>
                <span data-font-weight="bold">
                    { version.length > 0 ? version[1] : 'No-version' }
                </span>
            </div>
            <div>
                <span data-font-accent="medium">
                    {members === 1 ? 'Only You' : `${members} Members`}
                </span>
            </div>
        </div>
        {
            hasContext &&
                <Btn style={{ position: 'relative' }} func={handleBtnClick}>
                    <Icon id="options" styles={{ rotate: '90deg' }}/>
                    {/* Use useContextModal hook instead, however, require some edits within */}
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
        }
    </div>
}

export default Project