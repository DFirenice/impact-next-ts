import Heading from '@/components/Heading'
import Icon from '@/components/UI/Icon'

import type { TDropboxProps } from './Dropbox.types'
import css from './Dropbox.module.css'

const Dropbox = ({ onFileSelect, selection }: TDropboxProps) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            if (selection === 'single') {
                const file = e.target.files[0]
                onFileSelect(file)
            } else {
                const files = e.target.files
                onFileSelect(files)
            }
        }
    }
    
    return <div className={css.container}>
        <input type="file" id="dropbox" onChange={handleFileChange}/>
        <label htmlFor="dropbox">
            <div>
                <div className={css.inline_heading}>
                    <Icon id="folder" size="large"/>
                    <Heading size="large">
                        <span data-font-accent="medium">Drag & Drop here</span>
                    </Heading>
                </div>
                <div data-font-accent="low">
                    Or <span className="text_underlined">browse files</span> on your computer
                </div>
            </div>
        </label>
    </div>
}

export default Dropbox