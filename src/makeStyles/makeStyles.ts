import { createSheet } from '../core/createSheet'
import { useEffect, useMemo, useContext } from 'react'

import { SheetsManager, StyleSheet, getDynamicStyles } from 'jss'
import { Classes, GetSheet, Styles } from '../types'
import context from '../theme/context'

//A manager is created for each component's type
//If X instances of this component are active then manager.size = X
const manager = new SheetsManager()


//Core style solution
export const makeStyles = <T>(styles: Styles<T>) => {
    //Since styles can be a function we need this to keep a stable signature across instances
    const key = {}
    
    return (interpolation: object = {}) => {
        const { theme } = useContext(context)

        //First we compute the original styles object
        const computed = useMemo(() => {
            return typeof styles === 'function' ? styles(theme) : styles
        }, [theme])

        //Getting the dynamic styles
        const dynamic = useMemo(() => {
            return getDynamicStyles(computed)
        }, [computed])

        //Creating static sheet
        const sheet = useMemo(() => getSheet(computed, key), [computed])

        //Creating dynamic sheet only if dynamic styles were provided
        const dynamicSheet = useMemo(() => {
            if (!dynamic) return null
            return createSheet(dynamic, true)
        }, [dynamic])

        //Attaching and detaching* static sheet
        // * unmanage only decreases manager's size. When manager.size asserts to 0 
        //   sheet will be automatically detached
        useEffect(() => {
            manager.manage(key)
            return () => manager.unmanage(key)
        }, [])

        //Attach/ detach dynamic sheet
        useEffect(() => {
            if (dynamicSheet)
                dynamicSheet.attach()
            return () => {
                if (dynamicSheet) dynamicSheet.detach()
            }
        }, [dynamicSheet])

        //Updating dynamic styles everytime the reference changes 
        useEffect(() => {
            if (interpolation && dynamicSheet)
                dynamicSheet.update(interpolation)
        }, [interpolation, dynamicSheet])

        //Due to how getDynamicStyles works we need to merge repeated keys, otherwise only the
        //dynamic property will be rendered. Don't worry, this only runs once
        const classes = useMemo(() => {
            const result = { ...sheet.classes }
            if (!dynamicSheet) return result
            const keys = Object.keys(dynamicSheet.classes)
            keys.forEach(k => {
                return result[k] = `${result[k] || ''} ${dynamicSheet.classes[k]}`
            })
            return result
        }, [sheet, dynamicSheet])

        //Forced conversion to infer all style's keys as part of Classes type
        return classes as Record<keyof Classes<T>, string>
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


