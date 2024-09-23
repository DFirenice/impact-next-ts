import { useFModals as useFModalsContext } from "@/contexts/FModalsContext"
import { createPortal } from "react-dom"

const useFModal = () => {
    const { modals, setModals } = useFModalsContext()

    // Add
    const addFModal = (newModals: React.ReactNode) => {
        setModals(newModals)
    }
    
    // Close
    const closeFModals = () => { setModals(null) }

    // Initialize portal
    const fModalPortal = () => {
        const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
            if (modals) {
                e.target === e.currentTarget
                    && setModals(null)
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