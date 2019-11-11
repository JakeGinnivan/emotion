// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>
// TypeScript Version: 2.9

import {
  CreateStyled as BaseCreateStyled,
  CreateStyledComponent
} from '@emotion/styled-base'

export {
  ArrayInterpolation,
  ComponentSelector,
  CSSObject,
  FunctionInterpolation,
  Interpolation,
  ObjectInterpolation,
  StyledComponent,
  StyledOptions,
  CreateStyledComponent
} from '@emotion/styled-base'

export type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    { theme?: Emotion.Theme },
    JSX.IntrinsicElements[Tag],
    { theme: Emotion.Theme }
  >
}

export interface CreateStyled extends BaseCreateStyled, StyledTags {}

declare const styled: CreateStyled
export default styled
