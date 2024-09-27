// Special Settings component
import Image from 'next/image.js'

import type { Tprops } from './DemoSelection.types'
import css from './DemoSelection.module.css'

const DemoSelection = ({
    imageSrc,
    value = 'Unavailable',
    active = false,
    func
}: Tprops) => {
    // imageSrc = imageSrc || 'source for unavailable'

    return <div className={css.container}>
        <div
            className={`${css.example} ${active ? css.active : ''}`}
            onClick={func}
        >
            <Image
                src={imageSrc} alt={`${value}`}
                width={225} height={140}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
        <div {...value === 'Unavailable' && {'data-font-accent': 'low'}}>
            {value}
        </div>
    </div>
}

export default DemoSelection