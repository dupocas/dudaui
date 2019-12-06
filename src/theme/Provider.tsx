import React, { useState, useMemo } from 'react'

import { context } from './context'
import { getTheme } from './Theme'

const { Provider } = context

export const ThemeProvider = ({ children }) => {
    const [variant, setVariant] = useState('default')

    const onVariantChange = cb => {
        setVariant(cb)
    }

    const value = useMemo(() => {
        return {
            theme: getTheme(variant),
            setVariant: cb => onVariantChange(cb)
        }
    }, [variant])

    return (
        <Provider value={value}>
            {children}
        </Provider>
    )
}