import Image from "next/image"
import { AvatarProps } from './Avatar.types'

import './Avatar.css'

const Avatar = ({ src, size, fallback }: AvatarProps) => {
    const source = src || fallback || '/images/avatar.png'
    return <div className={typeof(size) === 'string'
        ? `avatar ${size}`
        : 'avatar normal'
    }>
        <Image
            src={source}
            alt="User's Avatar"
            {...(size && typeof(size) === 'number'
                ? { width: size, height: size }
                : { fill: true, objectFit: 'cover' }
            )}
        />    
    </div>
}

export default Avatar