import type { Palette, PaletteColor, TypographyProps } from '@mui/material';

export type GetKeysOfType<
  Type extends Record<string, any>,
  Obj extends Record<string, any>
> = keyof {
  [Key in keyof Obj as Obj[Key] extends Type ? Key : never]: Obj[Key];
};

export interface TypingProps {
  /**
   *  Array of texts to be typed in order
   */
  texts: string[];
  /**
   *  Speed of typing
   */
  speed?: number;
  /**
   *  If true, will repeat the process of typing indefinitely
   */
  infinite?: boolean;

  /**
   *  Colors option from the theme palette
   */
  color?: GetKeysOfType<PaletteColor, Palette>;

  /**
   * Applies the theme typography styles.

    @default

    'body1' 

   */

  variant?: TypographyProps['variant'];
}

export type TypingSpanProps = Omit<TypographyProps, 'color'> & {
  color: Exclude<TypingProps['color'], undefined>;
};
