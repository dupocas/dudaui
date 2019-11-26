import { createSheet } from './core/createSheet'
import { useEffect, useMemo } from 'react'

import { SheetsManager, StyleSheet } from 'jss'
import { Classes, GetSheet, Styles } from './types'

const manager = new SheetsManager()


const getSheet: GetSheet = (styles) => {
    const cached = manager.get(styles)
    if (!cached) {
        const sheet = createSheet(styles)
        manager.add(styles, sheet)
    }

    return manager.get(styles) as StyleSheet<string>
}

export const useStyles = <T>(styles: Styles<T>) => {
    const sheet = useMemo(() => {
        return getSheet(styles)
    }, [styles])

    useEffect(() => {
        manager.manage(styles)
        return () => manager.unmanage(styles)
    }, [styles])

    return sheet.classes as Record<keyof Classes<T>, string>
}



