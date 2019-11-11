// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>
// TypeScript Version: 2.8

import { EmotionCache } from '@emotion/cache'
import css, { Interpolation, SerializedStyles } from '@emotion/css'
import { Keyframes } from '@emotion/serialize'
import {
  ClassAttributes,
  ComponentClass,
  Context,
  Provider,
  FC,
  ReactElement,
  ReactNode,
  Ref,
  createElement
} from 'react'

export {
  ArrayInterpolation,
  ComponentSelector,
  CSSObject,
  FunctionInterpolation,
  ObjectInterpolation
} from '@emotion/css'

export { EmotionCache, Interpolation, SerializedStyles, css }

export const ThemeContext: Context<object>
export const CacheProvider: Provider<EmotionCache>
export function withEmotionCache<Props, RefType = any>(
  func: (props: Props, context: EmotionCache, ref: Ref<RefType>) => ReactNode
): FC<Props & ClassAttributes<RefType>>

export const jsx: typeof createElement

export interface GlobalProps {
  styles: Interpolation<Emotion.Theme>
}

/**
 * @desc
 * JSX generic are supported only after TS@2.9
 */
export function Global(props: GlobalProps): ReactElement

export function keyframes(
  template: TemplateStringsArray,
  ...args: Array<Interpolation>
): Keyframes
export function keyframes(...args: Array<Interpolation>): Keyframes

export interface ArrayClassNamesArg extends Array<ClassNamesArg> {}
export type ClassNamesArg =
  | undefined
  | null
  | string
  | boolean
  | { [className: string]: boolean | null | undefined }
  | ArrayClassNamesArg

export interface ClassNamesContent {
  css(template: TemplateStringsArray, ...args: Array<Interpolation>): string
  css(...args: Array<Interpolation>): string
  cx(...args: Array<ClassNamesArg>): string
  theme: Emotion.Theme
}
export interface ClassNamesProps {
  children(content: ClassNamesContent): ReactNode
}
/**
 * @desc
 * JSX generic are supported only after TS@2.9
 */
export function ClassNames(props: ClassNamesProps): ReactElement

declare module 'react' {
  interface DOMAttributes<T> {
    css?: Interpolation
  }
}

declare global {
  namespace Emotion {
    // tslint:disable-next-line: no-empty-interface strict-export-declare-modifiers
    export interface Theme {}
  }

  namespace JSX {
    /**
     * Do we need to modify `LibraryManagedAttributes` too,
     * to make `className` props optional when `css` props is specified?
     */

    interface IntrinsicAttributes {
      css?: Interpolation
    }
  }
}
