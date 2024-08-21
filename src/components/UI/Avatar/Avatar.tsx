import Image from "next/image"
import { AvatarProps } from './Avatar.types'

import './Avatar.css'

const Avatar = ({ src, size = 32, fallback }: AvatarProps) => {
    const source = src || fallback || '@/app/favicon.ico'
    return <div className="avatar">
        <Image src={src} alt="User's Avatar" width={size} height={size} />    
    </div>
}

export default Avatar