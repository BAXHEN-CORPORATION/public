import React from 'react';

import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useTyping } from './use-typing';
import { TypingProps, TypingSpanProps } from './types';

const TypingSpan = styled((props: TypingSpanProps) => (
  <Typography component="span" {...props} />
))(({ theme, color }) => ({
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

export const Typing: React.FC<TypingProps> = (props) => {
  const { text, color } = useTyping(props);

  return (
    <TypingRoot>
      <TypingSpan color={color}>{text}</TypingSpan>
    </TypingRoot>
  );
};

export default Typing;
