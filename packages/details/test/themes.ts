import { Components, createTheme } from "@mui/material";

// const BaxDetailsOverrides: Components["BaxDetails"] = {
//   defaultProps: { color: "primary" },
//   styleOverrides: {
//     root: { backgroundColor: "blue" },
//     summary: { color: "green" },
//     summaryTitle: { color: "green" },
//     contentWrapper: { color: "green" },
//     contentText: { color: "green" },
//   },
// };
export const BaxDetailsOverrides: any = {
  defaultProps: { color: "primary" },
  styleOverrides: {
    root: { backgroundColor: "blue" },
    summary: { color: "green" },
    summaryTitle: { color: "green" },
    contentWrapper: { color: "green" },
    contentText: { color: "green" },
  },
};
export const theme = createTheme();
export const themeOverrides = createTheme({
  palette: { primary: { main: "#FF0000" } },
  components: {
    BaxDetails: BaxDetailsOverrides,
  } as any,
});
