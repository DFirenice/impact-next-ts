import { useEffect, useRef } from 'react'

import ContextModal from "@/components/UI/ContextModal/ContextModal"

const useContextModal = (
    items: string[], // Should rely on custom format
    isOpen: boolean,
    setOpen: (newState: boolean) => void
) => {
    const modalRef = useRef<HTMLDivElement>(null)
    
    // Sucks, still requires 
    useEffect(() => {
        function handleClickOutside (e: MouseEvent) {
            if (isOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [isOpen])

    return <div ref={modalRef}>
        <ContextModal items={items} isOpen={isOpen}/>
    </div>
}

export default useContextModal