import React from 'react';

import { useTheme } from '@mui/material';
import { TypingProps } from './typing';

export const useTyping = (inProps: TypingProps) => {
  const theme = useTheme();
  const props: TypingProps = {
    infinite: false,
    speed: 500,
    ...theme.components?.BaxTyping?.defaultProps,
    ...inProps,
  };

  const { texts, infinite, speed, color, variant } = props;

  const [index, setIndex] = React.useState(0);
  const [wordIndex, setWordIndex] = React.useState(1);

  const maxIndex = texts.length - 1;

  const text = texts[index];

  const displayText = texts[index].slice(0, wordIndex);

  React.useEffect(() => {
    setTimeout(() => {
      const maxWordIndex = text.length;

      if (wordIndex < maxWordIndex) {
        setWordIndex((old) => {
          if (old < maxWordIndex) return old + 1;

          return old;
        });

        return;
      }

      if (index < maxIndex) {
        setWordIndex(1);
        setIndex((old) => {
          if (old < maxIndex) return old + 1;

          return old;
        });

        return;
      }

      if (infinite) {
        setWordIndex(1);
        setIndex(0);
      }
    }, speed);
  }, [index, wordIndex, text]);

  return { text: displayText, color, variant };
};
