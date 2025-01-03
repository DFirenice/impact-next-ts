import Heading from '@/components/Heading'
import Icon from '../Icon'

import css from './Dropbox.module.css'

const Dropbox = () => {
    return <div className={css.container}>
        <input type="file" id="dropbox"/>
        <label htmlFor="dropbox">
            <div>
                <div className={css.inline_heading}>
                    <Icon id="folder" size="large"/>
                    <Heading size="large">
                        <span data-font-accent="medium">Drop here</span>
                    </Heading>
                </div>
                <span data-font-accent="low">Or click to choose from the own storage</span>
            </div>
        </label>
    </div>
}

export default Dropbox