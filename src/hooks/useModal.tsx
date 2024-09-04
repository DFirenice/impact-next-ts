import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const useModal = () => {
    const [ modalContent, setModalContent ] = useState<React.ReactNode | null>(null)
    const [ modalStyle, setModalStyle ] = useState<{ top: number, left: number }>({ top: 0, left: 0 })
    const [ modalVisible, setModalVisible ] = useState<boolean>(false)
    const modalContainerRef = useRef<HTMLDivElement>(null)

    // Setting Modal's positioning
    const setModal = (children: React.ReactNode, relativeElem?: Element) => {
        if (children) {
            if (relativeElem) {
                const bcr = relativeElem.getBoundingClientRect()

                setModalStyle({
                    top: bcr.bottom + window.scrollY,
                    left: bcr.left + window.scrollX,
                })
            } else {
                // Full-screen modal if no relative element is provided
                setModalStyle({ top: 0, left: 0 })
            }

            setModalContent(children)

            // Delaying setting modalVisible to prevent immediate closing
            setTimeout(() => setModalVisible(true), 0)
        } else {
            setModalVisible(false)
            setModalContent(null)
        }
    }

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (modalContainerRef.current && !modalContainerRef.current.contains(e.target as Node)) {
                setModalVisible(false)
            }
        }

        if (modalVisible) {
            window.addEventListener('click', handleOutsideClick)
        }

        return () => {
            window.removeEventListener('click', handleOutsideClick)
        }
    }, [modalVisible])

    // Modal's Portal creation
    const HandleCreatePortal = () => {
        if (!modalVisible || !modalContent) return null

        return createPortal(
            <div
                ref={modalContainerRef}
                onClick={(e) => e.stopPropagation()}
                className="modal_container"
                style={{ top: modalStyle.top, left: modalStyle.left }}
            >
                {modalContent}
            </div>,
            document.getElementById('modals') as HTMLDivElement
        )
    }

    return { setModal, createModal: modalVisible ? <HandleCreatePortal /> : null }
}

export default useModal