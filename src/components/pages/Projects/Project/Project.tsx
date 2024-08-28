'use client'

import { useState, useEffect } from 'react'
import Btn from '@/components/UI/Btn/Btn'
import Icon from '@/components/UI/Icon'
import ContextModal from '@/components/UI/ContextModal/ContextModal'

import type { ProjectProps } from './Project.types'
import css from './Project.module.css'

const Project = (
    { status,
        name,
        version,
        members
    }: ProjectProps) => {
    const [ isContextOpen, setContextOpen ] = useState(false)
    function changeIsContextOpen (e) {
        e.stopPropagation()
        setContextOpen(prev => !prev)
    }

    useEffect(() => {
        function handleCloseContext () { setContextOpen(false) }
        
        window.addEventListener('click', () => {handleCloseContext()})
        return window.removeEventListener('click', () => {handleCloseContext()})
    }, [])
        
    return <div className={css.container}>
        <div className={css.info}>
            <div className={css.info_name}>
                <span>{name}</span>
            </div>
            <div>
                <span>{version[0]}</span>
                <span data-font-accent="medium">{version[1]}</span>
            </div>
            <div>
                <span>{members === 1 ? 'Only You' : `${members} Members`}</span>
            </div>
        </div>
        {/* Controls */}
            {/* Menu */}
        <Btn style={{ position: 'relative' }} func={changeIsContextOpen}>
            <Icon id="options" styles={{ rotate: '90deg' }}/>
            <ContextModal items={['Manage', 'Archivate', 'Delete', 'Change Status']} isOpen={isContextOpen}/>
        </Btn>
    </div>
}

export default Project