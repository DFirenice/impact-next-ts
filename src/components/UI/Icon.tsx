import Image from 'next/image'
import { icons } from '@/data/icons'
import type { Ticons } from '@/types/icons'

type IconProps = {
    id: Ticons | undefined
    size?: 'small' | 'normal' | 'large' | undefined
    style?: React.CSSProperties
} & React.ImgHTMLAttributes<HTMLImageElement>

export default function Icon({ id, size = 'normal', style, ...rest }: IconProps) {
    let imgSizes = {
      width: 16,
      height: 16,
    }
  
    size === 'large' && (imgSizes = { width: 24, height: 24 })
    size === 'small' && (imgSizes = { width: 12, height: 12 })
  
    if (id) {
      return (
        <Image
          style={{ userSelect: 'none', ...style }}
          draggable={false}
          src={icons[id as Ticons]?.src}
          width={imgSizes.width}
          height={imgSizes.height}
          alt={id}
          {...rest}
        />
      )
    } else { return 'Error :(' }
  }