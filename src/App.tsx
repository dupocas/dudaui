import React, { FC, useState } from 'react'

import { useStyles } from './styles/useStyles'

const styles = {
    root: {
        height: '10vh',
        width: '10vw',
        backgroundColor: 'blue'
    }
}

const App: FC = () => {

    const [counter, setCounter] = useState(0)

    const spawn = () => setCounter(counter + 1)

    return (
        <div>
            <button onClick={spawn}>Spawn</button>
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

const Child = () => {
    const classes = useStyles(styles)
    return <div className={classes.root}></div>
}

export default App
