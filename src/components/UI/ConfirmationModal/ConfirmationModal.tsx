// BUG: func => btn > func cannot be passed directly

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
    return <div className={css.container}>
        <div>
            <Heading size="larger" level={3}>{content.heading}</Heading>
            <p data-font-accent="medium">{content.body}</p>
        </div>
        <div className='block_aligned'>
            <Btn>Cancel</Btn>
            <Btn classes={buttonType}>Confirm</Btn>
        </div>
    </div>
}

export default ConfirmationModal