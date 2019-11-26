import { createSheet } from './core/createSheet'
import { useEffect, useMemo, useContext } from 'react'

import { SheetsManager, StyleSheet } from 'jss'
import { Classes, GetSheet, Styles } from './types'
import context from '../theme/context'

//A manager is created for each component's type
//If X instances of this component are active then manager.size = X
const manager = new SheetsManager()

//Core style solution
export const makeStyles = <T>(styles: Styles<T>) => {
    //Since styles can be a function we need this to keep a stable signature across instances
    const key = {}

    return () => {
        const { theme } = useContext(context)

        //Computed styles object
        const computed = useMemo(() => {
            return typeof styles === 'function' ? styles(theme) : styles
        }, [theme])

        const sheet = useMemo(() => getSheet(computed, key), [computed])

        useEffect(() => {
            manager.manage(key)
            return () => manager.unmanage(key)
        }, [])

        //Forced conversion to infer all style's keys as part of Classes type
        return sheet.classes as Record<keyof Classes<T>, string>
    }
}


const getSheet: GetSheet = (styles, key) => {
    //This is why we needed the key prop from above
    const cached = manager.get(key)
    if (!cached) {
        //Case no sheet is present for that instance a new one is created and added but NOT attached
        const sheet = createSheet(styles)
        manager.add(key, sheet)
    }

    //Forced conversion to explicitly inform the compiler that return won't be null, ever.
    //This is due to StyleSheet.Classes from jss types
    return manager.get(key) as StyleSheet<string>
}


