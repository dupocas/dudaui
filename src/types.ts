import { Theme } from "./theme/types"
import { StyleSheet } from "jss"

export type Classes<T> = {
    [K in keyof T]: object
}

export interface StylesCreator<T> {
    (t: Theme): Classes<T>
}

export type Styles<T> = StylesCreator<T> | Classes<T>

export interface GetSheet {
    (s: any, k: object): StyleSheet<string>,
}

export interface UseStyles<T> {
    (dynamicStyles: object): (Record<keyof Classes<T>, string>)
}

export interface MakeStyles {
    <T>(styles: Styles<T>): UseStyles<T>
}
