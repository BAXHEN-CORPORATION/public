import "@mui/material";

import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
} from "@mui/material";

declare module "@mui/material" {
  //** Palette */

  interface Components<Theme = unknown> {
    MuiTyping?: {
      defaultProps?: ComponentsProps["MuiAlert"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiAlert"];
      variants?: ComponentsVariants["MuiAlert"];
    };
  }
}
