import React, { FC, useState } from 'react'

import { useStyles } from './styles'
import { Theme } from './theme/types'

const styles = {
    root: {
        backgroundColor: 'blue',
        height: 200,
        width: 200,
        margin: 5
    },
    abobrinha: {}
}

const Child = () => {
    const classes = useStyles(styles)

    return <div className={classes.root}></div>
} 

const App: FC = () => {

    const [counter, setCounter] = useState(0)

    const spawn = () => setCounter(counter + 1)
    const remove = () => setCounter(counter > 0 ? counter - 1 : 0)

    return (
        <div>
            <button onClick={spawn}>Spawn</button>
            <button onClick={remove}>Remove</button>

            {
                Array.from({ length: counter }).fill(0).map((_, i) => (
                    <Child
                        key={i}
                    />
                ))
            }
        </div>
    )
}

export default App
