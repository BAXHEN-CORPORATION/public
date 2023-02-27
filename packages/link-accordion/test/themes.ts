import { Components, createTheme } from "@mui/material";

// const BaxLinkAccordionOverrides: Components["BaxLinkAccordion"] = {
//   defaultProps: { color: "primary" },
//   styleOverrides: {
//     root: { backgroundColor: "blue" },
//     summary: { color: "green" },
//     summaryTitle: { color: "green" },
//     contentWrapper: { color: "green" },
//     contentText: { color: "green" },
//   },
// };
export const BaxLinkAccordionOverrides: any = {
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
    BaxLinkAccordion: BaxLinkAccordionOverrides,
  } as any,
});
