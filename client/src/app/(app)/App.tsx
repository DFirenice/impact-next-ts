import useRefreshSession from '@root/src/hooks/useRefreshSession'
import { useEffect } from 'react'

import Drawer from '@/components/Drawer/Drawer'

import css from './styles.module.css'

const App = ({ children }: { children: React.ReactNode }) => {
    const { refreshSession } = useRefreshSession()
    useEffect(() => { refreshSession() }, [])

    return <div className={css.layout}>
        <Drawer/>
        { children }
    </div>
}

export default App