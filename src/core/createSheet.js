import { jss } from './jss'

//By decreasing the specificity we prevent child's styles from overriding custom styles passed from above
let specificity = 100000


export const createSheet = (styles, link = false) => {
    const sheet = jss.createStyleSheet(styles, { index: specificity--, link })
    return sheet
}