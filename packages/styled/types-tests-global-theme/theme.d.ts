import '@emotion/core'

declare global {
  namespace Emotion {
    // tslint:disable-next-line: strict-export-declare-modifiers
    export interface Theme {
      primary: number
      secondary: string
    }
  }
}
