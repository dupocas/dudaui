import { createPalette } from "./factory/createPalette"
import { createTypography } from "./factory/createTypography"

const baseOptions = {
    palette: {},
    typography: {}
}

export const createTheme = (options = baseOptions) => {
    const palette = createPalette(options.palette)
    const typography = createTypography(options.typography)

    return {
        palette,
        typography
    }
}
