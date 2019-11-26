import { GetTheme } from "./types"

import { Palettes } from './Palettes'

export const getTheme: GetTheme = variant => ({
    palette: getPalette(variant)
})

const getPalette = (variant: string) => {
    return Palettes[variant] || Palettes['classic']
}