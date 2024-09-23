import useFModal from '@/hooks/useFModal'

import Heading from '@/components/Heading'
import Btn from '@/components/UI/Btn/Btn'

import css from './ConfirmationModal.module.css'

const ConfirmationModal = (
    { func, buttonType = 'btn-fill', content = {
        heading: 'Are you sure?',
        body: 'Click "Confirm" if you are sure about doing that'
    } }:
    {   
        func: () => void
        buttonType?: string,
        content?: { heading: string, body: string }
    }) => {
    const { closeFModals } = useFModal()
    
    const handleCancel = () => { closeFModals() }
    const handleConfirm = () => { func() }
    
    return <div className={css.container}>
        <div>
            <Heading size="larger" level={3}>{content.heading}</Heading>
            <p data-font-accent="medium">{content.body}</p>
        </div>
        <div className='block_aligned'>
            <Btn func={handleCancel}>Cancel</Btn>
            <Btn func={handleConfirm} classes={buttonType}>Confirm</Btn>
        </div>
    </div>
}

export default ConfirmationModal