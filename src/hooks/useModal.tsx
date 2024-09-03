import { useState } from 'react'
import { createPortal } from 'react-dom'

const useModal = () => {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null)
    const [modalStyle, setModalStyle] = useState<{ top: number, left: number }>({ top: 0, left: 0 })
    
    // Setting Modal's positioning
    // Note: Make relativeElement optional and proceed default behavior (full screen)
    const setModal = (children: React.ReactNode, relativeElem: Element) => {
        const bcr = relativeElem.getBoundingClientRect()

        setModalStyle({
            top: bcr.bottom + window.scrollY,
            left: bcr.left + window.scrollX
        })

        setModalContent(children)
    }

    // Modal's Portal creation
    const createModal = modalContent ? createPortal(
        // Note: relocate wrapper & redesign
        <div style={{ position: 'absolute', top: modalStyle.top, left: modalStyle.left }}>
            {modalContent}
        </div>,
        document.getElementById('modals') as HTMLDivElement
    ) : null

    return { setModal, createModal }
}

export default useModal