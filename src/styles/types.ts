import { Theme } from "../theme/types"
import { StyleSheet } from "jss"

export type Classes<T> = {
    [K in keyof T]: object
}

export interface StylesCreator<T> {
    (t: Theme): Classes<T>
}

export type Styles<T> = StylesCreator<T> | Classes<T>

export interface GetSheet {
    (s: any, t?: Theme): StyleSheet<string>
}