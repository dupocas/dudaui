export const createPalette = (custom = {}) => {
    const palette = { ...basePalette, ...custom }
    return palette
}

const basePalette = {
    primary: {
        light: '#5472d3',
        main: '#0d47a1',
        dark: '#002171',
    },

    accent: {
        light: '#ff79b0',
        main: '#ff4081',
        dark: '#c60055',
    },

    success: {
        light: '#80e872',
        main: '#4bb543',
        dark: '#008410'
    },

    danger: {
        light: '#ff5346',
        main: '#dc001c',
        dark: '#a10000'
    },

    warning: {
        light: '#fff578',
        main: '#ffc247',
        dark: '#c8920a',
    },

    default: {
        light: '#ffffff',
        main: '#c8c8c8',
        dark: '#979797'
    }
}