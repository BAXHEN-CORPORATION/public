import React from 'react';

import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useTyping } from './use-typing';
import { TypingProps, TypingSpanProps } from './types';

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
