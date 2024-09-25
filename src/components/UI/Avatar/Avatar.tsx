import Image from "next/image"
import { AvatarProps } from './Avatar.types'

import './Avatar.css'

const Avatar = ({ src, size = 32, fallback }: AvatarProps) => {
    const source = src || fallback || '/avatar.png'
    return <div className="avatar">
        <Image src={source} alt="User's Avatar" width={size} height={size}/>    
    </div>
}

export default Avatar