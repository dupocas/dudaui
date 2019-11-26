import React, { FC, useState } from 'react'

import { makeStyles } from './styles'
import { Theme } from './theme/types'

const styles = (theme: Theme) => ({
    root: {
        height: 100,
        width: 100,
        backgroundColor: theme.palette.danger.main,
        margin: 5
    }
})
const useStyles = makeStyles(styles)

const Child = () => {
    const classes = useStyles()

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
