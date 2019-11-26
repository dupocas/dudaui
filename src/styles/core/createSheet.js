import { jss } from './jss'

//By decreasing the specificity we prevent child's styles from overriding custom styles passed from above
let specificity = 100000


export const createSheet = (styles) => {
    console.log('creating')
    const sheet = jss.createStyleSheet(styles, { index: specificity-- })
    return sheet
}