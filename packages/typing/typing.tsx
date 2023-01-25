import React from 'react';

import { Palette, PaletteColor, styled } from '@mui/material';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { useTyping } from './use-typing';
import { GetKeysOfType, TypingSpanProps } from './types';

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

const TypingSpan = styled((props: TypingSpanProps) => (
  <Typography component="span" {...props} />
))(({ theme, color = 'primary' }) => ({
  color: theme.palette[color].main,
  '&::after': {
    content: "''",
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderLeft: '2px solid currentColor',
    color: theme.palette[color].main,
  },
}));

const TypingRoot = styled(Typography)({
  display: 'inline-flex',
  position: 'relative',
});

export const Typing = (props: TypingProps) => {
  const { text, color, variant } = useTyping(props);

  return (
    <TypingRoot>
      <TypingSpan variant={variant} color={color}>
        {text}
      </TypingSpan>
    </TypingRoot>
  );
};
