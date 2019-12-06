export interface CreateTheme {
    (options: ThemeOptions | undefined): Theme
}

export interface ThemeOptions {
    palette: Palette | undefined,
    typography: Typography | undefined
}

export interface Theme {
    palette: Palette,
    typography: Typography
}


export interface Palette {
    primary: PaletteColor,
    accent: PaletteColor,
    success: PaletteColor,
    warning: PaletteColor,
    danger: PaletteColor,
    default: PaletteColor
}

export interface PaletteColor {
    main: string,
    light?: string,
    dark?: string
}

export interface Typography {
    fontFamily: string
}