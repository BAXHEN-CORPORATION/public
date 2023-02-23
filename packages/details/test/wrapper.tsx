import React from "react";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import { theme } from "./themes";

export interface WrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper for material ui
 *
 * @component
 */
export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box width="40rem">{children}</Box>
    </ThemeProvider>
  );
};