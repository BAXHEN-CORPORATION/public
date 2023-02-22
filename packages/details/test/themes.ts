import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: { primary: { main: "#FF0000" } },
  components: { BaxDetails: { styleOverrides: { root: {} } } },
});
