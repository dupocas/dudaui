export const createTypography = (custom = {}) => {
    const typography = { ...baseTypography, ...custom }
    return typography
}

const baseTypography = {
    fontFamily: 'Roboto, sans-serif'
}