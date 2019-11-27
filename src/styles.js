import { styler } from './styles/styler'

export default styler(theme => ({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.accent.main
    }
}))