import React, { useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

import { context } from './context'
import { createTheme } from './theme'

const { Provider } = context



export const ThemeProvider = ({
    children,
    theme
}) => {

    useEffect(() => {
        const node = document.getElementsByTagName('body')[0]
        node.style.fontFamily = theme.typography.fontFamily || ''
    }, [theme])

    const memoTheme = useMemo(() => {
        return createTheme(theme)
    }, [theme])

    return (
        <Provider value={memoTheme}>
            {children}
        </Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    theme: PropTypes.object
}