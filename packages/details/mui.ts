import { createTheme, Components } from "@mui/material/styles";

import "@mui/material/styles";
import "@mui/material";
import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material/styles";

import { DetailsProps } from "./details";
import { DetailsClassKey } from "./details-classes";

declare module "@mui/material/styles" {
  interface ComponentsPropsList {
    BaxDetails: DetailsProps;
  }

  interface ComponentNameToClassKey {
    BaxDetails: DetailsClassKey;
  }
  interface Components<Theme = unknown> {
    BaxDetails?: {
      defaultProps?: ComponentsProps["BaxDetails"];
      styleOverrides?: ComponentsOverrides<Theme>["BaxDetails"];
      variants?: ComponentsVariants["BaxDetails"];
    };
  }
}

export const Overrides = {
  defaultProps: { color: "primary" },
  styleOverrides: {
    root: { backgroundColor: "blue" },
    summary: { color: "green" },
    summaryTitle: { color: "green" },
    contentWrapper: { color: "green" },
    contentText: { color: "green" },
  },
} as const;

const BaxDetails: Components["BaxDetails"] = Overrides;

export const theme = createTheme();
export const themeOverrides = createTheme({
  palette: { primary: { main: "#FF0000" } },
  components: {
    BaxDetails,
  },
});
