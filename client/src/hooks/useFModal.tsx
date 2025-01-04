import { useFModals as useFModalsContext } from "@/contexts/FModalsContext"
import { createPortal } from "react-dom"

const useFModal = () => {
    const { modals, setModals } = useFModalsContext()

    // Adding a new modal
    const addFModal = (newModal: React.ReactNode) => { setModals(newModal) }
    
    // Closing the modal
    const closeFModals = () => { setModals(null) }
    
    // Initializing portal
    const fModalPortal = () => {
        const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
            if (modals) {
                if (e.target === e.currentTarget) closeFModals()
            }
        }
    
        return modals ? createPortal(
            <div
                className="fmodals_container"
                onClick={handleCloseModal}
            >
                {modals}
            </div>,
            document.getElementById('fmodals')!
        ) : null
    }

    return { addFModal, fModalPortal, closeFModals }
}

export default useFModal