'use client'

import { useState, useEffect, useRef } from 'react'
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
            toggleContextModal: () => void
        }) => {
    // const modalRef = useRef<HTMLDivElement>(null)

    // // Opens through the button
    // function changeIsContextOpen (e?: React.MouseEvent<HTMLButtonElement>) {
    //     if (e) {
    //         e.stopPropagation()
    //         setContextOpen(prev => !prev)
    //     }
    // }

    // // Outside clicks handler
    // useEffect(() => {
    //     function handleClickOutside (e: MouseEvent) {
    //         if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
    //             toggleContextModal()
    //         }
    //     }
        
    //     window.addEventListener('click', handleClickOutside)
    //     return () => {
    //         window.removeEventListener('click', handleClickOutside)
    //     }
    // }, [])
        
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
        <Btn style={{ position: 'relative' }} func={toggleContextModal}>
            <Icon id="options" styles={{ rotate: '90deg' }}/>
            {/* <div ref={modalRef}> */}
            <div>
                { /*
                    1. <button> cannot be a descendant of <button>
                    2. Div shifts modal (Bug)
                */ }
                <ContextModal
                    items={['Manage', 'Archivate', 'Delete', 'Change Status']}
                    isOpen={isContextOpen}
                />
            </div>
        </Btn>
    </div>
}

export default Project