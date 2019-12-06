import { MakeStyles } from './types'
import { FC, ReactNode } from 'react'
import { ThemeOptions } from './theme/types'

declare const makeStyles: MakeStyles

declare const ThemeProvider: FC<{ theme?: ThemeOptions, children?: ReactNode }>
