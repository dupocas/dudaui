import { jss } from './jss'
import { SheetsManager } from 'jss'

//By decreasing the specificity we prevent child's styles from overriding custom styles passed from above
let specificity = 100000

const manager = new SheetsManager()

export const createStyles = styles => {
    const cached = manager.get(styles)
    if (!cached) {
        console.log('new sheet')
        let sheet = jss.createStyleSheet(styles, { index: specificity-- })
        manager.add(styles, sheet)
        manager.manage(styles)
        return [manager.get(styles), () => manager.unmanage(styles)]
    }
    console.log('cached sheet')
    return [cached, () => manager.unmanage(styles)]
}