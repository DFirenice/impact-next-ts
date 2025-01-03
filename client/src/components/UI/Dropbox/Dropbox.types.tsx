export type TDropboxInput = File | FileList | null

export type TDropboxProps = {
    onFileSelect: (file: TDropboxInput) => void
    selection: 'single' | 'multiple'
}