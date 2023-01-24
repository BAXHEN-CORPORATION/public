import '@mui/material';

import { TypingProps } from './types';

declare module '@mui/material' {
  //** Palette */

  interface ComponentsPropsList {
    BaxTyping: TypingProps;
  }

  interface ComponentNameToClassKey {
    BaxTyping: 'BaxTyping';
  }
}
