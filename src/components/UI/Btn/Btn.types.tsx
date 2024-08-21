export type BtnProps = {
    classes?: string    
    func?: (e?:React.MouseEvent<HTMLButtonElement>) => void
    children: React.ReactNode
    link?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>