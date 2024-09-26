'use client'

import { SelectionProps, Option } from './Selection.types'
import { useState, useRef, useEffect } from 'react'

import Icon from '@/components/UI/Icon'

import css from './styles.module.css'

const Selection = ({
    options = ['No options available'],
    initial = 'Pick an Option'
}:SelectionProps) => {
    const [selectedOption, setSelectedOption] = useState<Option>(initial)
    const [isOpen, setIsOpen] = useState(false)
    
    const selectionRef = useRef<HTMLDivElement | null>(null)

    const handleChangeOption = (option: Option) => {
        setSelectedOption(option)
        setIsOpen(false)
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (selectionRef.current && !selectionRef.current.contains(e.target as Node)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => { document.removeEventListener('mousedown', handleClickOutside) }
    }, [])

    return (
        <div ref={selectionRef} className={css.selection} role='listbox'>
            <div
                className={`${css.label} ${isOpen && css.label_open}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedOption}</span>
                <Icon id="chevron"/>
            </div>

            {isOpen && (
                <ul className={css.options}>
                    {options.map((option, idx) => (
                        <li role='option'
                            className={css.item}
                            key={`${option}-${idx}`}
                            onClick={() => handleChangeOption(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Selection