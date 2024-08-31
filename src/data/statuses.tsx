export const statuses = {
    stable: {
        label: 'Stable Version',
        color: 'var(--clr-primary-white)'
    },
    release: {
        label: 'Ready to realese',
        color: 'var(--clr-primary-green)'
    },
    dev: {
        label: 'In development',
        color: 'var(--clr-blue-02)'
    },
    temp: {
        label: 'Temporary',
        color: 'var(--clr-primary-yellow)'
    },
    declined: {
        label: 'Declined',
        color: 'var(--clr-primary-red)'
    }
}

export type Tstatuses = 'stable'
    | 'release'
    | 'dev'
    | 'temp'
    | 'declined'