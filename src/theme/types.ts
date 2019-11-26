export interface PaletteColor {
    main: string,
    dark?: string,
    light?: string
}

export interface PalettesDic {
    [index: string]: Palette
}

export interface Palette {
    primary: PaletteColor,
    accent?: PaletteColor,
    success?: PaletteColor,
    warning?: PaletteColor,
    danger?: PaletteColor,
    default?: PaletteColor
}

export interface Theme {
    palette: Palette
}

export interface GetTheme {
    (variant: string): Theme
}