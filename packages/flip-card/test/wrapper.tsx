import React from "react";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import { theme } from "../mui";

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
      <Box width="300px" height="300px">
        {children}
      </Box>
    </ThemeProvider>
  );
};
