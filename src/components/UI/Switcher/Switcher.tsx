import Btn from '@/components/UI/Btn/Btn'

import type SwitcherProps from './Switcher.types'
import css from './Switcher.module.css'

const Switcher = ({ items = ['All'], currentSwitch = 'All', setCurrentSwitch  }: SwitcherProps) => {
    return <div className={css.container}>
        {items.map(switchName => 
            <Btn
                func={() => {setCurrentSwitch(switchName)}} key={`switch_${switchName}`}
                classes={switchName == currentSwitch ? 'btn-active' : 'btn-dark'}
            >
                {switchName}
            </Btn>
        )}
    </div>
}

export default Switcher