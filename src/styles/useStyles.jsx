import { createStyles } from './core/createStyles'
import { useEffect, useMemo } from 'react'

//import {} from 'react'

export const useStyles = styles => {
    const [sheet, detach] = useMemo(() => createStyles(styles), [styles])

    useEffect(() => detach, [detach])

    return sheet.classes
}

export default useStyles