import { Components, createTheme } from "@mui/material/styles";

import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

import { LinkAccordionProps } from "./link-accordion";
import { LinkAccordionClassKey } from "./link-accordion-classes";

declare module "@mui/material/styles" {
  interface ComponentsPropsList {
    BaxLinkAccordion: LinkAccordionProps;
  }

  interface ComponentNameToClassKey {
    BaxLinkAccordion: LinkAccordionClassKey;
  }
  interface Components<Theme = unknown> {
    BaxLinkAccordion?: {
      defaultProps?: ComponentsProps["BaxLinkAccordion"];
      styleOverrides?: ComponentsOverrides<Theme>["BaxLinkAccordion"];
      variants?: ComponentsVariants["BaxLinkAccordion"];
    };
  }
}

export const Overrides = {
  defaultProps: { color: "primary" },
  styleOverrides: {
    root: { backgroundColor: "blue" },
  },
} as const;

const BaxLinkAccordion: Components["BaxLinkAccordion"] = Overrides;

export const theme = createTheme();
export const themeOverrides = createTheme({
  palette: { primary: { main: "#FF0000" } },
  components: {
    BaxLinkAccordion,
  },
});
