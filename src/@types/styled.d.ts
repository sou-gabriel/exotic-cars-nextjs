import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      shape: string
      title: string
      text: string
      background: string
      bulletBackground: string
      purple: string
      purpleLight: string
    }
  }
}
