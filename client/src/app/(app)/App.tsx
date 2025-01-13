import Drawer from '@/components/Drawer/Drawer'

import css from './styles.module.css'

const App = ({ children }: { children: React.ReactNode }) => {
    return <div className={css.layout}>
        <Drawer/>
        { children }
    </div>
}

export default App