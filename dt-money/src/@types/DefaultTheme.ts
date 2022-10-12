import 'styled-components'
import { defaultTheme } from '../core/theme/theme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
