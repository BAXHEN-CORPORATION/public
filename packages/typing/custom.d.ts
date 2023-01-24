import '@mui/material';
import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
} from '@mui/material';

import { TypingProps } from './types';

declare module '@mui/material' {
  //** Palette */

  interface ComponentsPropsList {
    BaxTyping: TypingProps;
  }

  interface ComponentNameToClassKey {
    BaxTyping: 'BaxTyping';
  }
  interface Components<Theme = unknown> {
    MuiTyping?: {
      defaultProps?: ComponentsProps['BaxTyping'];
      styleOverrides?: ComponentsOverrides<Theme>['BaxTyping'];
      variants?: ComponentsVariants['BaxTyping'];
    };
  }
}
