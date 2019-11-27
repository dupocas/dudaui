import { makeStyles } from './makeStyles'
import { Styles } from "./types"

//Basically syntatic sugar
export const styler = <T>(styles: Styles<T>) => {
    return makeStyles(styles)
}