'use client'

import { ChangeEvent } from 'react'
import { SearchProps } from './Search.types'

import Icon from '@/components/UI/Icon'
import css from './styles.module.css'

const Search = ({ value, onChange, text = "Search..." }: SearchProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }
    
    return <div  className={`${css.search} field`}>
        <Icon id="search"/>
        <input placeholder={text} value={value} onChange={handleChange}/>
    </div>
}

export default Search