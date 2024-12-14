import useFModal from '@/hooks/useFModal'

import Heading from '@/components/Heading'
import Btn from '@/components/UI/Btn/Btn'

import css from './ConfirmationModal.module.css'

const boxShadows = {
    'btn-reject': 'var(--clr-primary-red)',
    'btn-fill': 'var(--clr-blue-02)',
    'btn-light': 'var(--clr-primary-dark)',
}

type TButtonTypes = 'btn-fill' | 'btn-reject' | 'btn-light'

const ConfirmationModal = (
    { func, buttonType = 'btn-light', content: {
        heading = 'Are you sure?',
        body = 'Click "Confirm" if you are sure about doing that'
    } = {}}:
    {   
        func: () => void
        buttonType?: TButtonTypes,
        content?: { heading?: string, body?: string }
    }) => {
    const { closeFModals } = useFModal()
    
    const handleCancel = () => { closeFModals() }
    const handleConfirm = () => { func() }
    
    return <div
        className={css.container}
        style={{ filter: `drop-shadow(0 0 25dvw ${boxShadows[buttonType]})` }}
    >
        <div>
            <Heading size="larger" level={3}>{heading}</Heading>
            <p data-font-accent="medium">{body}</p>
        </div>
        <div className='block_aligned'>
            <Btn func={handleCancel}>Cancel</Btn>
            <Btn func={handleConfirm} classes={buttonType}>Confirm</Btn>
        </div>
    </div>
}

export default ConfirmationModal