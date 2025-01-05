import { useFModals as useFModalsContext } from "@/contexts/FModalsContext"
import { createPortal } from "react-dom"
import { useRef } from "react"

type TFModalConfig = { cleanupCallback?: () => void }

const useFModal = (config?: TFModalConfig) => {
    const { cleanupCallback } = config || {}
    const { modals, setModals } = useFModalsContext()

    // Memorizing to prevent from opening other instances
    const currentModalRef = useRef<React.ReactNode>(null)
    
    // Replacing new modal, memorizing new
    const addFModal = (newModal: React.ReactNode) => {
        currentModalRef.current = newModal
        setModals(newModal)
    }
    
    // Closing the modal
    const closeFModals = () => {
        if (cleanupCallback) cleanupCallback()
        setModals(null)
    }
    
    // Initializing portal
    // REQUIRES TO BE INITIALIZED FOR EACH NEW MODAL
    const fModalPortal = () => {
        const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
            if (modals && e.target === e.currentTarget) closeFModals()
        }
    
        if (modals && currentModalRef.current === modals) return createPortal(
            <div
                className="fmodals_container"
                onClick={handleCloseModal}
            >
                {modals}
            </div>,
            document.getElementById('fmodals')!
        )
    }

    return { addFModal, fModalPortal, closeFModals }
}

export default useFModal