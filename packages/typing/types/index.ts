import type { TypographyProps } from '@mui/material';
import { TypingProps } from '../typing';

export type GetKeysOfType<
  Type extends Record<string, any>,
  Obj extends Record<string, any>
> = keyof {
  [Key in keyof Obj as Obj[Key] extends Type ? Key : never]: Obj[Key];
};

export type TypingSpanProps = Omit<TypographyProps, 'color'> & {
  color: TypingProps['color'];
};

export type TypingClassKey = keyof TypingClasses;
export interface TypingClasses {
  /** Styles applied to the root element. */
  root: string;

  /** Styles applied to the span element. */
  span: string;
}

export interface TypingComponentsPropsList {
  BaxTyping: TypingProps;
}

export interface TypingComponentNameToClassKey {
  BaxTyping: 'TypingClassKey';
}
