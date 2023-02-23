import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: { primary: { main: "#FF0000" } },
  components: {
    BaxDetails: {
      defaultProps: { color: "primary" },
    },
  },
});
export const themeOverrides = createTheme({
  palette: { primary: { main: "#FF0000" } },
  components: {
    BaxDetails: {
      defaultProps: { color: "primary" },
      styleOverrides: {
        root: { backgroundColor: "blue" },
        summary: { color: "green" },
        summaryTitle: { color: "green" },
      },
    },
  },
});
