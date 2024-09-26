// Special Settings component
import Image from 'next/image.js'

import type { Tprops } from './DemoSelection.types'
import css from './DemoSelection.module.css'

const DemoSelection = ({ imageSrc, subtext = 'Unavailable' }: Tprops) => {
    // imageSrc = imageSrc || 'source for unavailable'

    return <div className={css.container}>
        <div className={css.example}>
            <Image
                src={imageSrc} alt={`${subtext}`}
                width={175} height={120}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
        <div>{subtext}</div>
    </div>
}

export default DemoSelection