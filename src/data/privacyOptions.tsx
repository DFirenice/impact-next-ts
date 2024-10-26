import type TRadioSelectionOptions from "@/types/RadioSelectionOptions"

const privacyOptions: TRadioSelectionOptions = [
    {
        value: 'Private',
        snippet: 'Only visible for you and shared collaborators',
        icon: 'lock'
    },
    {
        value: 'Public',
        snippet: 'Everyone can view your repository',
        icon: 'folder'
    }
]

export default privacyOptions